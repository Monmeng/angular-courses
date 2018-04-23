import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginPage} from '../login/login';

@IonicPage()
@Component({
  selector: 'page-forgetpwd',
  templateUrl: 'forgetpwd.html',
})
export class ForgetpwdPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  back(){
    this.navCtrl.push(LoginPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgetpwdPage');
  }

}
