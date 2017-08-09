import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDayChartCardComponent } from './weather-day-chart-card.component';

describe('WeatherDayChartCardComponent', () => {
  let component: WeatherDayChartCardComponent;
  let fixture: ComponentFixture<WeatherDayChartCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherDayChartCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDayChartCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
