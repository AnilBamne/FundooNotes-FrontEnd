import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import {MatIconModule} from '@angular/material/icon';
import{MatSidenavModule} from'@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { TakenoteComponent } from './Components/takenote/takenote.component';
import { IconsComponent } from './Components/icons/icons.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { DemoComponent } from './Components/demo/demo.component';
import { GetnotesComponent } from './Components/getnotes/getnotes.component';
import { DisplaynotesComponent } from './Components/displaynotes/displaynotes.component';
import { UpdatenoteComponent } from './Components/updatenote/updatenote.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import { ArchivenoteComponent } from './Components/archivenote/archivenote.component';
import { TrashnoteComponent } from './Components/trashnote/trashnote.component';
import { FilterPipe } from './Pipes/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    DashboardComponent,
    TakenoteComponent,
    IconsComponent,
    DemoComponent,
    GetnotesComponent,
    DisplaynotesComponent,
    UpdatenoteComponent,
    ArchivenoteComponent,
    TrashnoteComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatToolbarModule,
    FormsModule, ReactiveFormsModule ,
    HttpClientModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatDialogModule,
    MatMenuModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
