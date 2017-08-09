import { IWeatherPlace } from './../models/weatherPlace';
import { ICoordinate, IPlace } from './../models/place';
import { IWeather, IWeatherData } from './../models/weatherData';

import { Observable } from 'rxjs/Observable';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { WeatherService } from "./weather.service";
import 'rxjs/add/observable/fromPromise';
import "rxjs/add/operator/mergeMap";
declare var google:any;
@Injectable()
export class WeatherDataResolver implements Resolve<IWeatherPlace>{
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Observable<IWeatherPlace> {
        let placeid = route.paramMap.get('placeid');
        let coordinates:ICoordinate = {latitude: 0, longitude: 0};

        return this.getWeatherData(placeid).mergeMap(place => 
            this.weatherService.getWeatherData({description: place[0].formatted_address, placeId: place[0].place_id, 
                coordinates:{latitude:place[0].geometry.location.lat(), longitude: place[0].geometry.location.lng()}as ICoordinate }as IPlace))
    }

    private getCoordinates(placeId:string):Promise<any>{
        return new Promise(function(resolve, reject) {
             var geocoder = new google.maps.Geocoder;
             geocoder.geocode({'placeId': placeId}, function(results, status) {
            if (status === 'OK') {
                resolve(results);
            }}.bind(this))
        });
  }

  private getWeatherData(placeid:string):Observable<IWeatherData>{
    return Observable.fromPromise(this.getCoordinates(placeid))
  }
    constructor(private weatherService: WeatherService) {

        
    }
}
