import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  domain = "http://localhost:8000/technical-blogging/blog/";
  authToken:any;
  constructor(private http:HttpClient) { }

    // Function to create headers, add token, to be used in HTTP requests
    createAuthenticationHeaders() {
      this.loadToken(); // Get token so it can be attached to headers
      // Headers configuration options
        headers: new Headers({
          'Content-Type': 'application/json', // Format set to JSON
          'authorization': this.authToken // Attach token
        })
    }
      // Function to get token from client local storage
  loadToken() {
    this.authToken = localStorage.getItem('token');; // Get token and asssign to variable to be used elsewhere
  }
}
