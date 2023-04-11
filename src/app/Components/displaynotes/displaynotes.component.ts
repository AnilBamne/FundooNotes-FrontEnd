import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/Services/Data/data.service';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {
  filterNote:any
@Input() noteList:any;
@Output() displayNoteEvent=new EventEmitter<any>();
@Output() displsyLabelEvent=new EventEmitter<string>();
message:any
  constructor(private dialog:MatDialog,private data:DataService) { 
    
  }

  ngOnInit(): void {
    this.data.incomingData.subscribe(response=>{
      console.log("searching note ...",response)
      this.filterNote=response;
    })
  }


  editNote(note:any){
    let dialogbox=this.dialog.open(UpdatenoteComponent,{
      width:'40%',
      height:'auto',
      data:note
    })
    dialogbox.afterClosed().subscribe(result=>{
      console.log("After update",result);
      this.displayNoteEvent.emit(this.message);
    })
  }

  //iconEvent event emitter method
  recieveEmitter($event:any){
    console.log("Icons to display");
    this.message=$event
   this.displayNoteEvent.emit($event)
   this.displsyLabelEvent.emit($event)
  }
}
