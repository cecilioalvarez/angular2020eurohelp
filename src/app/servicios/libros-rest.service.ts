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
  public buscarTodos(): Observable<Libro[]> {

    return this.http.get<Libro[]>("http://localhost:3000/libros");

  }
  public buscarUno(isbn:string): Observable<Libro> {

    return this.http.get<Libro>(`http://localhost:3000/libros/${isbn}`);

  }
  public borrar(libro:Libro):Observable<Libro> {

    return this.http.delete<Libro>(`http://localhost:3000/libros/${libro.isbn}`);
  }

  public insertar(libro:Libro):Observable<Libro> {

    return this.http.post<Libro>(`http://localhost:3000/libros`,libro);
  }
  public actualizar(libro:Libro):Observable<Libro> {

    return this.http.put<Libro>(`http://localhost:3000/libros/${libro.isbn}`,libro);
  }
}
