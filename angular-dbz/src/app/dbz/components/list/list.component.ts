import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public listCharacter: Character[] =[];

  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();

  eliminarPersona(id?: string):void {
    console.log({id});
    if(!id) return; //si no hay id no retornes nada
    this.onDeleteId.emit(id);


  }
}
