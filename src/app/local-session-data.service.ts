import { IPlace } from './models/place';
import { Injectable } from '@angular/core';

const storageKey:string = 'weatherrecentsearches';
@Injectable()
export class LocalSessionDataService {
  private key:string = '';
  constructor() {
    this.key = storageKey;
   }

  public getSavedPlaces():IPlace[]{
    let places:IPlace[] = JSON.parse(sessionStorage.getItem(this.key));
    return places;
  }
  public savePlace(place:IPlace):void{
    let places:IPlace[] = this.getSavedPlaces() ||[];
    if(this.isDuplicatePlace(place, places)){
      if(places.length > 10){
        places.pop();
      }
      places.splice(0, 0, place);
      sessionStorage.setItem(this.key, JSON.stringify(places));
    }
  }

  private isDuplicatePlace(place:IPlace, places:IPlace[]):boolean{
    let isDuplicate:boolean = true;
    places.map(function(p, pi){
      if(p.placeId === place.placeId && isDuplicate){
        isDuplicate = false;
      }
    })
    return isDuplicate;
  }

}
