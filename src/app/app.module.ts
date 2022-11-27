import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { ToastrModule } from 'ngx-toastr';
import {FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FileUploadModule } from 'ng2-file-upload';
import{NgxDatatableModule} from '@swimlane/ngx-datatable'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './main/navbar/navbar.component';
import { FooterComponent } from './main/footer/footer.component';
import { HomeComponent } from './main/home/home.component';
import { Home2Component } from './main/home2/home2.component';
import { AboutusComponent } from './main/aboutus/aboutus.component';
import { ContactusComponent } from './main/contactus/contactus.component';
import { InitialComponent } from './main/initial/initial.component';
import { LoginComponent } from './auth/login/login.component';
import { ScrollComponent } from './main/scroll/scroll.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserhomeComponent } from './user/userhome/userhome.component';
import { RegisterComponent } from './auth/register/register.component';
import { UsernavComponent } from './user/usernav/usernav.component';
import { AdminnavComponent } from './admin/adminnav/adminnav.component';
import { AddrecipeComponent } from './admin/addrecipe/addrecipe.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    Home2Component,
    AboutusComponent,
    ContactusComponent,
    InitialComponent,
    LoginComponent,
    ScrollComponent,
    UserhomeComponent,
    RegisterComponent,
    UsernavComponent,
    AdminnavComponent,
    AddrecipeComponent,
    AdminhomeComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxScrollTopModule,
    ToastrModule.forRoot({ timeOut: 7000, positionClass: 'toast-top-right',}),
    FormsModule ,
    ReactiveFormsModule ,
    HttpClientModule,
    FileUploadModule,
    NgxDatatableModule
  

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
