import { IForecast, IForecastHour, ILocation } from "../redux/weather/types";

function getForecast24Hours (currentWeather:IForecastHour, forecast: IForecast, location:ILocation){
  const remainingHoursDay = [
    currentWeather,
    ...forecast.forecastday[0].hour.filter(
      (obj) =>
        Date.parse(obj.time) > Date.parse(location.localtime)
    ),
  ];

  const hoursSecondDay = forecast.forecastday[1].hour.slice(
    0,
    24 - remainingHoursDay.length
  );

  const forecastHours = [...remainingHoursDay, ...hoursSecondDay];

  const forecast24Hours = forecastHours
    .map((obj, index) => {
      let time = obj["last_updated"] ? obj["last_updated"] : obj["time"];

      return {
        time: time,
        index: index,
        icon: obj.condition.icon,
        temp: obj["temp_c"],
      };
    })
    .sort((a, b) => Number(a.time) - Number(b.time));

    return forecast24Hours
}

export default getForecast24Hours