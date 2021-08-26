import { Component, Input, Output} from '@angular/core';

@Component({
  selector: 'app-cartao-curso',
  templateUrl: './cartao-curso.component.html',
  styleUrls: ['./cartao-curso.component.css']
})
export class CartaoCursoComponent{

  @Input() curso

}
