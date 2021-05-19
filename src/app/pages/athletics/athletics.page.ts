import { Component, OnInit } from '@angular/core';

import { DataProvider } from '../../../providers/data/data';

@Component({
  selector: 'app-athletics',
  templateUrl: './athletics.page.html',
  styleUrls: ['./athletics.page.scss'],
})
export class AthleticsPage implements OnInit {

  athleticsType: string;

  constructor(public dataProvider: DataProvider) {
    this.athleticsType = 'results';
  }

  ngOnInit() {
  }

  doRefresh(event) {
    console.log('Beginning refresh...');

    setTimeout(() => {
      this.dataProvider.getAthleticResults(
        () => this.dataProvider.loadAthletic(
          () => this.dataProvider.getUpcomingGames(
            () => this.dataProvider.loadUpcoming(
              () => event.target.complete()))));
    }, 2);
  }

  loadMoreAthletic(event) {
    setTimeout(() => {
      console.log('Done.')

      this.dataProvider.athLeftBound += 15;
      this.dataProvider.loadAthletic(() => console.log('Loading athletic...'));

      event.target.complete();
    }, 2);
  }

  loadMoreUpcoming(event) {
    setTimeout(() => {
      console.log('Done.')

      this.dataProvider.upLeftBound += 15;
      this.dataProvider.loadUpcoming(() => console.log('Loading upcoming...'));

      event.target.complete();
    }, 2);
  }

}
