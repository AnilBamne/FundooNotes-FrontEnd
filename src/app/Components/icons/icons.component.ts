import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { retryWhen } from 'rxjs';
import { LabelService } from 'src/app/Services/label/label.service';
import { NoteService } from 'src/app/Services/note/note.service';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  @Output() displsyLabelEvent=new EventEmitter<string>();

  //for label
  labelname:any;
  labelArray:any;
  labelList:any;
  constructor(private noteService:NoteService,private dialog:MatDialog,private labelService:LabelService,private popup:MatSnackBar) { }

  ngOnInit(): void {
    this.isTrashed=this.noteCard.isTrash
    this.isArchived=this.noteCard.isArchive
    this.GetLabels();
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
    //snackbar for displaying popup msg
    this.popup.open('Note Archived Successfully !!!','',{
      duration:2000,
      verticalPosition:'bottom'
    })
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
      //snackbar for displaying popup msg
    this.popup.open('Note UnArchived Successfully !!!','',{
      duration:2000,
      verticalPosition:'bottom'
    })
    })
  }

  //when clicked on delete btn that note should be trashed
  moveToTrash(){
    this.isTrash=false
    let reqData={
      noteId:this.noteCard.noteId
    }
    this.noteService.trash(reqData).subscribe((response:any)=>{
      console.log(response.message)
      this.appIconEvent.emit(response)
      //snackbar for displaying popup msg
    this.popup.open('Note Trashed Successfully !!!','',{
      duration:2000,
      verticalPosition:'bottom'
    })
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
      //snackbar for displaying popup msg
    this.popup.open('Note Restored Successfully !!!','',{
      duration:2000,
      verticalPosition:'bottom'
    })
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
      //snackbar for displaying popup msg
    this.popup.open('Note Deleted Successfully !!!','',{
      duration:2000,
      verticalPosition:'bottom'
    })
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

  addLabel(labelname:any){
    this.labelService.addLabel(labelname,this.noteCard.noteId).subscribe((response:any)=>{
      console.log("label added"+response);
      this.displsyLabelEvent.emit(response)
    })
    this.labelname="";
  }

  GetLabels()
  {
    this.labelService.get().subscribe((response:any)=>{
      console.log("storing labels in array")
      this.labelArray=response.data;
      console.log(this.labelArray);
      this.labelList=this.labelArray
   })
 }
 addExistingLabel(label:any){
  this.labelService.addExistingLabel(label.labelId,this.noteCard.noteId).subscribe((response:any)=>{
    console.log("existing label added"+response);
    this.displsyLabelEvent.emit(response)
  })
  this.labelname="";
 }


}
