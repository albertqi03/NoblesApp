import { Component, OnInit } from '@angular/core';
import { DataProvider } from 'src/providers/data/data';
import { HttpClient } from '@angular/common/http';
import { Platform, AlertController, NavController } from '@ionic/angular';
import { LocalNotifications, ELocalNotificationTriggerUnit } from '@ionic-native/local-notifications/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { ClassField } from '@angular/compiler';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {

  dayName: string;
  courses: Array<Array<string>> = new Array;
  nums: Array<Array<number>> = new Array;

  constructor(public dataProvider: DataProvider, private http: HTTP,
    private plt: Platform, private localNotifications: LocalNotifications, private alertCtrl: AlertController, public nav: NavController) {
    let currentDate = new Date();
    let weekdays = ["Monday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Monday"];
    this.dayName = weekdays[currentDate.getDay()];


    this.courses = this.dataProvider.courses;
    this.nums = [[], [], [], [], []];
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < this.courses[i].length; j++) {
        this.nums[i][j] = j;
      }
    }

    // HAVE NOT TESTED YET!
    this.plt.ready().then(() => {
      this.localNotifications.on('trigger').subscribe(res => {
        console.log('TRIGGER NOTIFICATION!!!');
      });
    });

    // this.notification();
  }

  ngOnInit() {
  }

  doRefresh(event) {
    console.log('Beginning refresh...');

    setTimeout(() => {
      this.dataProvider.getSchedule(() => event.target.complete());
    }, 2);
  }

  getRoster(dayNum: number, i: number) {
    let url = "https://nobilis.nobles.edu/iosnoblesappweb/xmlclassroster.php?ClassID=";
    url += this.dataProvider.classIDs[dayNum][i];

    let res: string;

    this.http.get(url, {}, {})
      .then(data => {
        res = data.data;
        console.log('Getting class roster...');

        let parser = new DOMParser();
        let doc = parser.parseFromString(res, "text/html");
        let classStudents = doc.getElementsByTagName("Student");

        this.dataProvider.classStudentsIDs = new Array<string>();
        for (let index = 0; index < classStudents.length; index++) {
          this.dataProvider.classStudentsIDs[index] = classStudents[index].innerHTML;
        }

        this.nav.navigateForward('/menu/tabs/schedule/schedule-roster');
      })
      .catch(error => {
        console.log(error.status);
        console.log(error.error);
        console.log(error.headers);
        console.log('Error!');
      });
  }

  notification() {
    // HAVE NOT TESTED YET! (might need to update the trigger time)
    this.localNotifications.schedule({
      id: 0,
      title: 'Notif Title',
      text: 'Notif Text',
      foreground: true,
      lockscreen: true,
      trigger: {
        'every': {
          'weekday': 5,
          'hour': 17,
          'minute': 44
        }
      }
    });
  }

}
