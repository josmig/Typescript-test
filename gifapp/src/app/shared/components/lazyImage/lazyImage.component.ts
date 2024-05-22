import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html'
})
export class LazyImageComponent implements OnInit{

  //recibiendo el URL
  @Input() public url!: string;
  @Input() public alt: string ='';

  //loader
  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if(this.url) throw new Error('URL property is required');
  }

  onLoad(){
    console.log('Img loading');

    setTimeout(() => {
      this.hasLoaded = true;

    },1000);

  }


}
