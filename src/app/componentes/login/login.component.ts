import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from '../cadastro-hunter/service.service';
import { Usuario } from './Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  @Input() usuario : Usuario = {
    "email": '', // property binding
    "senha":'',
  }

  private usuarioLogado: boolean =  false;
  private resposta: boolean =  false;

  constructor( private service : ServiceService) { }

  Entrar(){
    
    this.service.Entrar(this.usuario).subscribe(
      (retorno: string ) => {
        console.log("Entrar retorno" , retorno)

        if (retorno == 'success') {
          console.log("Entrar retorno2" , retorno)
          this.resposta = true;
          this.usuarioLogado = true;
        } else {
          this.resposta = false;
          this.usuarioLogado = false;
        }
      }
    );
   
  }

  isLogado():boolean{
    return  this.usuarioLogado ;

  }
  esqueceuSenha(){
    this.service.esqueceuSenha(this.usuario.email)
  }


  ngOnInit(): void {
  }

}
