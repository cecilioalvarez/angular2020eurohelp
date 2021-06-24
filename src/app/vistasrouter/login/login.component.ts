import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/dominio/usuario';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario:Usuario;

  constructor(private loginService:LoginService) { 

    this.usuario ={} as Usuario;
  }

  ngOnInit(): void {

  }

  validar(usuario:Usuario) {

    this.loginService.login(usuario).subscribe((token:any)=> {

        console.log(token);
    });
      
  }

}
