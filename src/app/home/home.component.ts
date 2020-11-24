import { Component, OnInit } from '@angular/core';
import { Noticia, NoticiasService } from '../servicios/noticias.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  //lista
  noticias:Noticia[]=[];

  constructor( private noticiaService: NoticiasService) { }

  ngOnInit(): void {

    //this.heores= this._heroesService.getHereos();
    this.noticias= this.noticiaService.getNoticias().reverse();

  }

  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
