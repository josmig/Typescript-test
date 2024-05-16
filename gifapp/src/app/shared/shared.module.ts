import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule
  ],
   exports: [ //Lo exportamos para utilizarlo en el modulo principal
  SidebarComponent
]
})
export class SharedModule { }
