import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  condition:boolean=false
  constructor() { }

  ngOnInit(): void {
  }
  show(){
    this.condition=false
  }
  hide(){
    this.condition=true
  }
}
