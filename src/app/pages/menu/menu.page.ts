import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ConfirmLogoutPage } from '../confirm-logout/confirm-logout.page';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title: 'Calendar',
      url: '/menu/calendar'
    },
    {
      title: 'First',
      url: '/menu/menu-first'
    },
    {
      title: 'Second',
      url: '/menu/menu-second'
    }
  ];

  selectedPath = '';

  constructor(private router: Router, private modalController: ModalController) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
  }

  async logout() {
    // const modal = await this.modalController.create({
    //   component: ConfirmLogoutPage,
    //   cssClass: 'modal-css'
    // });
    // return await modal.present();
  }

  ngOnInit() {
  }

}
