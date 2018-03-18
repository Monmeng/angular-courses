import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  idx:number;
  getI(ww){
    this.idx=ww;
  }
  arrData = [];
  comlist = [];
  content = '';
  addData(){
    this.arrData.push(this.content);
    this.content = '';
  }
}
