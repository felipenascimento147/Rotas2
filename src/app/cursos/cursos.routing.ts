import { AuthGuard } from './../guards/auth.guard';

import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';


import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';

const cursosRoutes: Routes = [
  { path: 'cursos', component: CursosComponent, canActivate: [AuthGuard]},
  { path: 'curso/:id', component: CursoDetalheComponent, canActivate: [AuthGuard] },
  { path: 'naoEncontrado', component: CursoNaoEncontradoComponent, canActivate: [AuthGuard]}
];

@NgModule({
    imports: [ RouterModule.forChild(cursosRoutes)],
    exports: [RouterModule],
  declarations: []
})
export class CursosRoutingModule{ }

