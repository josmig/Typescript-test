import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] =['Spiderman','Hulk','Capitan America','Pantera Negra','Wolverine'];

  public deleteHero?: string;


  borrarHeroe(): void{

    this.deleteHero =this.heroNames.pop();


  }
}
