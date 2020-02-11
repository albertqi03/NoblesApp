import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { DataProvider } from '../../../providers/data/data';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  pin: string;

  constructor(private dataProvider: DataProvider, private nav: NavController) { }

  ngOnInit() {
  }

  signIn() {
    this.dataProvider.userPin = this.pin;
    this.dataProvider.ifValid();
  }
}
