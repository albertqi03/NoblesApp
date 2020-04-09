import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private nav: NavController) {

  }

  ngOnInit() {
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
