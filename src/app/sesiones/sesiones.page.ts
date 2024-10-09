import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sesiones',
  templateUrl: './sesiones.page.html',
  styleUrls: ['./sesiones.page.scss'],
})
export class SesionesPage implements OnInit {

  sesiones = [
    { id: 1, nombre: 'Relajación Profunda', duracion: '10 min', tipo: 'Meditación' },
    { id: 2, nombre: 'Respiración Tranquila', duracion: '5 min', tipo: 'Respiración' },
    { id: 3, nombre: 'Concéntrate', duracion: '15 min', tipo: 'Meditación' },
  ];

  constructor() {}

  ngOnInit() {
    console.log('Pagina de sesiones cargada');
  }

  iniciarSesion(sesion: any) {
    console.log(`Iniciando sesión: ${sesion.nombre}`);
    // Aquí va la lógica para reproducir la sesión
  }

}
