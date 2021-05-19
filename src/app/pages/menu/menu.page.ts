import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { DataProvider } from 'src/providers/data/data';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title: 'Afternoon Program',
      url: '/menu/afternoon-program',
      icon: 'trophy-outline'
    },
    {
      title: 'Calendar',
      url: '/menu/calendar',
      icon: 'today-outline'
    }
  ];

  selectedPath = '';

  constructor(public dataProvider: DataProvider, private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
  }

  goToNobleman() {
    window.open('https://thenoblemanonline.com/', '_system', 'location=yes');
  }

  goToNoblesWebsite() {
    window.open('https://www.nobles.edu/', '_system', 'location=yes');
  }

  logout() {
    this.dataProvider.logout();
  }

  ngOnInit() {
  }

}
