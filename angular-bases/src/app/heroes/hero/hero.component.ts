import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string ='Bruce Banner';
  public heroName: string = 'Hulk';
  public edad: number = 40;

  get capitalizedName(): string{
    return this.heroName.toUpperCase();
  }

  getHeroDescription () : string{
    return `${this.name} - ${this.edad}`;
  }

  changeHero():void{
    this.name = 'Tony Stark'
    this.heroName = 'Iron Man'
  }
  changeHeroAge(): void{
    this.edad = 47
  }
  reset(): void{
    this.name ='Bruce Banner';
    this.heroName = 'Hulk';
    this.edad = 45;

    // document.querySelector('h1')!.innerHTML
  }
}
