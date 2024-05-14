import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/persojane.interface';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  public personaje: Personaje = {
    name:'',
    power:0
  }
  emitPersonaje(): void{
    console.log(this.personaje);
    // debugger;
    if(this.personaje.name.length === 0 )return;
    this.onNuevoPersonaje.emit(this.personaje)
     this.personaje = {name:'', power:0};
   }

}
