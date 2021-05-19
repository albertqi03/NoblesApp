import { Component, OnInit } from '@angular/core';
import { DataProvider } from '../../../providers/data/data';
import { ModalController } from '@ionic/angular';
import { CalendarModalPage } from '../calendar-modal/calendar-modal.page';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  nums: Array<number> = new Array;

  constructor(public dataProvider: DataProvider, public modalController: ModalController) {
    this.nums = [];
    for (let i = 0; i < this.dataProvider.calDateStart.length; i++) {
      this.nums[i] = i;
    }
  }

  ngOnInit() {
  }

  doRefresh(event) {
    console.log('Beginning refresh...');

    setTimeout(() => {
      this.dataProvider.getCalEvents(() => event.target.complete());
    }, 1000);
  }

  async openModal(i) {
    const modal = await this.modalController.create({
      component: CalendarModalPage,
      cssClass: 'calendar-modal-class',
      componentProps: {
        'location': this.dataProvider.calLocation[i],
        'description': this.dataProvider.calDescription[i]
      }
    });
    return await modal.present();
  }

}
