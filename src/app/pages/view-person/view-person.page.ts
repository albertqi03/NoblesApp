import { Component, OnInit } from '@angular/core';
import { DataProvider } from 'src/providers/data/data';

@Component({
  selector: 'app-view-person',
  templateUrl: './view-person.page.html',
  styleUrls: ['./view-person.page.scss'],
})
export class ViewPersonPage implements OnInit {

  person: string;

  constructor(private dataProvider: DataProvider) {
    this.person = this.dataProvider.dirPerson;
  }

  ngOnInit() {
  }

}
