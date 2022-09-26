import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogserviceService {
  BASE_URL : string  = "http://localhost:8000/technical-blogging/blog/"
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'token':JSON.parse(localStorage.getItem('currentUser')||'{}').token
    })
  };
  getAllBlogs(){
    return this.http.get(this.BASE_URL + '/')
  }
  
  writeBlog(blog:any){
    return this.http.post(this.BASE_URL,blog,this.httpOptions)
  }

  getBlogbyId(id: string){
   
    return this.http.get(this.BASE_URL + id)
  }

  getallComments(id: string){

    return this.http.get(this.BASE_URL + id + '/commentsGet',this.httpOptions)

  }
  deleteComment(id:string, comment_id:string){

    console.log(this.BASE_URL + id + '/comments/' + comment_id)

    return this.http.delete(this.BASE_URL + id + '/comments/' + comment_id, this.httpOptions)

  }
}
