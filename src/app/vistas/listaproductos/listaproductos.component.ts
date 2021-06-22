import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/dominio/producto';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-listaproductos',
  templateUrl: './listaproductos.component.html',
  styleUrls: ['./listaproductos.component.css']
})
export class ListaproductosComponent implements OnInit {
  //me declaro la variable
  listaProductos:Producto[];
  nuevo:Producto;
  seleccionado:Producto;
  vistaActiva:string="listaProductos"
  //inyeccion de dependencia 
  // con angular como framework

  constructor(public productoService:ProductosService) { 
    this.nuevo= {} as Producto;
    this.seleccionado={} as Producto;
    // porque ya no es el componente el encargado de gestionar el producto
    // sino que lo hacemos a traves de una lista
   this.listaProductos=productoService.buscarTodos();

  }
  editarProducto(producto:Producto) {
    this.vistaActiva="editarProductos";
    this.seleccionado=producto;
  }
  nuevoProducto() {
      this.vistaActiva="formularioProductos";
  }
  salvar() {
    this.vistaActiva="listaProductos";
  }
  verDetalle(producto:Producto) {
    
    this.vistaActiva="detalle";
    this.seleccionado=producto;

  }
  // el que esta en el componente
  insertar() {
    // es un array y referencia al objeto
  
    this.productoService.insertar(this.nuevo);
    this.nuevo={} as Producto;
    this.vistaActiva="listaProductos";

  }
  borrar(producto:Producto) {
   
    this.productoService.borrar(producto);
  }

  ngOnInit(): void {
  }

}
