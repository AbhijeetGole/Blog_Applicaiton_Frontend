import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListApiService } from 'src/app/services/list-api.service';

@Component({
  selector: 'app-singleblog',
  templateUrl: './singleblog.component.html',
  styleUrls: ['./singleblog.component.css']
})
export class SingleblogComponent implements OnInit {

  blogId : string = '';
  blogDetails: any;
  constructor(private listService: ListApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data=>{
      this.blogId = data['id'];
    })
    this.listService.SingleBlog(this.blogId).subscribe(data=>{
      this.blogDetails = data;
      console.log(this.blogDetails);
    })
  }

}
