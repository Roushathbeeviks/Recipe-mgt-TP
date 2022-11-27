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

  constructor(private http:HttpClient) { this.URL = "http://localhost:3000/adminside"}

  getrecipe()
  {
    return this.http.get<{recipe:Recipe}>(this.URL+'/addrecipe').pipe()
      
 }

  createRecipe(data:any)
  {
    return this.http.post(this.URL+'/addrecipe',data)
  }

  deleterecipe(id:any)
  {
    return this.http.delete(this.URL+'/addrecipe/'+id,this.httpOptions)
  }
  uploadImage(image:File)
  {
    const formData = new FormData();

    formData.append('image', image);

    return this.http.post(this.URL+ '/addrecipe/', formData);
  }
}
