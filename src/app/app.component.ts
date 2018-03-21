import { Component } from '@angular/core';
import { ServiceService } from './services/service.service'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  arr=new ServiceService();
  idx:number;
  i:number=0;
  getI(ww){
    this.idx=ww;
  }
  arrData = [];
  comlist = [];
  content = '';
  addData(){
    this.i++;
    this.arrData.push(this.content);
    this.arr.setdata(this.i,this.content);
    this.content = '';
    
  }
}
