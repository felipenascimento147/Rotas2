import { Usuario } from './usuario';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostrarMenueEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){
    if (usuario.nome === 'usuario@email.com' && usuario.senha === '123456'){
        this.usuarioAutenticado = true;
        this.mostrarMenueEmitter.emit(true);

        this.router.navigate(['/']);
    }else{
      this.usuarioAutenticado = false;
      this.mostrarMenueEmitter.emit(false);
    }
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }
}
