import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import weather from '../redux/weather/slice'

export const store = configureStore({
  reducer: {
    weather
  },
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>