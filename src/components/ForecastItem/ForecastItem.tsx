import React from "react";
import ProgressBar, { IProgressBarProps } from "../ProgressBar/ProgressBar";

import styles from "./ForecastItem.module.scss";

export interface IForecastItemProps {
  index:number,
  date: string;
  maxT: number;
  minT: number;
  minTDays: number;
  maxTDays: number;
  currentT: number | null;
  icon: string;
}

const ForecastItem: React.FC<IForecastItemProps> = ({
  index,
  date,
  maxT,
  minT,
  currentT,
  maxTDays,
  minTDays,
  icon,
}) => {
  let formatter = new Intl.DateTimeFormat("en", {
    weekday: "short",
  });


  let day;
  
  if (!index) {
    day = "Today";
  } else {
    day = formatter.format(new Date(date)).split(",");
  }

  return (
    <div className={styles.item}>
      <span className={styles.day}>{day}</span>
      <img className={styles.icon} src={icon}/>
      <div className={styles.temperatures}>
        <span className={styles["min-temperature"]}>{`${minT}\u00b0`}</span>
        <ProgressBar
          minTDay={minT}
          maxTDay={maxT}
          minTDays={minTDays}
          maxTDays={maxTDays}
          currentT={currentT}
        />
        <span className={styles["max-temperature"]}>{`${maxT}\u00b0`}</span>
      </div>
    </div>
  );
};

export default ForecastItem;
