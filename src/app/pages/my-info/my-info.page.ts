import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { DataProvider } from '../../../providers/data/data';

@Component({
  selector: 'app-my-info',
  templateUrl: './my-info.page.html',
  styleUrls: ['./my-info.page.scss'],
})
export class MyInfoPage implements OnInit {

  infoType: string;

  nums: Array<number> = new Array;

  constructor(public dataProvider: DataProvider) {
    this.infoType = 'about-me';

    this.nums = [];
    for (let i = 0; i < this.dataProvider.commServYear.length; i++) {
      this.nums[i] = i;
    }
  }

  ngOnInit() {
  }

  doRefresh(event) {
    console.log('Beginning refresh...');

    setTimeout(() => {
      this.dataProvider.getUserData(
        () => this.dataProvider.getFinancial(
          () => this.dataProvider.getCommServ(
            () => event.target.complete())));
    }, 1000);
  }

}
