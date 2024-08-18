import React from "react";

import styles from "./ForecastHour.module.scss";

export interface IForecastHourProps {
  index: number;
  time: string | number;
  icon: string;
  temp: number;
}

const ForecastHour: React.FC<IForecastHourProps> = ({
  index,
  time,
  icon,
  temp,
}) => {
  let formatter = new Intl.NumberFormat("en", {
    minimumIntegerDigits: 2,
  });

  if (!index) {
    time = "Now";
  } else {
    time = new Date(time).getHours();
    time = formatter.format(time);
  }

  return (
    <div className={styles.container}>
      <div className={styles.times}>{time}</div>
      <img className={styles.icon} src={icon} />
      <div className={styles.info}>{`${temp.toFixed(0)}\u00b0`}</div>
    </div>
  );
};

export default ForecastHour;
