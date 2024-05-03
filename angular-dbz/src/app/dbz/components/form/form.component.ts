import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {


  //  currentYear: number = new Date().getFullYear();
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();


   public character: Character = {
    name:'',
    power:0
   }

   emitCharacter(): void{
    console.log(this.character);
    // debugger;
    if(this.character.name.length === 0 )return;
    this.onNewCharacter.emit(this.character)
     this.character = {name:'', power:0};
   }

}
