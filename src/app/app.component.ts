import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title

  esconder = false
  textoBotao = 'Exibir Cursos'

  cursos= [
    {curso: 'Linguagem Java', carga: 40},
    {curso: 'Linguagem HTML', carga: 50},
    {curso: 'Linguagem C', carga: 60},
    {curso: 'Linguagem Python', carga: 40},
    {curso: 'LinguagemRruby', carga: 50}
  ]

  onCursoAdicionado(curso){
    this.cursos = [curso,...this.cursos]
  }

  alterarExibicao(){
    this.esconder = !this.esconder
    this.textoBotao = this.esconder ? "Exibir Cursos" : "Esconder Cursos"
  }
}
