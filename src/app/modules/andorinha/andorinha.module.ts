import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TweetsComponent } from './tweets/tweets.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ComentariosComponent } from './comentarios/comentarios.component';

@NgModule({
  declarations: [TweetsComponent, ComentariosComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ]
})
export class AndorinhaModule { }
