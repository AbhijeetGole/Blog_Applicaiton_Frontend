import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogserviceService } from '../service/blogservice.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  listComments:any;
  comment:string=''
  blogId : string = '';
  commentId: string='';
  commentForm:FormGroup
  rows: Comment[] = [];
  constructor(private listService:BlogserviceService, 
              private activatedRoute: ActivatedRoute,
              private blogServices:BlogserviceService,
              private router: Router,formbuilder:FormBuilder) { 
    this.commentForm=formbuilder.group({
          comment:['']
    })

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.blogId = data['id'];
      this.commentId = data['comments._id']
    })

    this.listService.getallComments(this.blogId).subscribe(data=>{
      this.listComments = data;
      console.log(data)
    })
  }

  deleteComment(id:any, comment_id:any) {
      if(confirm('Are you sure want to delete?')) {
        this.listService.deleteComment(id, comment_id).subscribe( result => {
          console.log("deleted", result);
          // if ( ! result.error) {
          //   this.rows = this.rows.filter(item => item.commentId != commentId)
          // } else {
          //   alert('Some thingh went wrong!');
          // }
        })
      }
    }

    addcomment(){
        this.comment=this.commentForm.value.comment;
        this.blogServices.addComment(this.blogId).subscribe(response=>{
          alert(response);
          this.router.navigateByUrl('/home')
        })
    }

}
