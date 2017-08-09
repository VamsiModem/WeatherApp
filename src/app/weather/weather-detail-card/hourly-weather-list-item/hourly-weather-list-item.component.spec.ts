import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyWeatherListItemComponent } from './hourly-weather-list-item.component';

describe('MinitueWeatherListComponent', () => {
  let component: HourlyWeatherListItemComponent;
  let fixture: ComponentFixture<HourlyWeatherListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HourlyWeatherListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HourlyWeatherListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
