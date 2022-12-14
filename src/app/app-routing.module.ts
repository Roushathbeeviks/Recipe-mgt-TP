import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './main/navbar/navbar.component';
import {HomeComponent} from './main/home/home.component'
import { InitialComponent } from './main/initial/initial.component';
import {LoginComponent} from './auth/login/login.component';
import {UserhomeComponent} from './user/userhome/userhome.component'
import {RegisterComponent} from './auth/register/register.component';
import {AdminhomeComponent} from './admin/adminhome/adminhome.component'
import { AddrecipeComponent } from './admin/addrecipe/addrecipe.component';
import { AdmineditComponent } from './admin/adminedit/adminedit.component';
import { AboutusComponent } from './main/aboutus/aboutus.component';
import { ContactusComponent } from './main/contactus/contactus.component';
import { RecipesComponent } from './main/recipes/recipes.component';
import { LogrecipesComponent } from './loggeduser/logrecipes/logrecipes.component';
import { LogcommentComponent } from './loggeduser/logcomment/logcomment.component';
import { LogdownloadComponent } from './loggeduser/logdownload/logdownload.component';


const routes: Routes = [
  { path: '', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'userhome', component:UserhomeComponent},
  {path:'register', component:RegisterComponent},
  {path:'aboutus', component:AboutusComponent},
  {path:'contactus', component:ContactusComponent},
  {path:'recipes', component:RecipesComponent},
  {path:'loggeduserhome', component:LogrecipesComponent},
  {path:'loggedusercomment', component:LogcommentComponent},
  {path:'loggeduserdownload/:id', component:LogdownloadComponent},
  {path:'edit/:id', component:AdmineditComponent},


  {path:'adminhome', component:AdminhomeComponent},
  {path:'addrecipe', component:AddrecipeComponent},
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
