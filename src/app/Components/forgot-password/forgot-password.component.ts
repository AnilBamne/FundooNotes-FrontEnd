import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotpasswordform!:FormGroup
  constructor(private formbuilder:FormBuilder,private userService:UserService) { }

  ngOnInit(): void {
    this.forgotpasswordform=this.formbuilder.group({
      email:['',[Validators.required,Validators.email]]
    })
  }
  OnSubmit(){
    let data={
      email:this.forgotpasswordform.value.email
    }
    this.userService.Forgot(data).subscribe((response:any)=>{
      console.log(response.message)
    })
  }

}
