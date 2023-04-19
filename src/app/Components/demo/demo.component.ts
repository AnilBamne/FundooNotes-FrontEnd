import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Demo2Component } from '../demo2/demo2.component';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  data:any;
  array:any=[]
  list:any;
  num = 0
  isTrue:Boolean=false
  showChild:Boolean=true

 
  constructor() { 
    
  }

  ngOnInit(): void {
     // perform any initialization or setup here
     this.list=this.array
     
  }

  change(){
    this.num+=2;
  }
  update(){
    this.showChild=!this.showChild
  }

  ngAfterViewChecked(){
    console.log("after view checked : from parent")
    // if(this.showChild=false){
    //   this.isTrue=true
    // }
    
  }

  onSubmit(data:any){
    this.array.push(data);
  }
}
//ES6 features
//promises and call back
//lifecycle hook (all)