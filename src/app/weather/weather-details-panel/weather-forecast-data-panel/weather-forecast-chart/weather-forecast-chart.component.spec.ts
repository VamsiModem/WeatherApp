import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherForecastChartComponent } from './weather-forecast-chart.component';

describe('WeatherForcastChartComponent', () => {
  let component: WeatherForecastChartComponent;
  let fixture: ComponentFixture<WeatherForecastChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherForecastChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherForecastChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
