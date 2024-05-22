import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({providedIn: 'root'})
export class GifsService {

  private _tagHistory: string[] = [];
  // const GIPHY_API_KEY = "nNCbKU4aUALzgQhUrsPPJhaaeOoK0lIW";
  private api_key: string = "nNCbKU4aUALzgQhUrsPPJhaaeOoK0lIW";
  private serviceUrl: string ="https://api.giphy.com/v1/gifs";

  //lista que alamcena los gifs
  public gifList: Gif[]=[];



  constructor(private http:HttpClient) {
    this.loadLocalStorage();
    console.log('Gifs Services Ready!!');

  }

  get tagsHistory(){//operador spred
    return [...this._tagHistory];
  }


  private organizeHistory(tag: string){
    tag = tag.toLowerCase();

    if(this._tagHistory.includes(tag)){
      this._tagHistory = this._tagHistory.filter( (oldTag) => oldTag !== tag);
    }

    this._tagHistory.unshift(tag);
    this._tagHistory = this.tagsHistory.splice(0,10);
    this.saveLocalStorage();

  }

  async searchTag(tag: string): Promise<void>{

    if(tag.length === 0) return; //no me permite crear tags en blanco
    this.organizeHistory(tag);
    const params = new HttpParams()
      .set('api_key',this.api_key)
      .set('limit',15)
      .set('q' , tag)
    // console.log(this.tagsHistory);
    //equivalente a esto " api.giphy.com/v1/gifs/search?api_key=nNCbKU4aUALzgQhUrsPPJhaaeOoK0lIW&q=dota&limit=10 "
    this.http.get<SearchResponse>(`${this.serviceUrl}/search`,{params})
        .subscribe( resp => {
          console.log(resp.data);
          this.gifList = resp.data;
          console.log({gifs: this.gifList});

        })

  }

  private saveLocalStorage(): void{
    localStorage.setItem('history', JSON.stringify(this._tagHistory));
  }
  private loadLocalStorage(): void{
    if(!localStorage.getItem('history')) return;
    this._tagHistory = JSON.parse(localStorage.getItem('history')!);

    //con esto queda el primer item
    if(this._tagHistory.length === 0) return
    this.searchTag(this._tagHistory[0]);
  }

}
