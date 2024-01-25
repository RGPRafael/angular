import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from '../cadastro-hunter/service.service';
import { Usuario } from '../login/Usuario';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  @Input() usuario : Usuario = {
    "email": '', // property binding
    "senha":'',
  }

  constructor(private  service : ServiceService) { }

  ngOnInit(): void {
  }

  RegistrarNovoUsuario(){
    this.service.RegistrarNovoUsuario(this.usuario).subscribe()

  }

}
