import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NabvarComponent } from './componentes/nabvar/nabvar.component';
import { ConsultasComponent } from './componentes/consultas/consultas.component';


@NgModule({
  declarations: [
    AppComponent,
    NabvarComponent,
    ConsultasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
