import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './AuthorizationGuard/authguard.guard';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { DemoComponent } from './Components/demo/demo.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { GetnotesComponent } from './Components/getnotes/getnotes.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { TakenoteComponent } from './Components/takenote/takenote.component';



const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'forgotpassword',component:ForgotPasswordComponent},
  {path:'resetPassword/:token',component:ResetPasswordComponent},
  {path:'home',component:DashboardComponent,
  canActivate:[AuthguardGuard],
  // children:[
  //   {path:'',redirectTo:'home/note',pathMatch:'full'},
  //   {path:'note',component:TakenoteComponent}
  // ]}
  
  children:[
    {path:'',redirectTo:'home/note',pathMatch:'full'},
    {path:'note',component:GetnotesComponent}
  ]},


  {path:'demo',component:DemoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
