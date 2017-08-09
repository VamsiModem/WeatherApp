import { IWeatherData, IWeather } from './../../models/weatherData';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'weather-detail-card',
  templateUrl: './weather-detail-card.component.html',
  styleUrls: ['./weather-detail-card.component.css']
})

export class WeatherDetailCardComponent implements OnInit {
  private date:Date = new Date();
  private days:string[] = ["Sunday","Monday", "Tuesday", "Wednesday","Thursady", "Friday","Saturday"]
  private months:string[] = ["January","February", "March", "April","May", "June","July","August","September","October","November","December"]
  private src = './assets/svg/animated/cloudy-night-1.svg';
  private sunSrc = './assets/svg/animated/clear-day.svg';
  private moonSrc:string ='./assets/svg/animated/clear-nigh.svg';
  private currentWeather:IWeather;
  private _weatherData:IWeatherData;

  constructor() {
    
   }
  @Input() locationDescription: string;
  @Input() isDetailedWeatherVisible: boolean;
  @Input() set weatherData(weatherData:IWeatherData){
      this._weatherData = weatherData;
        console.log(weatherData)
  }
   @Output() onShowDetailedWeather = new EventEmitter<Boolean>();
   
   
  onDetailedClick(){
    
    this.onShowDetailedWeather.emit(this.isDetailedWeatherVisible)
  }
  
  ngOnInit() {
    
  }

}
