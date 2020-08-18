import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/shared/models/usuario';

@Component({
  selector: 'app-usuario-detalhe',
  templateUrl: './usuario-detalhe.component.html',
  styleUrls: ['./usuario-detalhe.component.scss']
})
export class UsuarioDetalheComponent implements OnInit {

  usuario: Usuario;

  constructor() { }

  ngOnInit() {
    this.usuario = new Usuario();
  }

}
