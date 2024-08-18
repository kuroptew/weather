import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

import {BASE_URL, API_KEY} from "../../service/weatherService"
import { IWeatherResponse } from "./types";

export const fetchWeather = createAsyncThunk<IWeatherResponse, string>(
  'weather/fetchWeatherStatus',
  async (params) => {

    const city = params
    const {data} = await axios.get<IWeatherResponse>(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=10&aqi=no`)

    return data
  }
)