import { Component, Input, OnChanges, OnInit, SimpleChanges,AfterViewInit,OnDestroy} from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss']
})
export class Demo2Component implements OnInit,OnChanges,AfterViewInit,OnDestroy {
  @Input() parentData: any;
  @Input() inputData:any;
  text=0
  isTrue:boolean=false
  message='hello world';
  constructor() { }

  ngOnInit(): void {
    console.log("OnChanges called")
  }
  ngOnChanges(changes: SimpleChanges) {
    //this hook executes when the data coming from parent changes
    console.log("OnChanges called")
    console.log(changes)
    this.text+=1;
  }
  ngDoCheck(){
    console.log("do check called")
    // this.clickMe()
  }
  ngAfterViewInit(){
// ngAfterViewInit() is called after all child components are initialized and checked.
// In the example above, ngAfterViewInit() gets called one time after ngDoCheck.
// Triggering the clickMe() function WILL NOT trigger ngAfterViewInit().
    console.log("after view init called")
  }
  ngOnDestroy(){
    //gets called when a component is about to be destroyed
    console.log("Destroy child called")
  }
  ngAfterContentInit(){
    console.log("after content init");
    this.isTrue=!this.isTrue
  }

  clickMe(){
    console.log("link clicked")
    this.isTrue=!this.isTrue
  }

}
