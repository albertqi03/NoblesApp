import { Component, Input, OnInit } from '@angular/core';
import { DataProvider } from '../../../providers/data/data';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-calendar-modal',
  templateUrl: './calendar-modal.page.html',
  styleUrls: ['./calendar-modal.page.scss'],
})
export class CalendarModalPage implements OnInit {

  @Input() location: string;
  @Input() description: string;

  constructor(public dataProvider: DataProvider, public modalController: ModalController) {  }

  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss();
  }
}
