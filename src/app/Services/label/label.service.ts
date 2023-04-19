import {  HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class LabelService {
base=environment.baseurl
token:any
  constructor(private httpService:HttpService) 
  {
    this.token=localStorage.getItem('token');
  }

  addLabel(labelName:any,noteId:any){
    let header={
      headers:new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.postService(this.base+`Label/AddLabel?labelName=`+labelName+`&noteId=`+noteId,{},true,header);
  }
  get(){
    let header={
      headers:new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.getService(this.base+`Label/GetAllLabel`,true,header);
  }
  addExistingLabel(labelId:any,noteId:any){
    let header={
      headers:new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.postService(this.base+`Label/AddExistingLabel?labelId=`+labelId+`&noteId=`+noteId,{},true,header)
  }
  getNoteByLabelName(labelName:any){
    let header={
      headers:new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.getService(this.base+`Label/GetNoteByLabel?labelName=`+labelName,true,header);
  }
  updateLabel(data:any){
    let header={
      headers:new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.putService(this.base+`Label/UpdateLabel?labelId=`+data.labelId+`&newLabelName=`+data.labelName,{},true,header)
  }
  deleteLabel(data:any){
    let header={
      headers:new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.deletService(this.base+`Label/DeleteLabel?labelId=`+data.labelId,true,header)
  }
}
