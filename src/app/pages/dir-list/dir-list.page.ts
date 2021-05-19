import { Component, OnInit } from '@angular/core';
import { DataProvider } from 'src/providers/data/data';
import { NavController } from '@ionic/angular';
import { Media } from '@ionic-native/media/ngx';

@Component({
  selector: 'app-dir-list',
  templateUrl: './dir-list.page.html',
  styleUrls: ['./dir-list.page.scss'],
})
export class DirListPage implements OnInit {
  dirPressed: boolean;
  audioPressed: boolean;

  constructor(public dataProvider: DataProvider, public nav: NavController, public media: Media) {
  }

  ngOnInit() {
    this.dirPressed = false;
    this.audioPressed = false;

    this.dataProvider.dirAudio = this.media.create('');
  }

  dirViewPerson(p: string) {
    if (this.audioPressed) {
      this.audioPressed = false;
      return;
    }

    if (this.dirPressed) {
      return;
    }
    this.dirPressed = true;

    this.dataProvider.dirPerson = p;

    if (this.dataProvider.dirPerson.children[7].innerHTML.length > 0) {
      this.dataProvider.dirPersonHasAddress = true;
    } else {
      this.dataProvider.dirPersonHasAddress = false;
    }

    this.nav.navigateForward('/menu/tabs/directory/dir-list/view-person');

    this.dirPressed = false;
  }

  loadMoreDirectory(event) {
    setTimeout(() => {
      console.log('Done.')

      this.dataProvider.dirLeftBound += 30;
      this.dataProvider.loadDirectory();

      event.target.complete();
    }, 500);
  }

  playAudio(p: any) {
    this.audioPressed = true;
    
    let id = p.id;
    let url = 'https://nobilis.nobles.edu/recorder/' + id + '.wav';
    
    this.dataProvider.dirAudio.release();
    this.dataProvider.dirAudio = this.media.create(url);
    this.dataProvider.dirAudio.play();
  }
}
