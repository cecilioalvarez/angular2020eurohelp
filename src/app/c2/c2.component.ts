import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';


@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {

  contador:number=0;
  paisaje:string="assets/imagen1.jpeg";
  persona:Persona;
  constructor() {

    this.persona= new Persona("pedro","perez",20);
   }

  ngOnInit(): void {
  }

  incrementar() {
    this.contador++;

  }
  decrementar() {

    this.contador--;
  }
}
