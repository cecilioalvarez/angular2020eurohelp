import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleLibroComponent } from './vistasrouter/detalle-libro/detalle-libro.component';
import { FormularioNuevoLibrosComponent } from './vistasrouter/formulario-nuevo-libros/formulario-nuevo-libros.component';
import { ListaLibrosComponent } from './vistasrouter/lista-libros/lista-libros.component';

const routes: Routes = [

  {path:"lista",component:ListaLibrosComponent},
  {path:"formularionuevo",component:FormularioNuevoLibrosComponent},
  {path:"detalle/:isbn",component:DetalleLibroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
