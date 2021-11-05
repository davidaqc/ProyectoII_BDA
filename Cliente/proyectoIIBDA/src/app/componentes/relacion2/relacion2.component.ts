import { Component, OnInit } from '@angular/core';

import { Proyecto } from '../../interfaces/proyecto.interface';
import { Voluntario } from '../../interfaces/voluntario.interface';
import { ServiciosService } from '../../servicios/servicios.service';

@Component({
  selector: 'app-relacion2',
  templateUrl: './relacion2.component.html',
  styleUrls: ['./relacion2.component.css']
})
export class Relacion2Component implements OnInit {

  public listaVoluntarios: string[] = [];
  public listaProyectos: string[] = [];
  public voluntario_seleccionada: any;
  public proyecto_seleccionado: any;

  public proyectos: Proyecto[] = [];
  public voluntarios: Voluntario[] = [];

  constructor(public api: ServiciosService) {

    this.voluntario_seleccionada = '';
    this.proyecto_seleccionado = '';

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

  }

  ngOnInit(): void { }

  cargarOrganizaciones() {
    console.log(this.voluntario_seleccionada);
    console.log(this.proyecto_seleccionado);

    this.api.Relacion2(this.voluntario_seleccionada, this.proyecto_seleccionado)
    .subscribe(response => {
      alert("Se relaciono un voluntario con un proyecto")
    }, (error: any) => {
      alert("Error al intentar conectar con el server")
    });
  }

}
