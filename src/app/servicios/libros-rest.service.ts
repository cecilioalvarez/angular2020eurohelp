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
  public buscarUno(isbn:string): Promise<Libro> {

    return this.http.get<Libro>(`http://localhost:3000/libros/${isbn}`).toPromise()

  }
  public borrar(libro:Libro):Promise<Libro> {

    return this.http.delete<Libro>(`http://localhost:3000/libros/${libro.isbn}`).toPromise();
  }

  public insertar(libro:Libro):Promise<Libro> {

    return this.http.post<Libro>(`http://localhost:3000/libros`,libro).toPromise();
  }
  public actualizar(libro:Libro):Promise<Libro> {

    return this.http.put<Libro>(`http://localhost:3000/libros/${libro.isbn}`,libro).toPromise();
  }
}
