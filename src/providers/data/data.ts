import { Injectable } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

import { HTTP } from '@ionic-native/http/ngx';

import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { DomSanitizer } from '@angular/platform-browser';

import { Media } from '@ionic-native/media/ngx';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})

export class DataProvider {

  authState = new BehaviorSubject(false);
  isSplashScreenShown = true;

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
  classIDs: Array<Array<string>> = new Array;

  classStudentsIDs: Array<string> = new Array;

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

  // COMM SERV VARS

  commServHours: Array<string> = new Array;
  commServYear: Array<string> = new Array;
  commServOrg: Array<string> = new Array;

  // DIRECTORY VARS

  dirFilteredPeople = [];
  dirPerson: any;

  dirPeople: any;

  dirListPeople: Array<Array<string>>;

  dirLeftBound: number;
  dirScroll: boolean;
  dirIndex: Array<number> = new Array;

  dirListGradeMap: Map<any, string> = new Map();

  dirPersonHasAddress: boolean;
  dirPersonHasSchedule: boolean;

  dirAudio: any;

  // DIRECTORY SCHEDULE VARS

  _courses: Array<Array<string>> = new Array; // day course

  _startTimes: Array<Array<string>> = new Array;
  _endTimes: Array<Array<string>> = new Array;
  _courseNames: Array<Array<string>> = new Array;
  _locations: Array<Array<string>> = new Array;
  _teachers: Array<Array<string>> = new Array;
  _blocks: Array<Array<string>> = new Array;
  _periods: Array<Array<string>> = new Array;

  _scheduleColors: Array<Array<string>> = new Array;

  // CASTLE VARS

  castleDayName: string;
  castleMealType: string;
  castleDates: Array<Date> = new Array;

  castleMenu: Array<any> = new Array;

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

  homeImage: Array<string> = new Array;
  awayImage: Array<string> = new Array;

  athEvents: any;
  athLeftBound: number;
  athScroll: boolean;
  athIndex: Array<number> = new Array;

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

  upHomeImage: Array<string> = new Array;
  upAwayImage: Array<string> = new Array;

  upEvents: any;
  upLeftBound: number;
  upScroll: boolean;
  upIndex: Array<number> = new Array;

  // CALENDAR VARS

  calDateStart: Array<string> = new Array;
  calTimeStart: Array<string> = new Array;
  calTimeEnd: Array<string> = new Array;
  calTitle: Array<string> = new Array;
  calLocation: Array<string> = new Array;
  calDescription: Array<string> = new Array;

  // OTHER VARS

  loginPressed: boolean;
  myToast: any;

  darkMode: boolean;
  showDirImage: boolean;

  theme: string;

  defaultSchedule: boolean;
  helios: boolean;
  vaporwave: boolean;
  crayon: boolean;
  jam: boolean;
  ocean: boolean;

  showLoginSpinner: boolean;

  constructor(private http: HTTP, private nav: NavController, private toastController: ToastController,
    private storage: Storage, private plt: Platform, private splashScreen: SplashScreen, public sanitizer: DomSanitizer, public media: Media) {
    let currentDate = new Date();
    let weekdays = ["Monday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Monday"];
    this.dayName = weekdays[currentDate.getDay()];
    this.loginPressed = false;

    this.darkMode = false;
    this.showDirImage = true;

    this.theme = 'default';

    this.defaultSchedule = true;
    this.helios = false;
    this.vaporwave = false;
    this.crayon = false;
    this.jam = false;
    this.ocean = false;

    this.dirListGradeMap.set("", "Faculty");
    this.dirListGradeMap.set("12", "Class 1");
    this.dirListGradeMap.set("11", "Class 2");
    this.dirListGradeMap.set("10", "Class 3");
    this.dirListGradeMap.set("9", "Class 4");
    this.dirListGradeMap.set("8", "Class 5");
    this.dirListGradeMap.set("7", "Class 6");

    this.dirAudio = this.media.create('');
    this.dirAudio.release();

    this.showLoginSpinner = false;

    this.plt.ready().then(() => {
      this.checkToken(() => this.checkEarlySplashScreen());
    });
  }

