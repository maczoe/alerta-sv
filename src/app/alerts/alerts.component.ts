import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  newAlert(type) {
    this.router.navigateByUrl('alerts/new/'+type);
  }

}
