import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  FormArray,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { BlogserviceService } from '../service/blogservice.service';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css'],
})
export class EditBlogComponent implements OnInit {
  blogId: string = '';
  blogDetails: any = {
    title: '',
    content: '',
    imageUrl: '',
  };
  editForm = new FormGroup({
    title: new FormControl(),
    content: new FormControl(),
    image: new FormControl(),
  });
  constructor(
    private activatedRoute: ActivatedRoute,
    private blogService: BlogserviceService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.editForm = formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      image: [''],
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.blogId = data['id'];
      this.blogService.getBlogbyId(this.blogId).subscribe((data) => {
        this.blogDetails = data;
        this.editForm.patchValue({
          title: this.blogDetails.title,
          content: this.blogDetails.content,
          image:this.blogDetails.imageUrl
        });

      });
    });
  }

  edit() {
    let data={
   'title':this.editForm.get('title')?.value,
    'imageUrl':this.editForm.get('image')?.value,
    'content':this.editForm.get('content')?.value
    }
     this.blogService.editblog(this.blogId,data).subscribe(response=>{
      console.log(response);
      this.router.navigateByUrl(`/blogs/blogtitle/${this.blogId}`)
     })
  }
}
