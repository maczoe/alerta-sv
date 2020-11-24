import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifi-card',
  templateUrl: './notifi-card.component.html',
  styleUrls: ['./notifi-card.component.scss']
})
export class NotifiCardComponent implements OnInit {

  // Datos generales
  private tipoN: any[] = [
    {
      id: 1,
      title: 'Emergencia',
      icon: 'local_hospital'
    },
    {
      id: 2,
      title: 'Alumbrado público',
      icon: 'wb_incandescent'
    },
    {
      id: 3,
      title: 'Basura',
      icon: 'delete_forever'
    },
    {
      id: 4,
      title: 'Incendio',
      icon: 'local_fire_department'
    },
    {
      id: 5,
      title: 'Foco de plagas',
      icon: 'bug_report'
    },
    {
      id: 6,
      title: 'Daño de carretera',
      icon: 'edit_road'
    },
    {
      id: 7,
      title: 'Daño ecológico',
      icon: 'eco'
    },

  ];

  @Input() noti: any = {};
  constructor() { }

  ngOnInit(): void {
  }

  getTypeNoti(type) {
    return this.tipoN.filter(x => x.id === type);
  }




}
