import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from '../login/Usuario';
import { ServiceService } from '../cadastro-hunter/service.service';

@Component({
  selector: 'app-nova-senha',
  templateUrl: './nova-senha.component.html',
  styleUrls: ['./nova-senha.component.css']
})
export class NovaSenhaComponent implements OnInit {

  @Input() usuario : Usuario = {
    "email": '', // property binding
    "senha":'',
  }

  constructor(private service : ServiceService) { }

  ngOnInit(): void {
  }
  VerificarSenhaProvisoria(){  
    console.log("here1")
    this.service.VerificarSenhaProvisoria(this.usuario);
  }
  esqueceuSenha(){
     //this.service.esqueceuSenha(this.email).subscribe();
  }

}
