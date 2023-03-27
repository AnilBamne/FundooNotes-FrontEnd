import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
  
})
export class LoginComponent implements OnInit {
loginform!:FormGroup;
showPass= true ;
  constructor(private formbuilder:FormBuilder,private userService:UserService) { }

  ngOnInit(): void {
    this.loginform=this.formbuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',(Validators.required)]
    })
  }

  showPassword(){
    this.showPass=!this.showPass;
  }
  
  OnSubmit(){
    console.log(this.loginform)
    let data={
      email:this.loginform.value.email,
      password:this.loginform.value.password
    }
    this.userService.Login(data).subscribe((response:any)=>{
      console.log(response.message)
      localStorage.setItem('token',response.data) //storing token in local storage
    })
  }

}
