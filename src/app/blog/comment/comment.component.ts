import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogserviceService } from '../service/blogservice.service';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  comment: string=''
  listComments:any;
  blogId : string = '';
  commentId: string='';
  commentForm: FormGroup;
  faEllipsisVertical = faEllipsisVertical

  constructor(private bulider:FormBuilder, private blogService:BlogserviceService, 
              private activatedRoute: ActivatedRoute,
              private router: Router) { 
                this.commentForm=bulider.group({
                  comment:['',Validators.required]
                })
  }

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(data=>{
      this.blogId = data['id'];
      this.commentId = data['comments._id']
    })

    this.blogService.getallComments(this.blogId).subscribe(data=>{
      this.listComments = data;
      console.log(data)
    })
  }

  saveComment(){
    this.comment = this.commentForm.value;
    this.blogService.postComment(this.blogId,this.comment).subscribe(data=>{
      console.log(data);
      if (data) {
        this.blogService.getallComments(this.blogId).subscribe(data=>{
          this.listComments = data;
          console.log(data)
        })
      } else {
        alert('Some thingh went wrong!');
      }
    })
  }

  deleteComment(id:any, comment_id:any) {
      if(confirm('Are you sure want to delete?')) {
        this.blogService.deleteComment(id, comment_id).subscribe( (result) => {
          console.log("deleted", result);
          if (result) {
            this.blogService.getallComments(this.blogId).subscribe(data=>{
              this.listComments = data;
              console.log(data)
            })
          }else {
            alert('Some thingh went wrong!');
          } 
        })
      }
    }

}
