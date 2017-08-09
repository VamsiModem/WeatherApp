import { IWeatherPlace } from './../models/weatherPlace';
import { Subject } from 'rxjs/Subject';
import { IDaily, IDailyWeather, IWeatherData } from './../models/weatherData';
import { ICoordinate, IPlace } from './../models/place';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';

const API_KEY:string = 'ca7cc68c2602c754d4018bf0927240c8';
const BASE_URL:string = 'https://api.modemvamsi.com/api/Weather/';

@Injectable()
export class WeatherService {
  private baseURL:string;
  private key:string;

  constructor(private http: Http) { 
    this.baseURL = BASE_URL;
    this.key = API_KEY;
  }
 
  getWeatherData(place:any):Observable<IWeatherPlace>{
    console.log(place);
     return this.http.request(`${this.baseURL}/Current/${place.coordinates.latitude}/${place.coordinates.longitude}/`)
                     .map(data=>this.extractData(data,place))
                     .catch(this.handleError);
  }

  public getPastWeatherData(place:IPlace):Observable<IWeatherData[]>{
     return this.http.get(`${this.baseURL}/Past/${place.coordinates.latitude}/${place.coordinates.longitude}/`)
                                 .map(data=>this.extractData(data, place))
                                  .catch(this.handleError);
    
  }

  private extractData(response: Response, place:any) {
        let weatherPlace:IWeatherPlace = {place: null, weather: null}
        weatherPlace.place = place;
        weatherPlace.weather =  response.json();
        return weatherPlace;
  }
    
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
