import { current } from "@reduxjs/toolkit";
import React from "react";
import {
  IWeatherResponse,
  IWeatherSliceState,
} from "../../redux/weather/types";

import styles from "./MainDashboard.module.scss";

interface IMainDashboardProps {
  city:string
  currentT:number
  descriptionWeather:string
  maxT:number
  minT:number
}

const MainDashboard: React.FC<IMainDashboardProps> = ({city, currentT, descriptionWeather, maxT,minT}:IMainDashboardProps) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.city}>{city}</h1>
      <div className={styles["current-temperature"]}>{currentT}&deg;</div>
      <div className={styles["weather__text"]}>{descriptionWeather}</div>
      <div
        className={styles["max-min-temperature"]}
      >{`Max: ${maxT}\u00b0; Min: ${minT}\u00b0`}</div>
    </div>
  );
};

export default MainDashboard;
