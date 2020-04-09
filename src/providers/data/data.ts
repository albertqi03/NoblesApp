import { HttpClient } from '@angular/common/http';
import { Injectable, RootRenderer } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable()

export class DataProvider {

  // USER VARS

  userPin: string;
  PersonType: string;
  FirstName: string;
  UNID: string;
  PeopleID: string;
  MACNum: string;
  MACCombo: string;
  ShattuckNum: string;
  ShattuckCombo: string;
  MSCubbyNum: string;
  MSCubbyCombo: string;
  AssemblySeat: string;
  Photo: string;
  LastName: string;
  Address: string;
  Email: string;
  Cell: string;
  Home: string;

  Season: string;
  foodData: string;

  // SCHEDULE VARS

  dayName: string;

  courses: Array<Array<string>> = new Array; // day course

  startTimes: Array<Array<string>> = new Array;
  endTimes: Array<Array<string>> = new Array;
  courseNames: Array<Array<string>> = new Array;
  locations: Array<Array<string>> = new Array;
  teachers: Array<Array<string>> = new Array;
  blocks: Array<Array<string>> = new Array;
  periods: Array<Array<string>> = new Array;

  scheduleColors: Array<Array<string>> = new Array;

  // FINANCIAL VARS

  BookstoreAmount: string;
  BookstoreIsUnlimited: string;
  AthleticStoreAmount: string;
  AthleticStoreIsUnlimited: string;
  SnackBarAmount: string;
  SnackBarIsUnlimited: string;
  AthleticStoreSpent: string;
  BookstoreSpent: string;
  SnackBarSpent: string;

  // DIRECTORY VARS

  dirFilteredPeople = [];
  dirPerson: string;

  // ATHLETIC VARS

  winLoss: Array<string> = new Array;
  opponents: Array<string> = new Array;
  homeAway: Array<string> = new Array;

  homeTeams: Array<string> = new Array;
  homeScores: Array<string> = new Array;
  awayTeams: Array<string> = new Array;
  awayScores: Array<string> = new Array;

  eventSport: Array<string> = new Array;
  eventDate: Array<string> = new Array;
  eventMonth: Array<string> = new Array;
  eventDay: Array<string> = new Array;
  eventYear: Array<string> = new Array;

  // UPCOMING GAMES VARS

  upOpponents: Array<string> = new Array;
  upHomeAway: Array<string> = new Array;

  upHomeTeams: Array<string> = new Array;
  upAwayTeams: Array<string> = new Array;

  upEventSport: Array<string> = new Array;
  upEventDate: Array<string> = new Array;
  upEventMonth: Array<string> = new Array;
  upEventDay: Array<string> = new Array;
  upEventYear: Array<string> = new Array;
  upStartTime: Array<string> = new Array;
  upEndTime: Array<string> = new Array;
  upAddress: Array<string> = new Array;

  upCompleted: Array<boolean> = new Array;

  // OTHER VARS

  loginPressed: boolean;
  myToast: any;

  constructor(private http: HttpClient, private nav: NavController, private toastController: ToastController) {
    let currentDate = new Date();
    let weekdays = ["Monday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Monday"];
    this.dayName = weekdays[currentDate.getDay()];
    this.loginPressed = false;
  }

  async toast() {
    try {
      this.myToast.dismiss();
    } catch(e) {}

    this.myToast = await this.toastController.create({
      message: 'Invalid PIN. Please try again.',
      duration: 500
    });
    this.myToast.present();
    this.loginPressed = false;
  }

  ifValid() {
    if (this.loginPressed) {
      return;
    }
    this.loginPressed = true;

    const urlPrivate = "https://nobilis.nobles.edu/iosnoblesappweb/aboutme.php?iosPIN=" + this.userPin;
    this.http.get(urlPrivate, { responseType: 'text' }).subscribe(output => {
      output => output.text();
      var array = output.split("#");
      if (array[0] === 'NoPIN' || array[0] === 'InvalidPIN') {
        this.toast();
        return;
      } else {
        this.getUserData();
      }
    }, (error) => {
      console.log('Errors', error);
    });
  }

