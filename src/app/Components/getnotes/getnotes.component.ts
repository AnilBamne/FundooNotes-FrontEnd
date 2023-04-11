import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NoteService } from 'src/app/Services/note/note.service';

@Component({
  selector: 'app-getnotes',
  templateUrl: './getnotes.component.html',
  styleUrls: ['./getnotes.component.scss']
})
export class GetnotesComponent implements OnInit {
notesArray:any;
// @Output() displayNoteEvent=new EventEmitter<string>();

  constructor(private noteService:NoteService) { }

  ngOnInit(): void {
    console.log("getting notes")
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
      this.notesArray=this.notesArray.filter((object:any)=>{
        return object.isTrash===false && object.isArchive===false
      })
    });
  }

  // event emitter method
  recieverRefreshEvent($event:any){
    this.onNoteSubmit();
  }
}
