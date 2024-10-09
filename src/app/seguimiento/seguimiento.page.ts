import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.page.html',
  styleUrls: ['./seguimiento.page.scss'],
})
export class SeguimientoPage implements OnInit {

  progreso = {
    meditacion: 10, // 10 sesiones completadas
    respiracion: 5, // 5 ejercicios completados
  };

  constructor() { }

  ngOnInit() {
    console.log('Pagina de seguimiento del bienestar mental cargada');
  }

}
