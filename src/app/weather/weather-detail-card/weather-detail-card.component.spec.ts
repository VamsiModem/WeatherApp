import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDetailCardComponent } from './weather-detail-card.component';

describe('WeatherDetailCardComponent', () => {
  let component: WeatherDetailCardComponent;
  let fixture: ComponentFixture<WeatherDetailCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherDetailCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