  getUserData() {
    let url = "https://nobilis.nobles.edu/iosnoblesappweb/aboutme.php?iosPIN=" + this.userPin;
    this.http.get(url, { responseType: 'text' }).subscribe(output => {
      output => output.text();
      let array = output.split("#");
      this.PersonType = array[0];
      this.FirstName = array[1].substring(10);
      this.UNID = array[2].substring(5);
      this.PeopleID = array[3].substring(9);
      this.Photo = "https://nobilis.nobles.edu/images_sitewide/photos/" + this.PeopleID + ".jpeg";
      this.MACNum = array[4].substring(16);
      this.MACCombo = array[5].substring(15);
      this.ShattuckNum = array[6].substring(24);
      this.ShattuckCombo = array[7].substring(23);
      this.MSCubbyNum = array[8].substring(10);
      this.MSCubbyCombo = array[9].substring(13);
      this.AssemblySeat = array[10].substring(13);

      this.getFinancial();

    }, (error) => {
      console.log('Errors', error);
    });
  }

  getFinancial() {
    let url = "https://nobilis.nobles.edu/iosNoblesAppWeb/spendinglimits.php?iosPIN=" + this.userPin;
    this.http.get(url, { responseType: 'text' }).subscribe(output => {
      output => output.text();
      let array = output.split("#");

      this.BookstoreAmount = array[1].substring(16);
      this.BookstoreIsUnlimited = array[2].substring(21);
      this.AthleticStoreAmount = array[3].substring(20);
      this.AthleticStoreIsUnlimited = array[4].substring(25);
      this.SnackBarAmount = array[5].substring(15);
      this.SnackBarIsUnlimited = array[6].substring(20);

      // The order on nobilis is weird.
      this.BookstoreSpent = array[8].substring(15);
      this.AthleticStoreSpent = array[7].substring(19);

      this.SnackBarSpent = array[9].substring(12);

      if (this.BookstoreIsUnlimited === 'yes') {
        this.BookstoreAmount = 'Unlimited';
      } else {
        this.BookstoreAmount = '$' + this.BookstoreAmount;
      }
      if (this.AthleticStoreIsUnlimited === 'yes') {
        this.AthleticStoreAmount = 'Unlimited';
      } else {
        this.AthleticStoreAmount = '$' + this.AthleticStoreAmount;
      }
      if (this.SnackBarIsUnlimited === 'yes') {
        this.SnackBarAmount = 'Unlimited';
      } else {
        this.SnackBarAmount = '$' + this.SnackBarAmount;
      }

      if (!this.BookstoreSpent) {
        this.BookstoreSpent = '$0';
      } else {
        this.BookstoreSpent = '$' + this.BookstoreSpent;
      }
      if (!this.AthleticStoreSpent) {
        this.AthleticStoreSpent = '$0';
      } else {
        this.AthleticStoreSpent = '$' + this.AthleticStoreSpent;
      }
      if (!this.SnackBarSpent) {
        this.SnackBarSpent = '$0';
      } else {
        this.SnackBarSpent = '$' + this.SnackBarSpent;
      }

      this.getAthleticResults();

    }, (error) => {
      console.log('Errors', error);
    });
  }

