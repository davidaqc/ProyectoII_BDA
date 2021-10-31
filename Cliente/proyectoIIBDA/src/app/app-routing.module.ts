import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConsultasComponent } from './componentes/consultas/consultas.component';
import { Consulta1Component } from './componentes/consulta1/consulta1.component';

const routes: Routes = [
    // Rutas
    {path: '', redirectTo:'consultas', pathMatch:'full'}, // ruta por defecto
    {path:'consultas', component:ConsultasComponent},
    {path:'consulta1', component: Consulta1Component},
    {path: '**', pathMatch:'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
