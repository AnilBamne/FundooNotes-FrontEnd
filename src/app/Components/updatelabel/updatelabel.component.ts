import { Component, OnInit } from '@angular/core';
import { LabelService } from 'src/app/Services/label/label.service';

@Component({
  selector: 'app-updatelabel',
  templateUrl: './updatelabel.component.html',
  styleUrls: ['./updatelabel.component.scss']
})
export class UpdatelabelComponent implements OnInit {
  labelArray:any
  labelList:any
  constructor(private labelService:LabelService) { }

  ngOnInit(): void {
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
}
