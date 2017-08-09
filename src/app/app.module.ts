
import { LocationsearchComponent } from './locationsearch/locationsearch.component';
import { GoogleMapsGeoCodingService } from './google-maps-geo-coding.service';
import { WeatherDataResolver } from './weather/weather-resolver.service';

import { WeatherModule } from './weather/weather.module';


import { LocalSessionDataService } from './local-session-data.service';
import { WeatherForecastChartComponent } from './weather/weather-details-panel/weather-forecast-data-panel/weather-forecast-chart/weather-forecast-chart.component';
import { WeatherForecastTableComponent } from './weather/weather-details-panel/weather-forecast-data-panel/weather-forecast-table/weather-forecast-table.component';

import { WeatherService } from './weather/weather.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { appRoutes } from "./routes";
import { RouterModule } from "@angular/router";
import { WeatherComponent } from './weather/weather.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';


import { WeatherDetailCardComponent } from './weather/weather-detail-card/weather-detail-card.component';
import { WeatherDayChartCardComponent } from './weather/weather-day-chart-card/weather-day-chart-card.component';

import { WeatherDetailsPanelComponent } from './weather/weather-details-panel/weather-details-panel.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { WeatherForecastDataPanelComponent } from "./weather/weather-details-panel/weather-forecast-data-panel/weather-forecast-data-panel.component";
import { HourlyWeatherListItemComponent } from "./weather/weather-detail-card/hourly-weather-list-item/hourly-weather-list-item.component";



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WeatherComponent,
    LocationsearchComponent,
    WeatherDetailCardComponent,
    WeatherDayChartCardComponent,
    WeatherForecastTableComponent,
    WeatherDetailsPanelComponent,
    PageNotFoundComponent,
    WeatherForecastChartComponent,
    WeatherForecastDataPanelComponent,
    HourlyWeatherListItemComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    WeatherModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),

    ChartsModule,
  ],
  exports: [],
  providers: [WeatherService,LocalSessionDataService,WeatherDataResolver,GoogleMapsGeoCodingService],
  bootstrap: [AppComponent]
})
export class AppModule { }

