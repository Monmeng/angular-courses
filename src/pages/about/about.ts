import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FabumessagePage}from '../fabumessage/fabumessage';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  };
  fabu(){
    this.navCtrl.push(FabumessagePage);
  }

}
