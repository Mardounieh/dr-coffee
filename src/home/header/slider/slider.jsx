import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { SliderItems } from "./sliderItems";

export default function Slider() {
  return (
    <Swiper
      breakpointsBase="window"
      grabCursor={true}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
    >
      {SliderItems.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div
            >
              <img src={item.background} alt="" className="relative w-full h-screen"/>
              <div className="relative">
                <div className="absolute">{item.title}</div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
