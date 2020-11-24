import { Component, OnInit } from '@angular/core';
import { Notification, NotificationsService } from '../servicios/notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  

  //list
  notifiE:Notification[]=[];
  notifiA:Notification[]=[];
  notifiF:Notification[]=[];



  constructor( private notifiService: NotificationsService) { }

  ngOnInit(): void {
   
    this.notifiE = this.notifiService.getNotifiStatus(1);
    this.notifiA = this.notifiService.getNotifiStatus(2);
    this.notifiF = this.notifiService.getNotifiStatus(3);


    
  }

  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
