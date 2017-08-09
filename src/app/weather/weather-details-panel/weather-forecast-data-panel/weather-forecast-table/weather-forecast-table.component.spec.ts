import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherForecastTableComponent } from "./weather-forcast-table.component";



describe('WeatherForcastTableComponent', () => {
  let component: WeatherForecastTableComponent;
  let fixture: ComponentFixture<WeatherForecastTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherForecastTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherForecastTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
