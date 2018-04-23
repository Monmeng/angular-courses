import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MessagePage } from '../message/message';
@IonicPage()
@Component({
  selector: 'page-dialogue',
  templateUrl: 'dialogue.html',
})
export class DialoguePage {
  item;
  constructor(public navCtrl: NavController, private navParams: NavParams,public params: NavParams) {
    var name=navParams.get('name');
    this.item=name;
  };
  ionViewDidLoad() {
    console.log('ionViewDidLoad DialoguePage');
  }

}
