import { IForecast, IForecastHour } from "../redux/weather/types";

import kmPerHourToMeterPerSec from "./kmPerHourToMeterPerSec";
import mBarToHg from "./mBarToHg";


function getMainWeatherData(currentWeather:IForecastHour, forecast: IForecast){
  const currentT = Math.round(currentWeather["temp_c"]);
  const mainForecastToday = forecast.forecastday[0].day;

  const maxTDay = Math.round(mainForecastToday["maxtemp_c"]);
  const minTDay = Math.round(mainForecastToday["mintemp_c"]);
  const descriptionWeather = mainForecastToday.condition.text;

  const feelsT = Math.round(currentWeather["feelslike_c"]);
  const humidity = currentWeather.humidity;
  const windSpeed = kmPerHourToMeterPerSec(currentWeather["wind_kph"]);
  const pressure = mBarToHg(currentWeather["pressure_mb"]);
  const visibility = mainForecastToday["avgvis_km"];
  const uv = currentWeather.uv;


  return {
    currentT,
    maxTDay,
    minTDay,
    descriptionWeather,
    feelsT,
    humidity,
    windSpeed,
    pressure,
    visibility,
    uv
  }

  
}

export default getMainWeatherData