import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/Data/data.service';
import { LabelService } from 'src/app/Services/label/label.service';

@Component({
  selector: 'app-labeled-notes',
  templateUrl: './labeled-notes.component.html',
  styleUrls: ['./labeled-notes.component.scss']
})
export class LabeledNotesComponent implements OnInit {
  notes:any;
  @Input() noteListOfLabel:any
  constructor(private labelService:LabelService,private dataService:DataService) { }

  ngOnInit(): void {
    this.getNoteOfThisLabel(this.dataService.labelname);
  }
  
  getNoteOfThisLabel(labelName:any){
    this.labelService.getNoteByLabelName(labelName).subscribe((response:any)=>{
      console.log(response);
      console.log("reciving notes of label :"+labelName);
      this.notes=response.data;
      
    })
  }
  
  
}
