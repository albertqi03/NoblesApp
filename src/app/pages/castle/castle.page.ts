import { Component, OnInit } from '@angular/core';

import { DataProvider } from '../../../providers/data/data';
import { HttpClient } from '@angular/common/http';
import { combineLatest } from 'rxjs';
import { CastlePageModule } from './castle.module';

@Component({
  selector: 'app-castle',
  templateUrl: './castle.page.html',
  styleUrls: ['./castle.page.scss'],
})
export class CastlePage implements OnInit {

  dayName: string;
  mealType: string;
  dates: Array<Date> = new Array;

  constructor(private dataProvider: DataProvider, private http: HttpClient) {
    let currentDate = new Date();
    let weekdays = ['monday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'monday'];
    this.dayName = weekdays[currentDate.getDay()];
    this.mealType = 'lunch';

    let firstDate = this.getMonday(currentDate);
    if (currentDate.getDay() === 0 || currentDate.getDay() === 6) {
      firstDate.setDate(firstDate.getDate() + 7);
    }

    for (let i = 0; i < 5; i++) {
      let tempDate = new Date(firstDate.getTime());
      tempDate.setDate(tempDate.getDate() + i);
      this.dates[i] = tempDate;
    }

    this.getFood(this.dayName);
  }

  ngOnInit() {
  }

  getMonday(d: Date) {
    d = new Date(d);
    var day = d.getDay(),
      diff = d.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(d.setDate(diff));
  }

  getFood(dayName: string) {
    let xhttp = new XMLHttpRequest();
    let url = 'https://nobilis.nobles.edu/skyworld/castlemenu.php?DisplayType=Phone';
    let weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
    let d = this.dates[weekdays.indexOf(dayName)];
    let newDate = d.getMonth() + 1 + '/' + d.getDate();

    url += '&mealType=' + (this.mealType === 'lunch' ? 'Lunch' : 'Dinner');
    url += '&Date=' + newDate;

    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        document.getElementById('mealText').innerHTML = this.responseText;
      }
    };
    xhttp.open('GET', url, true);
    xhttp.send();
  }
}
