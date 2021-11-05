import { Component, OnInit } from '@angular/core';

import { Proyecto } from '../../interfaces/proyecto.interface';
import { ServiciosService } from '../../servicios/servicios.service';

@Component({
  selector: 'app-consulta2',
  templateUrl: './consulta2.component.html',
  styleUrls: ['./consulta2.component.css']
})
export class Consulta2Component implements OnInit {

  public proyectos: Proyecto[] = [];
  public proyectosDatos: Proyecto[] = [];
  public listaProyectos: string[] = [];
  public selected_item: any;

  constructor(public api: ServiciosService) {

    this.selected_item = '';

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

  cargarDatosProyectos() {
    console.log(this.selected_item);

    this.api.Consulta2(this.selected_item)
    .subscribe((response: any) => {
      console.log(response);
      this.proyectosDatos = response;
    }, (error: any) => {
      alert("Error al intentar conectar con el server")
    });

  }

}
