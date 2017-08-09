import { IPlace } from './../models/place';
import { LocalSessionDataService } from './../local-session-data.service';
import { IHourlyChartData } from './../models/hourlyChartData';
import {Router, ActivatedRoute} from '@angular/router';
import { IWeatherData, IHourly, IWeather } from './../models/weatherData';
import { WeatherService } from './weather.service';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'weatherloader',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  private selectedPlace: IPlace;
  private weatherData:IWeatherData;
  private hourlyChartData:IHourlyChartData;
  private isDetailedWeatherVisible:boolean = false;
  constructor(private service:WeatherService, private storageService:LocalSessionDataService, private route:ActivatedRoute) { 
    
  }
  @Input() 
  set place(place:IPlace){
      if(place){
        this.onLocationSelected(place);
      }
  }
   @Output() onPlaceAdded = new EventEmitter<IPlace>();
      onLocationSelected(place: IPlace) {
      this.selectedPlace = place;
  }
  onShowDetailedWeather(){
    this.isDetailedWeatherVisible = !this.isDetailedWeatherVisible;
  }
  private getHoulyChartData(weatherData:IWeatherData):IHourlyChartData{
    let data:IHourlyChartData = {humidity :[], precipProbability:[], temperature:[], time:[], summary:''};
    let temperature:number[] = [];
    let humidity:number[] = [];
    let precipProbability:number[] = [];
    let time:string[]= [] ;
    let hourlyData:IWeather[]= weatherData.hourly.data;
    hourlyData.map(function(hour, hourIndex){
      let date = new Date(hour.time*1000);
      let hours = date.getHours();
      let minitues = date.getMinutes();
      data.temperature.push(hour.temperature);
      data.humidity.push(hour.humidity*100);
      data.precipProbability.push(hour.precipProbability*100);
      data.time.push((hours < 10? '0'+hours: hours)+":"+(minitues < 10 ? '0'+minitues : minitues));
    });
    data.summary = weatherData.hourly.summary;
    console.log(data);
    return data;
  }
  ngOnInit() {
      this.route.data.subscribe(data=>{
      console.log(data);
        this.weatherData = data.weather.weather as IWeatherData;
        this.selectedPlace = data.weather.place as IPlace;
        this.hourlyChartData = this.getHoulyChartData(this.weatherData);
    });  
  }

}
