import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListblogsComponent } from './listblogs/listblogs.component';
import { SingleblogComponent } from './singleblog/singleblog.component';

const routes: Routes = [
  {
    path: 'blogs',
    component: ListblogsComponent
  },
  {
    path: 'blogs/blogtitle/:id',
    component: SingleblogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
