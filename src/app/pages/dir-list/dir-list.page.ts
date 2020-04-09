import { Component, OnInit } from '@angular/core';
import { DataProvider } from 'src/providers/data/data';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dir-list',
  templateUrl: './dir-list.page.html',
  styleUrls: ['./dir-list.page.scss'],
})
export class DirListPage implements OnInit {

  alphabet: Array<string>;
  people: Array<Array<string>>;

  dirPressed: boolean;

  constructor(private dataProvider: DataProvider, private nav: NavController) {
    this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    this.dirPressed = false;

    this.people = [];
    for (let i = 0; i < 26; i++) {
      this.people[i] = [];
    }

    this.sortPeople();
  }

  ngOnInit() {
  }

  sortPeople() {
    for (let i = 0; i < this.dataProvider.dirFilteredPeople.length; i++) {
      let person = this.dataProvider.dirFilteredPeople[i];
      let lastNameLetter = person.children[0].innerHTML.substring(0, 1);
      let lastNameNumber = this.alphabet.indexOf(lastNameLetter.toUpperCase());

      this.people[lastNameNumber].push(person);
    }
    this.people = this.people.filter(arr => arr.length !== 0);
  }

  dirViewPerson(p: string) {
    if (this.dirPressed) {
      return;
    }
    this.dirPressed = true;

    this.dataProvider.dirPerson = p;
    this.nav.navigateForward('/menu/tabs/directory/dir-list/view-person');

    this.dirPressed = false;
  }
}
