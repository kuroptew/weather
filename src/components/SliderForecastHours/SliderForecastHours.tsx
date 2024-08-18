import { Swiper, SwiperSlide } from "swiper/react";
import ForecastHour, { IForecastHourProps } from "../ForecastHour/ForecastHour";

interface SliderForecastProps  {
  forecastSliderData: IForecastHourProps[]
}

const SliderForecastHours: React.FC<SliderForecastProps> = ({forecastSliderData}:SliderForecastProps) => {
  return (
    <Swiper spaceBetween={10} slidesPerView={"auto"}>
      {forecastSliderData.map((item:IForecastHourProps, index:number) => {
        return (
          <SwiperSlide key={index}>
            <ForecastHour index={index} time={item.time} icon={item.icon} temp={item.temp} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SliderForecastHours;
