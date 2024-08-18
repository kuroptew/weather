import React from "react";

import kmPerHourToMeterPerSec from "../../utils/kmPerHourToMeterPerSec";
import mBarToHg from "../../utils/mBarToHg";

import styles from "./AddDashboard.module.scss";

interface IAddDashboardProps {
  feelsT:number
  humidity:number
  windSpeed:number
  pressure:number
  visibility:number
  uv:number
}

const AddDashboard: React.FC<IAddDashboardProps> = ({ feelsT,humidity, windSpeed, pressure, visibility, uv }: IAddDashboardProps) => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <svg fill="#2C2C2C" xmlns="http://www.w3.org/2000/svg">
          <path d="M15,16a3,3,0,1,1-4-2.816V5a1,1,0,0,1,2,0v8.184A2.99,2.99,0,0,1,15,16ZM16,5v5.262A7,7,0,0,1,11.984,23a7.194,7.194,0,0,1-.827-.049,7.067,7.067,0,0,1-6.07-5.835A6.986,6.986,0,0,1,8,10.261V5a4,4,0,0,1,8,0Zm-1.5,6.675a1,1,0,0,1-.5-.865V5a2,2,0,0,0-4,0v5.81a1,1,0,0,1-.5.865,5,5,0,1,0,5,0Z" />
        </svg>
        <h3>Feels like</h3>
        <div>{`${feelsT}\u00b0`}</div>
      </li>
      <li className={styles.item}>
        <svg fill="#2C2C2C" xmlns="http://www.w3.org/2000/svg">
          <path d="M12,22c2.579,0,4-1.35,4-3.8,0-3.243-3.237-5.871-3.375-5.981a1,1,0,0,0-1.25,0C11.237,12.329,8,14.957,8,18.2,8,20.65,9.421,22,12,22Zm0-7.639A6.153,6.153,0,0,1,14,18.2c0,1.112-.335,1.8-2,1.8s-2-.688-2-1.8A6.153,6.153,0,0,1,12,14.361ZM6.625,2.219a1,1,0,0,0-1.25,0C5.237,2.329,2,4.957,2,8.2,2,10.65,3.421,12,6,12s4-1.35,4-3.8C10,4.957,6.763,2.329,6.625,2.219ZM6,10c-1.665,0-2-.688-2-1.8A6.153,6.153,0,0,1,6,4.361,6.153,6.153,0,0,1,8,8.2C8,9.312,7.665,10,6,10ZM18.625,2.219a1,1,0,0,0-1.25,0C17.237,2.329,14,4.957,14,8.2c0,2.45,1.421,3.8,4,3.8s4-1.35,4-3.8C22,4.957,18.763,2.329,18.625,2.219ZM18,10c-1.665,0-2-.688-2-1.8a6.153,6.153,0,0,1,2-3.839A6.153,6.153,0,0,1,20,8.2C20,9.312,19.665,10,18,10Z" />
        </svg>
        <h3>Humidity</h3>
        <div>{humidity} %</div>
      </li>
      <li className={styles.item}>
        <svg fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2 15H18.5C20.43 15 22 16.57 22 18.5C22 20.43 20.43 22 18.5 22C16.57 22 15 20.43 15 18.5V18"
            stroke="#2C2C2C"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 12H18.5C20.42 12 22 10.43 22 8.5C22 6.58 20.42 5 18.5 5C16.58 5 15 6.57 15 8.5V9"
            stroke="#2C2C2C"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 9H9.31C10.8 9 12 7.79 12 6.31C12 4.82 10.79 3.62 9.31 3.62C7.82 3.62 6.62 4.83 6.62 6.31V6.69"
            stroke="#2C2C2C"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h3>Wind</h3>
        <div>{windSpeed} m/s</div>
      </li>
      <li className={styles.item}>
        <svg fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.6933 17.3294C21.0506 15.9959 21.0964 14.5982 20.8271 13.2442C20.5577 11.8902 19.9806 10.6164 19.1402 9.52115C18.2998 8.42593 17.2187 7.53872 15.9806 6.92815C14.7425 6.31757 13.3805 6 12 6C10.6195 6 9.25752 6.31757 8.0194 6.92815C6.78128 7.53872 5.70021 8.42593 4.85982 9.52115C4.01943 10.6164 3.44225 11.8902 3.17293 13.2442C2.90361 14.5982 2.94937 15.9959 3.30667 17.3294"
            stroke="#222222"
            strokeLinecap="round"
          />
          <path
            d="M12.7657 15.5823C13.2532 16.2916 12.9104 17.3738 12 17.9994C11.0897 18.625 9.95652 18.5571 9.46906 17.8477C8.94955 17.0917 7.15616 12.8409 6.06713 10.2114C5.86203 9.71621 6.4677 9.3 6.85648 9.669C8.92077 11.6283 12.2462 14.8263 12.7657 15.5823Z"
            stroke="#222222"
          />
          <path d="M12 6V8" stroke="#2C2C2C" strokeLinecap="round" />
          <path
            d="M5.63599 8.63574L7.0502 10.05"
            stroke="#2C2C2C"
            strokeLinecap="round"
          />
          <path
            d="M18.364 8.63574L16.9498 10.05"
            stroke="#2C2C2C"
            strokeLinecap="round"
          />
          <path
            d="M20.6934 17.3291L18.7615 16.8115"
            stroke="#2C2C2C"
            strokeLinecap="round"
          />
          <path
            d="M3.30664 17.3291L5.23849 16.8115"
            stroke="#2C2C2C"
            strokeLinecap="round"
          />
        </svg>
        <h3>Pressure</h3>
        <div>{pressure} mmHg</div>
      </li>
      <li className={styles.item}>
        <svg fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M22 12C22 12 18.3636 19 12 19C5.63636 19 2 12 2 12C2 12 5.63636 5 12 5C14.8779 5 17.198 6.43162 18.8762 8M9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9"
            stroke="#2C2C2C"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h3>Visibility</h3>
        <div>{visibility} km</div>
      </li>
      <li className={styles.item}>
        <svg fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3 12H5M5.00006 19L7.00006 17M12 19V21M17 17L19 19M5 5L7 7M19 12H21M16.9999 7L18.9999 5M12 3V5M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
            stroke="#2C2C2C"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h3>UV-index</h3>
        <div>{uv}</div>
      </li>
    </ul>
  );
};

export default AddDashboard;
