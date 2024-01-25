import { Injectable } from '@angular/core';
import{HttpParams , HttpClient, HttpResponse} from '@angular/common/http'
import { Cadastro } from './Cadastro';
import { Observable, Subject, map } from 'rxjs';
import { Hunter } from 'src/app/models/hunter.model';
import { Usuario } from '../login/Usuario';
import { Router } from '@angular/router';
import { ChecarSenha } from '../criarnovasenha/ChecarSenha';

 
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private readonly API = 'http://localhost:8080/hunters';
  private readonly API_users = 'http://localhost:8080/usuarios';
  private email = '';
  private usuariologado: boolean = false
  private usuariologadoSubject: Subject<boolean> = new Subject<boolean>();
 

  // acesso aos metodos
  constructor(private http: HttpClient,  private router: Router) { 


  }

 
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


  /*getDropdownData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API}/getPaises`);
  } */

  deleteRecords(ids: number[]): Observable<void> {
    const deleteUrl = `${this.API}/deleteallSelect`;
    return this.http.delete<void>(deleteUrl, { params: { ids: ids.join(',') } });
  }


  ativarHunter(id: number):Observable<any> {
    return this.http.put(`${this.API}/ativar/${id}`, id);
  }
/*----------------------------------------------------------------------------------------------------------*/

  Entrar(usuario : Usuario) : Observable <string> {
    //console.log(usuario.email + usuario.senha)
    
    return this.http.post<string>(this.API_users + '/Entrar', usuario).pipe(
      map((response) => {
        // Your comparison logic using if and else
        if (response) {
          console.log ("Entrar service " , response);
          this.usuariologado =true;
        } else {
          console.log(response);
          this.usuariologado = false;
        }
        return this.usuariologado ? 'success' : 'failure';
      })
    );
  }


  isLogado(): boolean {
    return this.usuariologado;
  }

  RegistrarNovoUsuario(usuario : Usuario) : Observable <Usuario>{
    //console.log(usuario.email + usuario.senha)
    return this.http.post<Usuario>(this.API_users, usuario)

  }
  
  esqueceuSenha( email : string){
    this.email = email;
      this.http.get<string>(`${this.API_users}/EsqueceuSenha?email=${email}`).subscribe(
        (passwordProvisory: string) => {
          console.log(passwordProvisory ) ;
            if (passwordProvisory === 'NotFound') {
                this.router.navigate(['/cadastroUsuario']); 
            } else {
              console.log(passwordProvisory ) ;
              this.router.navigate(['/SenhaProvisoria']); 
            }
        },
        (error) => {
            console.error('Error fetching provisional password:', error);
            // Handle error cases if necessary
        }
    );
    
  }

  VerificarSenhaProvisoria(usuario: Usuario) {
    const params = new HttpParams()
      .set('senha', usuario.senha)
      .set('email', usuario.email);

      console.log(usuario.email)
      console.log(usuario.senha)

    this.http.get<string>(`${this.API_users}/verificar`, 
    { params: params}).subscribe(

      // nao esta redirecnioannado
      
      (passwordProvisory: string) => {
        console.log(passwordProvisory ) ;
          if (passwordProvisory === 'Senha errada') {
              console.log(passwordProvisory ) ;
              this.router.navigate(['/cadastroUsuario']); // tentar de novo 
          } else if( passwordProvisory === 'Senha expirou') {
            console.log(passwordProvisory ) ;
            this.router.navigate(['/SenhaProvisoria']); // rediricionar para gerar senha de novo
          }
          else{
            console.log(passwordProvisory ) ;
            this.router.navigate(['/CriarNovaSenha']); // rediricionar para gerar senha de novo

          }
      },
      (error) => {
          console.error('Error fetching password:', error);
          // Handle error cases if necessary
      }




    );

    
  }

  CriarNovaSenha(checarSenha: ChecarSenha)  {

    const body  = {
      email: this.email,
      novasenha: checarSenha.novasenha,
      novasenhadenovo: checarSenha.novasenhadenovo
    }

      console.log(this.email)
      console.log(checarSenha.novasenha)
      console.log(checarSenha.novasenhadenovo)

      this.http.put<string>(`${this.API_users}/atualizarSenha`, 
      body ).subscribe(

        (passwordProvisory: string) => {
          console.log(passwordProvisory ) ;
            if (passwordProvisory === 'senhas nao sao iguais') {
                //this.router.navigate(['/cadastroUsuario']); // tentar de novo 
            } 
            
            else{
              this.router.navigate(['/']);
  
            }
        },
        (error) => {
            console.error('Error fetching password:', error);
            // Handle error cases if necessary
        }


      )

  }

}
