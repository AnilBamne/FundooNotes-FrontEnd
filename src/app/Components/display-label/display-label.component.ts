import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/Services/Data/data.service';
import { LabelService } from 'src/app/Services/label/label.service';

@Component({
  selector: 'app-display-label',
  templateUrl: './display-label.component.html',
  styleUrls: ['./display-label.component.scss']
})
export class DisplayLabelComponent implements OnInit {
  labelArray:any;
  @Input() labelList:any

  constructor(private labelService:LabelService,private dataService:DataService) { }

  ngOnInit(): void {
   
  }
  //sharing label name via data service to fetch its notes
  shareLabelName(labelName:any){
    this.dataService.labelname=labelName;
    console.log("sharing label name via data service:"+labelName);
  }
}
