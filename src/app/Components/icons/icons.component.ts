import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/note/note.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  id:any;
  note:any;

  constructor(private noteService:NoteService) { }

  ngOnInit(): void {
  }
  //when clicked on archive btn that note should be archieved
  // archiveNote(){
  // let data={
    
  // }
  // }
}
