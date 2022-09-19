import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    HeaderComponent,
    LoginComponent,
    CreateBlogComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NavbarModule { }
