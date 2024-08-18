import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { fetchWeather } from "./asyncActions";
import { IWeatherResponse, IWeatherSliceState, Status } from "./types";



const initialState: IWeatherSliceState = {
  status: Status.LOADING,
  weatherData: {} as IWeatherResponse,
  city: "Bryansk"
}

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers:{
    changeCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state) => {
      state.status = Status.LOADING;
      state.weatherData = {} as IWeatherResponse
    });

    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.weatherData = action.payload;
    });

    builder.addCase(fetchWeather.rejected, (state) => {
      state.status = Status.ERROR;
      state.weatherData =  {} as IWeatherResponse;
      state.city = ""
    });
  },
})

export const { changeCity} = weatherSlice.actions

export default weatherSlice.reducer