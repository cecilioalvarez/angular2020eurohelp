import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/dominio/libro';

@Component({
  selector: 'app-detalle-libro',
  templateUrl: './detalle-libro.component.html',
  styleUrls: ['./detalle-libro.component.css']
})
export class DetalleLibroComponent implements OnInit {
  seleccionado:Libro;
  constructor() { 

    this.seleccionado={} as Libro;
  }

  ngOnInit(): void {
  }

}
