import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
base=environment.baseurl
  constructor(private httpService:HttpService) { }
  Login(data:any){
    let header={
      headers:new HttpHeaders({
        'content-type':'application/json'
      })
    }
    return this.httpService.postService(this.base+`User/Login`,data,false,header)
  }
  Register(data:any){
    let header={
      headers:new HttpHeaders({
        'content-type':'application/json'
      })
    }
    return this.httpService.postService(this.base+`User/Register`,data,false,header)
  }
  Forgot(data:any){
    let header={
      headers:new HttpHeaders({
        'content-type':'application/json'
      })
    }
    return this.httpService.postService(this.base+`User/ForgetPassword?email=`+data.email,{},false,header)
  }
  Reset(data:any,token:any){
    console.log("Reset token",token)
    let header={
      headers:new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+token
      })
    }
    return this.httpService.putService(this.base+`User/ResetPassword`,data,true,header)
  }
}
