import { environment } from './../../../environments/environment';
import { ComentarioSeletor } from './../models/seletor/comentario.seletor';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comentario } from '../models/comentario';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  private url = environment.urls.urlApi;

  constructor(private http: HttpClient) { }

  listar(): Observable<Array<Comentario>> {
    return this.http
      .get<Array<Comentario>>(`${this.url}/comentario`);
  }

  inserir(comentario: Comentario): Observable<Comentario> {
    return this.http
      .post<Comentario>(`${this.url}/comentario`, comentario);
  }

  pesquisar(seletor: ComentarioSeletor): Observable<Array<Comentario>> {
    return this.http
      .post<Array<Comentario>>(`${this.url}/comentario/pesquisar`, seletor);
  }
}
