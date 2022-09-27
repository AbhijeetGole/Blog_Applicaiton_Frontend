import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogserviceService } from '../service/blogservice.service';

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
    this.comment = this.commentForm.value.comment;
    console.log(this.comment)
    this.blogService.postComment(this.blogId, this.comment).subscribe(data=>{
      console.log(data);
      // this.router.navigateByUrl(`/blogs/blogtitle/  + ${this.blogId}`)
    })
  }

  deleteComment(id:any, comment_id:any) {
      if(confirm('Are you sure want to delete?')) {
        this.blogService.deleteComment(id, comment_id).subscribe( result => {
          // this.rows = this.rows.filter(item=> item.comment_id != comment_id)
          console.log("deleted", result);
          if (result) {
            this.listComments = this.listComments.filter((item: { comment_id: any; }) => item.comment_id != comment_id)
          } else {
            alert('Some thingh went wrong!');
          }
        })
      }
    }

}
