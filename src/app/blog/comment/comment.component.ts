import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListApiService } from '../services/list-api.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  listComments:any;
  blogId : string = '';
  constructor(private listService:ListApiService, private activatedRoute: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.blogId = data['id'];
    })
    this.listService.getallComments(this.blogId).subscribe(data=>{
      this.listComments = data;
      console.log(data)
    })
  }

}
