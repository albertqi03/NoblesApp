import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { DataProvider } from 'src/providers/data/data';

@Component({
  selector: 'app-nobleman',
  templateUrl: './nobleman.page.html',
  styleUrls: ['./nobleman.page.scss'],
})
export class NoblemanPage implements OnInit {

  constructor(public dataProvider: DataProvider) { }

  ngOnInit() {
  }

}
