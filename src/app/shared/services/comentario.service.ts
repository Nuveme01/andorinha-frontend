import { ComentarioSeletor } from './../models/seletor/comentario.seletor';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comentario } from '../models/comentario';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Array<Comentario>> {
    return this.http
      .get<Array<Comentario>>("http://localhost:8080/andorinha-backend/api/comentario");
  }

  inserir(comentario: Comentario): Observable<Comentario> {
    return this.http
      .post<Comentario>("http://localhost:8080/andorinha-backend/api/comentario", comentario);
  }

  pesquisar(seletor: ComentarioSeletor): Observable<Array<Comentario>> {
    return this.http
      .post<Array<Comentario>>("http://localhost:8080/andorinha-backend/api/comentario/pesquisar", seletor);
  }
}
