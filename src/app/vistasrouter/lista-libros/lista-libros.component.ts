import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Libro } from 'src/app/dominio/libro';
import { LibrosRESTService } from 'src/app/servicios/libros-rest.service';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.css']
})
export class ListaLibrosComponent implements OnInit {

  listaLibros: Libro[] = []
  constructor(private librosService: LibrosRESTService,private router:Router) {

    librosService.buscarTodos().subscribe((datos) => {
      this.listaLibros = datos;
    })


  }
  detalle(libro:Libro) {

      this.router.navigate(["detalle",libro.isbn]);
  }

  ngOnInit(): void {
  }

}
