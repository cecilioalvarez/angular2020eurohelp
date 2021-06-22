import { Injectable } from '@angular/core';
import { Producto } from '../dominio/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  listaProductos:Producto[]=[];
  
  constructor() { 

    this.listaProductos.push(new Producto(1,"ordenador2",200));
    this.listaProductos.push(new Producto(2,"tablet2",300));
    this.listaProductos.push(new Producto(3,"auricular2",50));

  }
  //patrón repository el metodo de findAll
  public buscarTodos():Producto[] {

    return this.listaProductos;
  }
  public borrar(producto:Producto):void {

    let posicion=this.listaProductos.indexOf(producto);
    this.listaProductos.splice(posicion,1);
  }

}