  getAthleticResults() {
    let url = "https://nobilis.nobles.edu/webservices/gameschedule.php?eventtypes=ContestResults";

    this.http.get(url, { responseType: 'text' }).subscribe(output => {
      let parser = new DOMParser();
      let doc = parser.parseFromString(output, "text/xml");
      let events = doc.getElementsByTagName("Event");

      for (let i = 0; i < events.length; i++) {
        let event = events[i];

        let wl = event.children[0].innerHTML.substring(0, 1);
        if (wl == 'W') {
          this.winLoss[i] = 'Win';
        } else if (wl == 'L') {
          this.winLoss[i] = 'Loss';
        } else {
          this.winLoss[i] = 'Tie';
        }

        this.opponents[i] = event.children[4].innerHTML;
        this.homeAway[i] = event.children[13].innerHTML;

        let scoreArr = event.children[0].innerHTML.split("-");
        let leftScore = typeof scoreArr[0] != "undefined" ? scoreArr[0].replace(/\D/g, '') : 'N/A';
        let rightScore = typeof scoreArr[1] != "undefined" ? scoreArr[1].replace(/\D/g, '') : 'N/A';

        let noblesScore = this.winLoss[i] == 'Win' ? leftScore : rightScore;
        let oppScore = this.winLoss[i] == 'Win' ? rightScore : leftScore;

        this.homeTeams[i] = this.homeAway[i] == 'Home' ? 'Nobles' : this.opponents[i];
        this.awayTeams[i] = this.homeAway[i] == 'Home' ? this.opponents[i] : 'Nobles';

        this.homeScores[i] = this.homeAway[i] == 'Home' ? noblesScore : oppScore;
        this.awayScores[i] = this.homeAway[i] == 'Home' ? oppScore : noblesScore;

        this.eventSport[i] = event.children[8].innerHTML;
        this.eventDate[i] = event.children[1].innerHTML;
        this.eventMonth[i] = event.children[10].innerHTML;
        this.eventDay[i] = event.children[11].innerHTML;
        this.eventYear[i] = event.children[12].innerHTML;
      }

      this.getUpcomingGames();

    }, (error) => {
      console.log('Errors', error);
    });
  }

  getUpcomingGames() {
    let url = "https://nobilis.nobles.edu/webservices/gameschedule.php?eventtypes=AllGameSchedule";

    this.http.get(url, { responseType: 'text' }).subscribe(output => {
      let parser = new DOMParser();
      let doc = parser.parseFromString(output, "text/xml");
      let events = doc.getElementsByTagName("Event");

      for (let i = 0; i < events.length; i++) {
        let event = events[i];

        this.upOpponents[i] = event.children[4].innerHTML;
        this.upHomeAway[i] = event.children[13].innerHTML;

        this.upHomeTeams[i] = this.upHomeAway[i] == 'Home' ? 'Nobles' : this.upOpponents[i];
        this.upAwayTeams[i] = this.upHomeAway[i] == 'Home' ? this.upOpponents[i] : 'Nobles';

        this.upEventSport[i] = event.children[8].innerHTML;
        this.upEventDate[i] = event.children[1].innerHTML;
        this.upEventMonth[i] = event.children[10].innerHTML;
        this.upEventDay[i] = event.children[11].innerHTML;
        this.upEventYear[i] = event.children[12].innerHTML;

        this.upStartTime[i] = event.children[2].innerHTML;
        this.upEndTime[i] = event.children[3].innerHTML;
        this.upAddress[i] = this.upHomeAway[i] == 'Home' ? '10 Campus Drive\nDedham, MA 02026' : event.children[15].innerHTML;

        this.upCompleted[i] = this.upEventSport[i].includes('(COMPLETE)') ? true : false;
      }

      this.getSchedule();

    }, (error) => {
      console.log('Errors', error);
    });
  }

