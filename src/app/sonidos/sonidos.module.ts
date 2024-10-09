import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SonidosPageRoutingModule } from './sonidos-routing.module';

import { SonidosPage } from './sonidos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SonidosPageRoutingModule
  ],
  declarations: [SonidosPage]
})
export class SonidosPageModule {}
