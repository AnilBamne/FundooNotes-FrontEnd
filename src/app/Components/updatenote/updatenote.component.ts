import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteService } from 'src/app/Services/note/note.service';

@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.scss']
})
export class UpdatenoteComponent implements OnInit {
title:any;
description:any
id:any;
  constructor(
    private dialogbox:MatDialogRef<UpdatenoteComponent>,
    private noteService:NoteService,
    @Inject(MAT_DIALOG_DATA) public data:any ) 
    {
      this.title=data.title,
      this.description=data.description,
      this.id=data.noteId
     }

  ngOnInit(): void {
  }
  closeDialog(){
    let data={
      title:this.title,
      description:this.description
    }
    this.noteService.updateNote(data,this.id).subscribe((respons:any)=>
    {
      console.log("*** Note-Updated ***")
      console.log(respons)
    });
    this.dialogbox.close();
  }

}
