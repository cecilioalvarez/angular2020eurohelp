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
  constructor(private librosService:LibrosRESTService) { 

      librosService.buscarTodos().then((datos)=> {

          console.log(datos);
      })
  }

  ngOnInit(): void {
  }

}
