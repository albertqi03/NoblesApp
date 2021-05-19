import { Component, OnInit } from '@angular/core';
import { DataProvider } from 'src/providers/data/data';

@Component({
  selector: 'app-afternoon-program',
  templateUrl: './afternoon-program.page.html',
  styleUrls: ['./afternoon-program.page.scss'],
})
export class AfternoonProgramPage implements OnInit {

  constructor(public dataProvider: DataProvider) { }

  ngOnInit() {
  }

}
