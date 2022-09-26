import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap, mapTo} from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8000/technical-blogging/user';
  redirectUrl: string | undefined;
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private http: HttpClient,
  ) {
  }

  registerUser(data: User) {
    return this.http.post(`${this.apiUrl}/`, data, this.httpOptions)
  }

  login(data: any): Observable<boolean> {
    return this.http.post(`${this.apiUrl}/authenticate`, data, this.httpOptions)
    .pipe(
      tap(user => this.doLogin(user)),
      mapTo(true),
    )
  }
  
  doLogin(user: any) {
    localStorage.setItem('currentUser', JSON.stringify(user))
  }
  getCurrentUser() {
    let crl=window.localStorage.getItem('currentUser');
    if(typeof(crl)=='object')
    return false;
    return JSON.parse(localStorage.getItem('currentUser')||'{}').token;
  }
  getDecodeToken(token: string) {
    return jwt_decode(token);
  }

  isLoggedIn() {
  let token = this.getCurrentUser();
    if(token) {
       token = this.getDecodeToken(token);
    if (token){
        return true;
      } else {
        this.logout();
      }
    }
    return false;
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

}