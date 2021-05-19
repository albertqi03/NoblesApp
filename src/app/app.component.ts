import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';

import { HTTP } from '@ionic-native/http/ngx';
import { DataProvider } from 'src/providers/data/data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private screenOrientation: ScreenOrientation,
    private keyboard: Keyboard,
    private httpSSL: HTTP,
    private dataProvider: DataProvider,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
      this.splashScreen.show();
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
      this.keyboard.disableScroll(true);

      this.httpSSL.setServerTrustMode("pinned")
        .then(() => {
          console.log('SSL Pinning Success.');
        })
        .catch(() => {
          console.log('SSL Pinning Failure.');
        });

      this.dataProvider.authState.subscribe(state => {
        console.log('Auth changed: ', state);
        if (state) {
          this.dataProvider.getAllData();
        } else {
          this.router.navigateByUrl('/login');
        }
      });
    });
  }

}