  checkEarlySplashScreen() {
    if (!this.isAuthenticated()) {
      this.splashScreen.hide();
      this.isSplashScreenShown = false;
    }
  }

  switchDarkMode() {
    this.darkMode = !this.darkMode;
    this.theme === 'dark-mode';
  }

  async toast() {
    try {
      this.myToast.dismiss();
    } catch (e) { }

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

    this.showLoginSpinner = true;

    let url = 'https://nobilis.nobles.edu/iosnoblesappweb/aboutme.php?iosPIN=' + this.userPin;
    let res: string;

    this.http.get(url, {}, {})
      .then(data => {
        res = data.data;
        console.log('Attempting login...');

        let array = res.split("#");
        if (array[0] === 'NoPIN' || array[0] === 'InvalidPIN') {
          this.toast();
          this.showLoginSpinner = false;
          return;
        } else {
          return this.storage.set(TOKEN_KEY, this.userPin).then(res => {
            this.authState.next(true);
          });
        }
      })
      .catch(error => {
        console.log(error.status);
        console.log(error.error);
        console.log(error.headers);
        console.log('Error!');

        this.toast();
        this.showLoginSpinner = false;
        this.loginPressed = false;
        return;
      });
  }

  getAllData() {
    this.storage.get(TOKEN_KEY).then((res) => {
      this.userPin = res;

      // Waits for function to be finished before calling the next.
      // This ensures that schedule page only loads after all the data has been processed.
      this.getUserData(
        () => this.getFinancial(
          () => this.getCommServ(
            () => this.getAthleticResults(
              () => this.loadAthletic(
                () => this.getUpcomingGames(
                  () => this.loadUpcoming(
                    () => this.getCalEvents(
                      () => this.getFood(
                        () => this.getSchedule(
                          () => this.loadTheme(
                            () => this.finishLogin())))))))))));
    });
  }

  finishLogin() {
    console.log('Login successful!');

    this.nav.navigateRoot('/menu/tabs/schedule');

    this.loginPressed = false;
    this.showLoginSpinner = false;

    if (this.isSplashScreenShown) {
      this.splashScreen.hide();
      this.isSplashScreenShown = false;
    }
  }

  logout() {
    this.nav.navigateRoot('/login');

    return this.storage.remove(TOKEN_KEY).then(() => {
      this.authState.next(false);
    });
  }

  isAuthenticated() {
    return this.authState.value;
  }

  checkToken(callback) {
    return this.storage.get(TOKEN_KEY).then(res => {
      if (res) {
        this.authState.next(true);
      }
      callback();
    });
  }

  getUserData(callback) {
    let url = 'https://nobilis.nobles.edu/iosnoblesappweb/aboutme.php?iosPIN=' + this.userPin;
    let res: string;

    this.http.get(url, {}, {})
      .then(data => {
        res = data.data;
        console.log('Getting user data...');

        let array = res.split("#");

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

        callback();
      })
      .catch(error => {
        console.log(error.status);
        console.log(error.error);
        console.log(error.headers);
        console.log('Error!');

        callback();
      });
  }

  getFinancial(callback) {
    let url = "https://nobilis.nobles.edu/iosNoblesAppWeb/spendinglimits.php?iosPIN=" + this.userPin;
    let res: string;

    this.http.get(url, {}, {})
      .then(data => {
        res = data.data;
        console.log('Getting financial data...');

        let array = res.split("#");

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

        callback();
      })
      .catch(error => {
        console.log(error.status);
        console.log(error.error);
        console.log(error.headers);
        console.log('Error!');

        callback();
      });
  }

  getCommServ(callback) {
    let url = "https://nobilis.nobles.edu/iosNoblesAppWeb/xmlcommservevents.php?PeopleID=" + this.PeopleID;
    let res: string;

    this.http.get(url, {}, {})
      .then(data => {
        res = data.data;
        console.log('Getting community service data...');

        let parser = new DOMParser();
        let doc = parser.parseFromString(res, "text/xml");
        let events = doc.getElementsByTagName("Event");

        for (let i = 0; i < events.length; i++) {
          let event = events[i];

          this.commServHours[i] = event.children[0].innerHTML;
          this.commServYear[i] = event.children[1].innerHTML;
          this.commServOrg[i] = event.children[2].innerHTML;
        }

        callback();
      })
      .catch(error => {
        console.log(error.status);
        console.log(error.error);
        console.log(error.headers);
        console.log('Error!');

        callback();
      });
  }

