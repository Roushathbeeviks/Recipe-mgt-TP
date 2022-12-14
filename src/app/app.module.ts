import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { ToastrModule } from 'ngx-toastr';
import {FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { FileUploadModule } from 'ng2-file-upload';
import{NgxDatatableModule} from '@swimlane/ngx-datatable';
// import { MatBasicComponent } from './mat-basic/mat-basic.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
// import { SimpleModalModule } from 'ngx-simple-modal';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './main/navbar/navbar.component';
import { FooterComponent } from './main/footer/footer.component';
import { HomeComponent } from './main/home/home.component';
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
import { AdmineditComponent } from './admin/adminedit/adminedit.component';
import { RecipesComponent } from './main/recipes/recipes.component';
import { LogrecipesComponent } from './loggeduser/logrecipes/logrecipes.component';
import { LogcommentComponent } from './loggeduser/logcomment/logcomment.component';
import { LogdownloadComponent } from './loggeduser/logdownload/logdownload.component';
import { LoggednavComponent } from './loggeduser/loggednav/loggednav.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
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
    AdmineditComponent,
    RecipesComponent,
    LogrecipesComponent,
    LogcommentComponent,
    LogdownloadComponent,
    LoggednavComponent


    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxScrollTopModule,
    ToastrModule.forRoot({ timeOut: 1000, positionClass: 'toast-top-right',}),
    FormsModule ,
    ReactiveFormsModule ,
    HttpClientModule,
    FileUploadModule,
    NgxDatatableModule,
    MatDialogModule,
    MatButtonModule,
    // SimpleModalModule,
   
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
