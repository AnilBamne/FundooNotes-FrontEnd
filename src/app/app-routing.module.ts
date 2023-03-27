import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { IconsComponent } from './Components/icons/icons.component';
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
  {path:'dashboard',component:DashboardComponent},
  {path:'icons',component:IconsComponent},
  {path:'takenote',component:TakenoteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
