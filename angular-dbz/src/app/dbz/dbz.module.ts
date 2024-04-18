import { NgModule } from '@angular/core';
import { MainPageComponent } from './pages/main-page.component';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    FormComponent,

  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DBZModule { }
