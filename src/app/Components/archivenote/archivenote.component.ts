import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/note/note.service';

@Component({
  selector: 'app-archivenote',
  templateUrl: './archivenote.component.html',
  styleUrls: ['./archivenote.component.scss']
})
export class ArchivenoteComponent implements OnInit {
  notesArray:any;
  constructor(private noteService:NoteService) { }

  ngOnInit(): void {
    this.onNoteSubmit()
  }

  onNoteSubmit(){
    this.noteService.getNote().subscribe((response:any)=>{
      console.log(response);
      this.notesArray=response.data;
      console.log("Storing notes in Array")
      console.log(this.notesArray);
      this.notesArray.reverse();
      //filtering the only unarchived and untrashed notes
      console.log("retriving only archived notes")
      this.notesArray=this.notesArray.filter((object:any)=>{
        return object.isArchive===true&&object.isTrash===false
      })
    });
  }
  recieveArchivedNotes($event:any){
    
    this.onNoteSubmit();
  }
}
