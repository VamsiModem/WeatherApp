import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hourly-weather-list-item',
  templateUrl: './hourly-weather-list-item.component.html',
  styleUrls: ['./hourly-weather-list-item.component.css']
})
export class HourlyWeatherListItemComponent implements OnInit {
private days:string[] = ["SUN","MON", "TUE", "WED","THU", "FRI","SAT"]
  constructor() { }
    @Input() data: any;
  ngOnInit() {
  }

  getDay(unixDate:number):string{
    let date:Date = new Date(unixDate*1000);
    return this.days[date.getDay()];
  }
  getTime(unixDate:number):string{
    let date:Date = new Date(unixDate*1000);
    let hours:number  = date.getHours();
    let minutes:number  = date.getMinutes();
    return ((hours < 10 ? '0'+hours : hours) + ':'+( minutes < 10 ? '0'+minutes : minutes));
  }

}
