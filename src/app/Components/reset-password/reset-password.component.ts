import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/user/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetpasswordform!:FormGroup;
  submitted=false;
  showPass=true;
  token:any;
  constructor(private formbuilder:FormBuilder,private userService:UserService,private activerout:ActivatedRoute) { }

  ngOnInit(): void {
    this.resetpasswordform=this.formbuilder.group({
      password:['',Validators.required],
      confirmpassword:['',Validators.required]
    })
    this.token=this.activerout.snapshot.paramMap.get('token')
    console.log(this.token);
  }
  showPassword(){
    this.showPass=!this.showPass;
  }
  onSubmit(){
    this.submitted=true
    if(this.resetpasswordform.valid){
      console.log("Reset",this.resetpasswordform.value)
    }
    let data={
      password:this.resetpasswordform.value.password,
      confirmpassword:this.resetpasswordform.value.confirmpassword
    }
    this.userService.Reset(data,this.token).subscribe((response:any)=>{
      console.log("Passwors changed successfully");
      console.log(response);
    })
    }
  }

