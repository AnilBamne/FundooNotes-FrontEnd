import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
public labelname:string='';
  constructor() { }

  private messageSource=new BehaviorSubject([]);    //messageSource is the input we r providing in search bar
  incomingData=this.messageSource.asObservable();

  outgoingData(message:any){                    //updates value of messagesource
    console.log(message)
    this.messageSource.next(message);
  }
}
