import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    MainFooterComponent,
    ContactComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FooterModule { }
