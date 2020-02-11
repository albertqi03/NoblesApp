import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { DataProvider } from '../../../providers/data/data';

@Component({
  selector: 'app-my-info',
  templateUrl: './my-info.page.html',
  styleUrls: ['./my-info.page.scss'],
})
export class MyInfoPage implements OnInit {

  infoType: string;

  constructor(private dataProvider: DataProvider) {
    this.infoType = 'about-me';
  }

  ngOnInit() {
  }

}
