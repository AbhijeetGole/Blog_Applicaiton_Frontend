import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';


const routes: Routes = [
  { 
   path:'login', 
   component: LoginComponent
  },
  { 
    path:'newuser', 
    component: RegisteruserComponent
  },
  { 
    path:'logout', 
    component: LogoutComponent
  },
  {
    path: 'register',
    component: RegisteruserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
