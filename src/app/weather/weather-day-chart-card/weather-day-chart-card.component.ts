import { inject } from '@angular/core/testing';
import { IHourlyChartData } from './../../models/hourlyChartData';
import { Component, OnInit, Input } from '@angular/core';
import { ILineChartDataEntry } from "../../models/lineChartDataEntry";
import { BaseChartDirective } from "ng2-charts";

@Component({
  selector: 'weather-day-chart-card',
  templateUrl: './weather-day-chart-card.component.html',
  styleUrls: ['./weather-day-chart-card.component.css'],
})

export class WeatherDayChartCardComponent implements OnInit {
    private index:number = 0;
    private lineChartLabels:Array<any> = [];
    private lineChartData:Array<any> = [];
    private _chartData:IHourlyChartData;
    private src:string ='./assets/svg/animated/cloudy-night-1.svg';
    @Input()
     set chartData(chartData: IHourlyChartData){
       this._chartData = chartData;
        this.lineChartData = this.getLineChartData(chartData);
        this.lineChartLabels = this.getLineChartLabels(chartData);
     }
  constructor() {
  
   }
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
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
 
  private showPreviousTenHours():void{
    console.log(this._chartData);
    if(this.index > 10){
        this.lineChartData = this.InitializeChartData();
        this.lineChartLabels=this.InitializeChartLabels();
        this.lineChartData = this.getLineChartData(this._chartData);
        this.lineChartLabels = this.getLineChartLabels(this._chartData);
        this.index -= 10;
    }
  }

  private showNextTenHours():void{

    console.log(this._chartData);
    if(this.index < this._chartData.humidity.length){
        this.lineChartData = null;
        this.lineChartLabels=null;
        this.lineChartData = this.getLineChartData(this._chartData);
        this.lineChartLabels = this.getLineChartLabels(this._chartData);
        console.log(this.lineChartLabels);
        this.index += 10;
    }
  }

  private getLineChartData(data: IHourlyChartData):ILineChartDataEntry[]{
    let chartData:ILineChartDataEntry[] = [];
    let index = this.index;
    let labels:string[] = ["humidity","precipProbability","temperature"]
    labels.map(function(label, labelIndex){
      chartData.push({data : data[label].slice(index, index+10), label : label=="precipProbability"? "precipitation": label});
    }.bind(this))
    return chartData;
  }
  private InitializeChartData():ILineChartDataEntry[]{
    let chartData:ILineChartDataEntry[] = [{label:'', data:[]}];
    return chartData;
  }
  private InitializeChartLabels():string[]{
    let chartLabels:string[] = [''];
    return chartLabels;
  }
  private getLineChartLabels(data: IHourlyChartData):string[]{
    let index:number = this.index;
    return data.time.slice(index, index+10);
  }

}
