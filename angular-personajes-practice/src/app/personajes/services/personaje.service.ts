import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/persojane.interface';
import { v4 as uuid } from 'uuid';


@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  public personaje: Personaje[]=[
    {id:uuid(), name:'Capitan America', power:500},
    {id:uuid(), name:'Iron Man', power:200},
    {id:uuid(), name:'Pantera Negra', power:100},
    {id:uuid(), name:'Wolverine', power:600},
    {id:uuid(), name:'Hulk', power:900},
  ];

  newPerson(person: Personaje): void{
    const newPerson: Personaje = {id:uuid(),...person}
    this.personaje.push(person);
  }
  deletePersonId(id:string){
    this.personaje = this.personaje.filter(person => person.id !== id)
  }
}
