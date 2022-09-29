import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import{BlogserviceService}from '../service/blogservice.service'
@Component({
  selector: 'app-singleblog',
  templateUrl: './singleblog.component.html',
  styleUrls: ['./singleblog.component.css']
})
export class SingleblogComponent implements OnInit {

  blogId : string = '';
  blogDetails: any;
  listComments:any;
  rows: any;
  commentId: any;

  constructor( private activatedRoute: ActivatedRoute,
               private blogService:BlogserviceService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data=>{
      this.blogId = data['id'];
      this.commentId = data['comment_id']
    })

    this.blogService.getBlogbyId(this.blogId).subscribe(data=>{
      this.blogDetails = data;
      // console.log(this.blogDetails);
    })
  }
}
