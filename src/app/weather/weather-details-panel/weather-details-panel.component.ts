import { ICoordinate, IPlace } from './../../models/place';
import { WeatherService } from './../weather.service';
import { IWeatherData, IDaily, IDailyWeather } from './../../models/weatherData';
import { Component, OnInit, Input } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'weather-details-panel',
  templateUrl: './weather-details-panel.component.html',
  styleUrls: ['./weather-details-panel.component.css']
})
export class WeatherDetailsPanelComponent implements OnInit {
  
  private selectedItem:string = 'table';
  private isForecast:boolean = true;
  private dailyData:IDailyWeather[];
  private pastWeather:IWeatherData[];
  private _selectedPlace: IPlace;
  private _weatherData: IWeatherData;
  @Input() set weatherData(weatherData: IWeatherData){
      this._weatherData = weatherData;
      this.dailyData = weatherData.daily.data;
     }
  @Input() set selectedPlace(selectedPlace:IPlace){
    this._selectedPlace = selectedPlace;
  }
  constructor(private service:WeatherService) {
    
   }
  ngOnInit() {
    // console.log(this._selectedPlace);
    // if(this._selectedPlace.coordinates){
    //   this.showPastWeather(this._selectedPlace);
    // }
  }
  showForecast():void{
    if(!this.isForecast){
      this.isForecast = !this.isForecast;
      this.dailyData = this._weatherData.daily.data;
    }
  }
  showPastWeather():void{
    // let dailyData: IDailyWeather[] = [];
    // if(this.isForecast){
    //   this.isForecast = !this.isForecast;
    //   this.service.getPastWeatherData(this._selectedPlace.coordinates)
    //               .debounceTime(200)
    //               .switchMap(days=> this.getDailyWeather(days))
    //               .subscribe(data=>{
    //                 dailyData.push(data);
    //                 this.dailyData = dailyData;
    //               })
    // }
    
  }

  private getDailyWeather(days:IWeatherData[]):IDailyWeather[]{
    let dailyData: IDailyWeather[] = [];
     days.map(function(day, dayIndex){
          dailyData.push(day.daily.data[0])
        }.bind(this))
        console.log(dailyData);
    return dailyData;
  }
  setSelectedItem(type:string):void{
    this.selectedItem = type;
  }
}
