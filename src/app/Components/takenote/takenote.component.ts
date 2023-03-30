import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from 'src/app/Services/note/note.service';

@Component({
  selector: 'app-takenote',
  templateUrl: './takenote.component.html',
  styleUrls: ['./takenote.component.scss']
})
export class TakenoteComponent implements OnInit {
  panelOpenState = false;
  noteForm!:FormGroup;
  submitted=false;
  token:any;
  condition:boolean=true;
  // calling event emitter to show  notes on dashboard
  @Output() takeNotesEvent=new EventEmitter<string>();
 
  constructor(private formBuilder:FormBuilder,private noteService:NoteService,private activeRouts:ActivatedRoute) { }

  ngOnInit(): void {
    console.log("welcome to note")
    this.noteForm=this.formBuilder.group({
      title:['',Validators.required],
      description:['',Validators.required]
    })
  }
  show(){
    this.condition=false;
  }
  hide(){
    this.condition=true
  }
  onNoteSubmit(){
    console.log("submitted data")
    this.submitted=true;
    if(this.noteForm.valid){
      let reqData={
        title:this.noteForm.value.title,
        description:this.noteForm.value.description
      }
      console.log(reqData);
      this.noteService.addNote(reqData).subscribe((response:any)=>{
        console.log(response)
        this.takeNotesEvent.emit(response);   //emitting here 
      });
    }
  }

}
