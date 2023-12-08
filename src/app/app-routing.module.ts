import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroHunterComponent } from './componentes/cadastro-hunter/cadastro-hunter.component';
import { EditarhunterComponent } from './componentes/ListarTodosHunters/ListarTodosHunters.component';
import { ExcluirhunterComponent } from './componentes/excluirhunter/excluirhunter.component';
import { MenuinicialComponent } from './componentes/menuinicial/menuinicial.component';
import { AtualizarHunterComponent } from './componentes/atualizar-hunter/atualizar-hunter.component';

const routes: Routes = [

  { 
    path: '', component: MenuinicialComponent 
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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
