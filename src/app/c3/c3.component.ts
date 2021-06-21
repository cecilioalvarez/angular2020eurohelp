import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3Component implements OnInit {

  listaPersonas:Persona[]=[];
  // que yo voy a seleccionar
  personaSeleccionada?:Persona;
  mostrar:boolean=true;

  constructor() {

    this.listaPersonas.push(new Persona("pepe","perez",20),new Persona("ana","gomez",30));
    this.listaPersonas.push(new Persona("maria","sanchez",40),new Persona("angel","perez",70));
    this.listaPersonas.push(new Persona("gema","gomez",30),new Persona("ana","blanca",30));


   }

seleccionar(p:Persona) {

  this.personaSeleccionada=p;
}


  ngOnInit(): void {


  }

  ver() {

    this.mostrar=true;
  }
  ocultar() {
    this.mostrar=false;
  }

}
