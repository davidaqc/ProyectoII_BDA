import { Component, OnInit } from '@angular/core';

import { Proyecto } from '../../interfaces/proyecto.interface';
import { Organizacion } from '../../interfaces/organizacion.interface';
import { ServiciosService } from '../../servicios/servicios.service';

@Component({
  selector: 'app-relacion1',
  templateUrl: './relacion1.component.html',
  styleUrls: ['./relacion1.component.css']
})
export class Relacion1Component implements OnInit {

  public listaOrganizaciones: string[] = [];
  public listaProyectos: string[] = [];
  public organizacion_seleccionada: any;
  public proyecto_seleccionado: any;

  public organizaciones: Organizacion[] = [];
  public proyectos: Proyecto[] = [];

  constructor(public api: ServiciosService) {

    this.organizacion_seleccionada = '';
    this.proyecto_seleccionado = '';

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

    // Obtener los proyectos
    this.api.ObtenerProyectos()
    .subscribe((response: any) => {

      this.proyectos = response;
      for (let i = 0; i < this.proyectos.length; i++) {
        this.listaProyectos.push(this.proyectos[i].name + "");
      }

    }, (error: any) => {
      alert("Error al intentar conectar con el server")
    });

  }

  ngOnInit(): void { }

  cargarOrganizaciones() {
    console.log(this.organizacion_seleccionada);
    console.log(this.proyecto_seleccionado);

    this.api.Relacion1(this.organizacion_seleccionada, this.proyecto_seleccionado)
    .subscribe(response => {
      alert("Se relaciono una organizacion con un proyecto")
    }, (error: any) => {
      alert("Error al intentar conectar con el server")
    });

  }
}
