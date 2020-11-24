import { Component, OnInit } from '@angular/core';
import {  NoticiasService } from '../servicios/noticias.service';
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-noticia-detalle',
  templateUrl: './noticia-detalle.component.html',
  styleUrls: ['./noticia-detalle.component.scss']
})
export class NoticiaDetalleComponent implements OnInit {

  //Variables generales
  type: number;
  noticia:any={};

  constructor( private noticiaService: NoticiasService,
                private route:ActivatedRoute
    ) { 
      
    }

  ngOnInit(): void {

    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    //recibimos parametros enviados por url
    this.route.params.subscribe(params=>{
      this.type = +params['type'];

    });
    this.noticia =  this.noticiaService.getNoticia(this.type)[0];

    
    
    
  }

}
