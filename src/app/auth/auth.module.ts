import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent,
    RegisteruserComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class AuthModule { 
  constructor(){
    console.log('Auth Module loaded!' )
  }
}
