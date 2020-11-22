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
      title: "Este día personal de Ornato de la Municipalidad de Jutiapa",
      subtitle: "Municipalidad de Jutiapa",
      img: "home-img1.png",
      description: 'Iota" realizando jornada de limpieza de cunetas en la ruta interamericana, esto en cumplimiento de las instrucciones dadas por el Sr. Alcalde y Concejo Municipal.'
    }
  ];

  constructor() { }

  getNoticias():Noticia[]{
    return this.noticias;
  }
}


export interface Noticia {
  id: number,
  title: String,
  subtitle: String,
  img: String,
  description: String
};