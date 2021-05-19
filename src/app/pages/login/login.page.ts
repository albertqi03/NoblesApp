import { Component, OnInit } from '@angular/core';
import { DataProvider } from '../../../providers/data/data';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  pin: string;

  constructor(public dataProvider: DataProvider) {
    this.pin = '';
  }

  ngOnInit() {
    
  }

  signIn() {
    this.dataProvider.userPin = this.pin;
    this.dataProvider.ifValid();
  }
}
