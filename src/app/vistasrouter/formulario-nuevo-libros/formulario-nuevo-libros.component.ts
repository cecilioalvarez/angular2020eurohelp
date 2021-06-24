import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Libro } from 'src/app/dominio/libro';
import { LibrosRESTService } from 'src/app/servicios/libros-rest.service';

@Component({
  selector: 'app-formulario-nuevo-libros',
  templateUrl: './formulario-nuevo-libros.component.html',
  styleUrls: ['./formulario-nuevo-libros.component.css']
})
export class FormularioNuevoLibrosComponent implements OnInit {
  nuevo: Libro;
  constructor(private librosService:LibrosRESTService,private router:Router) { 

    this.nuevo={} as Libro;
  }

  insertar(libro: Libro) {

    this.librosService.insertar(libro).subscribe(()=> {

        this.router.navigate(['lista']);
     
    });
    


  }
  

  ngOnInit(): void {
  }

}
