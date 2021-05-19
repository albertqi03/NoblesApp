import { Component, OnInit } from '@angular/core';

import { DataProvider } from '../../../providers/data/data';

@Component({
  selector: 'app-castle',
  templateUrl: './castle.page.html',
  styleUrls: ['./castle.page.scss'],
})
export class CastlePage implements OnInit {

  constructor(public dataProvider: DataProvider) {
  }

  ngOnInit() {
  }

  doRefresh(event) {
    console.log('Beginning refresh...');

    setTimeout(() => {
      this.dataProvider.getFood(() => event.target.complete());
    }, 1000);
  }
}
