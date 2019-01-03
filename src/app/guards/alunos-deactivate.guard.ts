import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AlunosFormComponent } from '../alunos/alunos-form/alunos-form.component';
import { IFomCanDeactivate } from './Iform-candeactivate';

@Injectable({
  providedIn: 'root'
})
export class AlunosDeactivateGuard implements CanDeactivate<IFomCanDeactivate> {
  canDeactivate(
    component: IFomCanDeactivate,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    // return component.podeDesativar ? component.podeDesativar() : true;
    return component.podeDesativar();
  }
}

