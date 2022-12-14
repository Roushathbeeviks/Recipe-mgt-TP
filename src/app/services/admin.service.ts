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
    return this.httpclient.post<any>(this.URL+'/addrecipe',data)
    
  }
  getrecipebyid(id:any)
  {
    return this.httpclient.get<any>(this.URL+'/addrecipe/'+id)
  }

  deleterecipe(id:any)
  {
    return this.httpclient.delete(this.URL+'/addrecipe/'+id)
  }
  uploadImage(body?:any)
  {

    return this.httpclient.post(this.URL+ '/upload',body);
  }

  editrecipebyid(id:any, data:any){
    return this.httpclient.put<any>(this.URL+'/editrecipe/'+id, data);
  }

  getImage()
  {
    return this.httpclient.get<any>(this.URL+'/upload')
  }
  postcomment(commenting:string)
  {
    return this.httpclient.post<any>(this.URL+'/commented',{commenting})
  }
  getcomment()
  {
    return this.httpclient.get<any>(this.URL+'/commented')
  }
}
