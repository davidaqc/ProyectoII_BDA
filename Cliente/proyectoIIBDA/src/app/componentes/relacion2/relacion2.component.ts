import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relacion2',
  templateUrl: './relacion2.component.html',
  styleUrls: ['./relacion2.component.css']
})
export class Relacion2Component implements OnInit {

  public listaVoluntarios: string[];
  public listaProyectos: string[];
  public voluntario_seleccionada: any;
  public proyecto_seleccionado: any;

  constructor() {

    this.listaVoluntarios = ["Voluntario1", "Voluntario2"];
    this.listaProyectos = ["Proyecto1", "Proyecto2", "Proyecto3"];

    this.voluntario_seleccionada = '';
    this.proyecto_seleccionado = '';

  }

  ngOnInit(): void { }

  cargarOrganizaciones() {
    console.log(this.voluntario_seleccionada);
    console.log(this.proyecto_seleccionado);
  }

}
