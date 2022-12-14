import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { ListblogsComponent } from './listblogs/listblogs.component';
import { SingleblogComponent } from './singleblog/singleblog.component';
import { CreateblogComponent } from './createblog/createblog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommentComponent } from './comment/comment.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'


@NgModule({
  declarations: [
    ListblogsComponent,
    SingleblogComponent,
    CreateblogComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ]
})
export class BlogModule { }
