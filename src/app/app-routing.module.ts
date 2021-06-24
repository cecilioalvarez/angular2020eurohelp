import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioNuevoLibrosComponent } from './vistasrouter/formulario-nuevo-libros/formulario-nuevo-libros.component';
import { ListaLibrosComponent } from './vistasrouter/lista-libros/lista-libros.component';

const routes: Routes = [

  {path:"lista",component:ListaLibrosComponent},
  {path:"formularionuevo",component:FormularioNuevoLibrosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
