import { Component,Input, OnInit } from '@angular/core';
import { ServiceService } from '../cadastro-hunter/service.service';
import { ChecarSenha } from '../criarnovasenha/ChecarSenha';

@Component({
  selector: 'app-criarnovasenha',
  templateUrl: './criarnovasenha.component.html',
  styleUrls: ['./criarnovasenha.component.css']
})
export class CriarnovasenhaComponent implements OnInit {

  @Input() checarSenha : ChecarSenha = {
    "novasenha": '', // property binding
    "novasenhadenovo":'',
  }

  constructor(private  service : ServiceService) { }

  ngOnInit(): void {
  }

  CriarNovaSenha(){
    this.service.CriarNovaSenha(this.checarSenha)
  }

}
