import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  //arcchivo con las noticias

  private noticias: Noticia[] = [
    {
      id: 1,
      title: "Este día personal de Ornato de la Municipalidad de Jutiapa",
      subtitle: "Municipalidad de Jutiapa",
      img: "home-img2.png",
      description: 'Se activó nuevamente luego del paso de las lluvias provocadas por la tormenta "Iota" realizando jornada de limpieza de cunetas en la ruta interamericana, esto en cumplimiento de las instrucciones dadas por el Sr. Alcalde y Concejo Municipal.'
    },
    {
      id: 2,
      title: "Los músicos quieren ser la voz alta para muchos corazones silenciosos.",
      subtitle: "Municipalidad de Jutiapa",
      img: "home-img4.jpg",
      description: 'Alcalde y Concejo Municipal felicitan a todos los músicos pero en especial a los Músicos Jutiapanecos, ¡Muchas Felicidades!'
    }
    ,
    {
      id: 3,
      title: "Alcalde de Jutiapa supervisó los trabajos de limpieza",
      subtitle: "Municipalidad de Jutiapa",
      img: "home-img5.png",
      description: 'El día de hoy el Alcalde de Jutiapa supervisó los trabajos de limpieza en las Fosas Sépticas ubicadas en Aldea El Barreal, a su llegada COCODE y vecinos agradecieron el esfuerzo del Jefe Edil y Concejo Municipal por el apoyo que se le brinda a esta comunidad.'
    }
    ,
    {
      id: 4,
      title: "Cumpliendo con las instrucciones del Alcalde y Concejo Municipal",
      subtitle: "Municipalidad de Jutiapa",
      img: "home-img3.png",
      description: 'El departamento de Ornato Municipal realizó trabajos de limpieza en la entrada a Jutiapa a un costado de la Zona Vial 2.'
    }    
    ,
    {
      id: 5,
      title: "Se continúa trabajando en el mantenimiento de las calles.",
      subtitle: "Municipalidad de Jutiapa",
      img: "home-img7.jpg",
      description: 'De esta manera estamos trabajando en apoyo a las comunidades que luego de las constantes lluvias sus principales calles quedaron inaccesibles. Esta vez se trabaja en la conformación y cuneteo de la calle principal que conecta la ruta CA-1 con la ciudad vía hospital Nacional.'
    }
    ,
    {
      id: 6,
      title: "Iniciamos la semana con mucho trabajo",
      subtitle: "Municipalidad de Jutiapa",
      img: "home-img6.jpg",
      description: 'Iniciamos la semana con mucho trabajo, nuestros notificadores ya están visitando sus hogares, le recordamos que el personal de la Municipalidad de Jutiapa está identificado y que cualquier alteración en nuestras notificaciones es un delito penado por la ley por lo que le pedimos nos reporte cualquier tipo de anomalías. '
    }
    ,
    {
      id: 7,
      title: "Se dio inicio los trabajos de conformación, compactación y colocación de la capa asfáltica",
      subtitle: "Municipalidad de Jutiapa",
      img: "home-img9.jpg",
      description: `Está mañana dieron inicio los trabajos de conformación, compactación y colocación de la capa asfáltica en el sector conocido como El Nancito, la calle del Cerro Colorado, atrás de gasolinera Shell.
      Este tramo fue gestionado con COVIAL del Ministerio de Comunicaciones por el Alcalde de Jutiapa y miembros del CONCEJO para mejorar este sector y que sirva como vía alterna que conecta la ruta hacia la montaña.
      Se pide a pilotos automovilista s tomar sus precauciones, ya que el tránsito no está permitido hasta que finalicen los trabajos.`
    }
  ];

  constructor() { }

  //retornar todas las not
  getNoticias():Noticia[]{
    return this.noticias;
  }

  //retornar noticia segun id
  getNoticia(type){
    return this.noticias.filter(x => x.id == type);
  }
}


export interface Noticia {
  id: number,
  title: String,
  subtitle: String,
  img: String,
  description: String
};