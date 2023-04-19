import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/Services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
registerform!:FormGroup;
showPass=true;
  constructor(private formbuilder:FormBuilder,private userService:UserService,private popup:MatSnackBar) { }

  ngOnInit(): void {
    this.registerform=this.formbuilder.group({
      firstname:['',(Validators.required)],
      lastname:['',(Validators.required)],
      email:['',(Validators.required)],
      password:['',(Validators.required)],
      confirmpassword:['',(Validators.required)]
    })
  }

  showPassword(){
    this.showPass=!this.showPass;
  }
  OnSubmit(){
    let data={
      firstName:this.registerform.value.firstName,
      lastName:this.registerform.value.lastName,
      email:this.registerform.value.email,
      password:this.registerform.value.password
    }
    this.userService.Register(data).subscribe((res:any)=>{
      console.log(res.message)
      //localStorage.setItem('token',res.data)
      this.popup.open('Registered Successfully !!!','',{
        duration:2000,
        verticalPosition:'bottom'
      })
    })
  }
}
