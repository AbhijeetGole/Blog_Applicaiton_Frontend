import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroBannerComponent } from './intro-banner/intro-banner.component';
import { BlogsComponent } from './blogs/blogs.component';
import { SignupBannerComponent } from './signup-banner/signup-banner.component';
import { DiscoverBlogComponent } from './discover-blog/discover-blog.component';
import { OurTeamComponent } from './our-team/our-team.component';



@NgModule({
  declarations: [
    IntroBannerComponent,
    BlogsComponent,
    SignupBannerComponent,
    DiscoverBlogComponent,
    OurTeamComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
