import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly URL;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    body: {},
  };
  constructor(private http: HttpClient) {
    this.URL = 'http://localhost:3000/userside';
  }

  getdetails(email: string,username: string) {
    return this.http.get(this.URL + '/register');
  }
  login(email: string, password: string): Observable<any> {
    return this.http.post(
      this.URL + '/login',
      { email, password },
      this.httpOptions
    );
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(
      this.URL + '/register',
      { username, email, password },
      this.httpOptions
    );
  }

  logout(): Observable<any> {
    return this.http.post(this.URL + 'signout', {}, this.httpOptions);
  }
}
