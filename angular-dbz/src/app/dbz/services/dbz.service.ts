import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';



@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {id:uuid(),name:'Krilin' , power:10},
    {id:uuid(),name:'Goku', power:12000},
    {id:uuid(),name:'Vegeta', power:10000}
  ];

  nuevoPersonaje(character: Character) : void
  {
    const newCharacter: Character = {id:uuid(),...character};
    this.characters.push(character);
  }

  //minuto 9:30
  // eliminarPersonaje(index: number) :void{
  //   this.characters.splice(index,1);
  // }

  eliminarPersonajeId(id:string){
    this.characters = this.characters.filter(character => character.id !== id )
  }
}
