import { Component, Inject, OnInit } from '@angular/core';
import {  MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LabelService } from 'src/app/Services/label/label.service';

@Component({
  selector: 'app-updatelabel',
  templateUrl: './updatelabel.component.html',
  styleUrls: ['./updatelabel.component.scss']
})
export class UpdatelabelComponent implements OnInit {
  labelArray:any
  labelList:any
  labelname:any
  
  constructor(private labelService:LabelService,private dialog:MatDialogRef<UpdatelabelComponent>,private popup:MatSnackBar){}
    

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

  editLabel(label:any){
    let data={
      labelId:label.labelId,
      labelName:label.labelName
    }
    this.labelService.updateLabel(data).subscribe((response:any)=>{
      console.log(response.message);
      this.popup.open('Label Updated Successfully !!!','',{
        duration:2000,
        verticalPosition:'bottom'
      })
    })
  }
  closeDialog(){
    // this.getLabel();
    this.dialog.close();
  }

  deletLabel(label:any){
    this.labelService.deleteLabel(label).subscribe((response:any)=>{
      console.log(response.message);
      this.popup.open('Label deleted Successfully !!!','',{
        duration:2000,
        verticalPosition:'bottom'
      })
    })
  }
}
