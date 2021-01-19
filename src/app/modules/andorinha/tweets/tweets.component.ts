import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { Tweet } from 'src/app/shared/models/tweet';
import { Usuario } from 'src/app/shared/models/usuario';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.scss']
})
export class TweetsComponent implements OnInit {

  public tweet: Tweet = new Tweet();

  public tweets: Array<Tweet> = new Array<Tweet>();

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.limparFormulario();
    this.listarTweets();
  }

  limparFormulario(): void {
    this.tweet = new Tweet();
    let user: Usuario = new Usuario();
    user.id = 3;
    user.nome = "Leonardo X";
    this.tweet.usuario = user;
  }

  listarTweets(): void {
    this.api.tweet().listarTodos().subscribe(tweets => {
      this.tweets = tweets;
    });
  }

  tweetar(): void {
    //chamar o backend
    this.api.tweet().inserir(this.tweet).subscribe(t => {
      this.limparFormulario();
      this.listarTweets();
    });
  }

}