  getSchedule() {
    let url = "https://nobilis.nobles.edu/iosNoblesAppWeb/xmlschedule.php?PeopleID=" + this.PeopleID;

    this.http.get(url, { responseType: 'text' }).subscribe(output => {

      for (let dayNum = 0; dayNum < 5; dayNum++) {
        let parser = new DOMParser();
        let firstDoc = parser.parseFromString(output, "text/xml");
        let weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
        let user = firstDoc.getElementById(weekdays[dayNum]);

        let courses: Array<string> = new Array;

        let startTimes: Array<string> = new Array;
        let endTimes: Array<string> = new Array;
        let courseNames: Array<string> = new Array;
        let locations: Array<string> = new Array;
        let teachers: Array<string> = new Array;
        let blocks: Array<string> = new Array;
        let periods: Array<string> = new Array;

        let scheduleColors: Array<string> = new Array;

        let courseNum = 0;
        let courseNumMax = user.children.length;

        for (courseNum; courseNum < courseNumMax; courseNum++) {
          courses[courseNum] = user.children[courseNum].innerHTML;

          let secondDoc = new DOMParser().parseFromString(this.createDiv(courses[courseNum]), "text/xml");
          startTimes[courseNum] = secondDoc.getElementsByTagName('StartTime')[0].innerHTML;
          endTimes[courseNum] = secondDoc.getElementsByTagName('EndTime')[0].innerHTML;
          courseNames[courseNum] = secondDoc.getElementsByTagName('Description')[0].innerHTML;
          locations[courseNum] = secondDoc.getElementsByTagName('Location')[0].innerHTML;
          teachers[courseNum] = secondDoc.getElementsByTagName('Teacher')[0].innerHTML;
          blocks[courseNum] = secondDoc.getElementsByTagName('Block')[0].innerHTML;
          periods[courseNum] = secondDoc.getElementsByTagName('Period')[0].innerHTML;

          if (blocks[courseNum] === 'A') scheduleColors[courseNum] = 'red';
          else if (blocks[courseNum] === 'B') scheduleColors[courseNum] = 'green';
          else if (blocks[courseNum] === 'C') scheduleColors[courseNum] = 'purple';
          else if (blocks[courseNum] === 'D') scheduleColors[courseNum] = 'pink';
          else if (blocks[courseNum] === 'E') scheduleColors[courseNum] = 'orange';
          else if (blocks[courseNum] === 'F') scheduleColors[courseNum] = 'blue';
          else if (blocks[courseNum] === 'G') scheduleColors[courseNum] = 'yellow';
          else if (blocks[courseNum] === 'M') scheduleColors[courseNum] = 'gray';
        }

        this.courses[dayNum] = courses;
        this.startTimes[dayNum] = startTimes;
        this.endTimes[dayNum] = endTimes;
        this.courseNames[dayNum] = courseNames;
        this.locations[dayNum] = locations;
        this.teachers[dayNum] = teachers;
        this.blocks[dayNum] = blocks;
        this.periods[dayNum] = periods;
        this.scheduleColors[dayNum] = scheduleColors;
      }

      this.nav.navigateRoot('/menu/tabs/schedule');
      this.loginPressed = false;

    }, (error) => {
      console.log('Errors', error);
    });
  }

  createDiv(str: string) {
    return '<div>' + str + '</div>';
  }

  weather() {
    let searchtext = "select item.condition from weather.forecast where woeid =2390265"
    let url = "https://query.yahooapis.com/v1/public/yql?q=" + searchtext + "&format=xml";
    return this.http.get(url, { responseType: 'text' });
  }

  games(startDate: Date) {
    let start = startDate.getMonth() + 1 + "/" + startDate.getDate();
    //Get all scores from 2 weeks ago to now
    //let url = "https://nobilis.nobles.edu/webservices/gameschedule.php?startDate=" + start + "&eventtypes=Games";
    let url = "https://nobilis.nobles.edu/webservices/gameschedule.php?startDate=" + "5/1" + "&eventtypes=Games";
    console.log(url);
    return this.http.get(url, { responseType: 'text' });
  }

  getSeason() {
    const url = "https://nobilis.nobles.edu/iosnoblesappweb/xmlAcademicYears.php?iosPIN=" + this.userPin;
    console.log('final url ', url);
    //return "hello";
    this.http.get(url, { responseType: 'text' }).subscribe(output => {
      //let temp = JSON.stringify(output);
      output => output.text();
      var array = output.split("##");
      this.Season = array[3].substring(15);
      console.log("Current Season: " + this.Season);
    }, (error) => {
      console.log('Errors', error);
    });
  }


}
