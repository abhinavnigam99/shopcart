import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  page = 'login';
  allUser = [];

  constructor(private storage: Storage, private route: Router, public toastController: ToastController) {
  }

  ngOnInit() {
  }

  login(form) {
    const user = {
      email: form.value.email,
      password: form.value.password
    };
    this.storage.get('users').then((val) => {
      if (val) {
        if (_.some(val, user)) {
          this.route.navigate(['/dashboard']);
        }
        else {
          this.presentToast();
        }
        form.reset();
      }
    });
  }

  register(form) {
    const user = {
      email: form.value.email,
      password: form.value.password
    };
    this.storage.get('users').then((val) => {
      if (val) {
        this.allUser = val;
        this.allUser.push(user);
        console.log(this.allUser);
        this.storage.set('users', this.allUser);
        form.reset();
        this.page = 'login';
      }
    });
  }

  changePage(title) {
    title === 1 ? this.page = 'login' : this.page = 'register';
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Invalid details.',
      duration: 2000
    });
    toast.present();
  }
}
