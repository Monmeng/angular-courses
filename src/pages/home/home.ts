import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//轮播图
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) { 
    for (let i = 0; i < 5; i++) {
      this.items.push( this.items.length );
    }
  };

  search:string='infor';
  changeval(v){
    this.search=v;
  }

  items = [];
  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 5; i++) {
        this.items.push( this.items.length );
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

}
class MyPage {
  @ViewChild(Slides) slides: Slides;
  goToSlide() {
    this.slides.slideTo(2, 500);
  }

}
