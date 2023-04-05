import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { retryWhen } from 'rxjs';
import { NoteService } from 'src/app/Services/note/note.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  isTrashed:any;    //condition for showing icons on trash notes
  isArchived:any;

  noteId:any;
  isTrash:boolean=false
  isArchive:boolean=false;
  @Input() noteCard:any;
  
  // trash/archive emitter
  @Output() appIconEvent=new EventEmitter<string>()
  constructor(private noteService:NoteService) { }

  ngOnInit(): void {
    this.isTrashed=this.noteCard.isTrash
    this.isArchived=this.noteCard.isArchive
  }
  //when clicked on archive btn that note should be archieved
  archiveNote(){
    this.isArchive=false;
  let reqData={
    noteId:this.noteCard.noteId
  }
  this.noteService.archiveNote(reqData).subscribe((response:any)=>{
    console.log(response);
    this.appIconEvent.emit(response)
  })
  }

  unArchiveNote(){
    this.isArchive=true;
    let reqData={
      noteId:this.noteCard.noteId
    }
    this.noteService.archiveNote(reqData).subscribe((response:any)=>{
      console.log(response);
      this.appIconEvent.emit(response)
    })
  }

  //when clicked on delete btn that note should be trashed
  trashNote(){
    this.isTrash=false
    let reqData={
      noteId:this.noteCard.noteId
    }
    this.noteService.trash(reqData).subscribe((response:any)=>{
      console.log(response.message)
      this.appIconEvent.emit(response)
    })
  }
  unTrash(){
    this.isTrash=true
    let reqData={
      noteId:this.noteCard.noteId
    }
    this.noteService.trash(reqData).subscribe((response:any)=>{
      console.log(response.message)
      this.appIconEvent.emit(response)
    })
  }
  deleteNote(){
    console.log("deleting note");
    let reqData={
      noteId:this.noteCard.noteId
    }
    this.noteService.deleteNote(reqData).subscribe((response:any)=>{
      console.log(response.message)
      this.appIconEvent.emit(response)
    })
  }

  //array of colors
  Colors:Array<any>=[
    // {code:'#ffffff',name:'none'},
    // {code:'#f28b82',name:'red'},   //doubt
    // {code:'#fbbc04',name:'orange'},
    // {code:'#fff475',name:'yellow'},
    // {code:'#ccff90',name:'green'},
    // {code:'#a7ffeb',name:'teal'},
    // {code:'#cbf0f8',name:'blue'},
    // {code:'#d7aefb',name:'purple'},
    // {code:'#fdcfe8',name:'pink'},
    // {code:'#e6c9a8',name:'brown'},
    // {code:'#e8eaed',name:'gray'}
    { code: '#ffffff', name: 'white' },
    { code: '#FF6347', name: 'tomato' },
    { code: '#FFFF00', name: 'yellow' },
    { code: '#7FFFD4', name: 'aquamarine' },
    { code: '#D3D3D3', name: 'grey' },
    { code: '#BC8F8F', name: 'rosybrown' },
    { code: '#FFE4C4', name: 'bisque' }
  ]

  setColor(color:any){
    console.log("applying color")
    let reqData={
      color:color.name,
      noteId:this.noteCard.noteId
    }
    this.noteService.setColor(reqData).subscribe((response:any)=>{
      console.log(response)
      this.appIconEvent.emit(response)
    })
  }
}
