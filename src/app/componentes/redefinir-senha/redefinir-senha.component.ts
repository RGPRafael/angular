import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from '../cadastro-hunter/service.service';
import { Senha } from './Senha';

@Component({
  selector: 'app-redefinir-senha',
  templateUrl: './redefinir-senha.component.html',
  styleUrls: ['./redefinir-senha.component.css']
})
export class RedefinirSenhaComponent implements OnInit {

  
  
  constructor(private service : ServiceService, ) { }

  email : string = ''
  

  ngOnInit(): void { 
  }

  RedefinirSenha(){  
    //this.service.RedefinirSenha(this.senha).subscribe();
  }
  esqueceuSenha(){
     this.service.esqueceuSenha(this.email)
  }

}
