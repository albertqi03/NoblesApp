import { Component, OnInit } from '@angular/core';

import { DataProvider } from '../../../providers/data/data';

@Component({
  selector: 'app-athletics',
  templateUrl: './athletics.page.html',
  styleUrls: ['./athletics.page.scss'],
})
export class AthleticsPage implements OnInit {

  athleticsType: string;
  nums: Array<number> = new Array;

  constructor(private dataProvider: DataProvider) {
    this.athleticsType = 'results';
    this.nums = [];
    // for (let i = 0; i < this.dataProvider.winLoss.length; i++) {
    //   this.nums[i] = i;
    // }

    for (let i = 0; i < 30; i++) {
      this.nums[i] = i;
    }
  }

  ngOnInit() {
  }

}
