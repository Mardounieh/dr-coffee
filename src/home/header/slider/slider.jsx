import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { FaArrowRightLong } from "react-icons/fa6";
import { SliderItems } from "./sliderItems";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

export default function Slider() {
  return (
    <Swiper
      breakpointsBase="window"
      grabCursor={true}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[FreeMode, Pagination, Autoplay]}
      loop={true}
      autoplay={{ delay: 10000 }}
      className="my-swiper "
      style={{
        "--swiper-pagination-color": "#fff",
        "--swiper-pagination-bullet-inactive-color": "#ffffff40",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-size": "7px",
        "--swiper-pagination-bullet-horizontal-gap": "10px",
      }}
    >
      {SliderItems.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div
              className="w-full h-screen flex justify-center"
              style={{
                background: `url(${item.background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="relative w-10/12 h-screen flex items-center justify-center lg:justify-start">
                <div className="">
                  <img
                    src={item.device}
                    alt="Coffee Machine"
                    className="hidden lg:inline-flex w-2/3"
                  />
                </div>
                <div className="text-white text-center flex flex-col items-center lg:items-start gap-5">
                  <h1 className="font-bold text-4xl">{item.title}</h1>
                  {SliderItems.indexOf(item) > 0 && (
                    <button className="flex items-center gap-2 h-fit w-fit py-1 px-6 text-white hover:bg-red-700 hover:border-red-700 duration-300 text-sm lg:text-lg border rounded-full">
                      {item.buttonTitle}
                      <FaArrowRightLong className="mt-1" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
