import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NewUserComponent } from './new-user/new-user.component';

const routes: Routes = [
  { path:'login', component: LoginComponent},
  { path:'newuser', component: NewUserComponent},
  { path:'logout', component: LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
