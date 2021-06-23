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
  
  nuevo:Libro;

  constructor(private librosService:LibrosRESTService) { 
    this.nuevo={} as Libro;

      librosService.buscarTodos().then( (datos)=> {

          this.listaLibros=datos;
      })
  }
  insertar(libro:Libro) {

    
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
