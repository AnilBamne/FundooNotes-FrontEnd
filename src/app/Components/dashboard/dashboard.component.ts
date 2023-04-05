import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  filterNote:string='';
  
  constructor(private popup:MatSnackBar,private route:Router) { }

  ngOnInit(): void {
  }
  logOut(){
    console.log("logged out")
    localStorage.removeItem('token');
    this.route.navigateByUrl("/login")
    this.popup.open('LogOut Successfull !!!','',{
      duration:2000,
      verticalPosition:'bottom'
    })
  }
}
