import { Component, OnInit } from '@angular/core';

import { Proyecto } from '../../interfaces/proyecto.interface';

@Component({
  selector: 'app-consulta4',
  templateUrl: './consulta4.component.html',
  styleUrls: ['./consulta4.component.css']
})
export class Consulta4Component implements OnInit {

  public proyectos: Proyecto[] = [];
  public listaVoluntarios: string[];
  public selected_item: any;

  constructor() {

    /*this.proyectos.push({ "Nombre": "Proyecto1", "Pais": "CR", "Poblacion_Meta": "Poblacion1" });
    this.proyectos.push({ "Nombre": "Proyecto2", "Pais": "EEUU", "Poblacion_Meta": "Poblacion2" });*/

    this.listaVoluntarios = ["Voluntario1", "Voluntario2", "Voluntario3"];

    this.selected_item = '';

  }

  ngOnInit(): void { }

  cargarOrganizaciones() {
    console.log(this.selected_item);
  }

}
