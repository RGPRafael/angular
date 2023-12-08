import { Injectable } from '@angular/core';
import{HttpParams , HttpClient} from '@angular/common/http'
import { Cadastro } from './Cadastro';
import { Observable } from 'rxjs';
import { Hunter } from 'src/app/models/hunter.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private readonly API = 'http://localhost:8080/hunters';

  // acesso aos metodos
  constructor(private http: HttpClient) { }

  cadastrar( cadastro : Cadastro) : Observable <Cadastro>{
     return this.http.post<Cadastro>(this.API, cadastro)
  }
  cancelar(){

  }
  getHunterById(id: number): Observable<Hunter>{
    return this.http.get<Hunter>(`${this.API}/${id}`);
  }
  atualizar(id: number, hunter : Hunter): Observable<any>{
    return this.http.put(`${this.API}/${id}`, hunter);
  }
  excluir(id: number): Observable<any>{
    console.log(this.http.delete(`${this.API}/${id}`))
    return this.http.delete(`${this.API}/${id}`); 
  }
   

  buscarTodos(escolha:boolean): Observable<Hunter[]>{
    if(escolha){
      let queryParams = new HttpParams();
      console.log(escolha)
      queryParams = queryParams.append("escolha",escolha);
      return this.http.get<Hunter[]>(this.API,{params:queryParams})
    }
    return this.http.get<Hunter[]>(this.API)
  }
  ativarHunter(id: number):Observable<any> {
    return this.http.put(`${this.API}/ativar/${id}`, id);
  }
}
