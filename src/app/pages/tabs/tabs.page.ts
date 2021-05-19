import { Component, OnInit } from '@angular/core';
import { DataProvider } from 'src/providers/data/data';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(public dataProvider: DataProvider) { }

  ngOnInit() {
  }

}
