import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginPage}from '../login/login';
import {FabuPage}from '../fabu/fabu';
import {HezuoPage}from '../hezuo/hezuo';
import {SetPage}from '../set/set';

@IonicPage()
@Component({
  selector: 'page-mine',
  templateUrl: 'mine.html',
})
export class MinePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  login(){
    this.navCtrl.push(LoginPage);
  }
  changeOne(){
    this.navCtrl.push(FabuPage);
  }
  changeTwo(){
    this.navCtrl.push(HezuoPage);
  }
  changeThree(){
    this.navCtrl.push(SetPage);
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad MinePage');
  }

}
