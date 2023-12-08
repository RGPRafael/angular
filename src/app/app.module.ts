import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { CadastroHunterComponent } from './componentes/cadastro-hunter/cadastro-hunter.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './componentes/login/login.component';
import { EditarhunterComponent } from './componentes/ListarTodosHunters/ListarTodosHunters.component';
import { MenuinicialComponent } from './componentes/menuinicial/menuinicial.component';
import { AtualizarHunterComponent } from './componentes/atualizar-hunter/atualizar-hunter.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    CadastroHunterComponent,
    LoginComponent,
    EditarhunterComponent,
    MenuinicialComponent,
    AtualizarHunterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
