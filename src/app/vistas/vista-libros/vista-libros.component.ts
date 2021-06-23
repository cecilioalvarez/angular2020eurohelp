import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/dominio/libro';
import { LibrosRESTService } from 'src/app/servicios/libros-rest.service';

@Component({
  selector: 'app-vista-libros',
  templateUrl: './vista-libros.component.html',
  styleUrls: ['./vista-libros.component.css']
})
export class VistaLibrosComponent implements OnInit {

  listaLibros:Libro[]=[]
  seleccionado:Libro;
  nuevo:Libro;
  editable:Libro;
  constructor(private librosService:LibrosRESTService) { 
    this.nuevo={} as Libro;
    this.seleccionado={} as Libro;
    this.editable={} as Libro;

      librosService.buscarTodos().then( (datos)=> {

          this.listaLibros=datos;
      })
  }

  editar(libro:Libro) {
    //let libroSalvar={} as Libro;
    
    Object.assign(this.editable,libro)

    

  }

  salvar () {
   
    this.librosService.actualizar(this.editable)
    .then(()=> this.librosService.buscarTodos())
    .then((datos)=>this.listaLibros=datos);
  }

  detalle (libro:Libro) {

      //this.librosService.buscarUno(libro.isbn).then((libro)=> {

        this.seleccionado=libro;
      //})
  }


  insertar(libro:Libro) {

      this.librosService
      .insertar(libro)
      .then(()=> this.librosService.buscarTodos())
      .then((datos)=>this.listaLibros=datos);
        
    
  }

  borrar(libro:Libro):void {
    
    //piramide de DOM , es cuando nosotros por temas de progrmación asincrona
    //combinamos unas llamadas ajax con otras llamadas ajax

    this.librosService.borrar(libro)
    .then(()=>this.librosService.buscarTodos())
    .then((datos)=>this.listaLibros=datos);
    /*
    this.librosService.borrar(libro).then((datos)=> {
        //esta bastante mal construido
        this.librosService.buscarTodos().then((datos)=> {

          
        })
    })
    */
  }
  ngOnInit(): void {
  }

}