  getAthleticResults(callback) {
    let url = "https://nobilis.nobles.edu/webservices/gameschedule.php?eventtypes=ContestResults";
    let res: string;

    this.http.get(url, {}, {})
      .then(data => {
        res = data.data;
        console.log('Getting athletic results...');

        let parser = new DOMParser();
        let doc = parser.parseFromString(res, "text/xml");
        this.athEvents = doc.getElementsByTagName("Event");

        this.athLeftBound = 0;

        callback();
      })
      .catch(error => {
        console.log(error.status);
        console.log(error.error);
        console.log(error.headers);
        console.log('Error!');

        callback();
      });
  }

  loadAthletic(callback) {
    let events = this.athEvents;

    if (typeof events === 'undefined' || events.length < 1) {
      this.athScroll = false;
      callback();
      return;
    }

    for (let i = this.athLeftBound; i < this.athLeftBound + 15; i++) {
      let event = events[i];

      if (typeof event === 'undefined') {
        this.athScroll = false;
        return;
      } else {
        this.athScroll = true;
      }

      this.athIndex[i] = i;

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

      this.homeTeams[i] = this.homeAway[i] == 'Home' ? 'Noble and Greenough' : this.opponents[i];
      this.awayTeams[i] = this.homeAway[i] == 'Home' ? this.opponents[i] : 'Noble and Greenough';

      this.homeScores[i] = this.homeAway[i] == 'Home' ? noblesScore : oppScore;
      this.awayScores[i] = this.homeAway[i] == 'Home' ? oppScore : noblesScore;

      if (leftScore.length < 1 || rightScore.length < 1) {
        this.homeScores[i] = '';
        this.awayScores[i] = '';
      }

      this.eventSport[i] = event.children[8].innerHTML;
      this.eventDate[i] = event.children[1].innerHTML;
      this.eventMonth[i] = event.children[10].innerHTML;
      this.eventDay[i] = event.children[11].innerHTML;
      this.eventYear[i] = event.children[12].innerHTML;

      let oppImage = '../../assets/schools/';
      let oppString = this.opponents[i].toLowerCase();

      oppString = oppString.replace(/\s+/g, '-');
      oppString = oppString.replace(/\./g, '');
      oppString = oppString.replace(/\'/g, '');

      // OTHER WEIRD SUBSTRINGS

      oppString = oppString.replace('-(nationals)', '');

      // end weird substring

      oppImage += oppString + '-transparent.png';

      if (this.homeTeams[i] == 'Noble and Greenough') {
        this.homeImage[i] = '../../assets/schools/nobles.png';
        this.awayImage[i] = oppImage;
      } else {
        this.awayImage[i] = '../../assets/schools/nobles.png';
        this.homeImage[i] = oppImage;
      }
    }

    callback();
  }

  getUpcomingGames(callback) {
    let url = "https://nobilis.nobles.edu/webservices/gameschedule.php?eventtypes=AllGameSchedule";
    let res: string;

    this.http.get(url, {}, {})
      .then(data => {
        res = data.data;
        console.log('Getting upcoming athletic games...');

        let parser = new DOMParser();
        let doc = parser.parseFromString(res, "text/xml");
        this.upEvents = doc.getElementsByTagName("Event");

        this.upLeftBound = 0;

        callback();
      })
      .catch(error => {
        console.log(error.status);
        console.log(error.error);
        console.log(error.headers);
        console.log('Error!');

        callback();
      });
  }

  loadUpcoming(callback) {
    let events = this.upEvents;

    for (let i = this.upLeftBound; i < this.upLeftBound + 15; i++) {
      let event = events[i];

      if (typeof event === 'undefined') {
        this.upScroll = false;
        callback();
        return;
      } else {
        this.upScroll = true;
      }

      this.upIndex[i] = i;

      this.upOpponents[i] = event.children[4].innerHTML;
      this.upHomeAway[i] = event.children[13].innerHTML;

      this.upHomeTeams[i] = this.upHomeAway[i] == 'Home' ? 'Noble and Greenough' : this.upOpponents[i];
      this.upAwayTeams[i] = this.upHomeAway[i] == 'Home' ? this.upOpponents[i] : 'Noble and Greenough';

      this.upEventSport[i] = event.children[8].innerHTML;
      this.upEventDate[i] = event.children[1].innerHTML;
      this.upEventMonth[i] = event.children[10].innerHTML;
      this.upEventDay[i] = event.children[11].innerHTML;
      this.upEventYear[i] = event.children[12].innerHTML;

      this.upStartTime[i] = event.children[2].innerHTML;
      this.upEndTime[i] = event.children[3].innerHTML;
      if (typeof event.children[15] === 'undefined') {
        this.upAddress[i] = '';
      } else {
        this.upAddress[i] = this.upHomeAway[i] == 'Home' ?
          '10 Campus Drive Dedham, MA' : event.children[15].innerHTML.substring(0, event.children[15].innerHTML.lastIndexOf(' '));
        // Gets address without ZIP code.
      }

      this.upCompleted[i] = this.upEventSport[i].includes('(COMPLETE)') ? true : false;

      let oppImage = '../../assets/schools/';
      let oppString = this.upOpponents[i].toLowerCase();

      oppString = oppString.replace(/\s+/g, '-');
      oppString = oppString.replace(/\./g, '');
      oppString = oppString.replace(/\'/g, '');

      // OTHER WEIRD SUBSTRINGS

      oppString = oppString.replace('-(nationals)', '');

      // end weird substring

      oppImage += oppString + '-transparent.png';

      if (this.upHomeTeams[i] == 'Noble and Greenough') {
        this.upHomeImage[i] = '../../assets/schools/nobles.png';
        this.upAwayImage[i] = oppImage;
      } else {
        this.upAwayImage[i] = '../../assets/schools/nobles.png';
        this.upHomeImage[i] = oppImage;
      }
    }

    callback();
  }

  getCalEvents(callback) {
    let url = "https://nobilis.nobles.edu/iosNoblesAppWeb/xmlCalendarEvents.php";
    let res: string;

    this.http.get(url, {}, {})
      .then(data => {
        res = data.data;
        console.log('Getting calendar events...');

        let parser = new DOMParser();
        let doc = parser.parseFromString(res, "text/xml");
        let events = doc.getElementsByTagName("Event");

        for (let i = 0; i < events.length; i++) {
          let event = events[i];

          this.calDateStart[i] = event.children[0].innerHTML;

          this.calTimeStart[i] = event.children[4].innerHTML;
          this.calTimeEnd[i] = event.children[5].innerHTML;

          this.calTitle[i] = event.children[6].innerHTML;
          this.calLocation[i] = event.children[7].innerHTML;
          this.calDescription[i] = event.children[8].innerHTML;

          if (this.calLocation[i].length < 1) this.calLocation[i] = 'None';
          if (this.calDescription[i].length < 1) this.calDescription[i] = 'None';
        }

        callback();
      })
      .catch(error => {
        console.log(error.status);
        console.log(error.error);
        console.log(error.headers);
        console.log('Error!');

        callback();
      });
  }

  getSchedule(callback) {
    let url = "https://nobilis.nobles.edu/iosNoblesAppWeb/xmlschedule.php?PeopleID=" + this.PeopleID;
    let res: string;

    this.http.get(url, {}, {})
      .then(data => {
        res = data.data;
        console.log('Getting user schedule...');

        for (let dayNum = 0; dayNum < 5; dayNum++) {
          let parser = new DOMParser();
          let firstDoc = parser.parseFromString(res, "text/xml");
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
          let classIDs: Array<string> = new Array;

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
            classIDs[courseNum] = secondDoc.getElementsByTagName('ClassID')[0].innerHTML;
          }

          this.courses[dayNum] = courses;
          this.startTimes[dayNum] = startTimes;
          this.endTimes[dayNum] = endTimes;
          this.courseNames[dayNum] = courseNames;
          this.locations[dayNum] = locations;
          this.teachers[dayNum] = teachers;
          this.blocks[dayNum] = blocks;
          this.periods[dayNum] = periods;
          this.classIDs[dayNum] = classIDs;
        }

        callback();
      })
      .catch(error => {
        console.log(error.status);
        console.log(error.error);
        console.log(error.headers);
        console.log('Error!');

        callback();
      });
  }

  loadTheme(callback) {
    console.log('Loading schedule themes...');

    for (let i = 0; i < this.blocks.length; i++) {
      let tempColors: Array<string> = new Array;
      let tempBlocks = this.blocks[i];
      for (let j = 0; j < this.blocks[i].length; j++) {
        tempColors[j] = 'darka';
        if (typeof tempBlocks[j] === 'undefined') continue;

        this.darkMode = (this.theme === 'dark-mode');

        if (this.theme === 'dark-mode') {
          if (tempBlocks[j] === 'A') tempColors[j] = 'darka';
          else if (tempBlocks[j] === 'B') tempColors[j] = 'darka';
          else if (tempBlocks[j] === 'C') tempColors[j] = 'darka';
          else if (tempBlocks[j] === 'D') tempColors[j] = 'darka';
          else if (tempBlocks[j] === 'E') tempColors[j] = 'darka';
          else if (tempBlocks[j] === 'F') tempColors[j] = 'darka';
          else if (tempBlocks[j] === 'G') tempColors[j] = 'darka';
          else if (tempBlocks[j] === 'M') tempColors[j] = 'darka';
          else tempColors[j] = 'darkcard';
        } else if (this.theme === 'default') {
          if (tempBlocks[j] === 'A') tempColors[j] = 'red';
          else if (tempBlocks[j] === 'B') tempColors[j] = 'blue';
          else if (tempBlocks[j] === 'C') tempColors[j] = 'green';
          else if (tempBlocks[j] === 'D') tempColors[j] = 'pink';
          else if (tempBlocks[j] === 'E') tempColors[j] = 'orange';
          else if (tempBlocks[j] === 'F') tempColors[j] = 'purple';
          else if (tempBlocks[j] === 'G') tempColors[j] = 'yellow';
          else if (tempBlocks[j] === 'M') tempColors[j] = 'gray';
          else tempColors[j] = 'gray';
        } else if (this.theme === 'helios') {
          if (tempBlocks[j] === 'A') tempColors[j] = 'helios1';
          else if (tempBlocks[j] === 'B') tempColors[j] = 'helios2';
          else if (tempBlocks[j] === 'C') tempColors[j] = 'helios3';
          else if (tempBlocks[j] === 'D') tempColors[j] = 'helios4';
          else if (tempBlocks[j] === 'E') tempColors[j] = 'helios5';
          else if (tempBlocks[j] === 'F') tempColors[j] = 'helios6';
          else if (tempBlocks[j] === 'G') tempColors[j] = 'helios7';
          else if (tempBlocks[j] === 'M') tempColors[j] = 'helios8';
          else tempColors[j] = 'gray';
        } else if (this.theme === 'vaporwave') {
          if (tempBlocks[j] === 'A') tempColors[j] = 'vaporwave-a';
          else if (tempBlocks[j] === 'B') tempColors[j] = 'vaporwave-b';
          else if (tempBlocks[j] === 'C') tempColors[j] = 'vaporwave-c';
          else if (tempBlocks[j] === 'D') tempColors[j] = 'vaporwave-d';
          else if (tempBlocks[j] === 'E') tempColors[j] = 'vaporwave-e';
          else if (tempBlocks[j] === 'F') tempColors[j] = 'vaporwave-f';
          else if (tempBlocks[j] === 'G') tempColors[j] = 'vaporwave-g';
          else if (tempBlocks[j] === 'M') tempColors[j] = 'vaporwave-h';
          else tempColors[j] = 'gray';
        } else if (this.theme === 'crayon') {
          if (tempBlocks[j] === 'A') tempColors[j] = 'crayon-red';
          else if (tempBlocks[j] === 'B') tempColors[j] = 'crayon-green';
          else if (tempBlocks[j] === 'C') tempColors[j] = 'crayon-pink';
          else if (tempBlocks[j] === 'D') tempColors[j] = 'crayon-purple';
          else if (tempBlocks[j] === 'E') tempColors[j] = 'crayon-orange';
          else if (tempBlocks[j] === 'F') tempColors[j] = 'crayon-blue';
          else if (tempBlocks[j] === 'G') tempColors[j] = 'crayon-yellow';
          else if (tempBlocks[j] === 'M') tempColors[j] = 'crayon-cyan';
          else tempColors[j] = 'gray';
        } else if (this.theme === 'jam') {
          if (tempBlocks[j] === 'A') tempColors[j] = 'jam1';
          else if (tempBlocks[j] === 'B') tempColors[j] = 'jam2';
          else if (tempBlocks[j] === 'C') tempColors[j] = 'jam3';
          else if (tempBlocks[j] === 'D') tempColors[j] = 'jam4';
          else if (tempBlocks[j] === 'E') tempColors[j] = 'jam5';
          else if (tempBlocks[j] === 'F') tempColors[j] = 'jam6';
          else if (tempBlocks[j] === 'G') tempColors[j] = 'jam7';
          else if (tempBlocks[j] === 'M') tempColors[j] = 'jam8';
          else tempColors[j] = 'gray';
        } else if (this.theme === 'ocean') {
          if (tempBlocks[j] === 'A') tempColors[j] = 'ocean1';
          else if (tempBlocks[j] === 'B') tempColors[j] = 'ocean2';
          else if (tempBlocks[j] === 'C') tempColors[j] = 'ocean3';
          else if (tempBlocks[j] === 'D') tempColors[j] = 'ocean4';
          else if (tempBlocks[j] === 'E') tempColors[j] = 'ocean5';
          else if (tempBlocks[j] === 'F') tempColors[j] = 'ocean6';
          else if (tempBlocks[j] === 'G') tempColors[j] = 'ocean7';
          else if (tempBlocks[j] === 'M') tempColors[j] = 'ocean8';
          else tempColors[j] = 'darkcard';
        }
      }
      this.scheduleColors[i] = tempColors;
    }

    callback();
  }

  loadDirectory() {
    for (let i = this.dirLeftBound; i < this.dirLeftBound + 30; i++) {
      if (typeof this.dirPeople[i] === 'undefined') {
        this.dirScroll = false;
        break;
      } else {
        this.dirScroll = true;
      }

      this.dirIndex[i] = i;

      this.dirFilteredPeople[i] = this.dirPeople[i];
    }

    this.sortPeople();
  }

  sortPeople() {
    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    for (let i = 0; i < 26; i++) {
      if (typeof this.dirListPeople[i] === 'undefined') this.dirListPeople[i] = [];
    }

    for (let i = this.dirLeftBound; i < this.dirFilteredPeople.length; i++) {
      let person = this.dirFilteredPeople[i];
      let lastNameLetter = person.children[0].innerHTML.substring(0, 1);
      let lastNameNumber = alphabet.indexOf(lastNameLetter.toUpperCase());

      this.dirListPeople[lastNameNumber].push(person);
    }
    this.dirListPeople = this.dirListPeople.filter(arr => arr.length !== 0);
  }

  getDirectorySchedule(callback) {
    let id = this.dirPerson.id;

    let url = "https://nobilis.nobles.edu/iosNoblesAppWeb/xmlschedule.php?PeopleID=" + id;
    let res: string;

    this.http.get(url, {}, {})
      .then(data => {
        res = data.data;
        console.log('Getting user schedule...');

        for (let dayNum = 0; dayNum < 5; dayNum++) {
          let parser = new DOMParser();
          let firstDoc = parser.parseFromString(res, "text/xml");
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

            if (this.theme === 'dark-mode') {
              if (blocks[courseNum] === 'A') scheduleColors[courseNum] = 'darka';
              else if (blocks[courseNum] === 'B') scheduleColors[courseNum] = 'darka';
              else if (blocks[courseNum] === 'C') scheduleColors[courseNum] = 'darka';
              else if (blocks[courseNum] === 'D') scheduleColors[courseNum] = 'darka';
              else if (blocks[courseNum] === 'E') scheduleColors[courseNum] = 'darka';
              else if (blocks[courseNum] === 'F') scheduleColors[courseNum] = 'darka';
              else if (blocks[courseNum] === 'G') scheduleColors[courseNum] = 'darka';
              else if (blocks[courseNum] === 'M') scheduleColors[courseNum] = 'darka';
              else scheduleColors[courseNum] = 'darkcard';
            } else if (this.theme === 'default') {
              if (blocks[courseNum] === 'A') scheduleColors[courseNum] = 'red';
              else if (blocks[courseNum] === 'B') scheduleColors[courseNum] = 'blue';
              else if (blocks[courseNum] === 'C') scheduleColors[courseNum] = 'green';
              else if (blocks[courseNum] === 'D') scheduleColors[courseNum] = 'pink';
              else if (blocks[courseNum] === 'E') scheduleColors[courseNum] = 'orange';
              else if (blocks[courseNum] === 'F') scheduleColors[courseNum] = 'purple';
              else if (blocks[courseNum] === 'G') scheduleColors[courseNum] = 'yellow';
              else if (blocks[courseNum] === 'M') scheduleColors[courseNum] = 'gray';
              else scheduleColors[courseNum] = 'gray';
            } else if (this.theme === 'helios') {
              if (blocks[courseNum] === 'A') scheduleColors[courseNum] = 'helios1';
              else if (blocks[courseNum] === 'B') scheduleColors[courseNum] = 'helios2';
              else if (blocks[courseNum] === 'C') scheduleColors[courseNum] = 'helios3';
              else if (blocks[courseNum] === 'D') scheduleColors[courseNum] = 'helios4';
              else if (blocks[courseNum] === 'E') scheduleColors[courseNum] = 'helios5';
              else if (blocks[courseNum] === 'F') scheduleColors[courseNum] = 'helios6';
              else if (blocks[courseNum] === 'G') scheduleColors[courseNum] = 'helios7';
              else if (blocks[courseNum] === 'M') scheduleColors[courseNum] = 'helios8';
              else scheduleColors[courseNum] = 'gray';
            } else if (this.theme === 'vaporwave') {
              if (blocks[courseNum] === 'A') scheduleColors[courseNum] = 'vaporwave-a';
              else if (blocks[courseNum] === 'B') scheduleColors[courseNum] = 'vaporwave-b';
              else if (blocks[courseNum] === 'C') scheduleColors[courseNum] = 'vaporwave-c';
              else if (blocks[courseNum] === 'D') scheduleColors[courseNum] = 'vaporwave-d';
              else if (blocks[courseNum] === 'E') scheduleColors[courseNum] = 'vaporwave-e';
              else if (blocks[courseNum] === 'F') scheduleColors[courseNum] = 'vaporwave-f';
              else if (blocks[courseNum] === 'G') scheduleColors[courseNum] = 'vaporwave-g';
              else if (blocks[courseNum] === 'M') scheduleColors[courseNum] = 'vaporwave-h';
              else scheduleColors[courseNum] = 'gray';
            } else if (this.theme === 'crayon') {
              if (blocks[courseNum] === 'A') scheduleColors[courseNum] = 'crayon-red';
              else if (blocks[courseNum] === 'B') scheduleColors[courseNum] = 'crayon-green';
              else if (blocks[courseNum] === 'C') scheduleColors[courseNum] = 'crayon-pink';
              else if (blocks[courseNum] === 'D') scheduleColors[courseNum] = 'crayon-purple';
              else if (blocks[courseNum] === 'E') scheduleColors[courseNum] = 'crayon-orange';
              else if (blocks[courseNum] === 'F') scheduleColors[courseNum] = 'crayon-blue';
              else if (blocks[courseNum] === 'G') scheduleColors[courseNum] = 'crayon-yellow';
              else if (blocks[courseNum] === 'M') scheduleColors[courseNum] = 'crayon-cyan';
              else scheduleColors[courseNum] = 'gray';
            } else if (this.theme === 'jam') {
              if (blocks[courseNum] === 'A') scheduleColors[courseNum] = 'jam1';
              else if (blocks[courseNum] === 'B') scheduleColors[courseNum] = 'jam2';
              else if (blocks[courseNum] === 'C') scheduleColors[courseNum] = 'jam3';
              else if (blocks[courseNum] === 'D') scheduleColors[courseNum] = 'jam4';
              else if (blocks[courseNum] === 'E') scheduleColors[courseNum] = 'jam5';
              else if (blocks[courseNum] === 'F') scheduleColors[courseNum] = 'jam6';
              else if (blocks[courseNum] === 'G') scheduleColors[courseNum] = 'jam7';
              else if (blocks[courseNum] === 'M') scheduleColors[courseNum] = 'jam8';
              else scheduleColors[courseNum] = 'gray';
            } else if (this.theme === 'ocean') {
              if (blocks[courseNum] === 'A') scheduleColors[courseNum] = 'ocean1';
              else if (blocks[courseNum] === 'B') scheduleColors[courseNum] = 'ocean2';
              else if (blocks[courseNum] === 'C') scheduleColors[courseNum] = 'ocean3';
              else if (blocks[courseNum] === 'D') scheduleColors[courseNum] = 'ocean4';
              else if (blocks[courseNum] === 'E') scheduleColors[courseNum] = 'ocean5';
              else if (blocks[courseNum] === 'F') scheduleColors[courseNum] = 'ocean6';
              else if (blocks[courseNum] === 'G') scheduleColors[courseNum] = 'ocean7';
              else if (blocks[courseNum] === 'M') scheduleColors[courseNum] = 'ocean8';
              else scheduleColors[courseNum] = 'darkcard';
            }

          }

          this._courses[dayNum] = courses;
          this._startTimes[dayNum] = startTimes;
          this._endTimes[dayNum] = endTimes;
          this._courseNames[dayNum] = courseNames;
          this._locations[dayNum] = locations;
          this._teachers[dayNum] = teachers;
          this._blocks[dayNum] = blocks;
          this._periods[dayNum] = periods;
          this._scheduleColors[dayNum] = scheduleColors;
        }

        this.dirPersonHasSchedule = true;

        callback();
      })
      .catch(error => {
        console.log(error.status);
        console.log(error.error);
        console.log(error.headers);
        console.log('Error!');

        this.dirPersonHasSchedule = false;

        callback();
      });
  }

