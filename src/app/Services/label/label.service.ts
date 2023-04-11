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
  constructor(private httpSeervice:HttpService) 
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
    return this.httpSeervice.postService(this.base+`Label/AddLabel?labelName=`+labelName+`&noteId=`+noteId,{},true,header);
  }
  get(){
    let header={
      headers:new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpSeervice.getService(this.base+`Label/GetAllLabel`,true,header);
  }
  addExistingLabel(labelId:any,noteId:any){
    let header={
      headers:new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpSeervice.postService(this.base+`Label/AddExistingLabel?labelId=`+labelId+`&noteId=`+noteId,{},true,header)
  }
}
