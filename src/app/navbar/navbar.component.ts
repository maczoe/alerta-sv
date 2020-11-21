import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  activeIndex  = 0;

  constructor(private router: Router ) { }

  ngOnInit(): void {
  }

  changeIndex(index) {
    this.activeIndex=index;
    switch (this.activeIndex) {
      case 0:
        this.router.navigateByUrl('/home');
        break;
      case 1:
        this.router.navigateByUrl('/alerts');
        break;
      case 2:
        this.router.navigateByUrl('/notifications');
        break;
      case 3:
        this.router.navigateByUrl('/config');
        break;
    }
  }

}
