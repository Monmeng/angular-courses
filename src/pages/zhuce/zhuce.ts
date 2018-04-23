import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {XieyiPage}from '../xieyi/xieyi';
import {LoginPage} from '../login/login';
@IonicPage()
@Component({
  selector: 'page-zhuce',
  templateUrl: 'zhuce.html',
})
export class ZhucePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  changeXieyi(){
    this.navCtrl.push(XieyiPage);
  }
  back(){
    this.navCtrl.push(LoginPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ZhucePage');
  }

}
