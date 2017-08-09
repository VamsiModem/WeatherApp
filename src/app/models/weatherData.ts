export interface IWeather{
    apparentTemperature: number,
    cloudCover:number,
    dewPoint:number,
    humidity: number,
    icon:string,
    nearestStormBearing:number,
    nearestStormDistance:number,
    ozone:number,
    precipIntensity:number,
    precipProbability:number,
    pressure:number,
    summary:string,
    temperature:number,
    time:number,
    uvIndex:number,
    visibility:number,
    windBearing:number,
    windGust:number,
    windSpeed:number
}
export interface IDailyWeather{
    apparentTemperatureMax:number,
    apparentTemperatureMaxTime:number,
    apparentTemperatureMin:number,
    apparentTemperatureMinTime:number,
    cloudCover:number,
    moonPhase:number,
    dewPoint:number,
    humidity: number,
    icon:string,
    ozone:number,
    precipIntensity:number,
    precipIntensityMax:number,
    precipProbability:number,
    precipType: string,
    pressure:number,
    summary:string,
    temperatureMax:number,
    temperatureMaxTime:number,
    temperatureMin:number,
    temperatureMinTime:number,
    sunriseTime:number,
    sunsetTime:number,
    time:number,
    uvIndex:number,
    uvIndexTime:number,
    windBearing:number,
    windGust:number,
    windGustTime:number,
    windSpeed:number
}
export interface IDaily{
    data: IDailyWeather[],
    icon:string,
    summary:string
}
export interface IMinuteWeather{
    precipIntensity: number,
    precipProbability:number,
    time:number
}
export interface IHourly{
    data: IWeather[],
    icon:string,
    summary:string
}
export interface IMinutely{
    data: IMinuteWeather[],
    icon:string,
    summary:string
}
export interface IWeatherData{
    currently: IWeather,
    daily: IDaily,
    flags: {
        isd_stations: string[],
        sources:string[],
        units:string
    },
    hourly:IHourly,
    latitude:number,
    longitude:number,
    minutely:IMinutely,
    offset: number,
    timezone: string
}