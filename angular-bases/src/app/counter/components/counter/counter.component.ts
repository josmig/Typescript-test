import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
      <h1>{{title}}</h1>
      <hr>
      <p>Counter {{counter}}</p>

      <button (click)="sumarValor(+1)">+1</button>
      <button (click)="resetValor()">Reset</button>
      <button (click)="sumarValor(-1)">-1</button>
  `
})
export class CounterComponent{

  public title: string = 'Counter';
  counter: number = 10;


  sumarValor(value: number):void{
    this.counter += value;
  }
  // restarValor():void{
  //   this.counter -=1;
  // }
  resetValor() {
      this.counter = 10;
  }
}
