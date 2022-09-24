import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { ListblogsComponent } from './listblogs/listblogs.component';
import { SingleblogComponent } from './singleblog/singleblog.component';
import { CommentComponent } from './comment/comment.component';


@NgModule({
  declarations: [
    ListblogsComponent,
    SingleblogComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
