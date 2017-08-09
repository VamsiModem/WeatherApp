import { GoogleMapsGeoCodingService } from './../google-maps-geo-coding.service';
import { LocalSessionDataService } from './../local-session-data.service';
import { ICoordinate, IPlace } from './../models/place';

import { Component, OnInit, Output, EventEmitter,ChangeDetectorRef } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap'

declare var google:any;
@Component({
  selector: 'locationsearch',
  templateUrl: './locationsearch.component.html',
  styleUrls: ['./locationsearch.component.css']
})
export class LocationsearchComponent implements OnInit {
  private autoCompletionService = new google.maps.places.AutocompleteService();
  searchText = new FormControl();
  private selectedLocationCoordinates:ICoordinate = {latitude:0, longitude:0};
  private places: IPlace[] = [];
  getAddress(place: Object) {
    console.log(place['geometry'].location.lat());
  }
  constructor(private storageService: LocalSessionDataService, private router:Router,
    private route:ActivatedRoute, private placesService:GoogleMapsGeoCodingService) {
    this.searchText.valueChanges
                    .debounceTime(200)
                    .switchMap(data=> data.length> 0? this.placesService.getPlacesPrediction(data): [])
                    .subscribe(places=>{
                      console.log(places);
                      let tempPlaces: IPlace[] = [];
                      if(places !==null){
                         places.map(function(place, placeIndex){
                          let tempPlace:IPlace = {description:place.description, placeId:place.place_id, coordinates:{latitude:0, longitude:0}}
                          tempPlaces.push(tempPlace);
                        })
                        this.places = tempPlaces;
                      }
                    })
  }
  @Output() onLocationSelected = new EventEmitter<IPlace>();
  private getIndex(index:number){
    let selectedPlace = this.places[index];
     var geocoder = new google.maps.Geocoder;
      this.router.navigate(['/search', selectedPlace.placeId, 'current'],{relativeTo: this.route});
      this.storageService.savePlace(selectedPlace);
      this.places = [];
      this.onLocationSelected.emit(selectedPlace)
  }
  ngOnInit() {
  }

}
