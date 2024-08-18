export enum Status {
  LOADING ="loading",
  SUCCESS = "success",
  ERROR = "error"
}

export interface IForecastHour {
  time:string
  temp_c:number
  last_updated:string
  condition: {
    icon:string
  }
  feelslike_c:number
  humidity:number
  wind_kph:number
  pressure_mb:number
  uv:number
}

export interface ForecastDayType {
  date:string
  day:{
    maxtemp_c:number
    mintemp_c:number
    condition:{
      text:string,
      icon:string
    }
    avgvis_km:number
  }
  hour:IForecastHour[]
}

export interface IForecast {
  forecastday:ForecastDayType[]
}

export interface ILocation {
    name:string
    localtime:string
}

export interface IWeatherResponse {
  location: ILocation
  current:IForecastHour
  forecast:IForecast
}

export interface IWeatherSliceState {
  status:Status
  weatherData:IWeatherResponse
  city:string
}

