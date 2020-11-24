import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

 

  /// Datos de las notificaciones
  private notificaciones: Notification[] = [
    {
      id: 45,
      type: 1,
      fecha: 'Hace 1 hora',
      status: 1,
      priority: 1,
      img: 'assets/img/notifications/img4.jpg',
      description: ' Hay mucha gente que   no está enterada de eso  he aquí imágenes de un tubo totalmente  tapado  por el área  de don carlos paiz que no lo cambiaron  y cuando llueve es una inundación  masiva'
    },
    {
      id: 46,
      type: 3,
      fecha: 'Hace 4 horas',
      status: 2,
      priority: 2,
      img: 'assets/img/notifications/img2.jpg',
      description: 'Vecinos del barrio El Cóndor, en la zona 3 de la cabecera de Jutiapa, denunciaron que algunos comerciantes que instalaron ventas en el antiguo campo de la feria dejaron contaminado el lugar con vidrios rotos, clavos, alambre y basura, mientras que otros todavía no se han retirado, a pesar de que las festividades patronales concluyeron.'
    },
    {
      id: 65,
      type: 6,
      fecha: 'Hace 4 horas',
      status: 1,
      priority: 1,
      img: 'assets/img/notifications/img3.jpg',

      description: 'Vecinos reportan mal estado de la carretera en la ruta No. 23'
    },

    {
      id: 56,
      type: 3,
      fecha: 'Hace 6 horas',
      status: 2,
      priority: 1,
      description: 'El fuerte viento derribó un árbol y postes del tendido eléctrico en la zona 10 de la capital, donde se reporta de forma preliminar dos vehículos con daños.'
    },
    {
      id: 75,
      type: 3,
      fecha: 'Hace 6 dias',
      status: 2,
      priority: 1,
      img: 'assets/img/notifications/img5.jpg',

      description: ' ACTIVO: El fuerte viento derribó un árbol y postes del tendido eléctrico en la zona 10 de la capital, donde se reporta de forma preliminar dos vehículos con daños.'
    },
    {
      id: 46,
      type: 1,
      fecha: 'Hace 8 dias',
      status: 3,
      img: 'assets/img/notifications/img1.jpg',
      priority: 2,
      description: ' FINALIZADO: El fuerte viento derribó un árbol y postes del tendido eléctrico en la zona 10 de la capital, donde se reporta de forma preliminar dos vehículos con daños.'
    },
  ];

  constructor() { }

  //retornar todas las notificaciones
  getNotifi():Notification[]{
    return this.notificaciones;
  }
  //retornar todas las notificaciones
  /* getNotifiEspera():Notification[]{
    return this.notificaciones.filter(x => x.status == 1);
  }
  getNotifiActivo():Notification[]{
    return this.notificaciones.filter(x => x.status == 2);
  }
  getNotifiFinalizado():Notification[]{
    return this.notificaciones.filter(x => x.status == 3);
  } */
  getNotifiStatus(type):Notification[]{
    return this.notificaciones.filter(x => x.status == type).reverse();
  }
  addNotifi(type){
    this.notificaciones.push(type);
  }
}


export interface Notification {
  id: number,
  type: number,
  fecha: String,
  status: number,
  priority: number,
  ubicacion?: String,
  direccion?: String,
  img?: any,
  description: String
};