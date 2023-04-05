import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
base=environment.baseurl;
token:any;
  constructor(private httpService:HttpService)
  {
    this.token=localStorage.getItem('token') 
  }
  addNote(reqData:any)
  {
    let header={
      headers:new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.postService(this.base+`Note/AddNotes`,reqData,true,header);
  }
  getNote(){
    let header={
      headers:new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.getService(this.base+`Note/GetAllNotes`,true,header);
  }
  updateNote(reqData:any,noteId:any){
    let header={
      headers:new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.putService(this.base+`Note/UpdateNote?noteId=`+noteId,reqData,true,header);
  }
  deleteNote(reqData:any){
    let header={
      headers:new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
      }
      return this.httpService.deletService(this.base+`Note/DeleteNote?noteId=`+reqData.noteId,true,header)
    }
    archiveNote(reqData:any){
      let header={
        headers:new HttpHeaders({
          'content-type':'application/json',
        'Authorization':'Bearer '+this.token
        })
      }
      return this.httpService.putService(this.base+`Note/ArchiveOrUnarchive?noteId=`+reqData.noteId,{},true,header)
    }

    trash(reqData:any){
      let header={
        headers:new HttpHeaders({
          'content-type':'application/json',
        'Authorization':'Bearer '+this.token
        })
      }
      return this.httpService.putService(this.base+`Note/TrashOrUntrash?noteId=`+reqData.noteId,{},true,header)
    }
    setColor(reqData:any){
      let header={
        headers:new HttpHeaders({
          'content-type':'application/json',
        'Authorization':'Bearer '+this.token
        })
      }
      return this.httpService.putService(this.base+`Note/SetNoteColor?noteId=`+reqData.noteId+"&color="+reqData.color,{},true,header)
    }
}
