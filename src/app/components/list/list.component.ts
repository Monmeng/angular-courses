import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }
  @Input()  arrD:Array<any>;

  @Output() getIndex=new EventEmitter();

  ngOnInit() {
  }
  num1=0;
  num2=0;
  comlist=[];
  change(i){
    this.comlist.push(this.arrD[i])
    this.arrD.splice(i,1);
    this.num1=this.arrD.length;
    this.num2=this.comlist.length;
    
  }
  change2(i){ 
    this.arrD.push(this.comlist[i])
    this.comlist.splice(i,1);
    this.num1=this.arrD.length;
    this.num2=this.comlist.length;
  }
  delData(i){
    this.arrD.splice(i,1);
    this.num1=this.arrD.length;
  }
  delData2(i){
    this.comlist.splice(i,1);
    this.num2= this.comlist.length; 
  }
  fn(i){
    //将下标抛出去
    this.getIndex.emit(i);
  }

}

  