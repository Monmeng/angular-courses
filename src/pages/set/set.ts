import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginPage} from '../login/login';
import { ModalController, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-set',
  templateUrl: 'set.html',
})
export class SetPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
  }
  login(){
    this.navCtrl.push(LoginPage);
  }
  presentProfileModal() {
    let profileModal = this.modalCtrl.create(Profile, { userId: 8675309 });
    profileModal.onDidDismiss(data => {
      console.log(data);
    });
    profileModal.present();
  }
 
  
   
  ionViewDidLoad() {
    console.log('ionViewDidLoad SetPage');
  }

}
class Profile {

  constructor(public viewCtrl: ViewController) {
 
  }
 
  dismiss() {
    let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss(data);
  }
}