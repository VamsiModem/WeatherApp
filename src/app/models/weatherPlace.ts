import { IPlace } from './place';
import { IWeather } from './weatherData';
export interface IWeatherPlace{
    weather:IWeather,
    place:IPlace
}