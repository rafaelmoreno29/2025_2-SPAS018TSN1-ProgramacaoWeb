import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Calculadora } from './calculadora/calculadora';
import { ListarCliente } from './listar-cliente/listar-cliente';
import { PaginaNaoEncontrada } from './pagina-nao-encontrada/pagina-nao-encontrada';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'calculadora', component: Calculadora },
  { path: 'listar-clientes', component: ListarCliente },
  { path: '**', component: PaginaNaoEncontrada }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
