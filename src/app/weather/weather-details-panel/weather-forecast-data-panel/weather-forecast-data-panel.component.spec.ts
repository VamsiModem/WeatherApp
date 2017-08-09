import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherForecastDataPanelComponent } from './weather-forecast-data-panel.component';

describe('WeatherForecastDataPanelComponent', () => {
  let component: WeatherForecastDataPanelComponent;
  let fixture: ComponentFixture<WeatherForecastDataPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherForecastDataPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherForecastDataPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
