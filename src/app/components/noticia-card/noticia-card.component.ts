import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Noticia } from '../../servicios/noticias.service';

@Component({
  selector: 'app-noticia-card',
  templateUrl: './noticia-card.component.html',
  styleUrls: ['./noticia-card.component.scss']
})
export class NoticiaCardComponent implements OnInit {

  @Input() noticia:Noticia = {};

  constructor() { }

  ngOnInit(): void {
  }

}
