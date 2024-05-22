
//Modulos
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

//Components
import { CardListComponent } from './components/card-list/card-list.component';
import { GifCardComponent } from './components/gifs-card/gif-card.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';



@NgModule({
  declarations: [
    CardListComponent,
    GifCardComponent,
    HomePageComponent,
    SearchBoxComponent
  ],
  imports: [
    CommonModule,
    SharedModule

  ],
  exports: [
    HomePageComponent
  ]
})
export class GifsModule { }
