import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Libro } from 'src/app/dominio/libro';
import { LibrosRESTService } from 'src/app/servicios/libros-rest.service';

@Component({
  selector: 'app-detalle-libro',
  templateUrl: './detalle-libro.component.html',
  styleUrls: ['./detalle-libro.component.css']
})
export class DetalleLibroComponent implements OnInit {
  seleccionado:Libro;
  constructor(private servicio:LibrosRESTService ,private route:ActivatedRoute) { 

    this.seleccionado={} as Libro;

    this.route.paramMap.subscribe((parametros)=> {

        let isbn:any= parametros.get("isbn");
        this.servicio.buscarUno(isbn).subscribe((datos)=> {

              this.seleccionado=datos;
        })

    })


  }

  ngOnInit(): void {
  }

}
