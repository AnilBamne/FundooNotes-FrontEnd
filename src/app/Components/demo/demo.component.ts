import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  @Input() noteList:any;
  constructor() { }

  ngOnInit(): void {
  }
  @Output() createEvent=new EventEmitter<string>();
  
}
