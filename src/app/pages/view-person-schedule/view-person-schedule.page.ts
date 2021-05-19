import { Component, OnInit } from '@angular/core';
import { DataProvider } from 'src/providers/data/data';

@Component({
  selector: 'app-view-person-schedule',
  templateUrl: './view-person-schedule.page.html',
  styleUrls: ['./view-person-schedule.page.scss'],
})
export class ViewPersonSchedulePage implements OnInit {

  person: any;

  dayName: string;
  nums: Array<Array<number>> = new Array;

  constructor(public dataProvider: DataProvider) {
    let currentDate = new Date();
    let weekdays = ["Monday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Monday"];
    this.dayName = weekdays[currentDate.getDay()];

    this.initLoadPage(() => null);
  }

  ngOnInit() {
  }

  initLoadPage(callback) {
    this.person = this.dataProvider.dirPerson;

    this.nums = [[], [], [], [], []];
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < this.dataProvider._courses[i].length; j++) {
        this.nums[i][j] = j;
      }
    }

    callback();
  }

  doRefresh(event) {
    console.log('Beginning refresh...');

    setTimeout(() => {
      this.dataProvider.getDirectorySchedule(() => this.initLoadPage(() => event.target.complete()));
    }, 2);
  }

}
