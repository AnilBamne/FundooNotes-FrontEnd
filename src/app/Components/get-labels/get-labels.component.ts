import { Component, Input, OnInit, Output } from '@angular/core';
import { LabelService } from 'src/app/Services/label/label.service';

@Component({
  selector: 'app-get-labels',
  templateUrl: './get-labels.component.html',
  styleUrls: ['./get-labels.component.scss']
})
export class GetLabelsComponent implements OnInit {
  labelArray:any;
  @Input() noteCard:any;
  labelList:any

  constructor(private labelService:LabelService) { }

  ngOnInit(): void {
    console.log("getting labels")
    this.getLabel();
    
  }
  getLabel(){
    this.labelService.get().subscribe((response:any)=>{
      console.log("storing labels in array")
      this.labelArray=response.data;
      console.log(this.labelArray);
      this.labelList=this.labelArray
    })
    // this.labelname="";
  }
  recieveLabelsEvent(event:any){
    this.getLabel();
    
  }
}
