import { Component} from '@angular/core';
import { PersonajeService } from '../services/personaje.service';
import { Personaje } from '../interfaces/persojane.interface';

@Component({
  selector: 'app-personaje-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent{
  constructor(private personajeService: PersonajeService) { }

  get personajes(): Personaje[]{
    return [...this.personajeService.personaje]
  }
  deletePersonajeId(id: string): void{
    this.personajeService.deletePersonId(id);
  }
  nuevaPersona(personaje: Personaje): void{
    this.personajeService.newPerson(personaje);
  }

}
