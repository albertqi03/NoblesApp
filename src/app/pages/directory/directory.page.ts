import { Component, OnInit } from '@angular/core';
import { DataProvider } from 'src/providers/data/data';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.page.html',
  styleUrls: ['./directory.page.scss'],
})
export class DirectoryPage implements OnInit {

  dirPersonType: string;
  dirFirstName: string;
  dirLastName: string;
  dirGender: string;
  dirClass: string;

  dirSearchData: Array<string>;
  
  constructor(private dataProvider: DataProvider, private http: HttpClient, private nav: NavController) {
    this.dirPersonType = 'Student';
    this.dirFirstName = '';
    this.dirLastName = '';
    this.dirGender = '';
    this.dirClass = '';
  }

  ngOnInit() {
  }

  getDirectoryData() {
    let url = "https://nobilis.nobles.edu/iosNoblesAppWeb/xmlDirectory.php?iosPIN=" + this.dataProvider.userPin + "&PersonType=";
    url += this.dirPersonType;
    if (this.dirFirstName.length > 0) { url += "&FirstName=" + this.dirFirstName; }
    if (this.dirLastName.length > 0) { url += "&LastName=" + this.dirLastName; }
    if (this.dirGender.length > 0) { url += "&Gender=" + this.dirGender; }

    this.dataProvider.dirFilteredPeople = [];
    this.http.get(url, { responseType: 'text' }).subscribe(output => {
      let parser = new DOMParser();
      let doc = parser.parseFromString(output, "text/xml");
      let len = doc.documentElement.childNodes.length;

      for (let i = 0; i < len; i++) {
        let curr = this.dataProvider.dirFilteredPeople[i] = doc.getElementsByTagName("Person")[i];
        this.dataProvider.dirFilteredPeople[i] = curr;
      }

      this.nav.navigateForward('/menu/tabs/directory/dir-list');

    }, (error) => {
      console.log('Errors', error);
    });
  }

  reset() {
    this.dirPersonType = 'Student';
    this.dirFirstName = '';
    this.dirLastName = '';
    this.dirClass = '';
    this.dirGender = '';
  }

}