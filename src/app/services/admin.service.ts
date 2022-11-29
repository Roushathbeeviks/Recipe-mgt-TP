import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {Recipe} from '../models/recipe'

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private recipe: Recipe[]=[]
  readonly URL;
  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpclient:HttpClient) { this.URL = "http://localhost:3000/adminside"}

  getrecipe()
  {
    return this.httpclient.get<any>(this.URL+'/addrecipe')
      
 }

  createRecipe(data:any)
  {
    console.log(data)
    return this.httpclient.post<any>(this.URL+'/addrecipe',data)
    
  }

  deleterecipe(id:any)
  {
    return this.httpclient.delete(this.URL+'/addrecipe/'+id,this.httpOptions)
  }
  uploadImage(image:File)
  {
    var formData: any = new FormData();
    //@ts-ignore
    formData.append('pic', this.form.get('pic').value);
    return this.httpclient.post(this.URL+ '/upload', formData);
  }
}
