import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public title: string ="mi primera app con angular";
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
