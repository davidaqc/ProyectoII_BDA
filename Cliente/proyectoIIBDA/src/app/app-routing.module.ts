import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConsultasComponent } from './componentes/consultas/consultas.component';
import { Consulta1Component } from './componentes/consulta1/consulta1.component';
import { Consulta2Component } from './componentes/consulta2/consulta2.component';
import { Consulta3Component } from './componentes/consulta3/consulta3.component';
import { Consulta4Component } from './componentes/consulta4/consulta4.component';
import { Consulta5Component } from './componentes/consulta5/consulta5.component';
import { RelacionesComponent } from './componentes/relaciones/relaciones.component';
import { Relacion1Component } from './componentes/relacion1/relacion1.component';
import { Relacion2Component } from './componentes/relacion2/relacion2.component';
import { RegistrosComponent } from './componentes/registros/registros.component';
import { Registro1Component } from './componentes/registro1/registro1.component';
import { Registro2Component } from './componentes/registro2/registro2.component';
import { Registro3Component } from './componentes/registro3/registro3.component';

const routes: Routes = [
    // Rutas
    {path: '', redirectTo:'consultas', pathMatch:'full'}, // ruta por defecto
    {path:'consultas', component:ConsultasComponent},
    {path:'consulta1', component: Consulta1Component},
    {path:'consulta2', component: Consulta2Component},
    {path:'consulta3', component: Consulta3Component},
    {path:'consulta4', component: Consulta4Component},
    {path:'consulta5', component: Consulta5Component},
    {path:'relaciones', component: RelacionesComponent},
    {path:'relacion1', component: Relacion1Component},
    {path:'relacion2', component: Relacion2Component},
    {path:'registros', component: RegistrosComponent},
    {path:'registro1', component: Registro1Component},
    {path:'registro2', component: Registro2Component},
    {path:'registro3', component: Registro3Component},
    {path: '**', pathMatch:'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
