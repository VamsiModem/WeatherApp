import { ITableRow } from './../../../../models/tableRow';
import { ILineChartDataEntry } from './../../../../models/lineChartDataEntry';
import { Component, OnInit, Input } from '@angular/core';
import { IWeatherData } from "../../../../models/weatherData";
import { IHourlyChartData } from "../../../../models/hourlyChartData";

@Component({
  selector: 'weather-forecast-chart',
  templateUrl: './weather-forecast-chart.component.html',
  styleUrls: ['./weather-forecast-chart.component.css']
})
export class WeatherForecastChartComponent implements OnInit {
    private index:number = 0;
    private lineChartLabels:Array<any> = [];
    private lineChartData:Array<any> = [];
    private _tableRows:ITableRow[];
    private src:string ='./assets/svg/animated/cloudy-night-1.svg';
    @Input()
     set tableRows(tableRows: ITableRow[]){
        this._tableRows = tableRows;
        this.lineChartData = this.getLineChartData(tableRows);
        this.lineChartLabels = this.getLineChartLabels(tableRows);
     }
    
  constructor() { }
  ngOnInit() {
   
  }
  public lineChartOptions:any = {
    responsive: true,
    scales: {
        yAxes: [{
            ticks: {
                max: 100,
                min: 0,
                stepSize: 20
            },
              
        }]
    },
  };
  public lineChartColors:Array<any> = [
    { 
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: '#dc0fc3',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { 
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: '#5d7b14',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { 
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: '#d26212',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { 
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: '#bbbd13',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
 
  private showPreviousTenHours():void{
    
  }

  private showNextTenHours():void{
    
  }

  private getLineChartData(tableRows: ITableRow[]):ILineChartDataEntry[]{
    let chartData:ILineChartDataEntry[] = [];
    let index = this.index;
    let labels:string[] = ["Temperature","Precipitation","WindSpeed","Humidity"]
    let keys:string[] = ["hightemperature","precipitation","wind","humidity"]
    labels.map(function(label, labelIndex){
      let values:number[] = [];
      tableRows.map(function(row, rowIndex){
        //console.log(row);
        values.push(row[keys[labelIndex]]);
      })
      
      let chartEntry: ILineChartDataEntry = {data:values, label:label }
      chartData.push(chartEntry);
    })
    //console.log(chartData);
    return chartData;
  }

  private getLineChartLabels(tableRows: ITableRow[]):string[]{
    let labels:string[] = [];
    tableRows.map(function(row, rowIndex){
      let date:Date = new Date(row.date);
      let day:number = date.getDate();
      let month:number = date.getMonth()+1;
      let year:number = date.getFullYear();
      labels.push((day < 10 ? '0'+day : day )+ '/'+ (month < 10 ? '0'+month : month) + '/'+year);
    })
    return labels;
  }

}
