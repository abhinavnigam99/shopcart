import { Component } from '@angular/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  firstTime: any;
  public appPages = [
    {
      title: 'Men\'s Wear',
      subPages: [
        { title: 'Wallet & Belts', url: '' },
        { title: 'Western Wear', url: '' },
        { title: 'Innerwear', url: '' }]
    },
    {
      title: 'Women\'s Wear',
      subPages: [
        { title: 'Wallet & Bags', url: '' },
        { title: 'Western Wear', url: '' },
        { title: 'Innerwear', url: '' }]
    },
    {
      title: 'Accessories',
      subPages: [
        { title: 'Perfumes', url: '' },
        { title: 'Jwellery', url: '' }]
    },
    {
      title: 'Track Order',
      url: '/'
    },
    {
      title: 'Account Details',
      url: '/'
    },
    {
      title: 'Settings',
      url: '/'
    },
    {
      title: 'Sign Out',
      url: '/'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private router: Router,
/*     private screenOrientation: ScreenOrientation
 */  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
/*       this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
 */      /* this.storage.get('firstTime')
        .then((val) => {
          if (val) {
            this.router.navigate(['/login']);
          }
        }); */
    });
  }
}
