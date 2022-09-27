import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { LoginComponent } from '../auth/login/login.component';


const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  // {
  //   path:'../auth/login',
  //   component: LoginComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
