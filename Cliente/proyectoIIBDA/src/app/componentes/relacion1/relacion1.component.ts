import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relacion1',
  templateUrl: './relacion1.component.html',
  styleUrls: ['./relacion1.component.css']
})
export class Relacion1Component implements OnInit {

  public listaOrganizaciones: string[];
  public listaProyectos: string[];
  public organizacion_seleccionada: any;
  public proyecto_seleccionado: any;

  constructor() {

    this.listaOrganizaciones = ["Organizacion1", "Organizacion2", "Organizacion3", "Organizacion4"];
    this.listaProyectos = ["Proyecto1", "Proyecto2", "Proyecto3"];

    this.organizacion_seleccionada = '';
    this.proyecto_seleccionado = '';

  }

  ngOnInit(): void { }

  cargarOrganizaciones() {
    console.log(this.organizacion_seleccionada);
    console.log(this.proyecto_seleccionado);
  }
}
