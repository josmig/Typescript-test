import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'search-gifs-box',
  template: `
            <h5>Buscar</h5>
            <input type="text"
                   class="form-control"
                   placeholder="Bucar gifs..."
                   (keyup.enter)="searchTag()"
                   #txtTagInput
                   >
             `
})

export class SearchBoxComponent {

  //sirven para tomar elementos de referencia loc al
  @ViewChild('txtTagInput') //con el signo de exclamacion decimo sque siempre tendra un valor
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService){}

  searchTag(){
    const newTag = this.tagInput.nativeElement.value;
    console.log({newTag});
    this.tagInput.nativeElement.value ='';

    this.gifsService.searchTag (newTag);

  }
}
