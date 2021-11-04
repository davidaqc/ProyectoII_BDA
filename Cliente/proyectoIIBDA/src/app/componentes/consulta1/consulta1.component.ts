import { Component, OnInit } from '@angular/core';

import { Proyecto } from '../../interfaces/proyecto.interface';

@Component({
  selector: 'app-consulta1',
  templateUrl: './consulta1.component.html',
  styleUrls: ['./consulta1.component.css']
})
export class Consulta1Component implements OnInit {

  public proyectos: Proyecto[] = [];
  public listaOrganizaciones: string[];
  public selected_item: any;

  constructor() {

    this.proyectos.push({ "Nombre": "Proyecto1", "Pais": "CR" });
    this.proyectos.push({ "Nombre": "Proyecto2", "Pais": "EEUU" });

    this.listaOrganizaciones = ["Organizacion1", "Organizacion2", "Organizacion3", "Organizacion4"];

    this.selected_item = '';

  }

  ngOnInit(): void { }

  cargarOrganizaciones() {
    console.log(this.selected_item);
  }

}
