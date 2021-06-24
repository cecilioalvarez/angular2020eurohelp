import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/dominio/libro';
import { LibrosRESTService } from 'src/app/servicios/libros-rest.service';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.css']
})
export class ListaLibrosComponent implements OnInit {

  listaLibros: Libro[] = []
  constructor(private librosService: LibrosRESTService) {

    librosService.buscarTodos().subscribe((datos) => {
      this.listaLibros = datos;
    })

   }

  ngOnInit(): void {
  }

}
