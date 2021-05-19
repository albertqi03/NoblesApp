import { Component, OnInit } from '@angular/core';
import { DataProvider } from 'src/providers/data/data';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-view-person',
  templateUrl: './view-person.page.html',
  styleUrls: ['./view-person.page.scss'],
})
export class ViewPersonPage implements OnInit {

  myToast: any;

  person: any;

  buttonPressed: boolean;

  constructor(public dataProvider: DataProvider, private nav: NavController, private toastController: ToastController) {
    this.person = this.dataProvider.dirPerson;
  }

  ngOnInit() {
  }

  initViewSchedule() {
    if (this.buttonPressed) {
      return;
    }
    this.buttonPressed = true;

    this.dataProvider.getDirectorySchedule(() => this.goToViewSchedule());
  }

  goToViewSchedule() {
    if (this.dataProvider.dirPersonHasSchedule) {
      this.nav.navigateForward('/menu/tabs/directory/dir-list/view-person/view-person-schedule');
      this.buttonPressed = false;
    } else {
      this.toast();
    }
  }

  async toast() {
    try {
      this.myToast.dismiss();
    } catch (e) { }

    this.myToast = await this.toastController.create({
      message: 'No available schedule for this person.',
      duration: 500
    });
    this.myToast.present();
    this.buttonPressed = false;
  }

}
