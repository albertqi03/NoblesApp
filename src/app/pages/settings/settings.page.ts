import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataProvider } from 'src/providers/data/data';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(public dataProvider: DataProvider, private nav: NavController) {

  }

  ngOnInit() {
  }

  goToThemes() {
    this.nav.navigateForward('/menu/settings/themes');
  }

  goToNotifications() {
    this.nav.navigateForward('/menu/settings/notifications');
  }

  goToFeedback() {
    this.nav.navigateForward('/menu/settings/send-feedback');
  }

  goToAbout() {
    this.nav.navigateForward('/menu/settings/about');
  }

}
