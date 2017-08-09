import { IWeatherData, IDaily, IDailyWeather } from './../../../models/weatherData';

import { Component, OnInit, Input } from '@angular/core';
import { ITableRow } from "../../../models/tableRow";

@Component({
  selector: 'weather-forecast-data-panel',
  templateUrl: './weather-forecast-data-panel.component.html',
  styleUrls: ['./weather-forecast-data-panel.component.css']
})
export class WeatherForecastDataPanelComponent implements OnInit {
  @Input() selectedItem:string;
  constructor() { }

  private dailyWeather:IDailyWeather[];
  private tableRows: ITableRow[];
  @Input() 
  set weatherData(weatherData: IDailyWeather[]){
       this.dailyWeather = weatherData;
       this.tableRows = this.getTableData(weatherData);
  }
  private getTableData(dailyWeather:IDailyWeather[]): ITableRow[]{
    let tableRows:ITableRow[] = [];
    dailyWeather.map(function(day, dayIndex){
      let tableRow:ITableRow = {hightemperature: 0, lowTemperature: 0, wind: 0, humidity: 0, summary:'', precipitation: 0, date: 0}
      tableRow.date = day.time*1000;
      tableRow.hightemperature = day.temperatureMax;
      tableRow.lowTemperature = day.temperatureMin;
      tableRow.humidity = day.humidity*100;
      tableRow.wind = day.windSpeed;
      tableRow.precipitation = day.precipProbability*100;
      tableRow.summary = day.icon
      tableRows.push(tableRow);
    })
    return tableRows;
  }
  ngOnInit() {
  }

}
