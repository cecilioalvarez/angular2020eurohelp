import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/dominio/producto';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-listaproductos',
  templateUrl: './listaproductos.component.html',
  styleUrls: ['./listaproductos.component.css']
})
export class ListaproductosComponent implements OnInit {

  listaProductos:Producto[]=[];
  nuevo:Producto;
  //inyeccion de dependencia 
  // con angular como framework

  constructor(public productoService:ProductosService) { 
    this.nuevo= {} as Producto;
    // porque ya no es el componente el encargado de gestionar el producto
    // sino que lo hacemos a traves de una lista
   this.listaProductos=productoService.buscarTodos();

  }
  insertar() {
    // es un array y referencia al objeto
    this.listaProductos.push(this.nuevo);
    //formulario como nuevo, que no es ni mas ni menos que este producto
    //genera un nuevo objeto vacio
    this.nuevo={} as Producto;

  }
  borrar(producto:Producto) {
   
    this.productoService.borrar(producto);
  }

  ngOnInit(): void {
  }

}
