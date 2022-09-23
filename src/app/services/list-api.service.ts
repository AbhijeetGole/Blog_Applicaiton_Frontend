import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListApiService {
  BASE_URL : string  = "http://localhost:8000/technical-blogging/blog/"
  constructor(private http: HttpClient) { }

  listBlogs(){
    return this.http.get(this.BASE_URL + '/')
  }

  SingleBlog(id: string){
    return this.http.get(this.BASE_URL + id)
  }
}
