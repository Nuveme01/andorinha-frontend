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

  private ambiente: string = environment.ambiente;

  public comentario: Comentario = new Comentario();

  public comentarios: Comentario[] = new Array<Comentario>();

  private seletor: ComentarioSeletor;

  constructor(private api: ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    let user: Usuario = new Usuario();
    user.id = 3;
    user.nome = "Leonardo X";
    this.comentario.usuario = user;

    this.activatedRoute.params.subscribe(p => {
      if (p.id) {
        this.montarTweet(+p.id);
        this.pesquisarComentarios(+p.id);
        console.log(p);
      }
    });
  }

  pesquisarComentarios(id: number) {
    this.seletor = new ComentarioSeletor;
    this.seletor.idTweet = id;
    this.api.comentario().pesquisar(this.seletor).subscribe(comentarios => {
      this.comentarios = comentarios;
      console.log(this.comentarios);
    }, erro => {
      alert("Não foi possível resgatar comentário");
    }
    );
  }

  comentar(){
    console.log(this.comentario)
    this.api.comentario().inserir(this.comentario).subscribe(t =>{
      this.ngOnInit();
    });
  }

  montarTweet(id: number): Tweet {
    return this.api.tweet().consultar(id).subscribe(t => {
      this.comentario.tweet = t;
    });
  }
}