import { LocalSessionDataService } from './local-session-data.service';

import { Component, EventEmitter } from '@angular/core';
import { IPlace } from "./models/place";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private places: IPlace[];
  private place: IPlace;
  constructor(private service:LocalSessionDataService) {
    this.places = service.getSavedPlaces();
  }
  onPlaceSelectedFromHistory(place):void{
    console.log(place);
    this.place = place;
  }
  
  onPlaceAdded(place: IPlace) {
    this.places = this.service.getSavedPlaces();
  }
}
