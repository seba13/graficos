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
import { GraficoVolumenDiaComponent } from './components/volumen/grafico-volumen-dia/grafico-volumen-dia.component';
import { GraficoVolumenEtiquetaComponent } from './components/volumen/grafico-volumen-etiqueta/grafico-volumen-etiqueta.component';
import { GraficoVolumenHoraComponent } from './components/volumen/grafico-volumen-hora/grafico-volumen-hora.component';
import { GraficoVolumenMinutoComponent } from './components/volumen/grafico-volumen-minuto/grafico-volumen-minuto.component';
import { GraficoVolumenSentimientoComponent } from './components/volumen/grafico-volumen-sentimiento/grafico-volumen-sentimiento.component';

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
  },
  {
    path: 'volumen_dia',
    component: GraficoVolumenDiaComponent,
  },{
    path: 'volumen_hora',
    component: GraficoVolumenHoraComponent,
  },{
    path: 'volumen_minuto',
    component: GraficoVolumenMinutoComponent,
  },{
    path: 'volumen_sentimiento',
    component: GraficoVolumenSentimientoComponent
  },{
    path: 'volumen_etiqueta',
    component: GraficoVolumenEtiquetaComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
