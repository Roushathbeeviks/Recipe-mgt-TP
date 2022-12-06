import { HttpClient } from '@angular/common/http';
import { ReadVarExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrComponentlessModule } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import {AdminService} from '../../services/admin.service'
class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-addrecipe',
  templateUrl: './addrecipe.component.html',
  styleUrls: ['./addrecipe.component.css']
})

export class AddrecipeComponent implements OnInit {
  data=
  {
    recipeid:"",
    recipename:"",
    cookingtime:"",
    count:"",
    ingredients:"",
    steps:""
  }
  Ingredient:string[] = [];
  Ing:string=""
  id:any

  form = this.fb.group
  ({
    pic: [null],
  });

 
  constructor(public fb: FormBuilder,
             private http:HttpClient, 
             private adminserv:AdminService,
             private routes:Router) { }

  ngOnInit(): void
  { }


  uploadFile(event: any) 
  {
    //@ts-ignore
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
    //@ts-ignore
    pic: file ? file : null,
    });
    //@ts-ignore
    this.form.get('pic').updateValueAndValidity();
  }

  upload()
  {
    var formData: any = new FormData();
    //@ts-ignore
    formData.append('pic', this.form.get('pic').value);
    this.adminserv.uploadImage(formData).subscribe((res)=>
    {
      console.log(res)
    })
        
 };
  
 onClick(){
  this.Ingredient.push(this.data.ingredients)
  console.log(this.data.ingredients)
}

add()
{
  this.adminserv.createRecipe(this.data).subscribe((res)=>
  {
    // console.log(this.data);
    this.routes.navigate(['/adminhome'])

  });
}

}






  