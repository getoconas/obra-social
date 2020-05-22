import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './components/inicio/inicio.component';
import { RegistroComponent } from './components/registro/registro.component';
import { GaleriaComponent } from './components/galeria/galeria.component';

const app_routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];


export const app_routing = RouterModule.forRoot(app_routes);