import { Component, OnInit } from '@angular/core';
import { DataProvider } from 'src/providers/data/data';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {

  dayName: string;
  courses: Array<Array<string>> = new Array;
  nums: Array<Array<number>> = new Array;

  constructor(private dataProvider: DataProvider, private http: HttpClient) {
    let currentDate = new Date();
    let weekdays = ["Monday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Monday"];
    this.dayName = weekdays[currentDate.getDay()];

    this.courses = this.dataProvider.courses;
    this.nums = [[],[],[],[],[]];
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < this.courses[i].length; j++) {
        this.nums[i][j] = j;
      }
    }
  }

  ngOnInit() {
  }

}
