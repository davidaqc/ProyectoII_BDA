import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NabvarComponent } from './componentes/nabvar/nabvar.component';
import { ConsultasComponent } from './componentes/consultas/consultas.component';
import { Consulta1Component } from './componentes/consulta1/consulta1.component';
import { Consulta2Component } from './componentes/consulta2/consulta2.component';
import { Consulta3Component } from './componentes/consulta3/consulta3.component';
import { Consulta4Component } from './componentes/consulta4/consulta4.component';
import { Consulta5Component } from './componentes/consulta5/consulta5.component';
import { RelacionesComponent } from './componentes/relaciones/relaciones.component';
import { NabvarRelacionesComponent } from './componentes/nabvar-relaciones/nabvar-relaciones.component';
import { Relacion1Component } from './componentes/relacion1/relacion1.component';
import { Relacion2Component } from './componentes/relacion2/relacion2.component';

@NgModule({
  declarations: [
    AppComponent,
    NabvarComponent,
    ConsultasComponent,
    Consulta1Component,
    Consulta2Component,
    Consulta3Component,
    Consulta4Component,
    Consulta5Component,
    RelacionesComponent,
    NabvarRelacionesComponent,
    Relacion1Component,
    Relacion2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
