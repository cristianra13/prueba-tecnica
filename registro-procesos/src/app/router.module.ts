import { Routes, RouterModule } from '@angular/router';
import { RegistrarProcesoComponent } from './components/registrar-proceso/registrar-proceso.component';
import { ListarComponent } from './components/listar/listar.component';


const routes: Routes = [
  { path: 'registro', component: RegistrarProcesoComponent },
  { path: 'listar', component: ListarComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'registro' }
];

export const APP_ROUTING = RouterModule.forRoot(routes);
