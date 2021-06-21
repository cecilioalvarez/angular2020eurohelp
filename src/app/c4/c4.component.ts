import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-c4',
  templateUrl: './c4.component.html',
  styleUrls: ['./c4.component.css']
})
export class C4Component implements OnInit {

  persona:Persona;
  constructor() {

    this.persona= new Persona("pepe","perez",20,true,"java");


   }

  ngOnInit(): void {



  }

}
