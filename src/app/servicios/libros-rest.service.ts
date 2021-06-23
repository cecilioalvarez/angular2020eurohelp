import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Libro } from '../dominio/libro';

@Injectable({
  providedIn: 'root'
})
export class LibrosRESTService {

  constructor(private http: HttpClient) {

  }
// metodo buscar todos
  public buscarTodos(): Promise<Libro[]> {

    return this.http.get<Libro[]>("http://localhost:3000/libros").toPromise()

  }
}
