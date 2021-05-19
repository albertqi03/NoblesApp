import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { NavController, ToastController } from '@ionic/angular';
import { DataProvider } from 'src/providers/data/data';

@Component({
  selector: 'app-make-res',
  templateUrl: './make-res.page.html',
  styleUrls: ['./make-res.page.scss'],
})
export class MakeResPage implements OnInit {

  resMealType: string;
  resDate: string;

  paddedStringDate: string;

  minDate: string; // Must be ISO 8601 format
  maxDate: string; // Ditto

  buttonPressed: boolean;

  myFailToast: any;
  mySuccessToast: any;

  constructor(public dataProvider: DataProvider, public http: HTTP, public nav: NavController, public toastController: ToastController) {
    this.resMealType = 'Breakfast';
    this.buttonPressed = false;

    let today = new Date(); // There may be issues with timezones but oh well
    this.minDate = today.toISOString().substring(0, 10);

    let tenYearsFromNow = new Date();
    tenYearsFromNow.setFullYear(today.getFullYear() + 10);
    this.maxDate = tenYearsFromNow.toISOString().substring(0, 10);
  }

  ngOnInit() {
  }

  submitRes() {
    if (this.buttonPressed) {
      return;
    }
    this.buttonPressed = true;

    if (typeof this.resDate === 'undefined') {
      this.failToast();
      return;
    }

    let rawDate = new Date(this.resDate);
    let rawMonth = rawDate.getMonth() + 1;
    let rawDayNumber = rawDate.getDate();

    let stringDate = rawMonth + "/" + rawDayNumber + "/" + rawDate.getFullYear();

    let paddedMonth = (rawMonth < 10) ? ("0" + rawMonth) : rawMonth;
    let paddedDayNumber = (rawDayNumber < 10) ? ("0" + rawDayNumber) : rawDayNumber;
    this.paddedStringDate = paddedMonth + "/" + paddedDayNumber + "/" + rawDate.getFullYear();;

    let makeResUrl = "https://nobilis.nobles.edu/webservices/reservedinner.php?username=" + this.dataProvider.UNID;
    makeResUrl += "&mealtype=" + this.resMealType + "&date=" + stringDate;

    this.http.get(makeResUrl, {}, {})
      .then(data => {
        console.log('Making reservation...');
        this.nav.navigateBack('/menu/tabs/castle/my-res');
        this.successToast();
      });
  }

  async failToast() {
    try {
      this.myFailToast.dismiss();
      this.mySuccessToast.dismiss();
    } catch (e) { }

    this.myFailToast = await this.toastController.create({
      message: 'Please input a valid date.',
      duration: 1000
    });
    this.myFailToast.present();
    this.buttonPressed = false;
  }

  async successToast() {
    try {
      this.mySuccessToast.dismiss();
      this.myFailToast.dismiss();
    } catch (e) { }

    this.mySuccessToast = await this.toastController.create({
      message: 'Reservation created for ' + this.paddedStringDate + '.',
      duration: 3000
    });
    this.mySuccessToast.present();
    this.buttonPressed = false;
  }

}
