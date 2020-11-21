import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  register() {
    this.router.navigateByUrl('/home');
  }

  back() {
    this.router.navigateByUrl('/auth/login');
  }

}
