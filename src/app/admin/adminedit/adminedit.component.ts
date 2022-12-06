import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {AdminService} from '../../services/admin.service'

@Component({
  selector: 'app-adminedit',
  templateUrl: './adminedit.component.html',
  styleUrls: ['./adminedit.component.css']
})
export class AdmineditComponent implements OnInit {

  data=
  {
    recipeid:"",
    recipename:"",
    cookingtime:"",
    count:"",
    ingredients:"",
    steps:""
  }
  form = this.fb.group
  ({
    pic: [null],
  });
  id:any

 
  constructor(public fb: FormBuilder,
             private adminserv:AdminService,
             private routes:Router,
             private route:ActivatedRoute) { }

  ngOnInit(): void
  {
    this.id=this.route.snapshot.paramMap.get('id')
    console.log(this.id)
    if(this.id)
    {
      this.adminserv.getrecipebyid(this.id).subscribe((res)=>
      {
        this.data = res
        console.log(res)
      })
    }

  }

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
  add()
  {
    if(this.id)
    {
      this.adminserv.editrecipebyid(this.id,this.data).subscribe((res)=>
      {
        console.log(res)
      })
    }
  }

}
