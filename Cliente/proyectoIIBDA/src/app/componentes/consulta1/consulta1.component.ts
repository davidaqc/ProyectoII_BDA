import { Component, OnInit } from '@angular/core';

import { Proyecto } from '../../interfaces/proyecto.interface';
import { Organizacion } from '../../interfaces/organizacion.interface';
import { ServiciosService } from '../../servicios/servicios.service';

@Component({
  selector: 'app-consulta1',
  templateUrl: './consulta1.component.html',
  styleUrls: ['./consulta1.component.css']
})
export class Consulta1Component implements OnInit {

  public proyectos: Proyecto[] = [];
  public listaOrganizaciones: string[] = [];
  public selected_item: any;
  public organizaciones: Organizacion[] = [];

  constructor(public api: ServiciosService) {

    this.selected_item = '';

    // Obtener las organizaciones
    this.api.ObtenerOrganizaciones()
      .subscribe((response: any) => {

        this.organizaciones = response;
        for (let i = 0; i < this.organizaciones.length; i++) {
          this.listaOrganizaciones.push(this.organizaciones[i].name + "");
        }

      }, (error: any) => {
        alert("Error al intentar conectar con el server")
      });

  }

  ngOnInit(): void { }

  cargarDatosProyectos() {
    console.log(this.selected_item);

    this.api.Consulta1(this.selected_item)
    .subscribe((response: any) => {
      console.log(response);
      this.proyectos = response;
    }, (error: any) => {
      alert("Error al intentar conectar con el server")
    });

  }

}
