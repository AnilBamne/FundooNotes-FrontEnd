import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';
import { DataService } from 'src/app/Services/Data/data.service';
import { UpdatelabelComponent } from '../updatelabel/updatelabel.component';
import { LabelService } from 'src/app/Services/label/label.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  filterNote:string='';
  labelList:any
  constructor(private popup:MatSnackBar,private route:Router,private data:DataService,private dialog:MatDialog,private labelService:LabelService) { }

  ngOnInit(): void {
  }
  logOut(){
    console.log("logged out")
    localStorage.removeItem('token');
    this.route.navigateByUrl("/login")
    this.popup.open('LogOut Successfull !!!','',{
      duration:2000,
      verticalPosition:'bottom'
    })
  }

  //searching note
  search(event:any){
    console.log(event.target.value);
    this.data.outgoingData(event.target.value);
  }
  
  editlabel(){
    let dialogbox=this.dialog.open(UpdatelabelComponent,{
      width:'40%',
      height:'auto',
    })
    dialogbox.afterClosed().subscribe((result:any)=>{
      console.log("After label update",result);
    })
  }

  
}
