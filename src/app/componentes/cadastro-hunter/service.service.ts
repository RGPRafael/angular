import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http'
import { Cadastro } from './Cadastro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private readonly API = 'http://localhost:8080/hunters';

  // acesso aos metodos
  constructor(private http: HttpClient) { }

  cadastrar( cadastro : Cadastro) : Observable <Cadastro>{
     console.log("service ");
     console.log(cadastro);
     return this.http.post<Cadastro>(this.API, cadastro)
  }
  cancelar(){

  }
}
