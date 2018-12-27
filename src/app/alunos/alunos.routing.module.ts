
import { NgModule } from '@angular/core';
import { RouterModule, CanDeactivate } from '@angular/router';

import { AlunosDetalheComponent } from './alunos-detalhe/alunos-detalhe.component';
import { AlunosComponent } from './alunos.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AuthGuard } from '../guards/auth.guard';
import { AlunosDeactivateGuard } from './../guards/alunos-deactivate.guard';

const alunosRoutes = [
    {path: 'alunos', component: AlunosComponent, canActivate: [AuthGuard], children: [
        { path: 'novo', component: AlunosFormComponent},
        { path: ':id', component: AlunosDetalheComponent},
        { path: ':id/editar', component: AlunosFormComponent, CanDeactivate: [AlunosDeactivateGuard]}
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule]
})

export class AlunosRoutingModule { }