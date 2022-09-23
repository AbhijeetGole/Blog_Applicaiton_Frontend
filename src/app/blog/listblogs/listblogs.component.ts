import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ListApiService } from 'src/app/services/list-api.service';

@Component({
  selector: 'app-listblogs',
  templateUrl: './listblogs.component.html',
  styleUrls: ['./listblogs.component.css']
})
export class ListblogsComponent implements OnInit {

  listBlogs!: any;
  constructor(private listService : ListApiService) { }

  ngOnInit(): void {
    this.listService.listBlogs().subscribe(data=>{
      this.listBlogs = data
      console.log(data)
    })

    //single blog
    // this.activatedRoute.params.subscribe(data=>{
    //   this.blogId = data['id'];
    // })
    // this.listService.SingleBlog(this.blogId).subscribe(data=>{
    //   this.blogDetails = data;
    //   console.log(this.blogDetails);
    // })
  }

}