  getFood(callback) {
    let currentDate = new Date();
    let weekdays = ['monday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'monday'];
    this.castleDayName = weekdays[currentDate.getDay()];
    this.castleMealType = 'lunch';

    let firstDate = this.getMonday(currentDate);
    if (currentDate.getDay() === 0 || currentDate.getDay() === 6) {
      firstDate.setDate(firstDate.getDate() + 7);
    }

    for (let i = 0; i < 5; i++) {
      let tempDate = new Date(firstDate.getTime());
      tempDate.setDate(tempDate.getDate() + i);
      this.castleDates[i] = tempDate;
    }

    let referenceDayNames = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
    let referenceMealTypes = ['Lunch', 'Dinner'];
    for (let i = 0; i < 10; i++) {
      let dayName = referenceDayNames[Math.trunc(i / 2)];
      let mealType = referenceMealTypes[i % 2];

      let url = 'https://nobilis.nobles.edu/skyworld/castlemenu.php?DisplayType=Phone';
      let weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
      let d = this.castleDates[weekdays.indexOf(dayName)];
      let newDate = d.getMonth() + 1 + '/' + d.getDate();

      url += '&mealType=' + mealType;
      url += '&Date=' + newDate;

      this.http.get(url, {}, {})
        .then(data => {
          let menu = data.data;
          console.log('Getting castle data...');

          let parser = new DOMParser();
          let doc = parser.parseFromString(menu, "text/html");

          this.castleMenu[i] = this.sanitizer.bypassSecurityTrustHtml(doc.getElementsByTagName("body")[0].innerHTML);
        })
        .catch(error => {
          console.log(error.status);
          console.log(error.error);
          console.log(error.headers);
          console.log('Error!');

          callback();
        });
    }

    callback();
  }

  getMonday(d: Date) {
    d = new Date(d);
    var day = d.getDay(),
      diff = d.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(d.setDate(diff));
  }

  createDiv(str: string) {
    return '<div>' + str + '</div>';
  }
}
