import { Component, OnInit } from '@angular/core';

import { Proyecto } from '../../interfaces/proyecto.interface';
import { ServiciosService } from '../../servicios/servicios.service';

@Component({
  selector: 'app-consulta5',
  templateUrl: './consulta5.component.html',
  styleUrls: ['./consulta5.component.css']
})
export class Consulta5Component implements OnInit {

  public proyectos: Proyecto[] = [];

  constructor(public api: ServiciosService) { }

  ngOnInit(): void {
  }

  cargarDatosProyectos() {

    this.api.Consulta5()
    .subscribe((response: any) => {
      console.log(response);
      this.proyectos = response;
    }, (error: any) => {
      alert("Error al intentar conectar con el server")
    });

  }

}
