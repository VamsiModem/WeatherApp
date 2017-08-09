import { GoogleMapsGeoCodingService } from './../google-maps-geo-coding.service';
import { WeatherForecastChartComponent } from './weather-details-panel/weather-forecast-data-panel/weather-forecast-chart/weather-forecast-chart.component';
import { WeatherForecastTableComponent } from './weather-details-panel/weather-forecast-data-panel/weather-forecast-table/weather-forecast-table.component';
import { WeatherDataResolver } from './weather-resolver.service';
import { WeatherComponent } from './weather.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'search', 
        children:[
            {
              path:':placeid/current', component:WeatherComponent, resolve:{weather: WeatherDataResolver},children:[
                  {path:'table', component: WeatherForecastTableComponent},
                  {path:'chart', component: WeatherForecastChartComponent}
                ]
            },
            {
            path:':placeid/past', component:WeatherComponent, resolve:{weather: WeatherDataResolver},children:[
                  {path:'table', component: WeatherForecastTableComponent},
                  {path:'chart', component: WeatherForecastChartComponent}
                ]
            },
        ]
      },
    ]
    )],
  declarations: [],
  providers: [WeatherDataResolver,GoogleMapsGeoCodingService],
})
export class WeatherModule { }
