import { Component, OnInit } from '@angular/core';
import { DataProvider } from 'src/providers/data/data';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.page.html',
  styleUrls: ['./themes.page.scss'],
})
export class ThemesPage implements OnInit {

  constructor(public dataProvider: DataProvider) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.dataProvider.loadTheme(() => null);
  }
  
  loadThemes() {
    this.dataProvider.loadTheme(() => null);
    console.log(this.dataProvider.theme);
  }

}
