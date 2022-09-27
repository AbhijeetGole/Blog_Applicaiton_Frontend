import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RecentblogComponent } from './recentblog/recentblog.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { NxtBannerComponent } from './nxt-banner/nxt-banner.component';




@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    RecentblogComponent,
    FooterComponent,
    BannerComponent,
    NxtBannerComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DashboardModule { }
