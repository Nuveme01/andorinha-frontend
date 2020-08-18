import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Resultado } from '../models/util/resultado';
import { Observable, of } from 'rxjs';
import {UsuarioSeletor} from '../models/seletor/usuario.seletor';


const USUARIOS = [
];

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  pesquisar(seletor: UsuarioSeletor): Observable<Resultado<Usuario>> {
    return of( new Resultado<Usuario>().of(this.paginar( USUARIOS, seletor.limite, seletor.pagina ), USUARIOS.length) );
  }

  private paginar( array: Array<Usuario>, limite: number, pagina: number ): Array<Usuario>{
    return array.slice( (pagina - 1) * limite, (pagina) * limite);
  }
}
