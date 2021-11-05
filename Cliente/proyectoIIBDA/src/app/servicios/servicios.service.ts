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


}
