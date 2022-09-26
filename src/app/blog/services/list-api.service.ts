import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListApiService {
  BASE_URL : string  = "http://localhost:8000/technical-blogging/blog/"
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'token':JSON.parse(localStorage.getItem('currentUser')||'{}').token
    })
  };
  
  listBlogs(){
    return this.http.get(this.BASE_URL + '/' , this.httpOptions)
  }

  SingleBlog(id: string){
    return this.http.get(this.BASE_URL + id, this.httpOptions)
  }

  getallComments(id: string){
    return this.http.get(this.BASE_URL + id + '/commentsGet', this.httpOptions)
  }

  deleteComment(id:string, comment_id:string){
    return this.http.delete(this.BASE_URL + id + '/comments/' + comment_id, this.httpOptions)
  }
}
