import { Component, OnInit } from '@angular/core';
import { DataProvider } from 'src/providers/data/data';
import { HttpClient } from '@angular/common/http';
import { NavController, ToastController } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.page.html',
  styleUrls: ['./directory.page.scss'],
})
export class DirectoryPage implements OnInit {

  myToast: any;

  dirPressed: boolean;

  dirPersonType: string;
  dirFirstName: string;
  dirLastName: string;
  dirGender: string;
  dirGrade: string;
  dirCity: string;

  showDirectorySpinner: boolean;

  constructor(public dataProvider: DataProvider, private OLD_http: HttpClient, private http: HTTP, private nav: NavController, private toastController: ToastController) {
    this.dirPersonType = 'Student';
    this.dirFirstName = '';
    this.dirLastName = '';
    this.dirGender = 'Any';
    this.dirGrade = 'Any';
    this.dirCity = '';
    
    this.dirPressed = false;
    this.showDirectorySpinner = false;
  }

  ngOnInit() {
  }

  getDirectoryData() {
    if (this.dirPressed) {
      return;
    }
    this.dirPressed = true;

    this.showDirectorySpinner = true;

    let url = "https://nobilis.nobles.edu/iosNoblesAppWeb/xmlDirectory.php?iosPIN=" + this.dataProvider.userPin;
    url += "&PersonType=" + this.dirPersonType; // Must select either student or faculty because if not, parents will show up.
    
    if (this.dirFirstName.length > 0) url += "&FirstName=" + this.dirFirstName;
    if (this.dirLastName.length > 0) url += "&LastName=" + this.dirLastName;
    if (this.dirGender !==  "Any") url += "&Gender=" + this.dirGender;
    if (this.dirGrade !==  "Any") url += "&Grade=" + this.dirGrade;
    if (this.dirCity.length > 0) url += "&City=" + this.dirCity;

    let res: string;
    this.dataProvider.dirFilteredPeople = [];
    
    this.http.get(url, {}, {})
      .then(data => {
        res = data.data;
        console.log('Getting directory list...');

        let parser = new DOMParser();
        let doc = parser.parseFromString(res, "text/xml");
        this.dataProvider.dirPeople = doc.getElementsByTagName("Person");

        if (this.dataProvider.dirPeople.length < 1) {
          this.toast();
          this.showDirectorySpinner = false;
          return;
        }

        this.dataProvider.dirListPeople = [];
        for (let i = 0; i < 26; i++) {
          this.dataProvider.dirListPeople[i] = [];
        }

        this.dataProvider.dirLeftBound = 0;
        this.dataProvider.dirIndex = [];

        this.dataProvider.loadDirectory();

        this.nav.navigateForward('/menu/tabs/directory/dir-list');

        this.dirPressed = false;
        this.showDirectorySpinner = false;
      })
      .catch(error => {
        console.log(error.status);
        console.log(error.error);
        console.log(error.headers);
        console.log('Error!');
      });
  }

  reset() {
    this.dirPersonType = 'Student';
    this.dirFirstName = '';
    this.dirLastName = '';
    this.dirGender = 'Any';
    this.dirGrade = 'Any';
    this.dirCity = '';
  }

  async toast() {
    try {
      this.myToast.dismiss();
    } catch (e) { }

    this.myToast = await this.toastController.create({
      message: 'No results found.',
      duration: 500
    });
    this.myToast.present();
    this.dirPressed = false;
  }

}