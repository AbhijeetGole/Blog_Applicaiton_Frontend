import { LoginComponent } from './../../../../Old_Blog_Applicaiton_Frontend/src/app/navbar/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RecentblogComponent } from './recentblog/recentblog.component';
import { NxtBannerComponent } from './nxt-banner/nxt-banner.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    RecentblogComponent,
    NxtBannerComponent,
    BannerComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class DashboardModule { }
