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
  comlist=[];
  change(i){
    this.comlist.push(this.arrD[i])
    this.arrD.splice(i,1);
  }
  change2(i){ 
    this.arrD.push(this.comlist[i])
    this.comlist.splice(i,1);
  }
  delData(i){
    this.arrD.splice(i,1);
  }
  delData2(i){
    this.comlist.splice(i,1);
  }
  fn(i){
    //将下标抛出去
    this.getIndex.emit(i);
  }

}

  