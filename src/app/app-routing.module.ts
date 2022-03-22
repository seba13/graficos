import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AplicacionesComponent } from './components/aplicaciones/aplicaciones.component';
import { CompartidosComponent } from './components/compartidos/compartidos.component';
import { EdadComponent } from './components/edad/edad.component';
import { ImpresionesComponent } from './components/impresiones/impresiones.component';
import { InfluenciasComponent } from './components/influencias/influencias.component';
import { InteraccionesComponent } from './components/interacciones/interacciones.component';
import { TipoUsuariosComponent } from './components/tipo-usuarios/tipo-usuarios.component';
const routes: Routes = [
  {
    path: '',
    redirectTo:'', pathMatch: 'full',
  },
  {
    path: 'aplicaciones',
    component: AplicacionesComponent,
  },
  {
    path: 'impresiones',
    component: ImpresionesComponent,
  },
  {
    path: 'interacciones',
    component: InteraccionesComponent,
  },
  {
    path: 'influencias',
    component: InfluenciasComponent,
  },
  {
    path: 'compartidos',
    component: CompartidosComponent,
  },
  {
    path: 'tipo_usuarios',
    component: TipoUsuariosComponent,
  },
  {
    path: 'edad',
    component: EdadComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
