import { IDaily, IWeatherData } from './../../../../models/weatherData';
import { Component, OnInit, Input } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { ITableRow } from "../../../../models/tableRow";
@Component({
  selector: 'weather-forecast-table',
  templateUrl: './weather-forecast-table.component.html',
  styleUrls: ['./weather-forecast-table.component.css']
})
export class WeatherForecastTableComponent implements OnInit {
  constructor() { }
  private dailyWeather:IDaily;
  private _weatherData:IWeatherData;
  private months:string[] = ["January","February", "March", "April","May", "June","July","August","September","October","November","December"];
  private days:string[] = ["Sun","Mon", "Tue", "Wed","Thu", "Fri","Sat"];
  private headers:string[] = ["Day","Description", "Max/Min Temperature", "Precipitation","Wind Speed","Humidity"];
  
  @Input() tableRows:ITableRow[];
  private getDay(timestamp:number):string{
    let date = new Date(timestamp);
    return this.days[date.getDay()]
  }
  private getMonth(timestamp:number):string{
    let date = new Date(timestamp);
    return this.months[date.getMonth()]+" "+ (date.getDate() < 10 ? "0"+date.getDate() : date.getDate());
  }
  ngOnInit() {
  }
}
