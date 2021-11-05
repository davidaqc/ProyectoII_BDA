import { Component, OnInit } from '@angular/core';

import { Proyecto } from '../../interfaces/proyecto.interface';
import { Voluntario } from '../../interfaces/voluntario.interface';
import { ServiciosService } from '../../servicios/servicios.service';

@Component({
  selector: 'app-consulta4',
  templateUrl: './consulta4.component.html',
  styleUrls: ['./consulta4.component.css']
})
export class Consulta4Component implements OnInit {

  public proyectos: Proyecto[] = [];
  public listaVoluntarios: string[] = [];
  public selected_item: any;

  public voluntarios: Voluntario[] = [];

  constructor(public api: ServiciosService) {

    // Obtener los voluntarios
    this.api.ObtenerVoluntarios()
      .subscribe((response: any) => {

        this.voluntarios = response;
        for (let i = 0; i < this.voluntarios.length; i++) {
          this.listaVoluntarios.push(this.voluntarios[i].name + "");
        }

      }, (error: any) => {
        alert("Error al intentar conectar con el server")
      });

    this.selected_item = '';

  }

  ngOnInit(): void { }

  cargarDatosProyectos() {
    console.log(this.selected_item);

    this.api.Consulta4(this.selected_item)
    .subscribe((response: any) => {
      console.log(response);
      this.proyectos = response;
    }, (error: any) => {
      alert("Error al intentar conectar con el server")
    });
  }

}
