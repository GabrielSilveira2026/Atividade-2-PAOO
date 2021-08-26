import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-cadastro-curso',
  templateUrl: './cadastro-curso.component.html',
  styleUrls: ['./cadastro-curso.component.css']
})
export class CursoCadastroComponent{

  @Output () cursoAdicionado = new EventEmitter()

  adicionar(curso, carga){
    this.cursoAdicionado.emit({curso, carga})
  }

}
