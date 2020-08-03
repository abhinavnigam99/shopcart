import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  firstTime: any;

  constructor(private storage: Storage) {
    /* this.storage.set('firstTime', true); */
  }
}
