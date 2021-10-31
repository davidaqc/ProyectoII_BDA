import { Component, OnInit } from '@angular/core';

import { Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router'; // Importar

@Component({
  selector: 'app-consulta1',
  templateUrl: './consulta1.component.html',
  styleUrls: ['./consulta1.component.css']
})
export class Consulta1Component implements OnInit {

  constructor(private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
