import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Http} from "@angular/http";
import { Headers } from "@angular/http";
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,private alertCtrl: AlertController) {
  }
  headers = new Headers( {'Content-Type':'application/x-www-form-urlencoded'} );
  user:string;
  password:string;
  presentAlert1() {
    let alert = this.alertCtrl.create({
      title: '出现错误',
      subTitle: '用户名不存在，请重新输入',
      buttons: ['Dismiss']
    });
    alert.present();
  }
  presentAlert2() {
    let alert = this.alertCtrl.create({
      title: '出现错误',
      subTitle: '用户名密码不符，请重新输入',
      buttons: ['Dismiss']
    });
    alert.present();
  }
  check() {
    this.http.post('http://datainfo.duapp.com/shopdata/userinfo.php',{states:"login",userID:this.user,password:this.password}, {headers:this.headers} ).subscribe( data=>{ 
    console.log(data['_body']);
    switch(data['_body']){
        case 0:
          this.presentAlert1();
          break;       
        case 2:
           this.presentAlert2();
            break;
        default:
            this.navCtrl.push(HomePage);                     
            break;  
      }
     },err=>{
       console.log(err);
     }); 
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
