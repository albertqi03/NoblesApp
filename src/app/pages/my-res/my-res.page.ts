import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { ToastController } from '@ionic/angular';
import { DataProvider } from 'src/providers/data/data';

@Component({
  selector: 'app-my-res',
  templateUrl: './my-res.page.html',
  styleUrls: ['./my-res.page.scss'],
})
export class MyResPage implements OnInit {

  reservations: any;

  mealTypes: Array<string> = new Array; // Breakfast, Dinner
  dates: Array<string> = new Array; // 01/01/2021, etc.
  daysOfTheWeek: Array<string> = new Array; // Sunday, Monday, Tuesday, etc.

  loading: boolean;
  noReservations: boolean;

  deletePressed: boolean;
  
  myToast: any;

  nums: Array<number> = new Array;

  constructor(public dataProvider: DataProvider, public http: HTTP, public toastController: ToastController) { }

  ngOnInit() {
  }

  // Load reservations here instead of data.ts b/c need to refresh every time user enters this page
  ionViewWillEnter() {
    this.deletePressed = false;
    this.refreshMyRes();
  }

  refreshMyRes() {
    this.mealTypes = [];
    this.dates = [];
    this.nums = [];
    this.loading = true;
    this.noReservations = false;

    let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let myResUrl = "https://nobilis.nobles.edu/iosNoblesAppWeb/xmlMyReservations.php?username=" + this.dataProvider.UNID;

    let res: string;

    this.http.get(myResUrl, {}, {})
      .then(data => {
        res = data.data;
        console.log('Getting reservation data...');

        let parser = new DOMParser();
        let doc = parser.parseFromString(res, "text/xml");
        this.reservations = doc.getElementsByTagName("Reservation");

        if (this.reservations.length === 0) {
          this.loading = false;
          this.noReservations = true;
          return;
        }

        for (let i = 0; i < this.reservations.length; i++) {
          let reservation = this.reservations[i];

          this.mealTypes[i] = reservation.children[0].innerHTML;

          let date = reservation.children[1].innerHTML
          this.dates[i] = date;
          let dateObj = new Date(date);
          this.daysOfTheWeek[i] = dayNames[dateObj.getDay()];

          this.nums[i] = i;
        }

        this.loading = false;
      })
      .catch(error => {
        console.log(error.status);
        console.log(error.error);
        console.log(error.headers);
        console.log('Error!');
      });
  }

  deleteRes(i: number) {
    if (this.deletePressed) {
      return;
    }
    this.deletePressed = true;

    let delResUrl = "https://nobilis.nobles.edu/iosnoblesappweb/canceldinner.php?username=" + this.dataProvider.UNID;
    delResUrl += "&date=" + this.dates[i] + "&mealtype=" + this.mealTypes[i];

    this.http.get(delResUrl, {}, {})
      .then(data => {
        console.log('Deleting reservation...');
        this.refreshMyRes();
        this.toast();
      });
  }

  async toast() {
    try {
      this.myToast.dismiss();
    } catch (e) { }

    this.myToast = await this.toastController.create({
      message: 'Reservation deleted.',
      duration: 1000
    });
    this.myToast.present();
    this.deletePressed = false;
  }

}
