import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../../interfaces/persojane.interface';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

  @Input() public listPersonaje: Personaje[] =[];

  @Output() public eliminarId: EventEmitter<string> = new EventEmitter();

  eliminarPersona(id?: string): void{
    console.log({id});
    if(!id) return;
    this.eliminarId.emit(id);

  }


}
