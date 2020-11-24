import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Noticia } from '../../servicios/noticias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noticia-card',
  templateUrl: './noticia-card.component.html',
  styleUrls: ['./noticia-card.component.scss']
})
export class NoticiaCardComponent implements OnInit {

  @Input() noticia:any = {};

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  // Redireccionar a detalle de noticia
  detNoticia(type) {
    this.router.navigateByUrl('noticia/detalle/'+type);
  }


}
