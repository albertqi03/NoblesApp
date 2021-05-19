import { Component, OnInit } from '@angular/core';
import { DataProvider } from 'src/providers/data/data';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(public dataProvider: DataProvider) { }

  ngOnInit() {
  }

}
