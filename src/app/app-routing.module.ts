import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './main/navbar/navbar.component';
import {HomeComponent} from './main/home/home.component'
import {Home2Component} from './main/home2/home2.component'
import { InitialComponent } from './main/initial/initial.component';
import {LoginComponent} from './auth/login/login.component';
import {UserhomeComponent} from './user/userhome/userhome.component'
import {RegisterComponent} from './auth/register/register.component';
import {AdminhomeComponent} from './admin/adminhome/adminhome.component'
import { AddrecipeComponent } from './admin/addrecipe/addrecipe.component';


const routes: Routes = [
  { path: '', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'userhome', component:UserhomeComponent},
  {path:'register', component:RegisterComponent},
  {path:'adminhome', component:AdminhomeComponent},
  {path:'addrecipe', component:AddrecipeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
