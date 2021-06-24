import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../dominio/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  public login (usuario:Usuario) : Observable<any> {

    return this.http.post<any>("http://localhost:3000/login",usuario);
  }
}
