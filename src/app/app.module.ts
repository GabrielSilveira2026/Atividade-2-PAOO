import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CartaoCursoComponent } from './cartao-curso/cartao-curso.component';
import { CursoCadastroComponent } from './cadastro-curso/cadastro-curso.component';

@NgModule({
  declarations: [
    AppComponent,
    CartaoCursoComponent,
    CursoCadastroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
