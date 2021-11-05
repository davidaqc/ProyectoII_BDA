import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private http: HttpClient) { }
  
  url: string = " https://localhost:3000/";

  ObtenerOrganizaciones() {
    let direccion = this.url + "organizaciones";
    return this.http.get(direccion);
  }

  ObtenerProyectos() {
    let direccion = this.url + "proyectos";
    return this.http.get(direccion);
  }

  ObtenerVoluntarios() {
    let direccion = this.url + "voluntarios";
    return this.http.get(direccion);
  }

  Relacion1(oNombre: string, pNombre: string) {
    let direccion = this.url + "organizaciones/proyectos";
    return this.http.post(direccion,
      {
        oName: oNombre,
        pName: pNombre
      });
  }

  Relacion2(vNombre: string, pNombre: string) {
    let direccion = this.url + "voluntarios/proyectos";
    return this.http.post(direccion,
      {
        vName: vNombre,
        pName: pNombre
      });
  }

  Consulta1(Nombre: string) {
    let direccion = this.url + "consultas/1";
    return this.http.post(direccion,
      {
        name: Nombre
      });
  }

  Consulta2(Nombre: string) {
    let direccion = this.url + "consultas/2";
    return this.http.post(direccion,
      {
        name: Nombre
      });
  }

  Consulta3() {
    let direccion = this.url + "consultas/3";
    return this.http.get(direccion);
  }

  Consulta4(Nombre: string) {
    let direccion = this.url + "consultas/4";
    return this.http.post(direccion,
      {
        name: Nombre
      });
  }

  Consulta5() {
    let direccion = this.url + "consultas/5";
    return this.http.get(direccion);
  }

}
