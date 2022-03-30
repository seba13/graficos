import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AplicacionesComponent } from './components/aplicaciones/aplicaciones.component';
import { ImpresionesComponent } from './components/impresiones/impresiones.component';
import { InteraccionesComponent } from './components/interacciones/interacciones.component';
import { InfluenciasComponent } from './components/influencias/influencias.component';
import { CompartidosComponent } from './components/compartidos/compartidos.component';
import { TipoUsuariosComponent } from './components/tipo-usuarios/tipo-usuarios.component';
import { EdadComponent } from './components/edad/edad.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import { GraficoVolumenDiaComponent } from './components/volumen/grafico-volumen-dia/grafico-volumen-dia.component';
import { GraficoVolumenHoraComponent } from './components/volumen/grafico-volumen-hora/grafico-volumen-hora.component';
import { GraficoVolumenMinutoComponent } from './components/volumen/grafico-volumen-minuto/grafico-volumen-minuto.component';
import { GraficoVolumenSentimientoComponent } from './components/volumen/grafico-volumen-sentimiento/grafico-volumen-sentimiento.component';
import { GraficoVolumenEtiquetaComponent } from './components/volumen/grafico-volumen-etiqueta/grafico-volumen-etiqueta.component';

@NgModule({
  declarations: [
    AppComponent,
    AplicacionesComponent,
    ImpresionesComponent,
    InteraccionesComponent,
    InfluenciasComponent,
    CompartidosComponent,
    TipoUsuariosComponent,
    EdadComponent,
    GraficoVolumenDiaComponent,
    GraficoVolumenHoraComponent,
    GraficoVolumenMinutoComponent,
    GraficoVolumenSentimientoComponent,
    GraficoVolumenEtiquetaComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDatatableModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
