import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { BlogserviceService } from '../service/blogservice.service';
@Component({
  selector: 'app-listblogs',
  templateUrl: './listblogs.component.html',
  styleUrls: ['./listblogs.component.css']
})
export class ListblogsComponent implements OnInit {

  listBlogs!: any;
  constructor(private blogservice:BlogserviceService) { }

  defaultimage:string='../../../assets/Images/blog-1.avif';
  ngOnInit(): void {
    this.blogservice.getAllBlogs().subscribe(data=>{
      this.listBlogs = data
      console.log(data)
    })
 
    
  }

}
