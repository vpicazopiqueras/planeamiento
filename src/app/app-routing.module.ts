import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MensajeComponent } from './components/mensaje/mensaje.component';
import { AltaPlanteamientosComponent } from './views/alta-planteamientos/alta-planteamientos.component';
import { BuscadorIntervinientesComponent } from './views/buscador-intervinientes/buscador-intervinientes.component';
import { MenuFakeComponent } from './views/menu-fake/menu-fake.component';

/**
 * Rutas de la app
 *
 */

const routes: Routes = [
  // this route is needed for security POST mode, so Angular does not complain
  { path: 'entry', redirectTo: '/', pathMatch: 'full' },
  { path: 'menu-fake', component: MenuFakeComponent },
  { path: 'mensaje', component: MensajeComponent },
  { path: 'alta-planteamiento', component: AltaPlanteamientosComponent },
  { path: 'buscador-interviniente', component: BuscadorIntervinientesComponent },
];

/**
 * NgModule
 *
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
