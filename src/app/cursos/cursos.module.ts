import { NgModule } from '@angular/core';
//import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// Componentes 
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';

// Serviços
import { CursosService } from './cursos.service';

// Modulos de rotas
import { CursosRoutingModule } from './cursos.routing';

@NgModule({
    imports: [
        CommonModule,
        CursosRoutingModule
        //RouterModule
    ],
    exports: [],
    declarations: [
        CursosComponent,
        CursoDetalheComponent,
        CursoNaoEncontradoComponent
    ],
    providers: [CursosService],
})

export class CursosModule {}
