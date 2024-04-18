import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";


@NgModule({

  declarations:[
    CounterComponent
  ],
  exports: [ //para poder utilizar fuera de este componente
    CounterComponent
  ]
})
export class CounterModule{}
