import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {
  // variable que me declaro dentro de la clase de typescript
  // anivel del componente
  mensaje:string="hola desde typescript"
  constructor() { }

  ngOnInit(): void {
  }
  mensajeHola() {

      alert("hola");
  }

  cambiarTexto() {

    this.mensaje="otro texto";
  }
}
