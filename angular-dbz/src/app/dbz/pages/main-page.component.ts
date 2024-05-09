import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent {

  //se ,mejora el uso de los servicios porque los datos son privados es recomendable

  constructor(private dbzService:DbzService){
  }

  get characters(): Character[]{
    return [...this.dbzService.characters];
  }
  deletePersonajeId(id: string): void{

    this.dbzService.eliminarPersonajeId(id);
  }
  nuevaPersona(character:Character): void{
    this.dbzService.nuevoPersonaje(character);
  }
}
