import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { C3Component } from './c3/c3.component';
import { C4Component } from './c4/c4.component';
import { C5Component } from './c5/c5.component';
import { ListaproductosComponent } from './vistas/listaproductos/listaproductos.component';
import { VistaLibrosComponent } from './vistas/vista-libros/vista-libros.component';
import { ListaLibrosComponent } from './vistasrouter/lista-libros/lista-libros.component';
import { FormularioNuevoLibrosComponent } from './vistasrouter/formulario-nuevo-libros/formulario-nuevo-libros.component';
import { DetalleLibroComponent } from './vistasrouter/detalle-libro/detalle-libro.component';



@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    C2Component,
    C3Component,
    C4Component,
    C5Component,
    ListaproductosComponent,
    VistaLibrosComponent,
    ListaLibrosComponent,
    FormularioNuevoLibrosComponent,
    DetalleLibroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
