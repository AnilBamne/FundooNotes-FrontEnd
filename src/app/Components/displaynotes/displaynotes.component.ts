import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
message:any
  constructor(private dialog:MatDialog) { 
    
  }

  ngOnInit(): void {
    // this.filter.transform(this.noteList,this.filterNote)
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
  }
}
