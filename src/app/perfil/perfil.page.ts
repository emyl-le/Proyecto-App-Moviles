import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  usuario = {
    nombre: 'Carlos',
    preferencias: {
      sonidos: 'Naturaleza',
      notificaciones: true,
    },
  };

  constructor() { }

  ngOnInit() {
    console.log('Pagina de perfil cargada');
  }

}
