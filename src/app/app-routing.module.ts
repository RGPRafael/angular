import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroHunterComponent } from './componentes/cadastro-hunter/cadastro-hunter.component';

const routes: Routes = [
  {
    path:'cadastro', component: CadastroHunterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
