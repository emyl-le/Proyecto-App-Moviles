import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'sesiones',
    loadChildren: () => import('./sesiones/sesiones.module').then( m => m.SesionesPageModule)
  },
  {
    path: 'sonidos',
    loadChildren: () => import('./sonidos/sonidos.module').then( m => m.SonidosPageModule)
  },
  {
    path: 'seguimiento',
    loadChildren: () => import('./seguimiento/seguimiento.module').then( m => m.SeguimientoPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
