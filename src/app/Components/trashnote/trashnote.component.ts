import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NoteService } from 'src/app/Services/note/note.service';

@Component({
  selector: 'app-trashnote',
  templateUrl: './trashnote.component.html',
  styleUrls: ['./trashnote.component.scss']
})
export class TrashnoteComponent implements OnInit {
  notesArray:any;
  isTrashed=true;

  constructor(private noteService:NoteService) { }

  ngOnInit(): void {
    this.onNoteSubmit();
  }

  onNoteSubmit(){
    this.noteService.getNote().subscribe((response:any)=>{
      console.log(response);
      this.notesArray=response.data;
      console.log("Storing notes in Array")
      console.log(this.notesArray);
      this.notesArray.reverse();
      //filtering the only unarchived and untrashed notes
      console.log("getting only trashed notes");
      this.notesArray=this.notesArray.filter((object:any)=>{
        return object.isTrash===true;
      })
    });
  }


  recieveRefreshEvent($event:any){
   this.onNoteSubmit();
  }
}
