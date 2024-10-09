import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sonidos',
  templateUrl: './sonidos.page.html',
  styleUrls: ['./sonidos.page.scss'],
})
export class SonidosPage implements OnInit {

  sonidos = [
    { id: 1, nombre: 'Lluvia Suave', categoria: 'Naturaleza' },
    { id: 2, nombre: 'Música Relajante', categoria: 'Música' },
    { id: 3, nombre: 'Ondas del Mar', categoria: 'Naturaleza' },
  ];

  constructor() {}

  ngOnInit() {
    console.log('Pagina de sonidos cargada');
  }

  reproducirSonido(sonido: any) {
    console.log(`Reproduciendo sonido: ${sonido.nombre}`);
    // Lógica para reproducir el sonido seleccionado
  }


}
