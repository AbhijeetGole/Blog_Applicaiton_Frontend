import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(private router: Router) { }

  gotopage(link:string){
    console.log(link)
    this.router.navigate([`/${link}`])

  }

  ngOnInit(): void {
  }

}
