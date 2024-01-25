import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroHunterComponent } from './componentes/cadastro-hunter/cadastro-hunter.component';
import { EditarhunterComponent } from './componentes/ListarTodosHunters/ListarTodosHunters.component';
import { ExcluirhunterComponent } from './componentes/excluirhunter/excluirhunter.component';
import { MenuinicialComponent } from './componentes/menuinicial/menuinicial.component';
import { AtualizarHunterComponent } from './componentes/atualizar-hunter/atualizar-hunter.component';
import { LoginComponent } from './componentes/login/login.component';
import { CadastroUsuarioComponent } from './componentes/cadastro-usuario/cadastro-usuario.component';
import { RedefinirSenhaComponent } from './componentes/redefinir-senha/redefinir-senha.component';
import { SenhaProvisoriaComponent } from './componentes/senha-provisoria/senha-provisoria.component';
import { NovaSenhaComponent } from './componentes/nova-senha/nova-senha.component';
import { CriarnovasenhaComponent } from './componentes/criarnovasenha/criarnovasenha.component';

const routes: Routes = [

  { 
    path: '', component: LoginComponent 
  },

  {
    path:'Cadastrar novo Hunter', component: CadastroHunterComponent
    
  },
  { 
    path: 'Editar Hunter', component: EditarhunterComponent
  },
  { 
    path: 'Excluir Hunter',  component: ExcluirhunterComponent 
  },

  { path: 'atualizar-hunter/:id', component: AtualizarHunterComponent },


  { path: 'cadastroUsuario', component: CadastroUsuarioComponent },

  { path: 'Redefinir Senha', component: RedefinirSenhaComponent },

  { path: 'Menu Inicial', component: MenuinicialComponent },


  { path: 'SenhaProvisoria', component: SenhaProvisoriaComponent },
  
  { path: 'Nova Senha', component: NovaSenhaComponent },

  { path: 'CriarNovaSenha', component: CriarnovasenhaComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
