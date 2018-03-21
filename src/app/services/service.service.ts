import { Injectable } from '@angular/core';

@Injectable()
export class ServiceService {

  constructor() { }
  list:any;
  setdata(num,data){
    localStorage.setItem(num,data);
  }
  getdata(num){
    this.list=localStorage.getItem(num);
    return this.list;
  }
 
}
