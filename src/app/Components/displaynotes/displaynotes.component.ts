import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {
@Input() noteList:any;
@Output() displayNoteEvent=new EventEmitter<any>();
  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  editNote(note:any){
    let dialogbox=this.dialog.open(UpdatenoteComponent,{
      width:'40%',
      height:'auto',
      data:note
    })
    dialogbox.afterClosed().subscribe(result=>{
      console.log("After update",result);
      this.displayNoteEvent.emit(result);
    })
  }
}
