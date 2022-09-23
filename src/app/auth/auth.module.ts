import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewUserComponent } from './new-user/new-user.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthRoutingModule } from './auth-routing.module';


@NgModule({
  declarations: [
    NewUserComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  exports: [
    NewUserComponent
  ]
})
export class AuthModule { 
  constructor(){
    console.log('Auth Module loaded!' )
  }
}
