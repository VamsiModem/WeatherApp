import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDetailsPanelComponent } from './weather-details-panel.component';

describe('WeatherDetailsPanelComponent', () => {
  let component: WeatherDetailsPanelComponent;
  let fixture: ComponentFixture<WeatherDetailsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherDetailsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDetailsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
