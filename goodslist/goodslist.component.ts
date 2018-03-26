import { Component, OnInit, Input,Optional } from '@angular/core';
import { Router } from '@angular/router'; 
import { Http,Jsonp,Headers} from "@angular/http";  //引入http协议模块
import { stringify } from 'querystring';

import { Observable } from "rxjs";
import "rxjs/Rx";

@Component({
  selector: 'app-goodslist',
  templateUrl: './goodslist.component.html',
  styleUrls: ['./goodslist.component.css']
})
export class GoodslistComponent implements OnInit {

  constructor(@Optional() public router:Router,public http:Http,public jsonp:Jsonp  ) {    //构造函数中声明

  }
  // @Input() list:Array<any>;
  list:number[]=[1,2,3,4,5];
  headers = new Headers( {'Content-Type':'application/x-www-form-urlencoded'} );

  ngOnInit() {
    // this.http.get('http://datainfo.duapp.com/shopdata/getclass.php').subscribe( data=>{ 
    //   console.log(JSON.parse(data['_body']));
    //   this.list=JSON.parse(data['_body']);
    //  },err=>{
    //    console.log(err);
    //  }); 
   
    // this.http.post('http://datainfo.duapp.com/shopdata/getclass.php',JSON.stringify, {headers:this.headers}).map(data=>data.json()).subscribe( data=>{ 
    //   console.log(data);
    //  },err=>{
    //    console.log(err);
    //  }); 

    //jsonp只有get请求 
    this.jsonp.get('http://datainfo.duapp.com/shopdata/getGoods.php?callback=JSONP_CALLBACK').subscribe(data=>{
      console.log(data['_body']);
      this.list=data['_body'];
    },err=>{
      console.log(err);
    });

  }
  goDetail(idx){
    this.router.navigate(['/gooddetail/',idx]);
  }
 

}
