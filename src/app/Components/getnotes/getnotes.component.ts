import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/note/note.service';

@Component({
  selector: 'app-getnotes',
  templateUrl: './getnotes.component.html',
  styleUrls: ['./getnotes.component.scss']
})
export class GetnotesComponent implements OnInit {
notesArray:any;
  constructor(private noteService:NoteService) { }

  ngOnInit(): void {
    console.log("getting notes")
    this.onNoteSubmit();
  }
  onNoteSubmit(){
    this.noteService.getNote().subscribe((response:any)=>{
      console.log(response);
      this.notesArray=response.data;
      console.log(this.notesArray);
      this.notesArray.reverse();
    });
  }

  // event emitter method
  recieverRefreshEvent($event:any){
    this.onNoteSubmit();
  }
}
