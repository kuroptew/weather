import React from "react";
import ForecastItem, { IForecastItemProps } from "../ForecastItem/ForecastItem";

import styles from "./ForecastList.module.scss";

type IForecastItem = Omit<
  IForecastItemProps,
  "maxTDays" | "minTDays" | "index"
>;

interface IForecastListProps {
  forecastDays: IForecastItem[];
  maxTDays: number;
  minTDays: number;
}

const ForecastList: React.FC<IForecastListProps> = ({
  forecastDays,
  maxTDays,
  minTDays,
}: IForecastListProps) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>3-DAYS FORECAST</h2>
      <ul className={styles.list}>
        {forecastDays.map(
          ({ date, minT, maxT, icon, currentT }, index: number) => (
            <ForecastItem
              key={date}
              index={index}
              date={date}
              minT={minT}
              maxT={maxT}
              icon={icon}
              currentT={currentT}
              maxTDays={maxTDays}
              minTDays={minTDays}
            />
          )
        )}
      </ul>
    </div>
  );
};

export default ForecastList;
