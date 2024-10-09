import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SonidosPage } from './sonidos.page';

const routes: Routes = [
  {
    path: '',
    component: SonidosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SonidosPageRoutingModule {}
