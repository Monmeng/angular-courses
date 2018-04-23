import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DialoguePage}from '../dialogue/dialogue';


@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {
  name;
  constructor(public navCtrl: NavController, private navParams: NavParams,public params: NavParams) {
  };
  dialogue(){
    this.navCtrl.push(DialoguePage,{name:""});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagePage');
  }

}
