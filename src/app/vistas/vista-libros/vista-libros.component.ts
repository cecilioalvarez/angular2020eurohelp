import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/dominio/libro';
import { LibrosRESTService } from 'src/app/servicios/libros-rest.service';
import { mergeMap, map } from "rxjs/operators";
import { Subject } from 'rxjs';
@Component({
  selector: 'app-vista-libros',
  templateUrl: './vista-libros.component.html',
  styleUrls: ['./vista-libros.component.css']
})
export class VistaLibrosComponent implements OnInit {

  listaLibros: Libro[] = []
  seleccionado: Libro;
  nuevo: Libro;
  editable: Libro;
  // porque yo diseño un observable desde cero
  observable = new Subject<KeyboardEvent>();

  filtro: string = "";

  constructor(private librosService: LibrosRESTService) {

    this.nuevo = {} as Libro;
    this.seleccionado = {} as Libro;
    this.editable = {} as Libro;

    // es otra transformación que se encargue de convertir el mensaje
    // en una llamada ajax y esa llamada ajax se traiga lso datos
   
      this.observable.pipe(map((event: any) => {
        //transformame el evento en el texto que hay en la caja
        return event.target.value;

      })).pipe(mergeMap((event: any) => {

        return this.librosService.buscarPorConcepto(this.filtro);

      })).subscribe((datos) => this.listaLibros = datos);
      
      /*
      librosService.buscarTodos().subscribe((datos) => {
        this.listaLibros = datos;
      })*/
    
  }

  editar(libro: Libro) {
    //let libroSalvar={} as Libro;

    Object.assign(this.editable, libro)



  }

  salvar() {

    this.librosService.actualizar(this.editable)
      .pipe(mergeMap(e => this.librosService.buscarTodos()))
      .subscribe((datos) => this.listaLibros = datos);
  }

  detalle(libro: Libro) {

    //this.librosService.buscarUno(libro.isbn).then((libro)=> {

    this.seleccionado = libro;
    //})
  }


  insertar(libro: Libro) {

    this.librosService
      .insertar(libro)
      .pipe(mergeMap(e => this.librosService.buscarTodos()))
      .subscribe((datos) => this.listaLibros = datos);


  }

  borrar(libro: Libro): void {

    this.
      librosService
      .borrar(libro)
      .pipe(mergeMap(e => this.librosService.buscarTodos()))
      .subscribe((datos) => this.listaLibros = datos);

  }
  ngOnInit(): void {
  }

}
