import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
//import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
//import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
//import { CursosService } from './cursos/cursos.service';
//import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';

import { CursosModule } from './cursos/cursos.module';
import { AlunosModule } from './alunos/alunos.module';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    //CursosComponent,
    LoginComponent,
    PaginaNaoEncontradaComponent,
    //CursoDetalheComponent,
    //CursoNaoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AlunosModule,
    CursosModule, // Modoulo de funcionalidade
    AppRoutingModule
  ],
  providers: [AuthService, AuthGuard],
  //providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
