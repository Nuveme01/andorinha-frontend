import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tweet } from '../models/tweet';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})
export class TweetService {

    private url = environment.urls.urlApi;

    constructor(private http: HttpClient) { }

    listarTodos(): Observable<Array<Tweet>> {
        return this.http.get<Array<Tweet>>(`${this.url}/tweet`);
    }

    inserir(tweet: Tweet): Observable<Tweet> {
        return this.http.post<Tweet>(`${this.url}/tweet`, tweet);
    }

    consultar(id: number): Observable<Tweet> {
        return this.http.get<Tweet>(`${this.url}/tweet/${id}`);
    }

}