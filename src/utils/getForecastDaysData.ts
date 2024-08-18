import { IForecast, IForecastHour } from "../redux/weather/types";

function getForecastDaysData(currentWeather: IForecastHour, forecast: IForecast){ 
  const forecastDays = forecast.forecastday.map((obj, index) => {
    const date = obj.date;
    const maxT = obj.day["maxtemp_c"];
    const minT = obj.day["mintemp_c"];
    const icon = obj.day.condition.icon;
    let currentT = null;
    if (index === 0) {
      currentT = Math.round(currentWeather["temp_c"]);
    }

    return {
      date,
      maxT: Number(maxT.toFixed(0)),
      minT: Number(minT.toFixed(0)),
      icon,
      currentT,
    };
  });

  let maxTDays = forecastDays[0].minT;
  let minTDays = forecastDays[0].maxT;

  forecastDays.forEach((obj) => {
    if (maxTDays < obj.maxT) maxTDays = obj.maxT;
    if (minTDays > obj.minT) minTDays = obj.minT;
  });

  return {
    forecastDays, 
    minTDays,
    maxTDays
  }
}

export default getForecastDaysData