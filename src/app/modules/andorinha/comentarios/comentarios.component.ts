import { Tweet } from './../../../shared/models/tweet';
import { Usuario } from './../../../shared/models/usuario';
import { ComentarioService } from './../../../shared/services/comentario.service';
import { ApiService } from './../../../shared/services/api.service';
import { Component, OnInit } from '@angular/core';
import { Comentario } from 'src/app/shared/models/comentario';
import { ComentarioSeletor } from 'src/app/shared/models/seletor/comentario.seletor';
import { SelectorListContext } from '@angular/compiler';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss']
})
export class ComentariosComponent implements OnInit {

  private idPagina: number;

  public comentario: Comentario = new Comentario();

  public comentarios: Comentario[] = new Array<Comentario>();

  private seletor: ComentarioSeletor;

  constructor(private api: ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.limparFormulario();
    this.activatedRoute.params.subscribe(p => {
      if (p.id) {
        this.idPagina = +p.id;
        this.montarTweet(this.idPagina);
        this.pesquisarComentarios(this.idPagina);
      }
    });
  }

  pesquisarComentarios(id: number) {
    this.seletor = new ComentarioSeletor;
    this.seletor.idTweet = id;
    this.api.comentario().pesquisar(this.seletor).subscribe(comentarios => {
      this.comentarios = comentarios;
    }, erro => {
      alert("Não foi possível resgatar comentário");
    }
    );
  }

  comentar() {
    this.api.comentario().inserir(this.comentario).subscribe(t => {
      this.limparFormulario();
      this.pesquisarComentarios(this.idPagina);
    });
  }

  limparFormulario() {
    let user: Usuario = new Usuario();
    user.id = 3;
    user.nome = "Leonardo X";
    this.comentario.usuario = user;
  }

  montarTweet(id: number) {
    return this.api.tweet().consultar(id).subscribe(t => {
      this.comentario.tweet = t;
    });
  }
}