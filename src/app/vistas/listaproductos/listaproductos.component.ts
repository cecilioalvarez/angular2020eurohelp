import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/dominio/producto';

@Component({
  selector: 'app-listaproductos',
  templateUrl: './listaproductos.component.html',
  styleUrls: ['./listaproductos.component.css']
})
export class ListaproductosComponent implements OnInit {

  listaProductos:Producto[]=[];


  constructor() { }

  ngOnInit(): void {
  }

}
