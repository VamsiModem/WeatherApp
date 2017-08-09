import { IPredictions } from './models/predictions';
import { IPlace } from './models/place';
import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/fromPromise';
import "rxjs/add/operator/mergeMap";
declare var google:any;

const BASE_URL:string = 'https://maps.googleapis.com/maps/api/place/';
@Injectable()
export class GoogleMapsGeoCodingService {
  private key:String;
  private baseURL:String;
  private googleAutocompleteUrl:string = '';
  private searchTerm:String = '';
  private places:IPlace[] = [];
  private autoCompletionService = new google.maps.places.AutocompleteService();
  constructor(private http: Http) { 
    this.baseURL = BASE_URL;
  }
      private getPlacesPromise(data:string):Promise<any>{
        
        let autoCompletionService = new google.maps.places.AutocompleteService();
        return new Promise(function(resolve, reject) {
            autoCompletionService.getPredictions({input:data, types: ['(cities)']}, function(places){
              console.log(places)
                resolve(places);
            }.bind(this))
        });
    }

  public getPlacesPrediction(searchTerm:string):Observable<any>{
    
    return Observable.fromPromise(this.getPlacesPromise(searchTerm))
  }
    
      private extractData(response: Response) {
        let body = response.json();
        return body || {};
    }
    
    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
  }
    
}
  

