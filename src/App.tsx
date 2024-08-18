import { useEffect } from "react";
import { useSelector } from "react-redux";

import Search from "./components/Search/Search";
import MainDashboard from "./components/MainDashboard/MainDashboard";
import AddDashboard from "./components/AddDashboard/AddDashboard";
import ForecastList from "./components/ForecastList/ForecastList";

import { useAppDispatch } from "./redux/store";
import { fetchWeather } from "./redux/weather/asyncActions";
import { selectWeatherData } from "./redux/weather/selectors";

import { Status } from "./redux/weather/types";
import SliderForecastHours from "./components/SliderForecastHours/SliderForecastHours";
import getMainWeatherData from "./utils/getMainWeatherData";
import getForecast24Hours from "./utils/getForecast24Hours";
import getForecastDaysData from "./utils/getForecastDaysData";

function App() {
  const { city, weatherData, status } = useSelector(selectWeatherData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchWeather(city));
  }, [city]);

  const { current: currentWeather, forecast, location } = weatherData;

  let infoWeather;

  if (status !== Status.LOADING && status !== Status.ERROR) {
    const cityName = location.name;

    const {
      currentT,
      maxTDay,
      minTDay,
      descriptionWeather,
      feelsT,
      humidity,
      windSpeed,
      pressure,
      visibility,
      uv,
    } = getMainWeatherData(currentWeather, forecast);

    const forecastSliderData = getForecast24Hours(
      currentWeather,
      forecast,
      location
    );

    const { forecastDays, minTDays, maxTDays } = getForecastDaysData(
      currentWeather,
      forecast
    );

    infoWeather = (
      <>
        <MainDashboard
          city={cityName}
          currentT={currentT}
          maxT={maxTDay}
          minT={minTDay}
          descriptionWeather={descriptionWeather}
        />
        <SliderForecastHours forecastSliderData={forecastSliderData} />
        <ForecastList
          forecastDays={forecastDays}
          maxTDays={maxTDays}
          minTDays={minTDays}
        />
        <AddDashboard
          feelsT={feelsT}
          humidity={humidity}
          windSpeed={windSpeed}
          pressure={pressure}
          uv={uv}
          visibility={visibility}
        />
      </>
    );
  }

  return (
    <div className="container">
      <Search />
      {status === Status.LOADING && <div>Загрузка данных о погоде</div>}
      {status === Status.ERROR && <div>Ошибка приложения</div>}
      {status !== Status.LOADING && status !== Status.ERROR && infoWeather}
    </div>
  );
}

export default App;
