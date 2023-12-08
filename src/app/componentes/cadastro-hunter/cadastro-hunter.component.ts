import { Component, Input, OnInit } from '@angular/core';
import { Cadastro } from './Cadastro';
import { ServiceService } from './service.service';


@Component({
  selector: 'app-cadastro-hunter',
  templateUrl: './cadastro-hunter.component.html',
  styleUrls: ['./cadastro-hunter.component.css']
})
export class CadastroHunterComponent implements OnInit {


  @Input() cadastro : Cadastro = {
    "nome": '', // property binding
    "descricao":'',
    "estrelas":'',
    "provasfeitas": '',
    "temlicenca":false,
    "nem": '',
    "pais": '',
    "continente": '',
    "localizacaoconhecida": false

  }
  constructor(private  service : ServiceService) { }

  ngOnInit(): void { // carregado assim q o componente é carregado faz parte da loggica
  }

  //event binding
  cadastrar(){
    console.log(this.cadastro)
     this.service.cadastrar(this.cadastro).subscribe()
  }
  cancelar(){
    console.log("cancelar")
  }

}
