import { Component, OnInit } from '@angular/core';
import { DataProvider } from 'src/providers/data/data';

@Component({
  selector: 'app-schedule-roster',
  templateUrl: './schedule-roster.page.html',
  styleUrls: ['./schedule-roster.page.scss'],
})
export class ScheduleRosterPage implements OnInit {

  constructor(public dataProvider: DataProvider) {

  }

  ngOnInit() {
  }

}
