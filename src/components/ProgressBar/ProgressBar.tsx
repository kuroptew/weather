import React from "react";

import getLeftCurrent from "../../utils/getLeftCurrent";

import styles from "./ProgressBar.module.scss";

export interface IProgressBarProps {
  minTDay: number;
  maxTDay: number;
  minTDays: number;
  maxTDays: number;
  currentT: number | null;
}

const ProgressBar = ({
  minTDay,
  maxTDay,
  minTDays,
  maxTDays,
  currentT,
}: IProgressBarProps) => {
  const widthContainer = 60;
  const heightContainer = 5;

  const tempPerPixel: number = Number(
    (widthContainer / (Math.abs(maxTDays - minTDays) + 1)).toFixed(1)
  );

  const widthBar: number = (Math.abs(maxTDay - minTDay) + 1) * tempPerPixel;

  const leftBar: number = Math.abs(minTDays - minTDay) * tempPerPixel;

  let leftCurrent;
  let currentStyles;

  if (currentT) {
    leftCurrent = getLeftCurrent(
      minTDay,
      maxTDay,
      currentT,
      widthBar,
      heightContainer,
      tempPerPixel
    );

    currentStyles = {
      width: heightContainer,
      height: heightContainer,
      left: leftCurrent,
    };
  }

  const containerStyles = {
    width: widthContainer,
    height: heightContainer,
    borderRadius: heightContainer,
  };

  const barStyles = {
    width: widthBar,
    height: heightContainer,
    borderRadius: heightContainer,
    left: leftBar,
  };

  return (
    <div style={containerStyles} className={styles["bar__container"]}>
      <div style={barStyles} className={styles["bar"]}>
        {currentT && (
          <div style={currentStyles} className={styles["current"]}></div>
        )}
      </div>
    </div>
  );
};

export default ProgressBar;
