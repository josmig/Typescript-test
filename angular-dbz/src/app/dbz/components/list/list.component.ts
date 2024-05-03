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
  public onDeleteId: EventEmitter<number> = new EventEmitter();

  eliminarPersona(index: number):void {
    console.log({index});
    this.onDeleteId.emit(index);

  }
}
