// Hooks
import { useState, useEffect } from "react";

// Styles
import "./Header.css"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

// List
import { NavbarItems } from "./NavbarItems";
import { SliderItems } from "./SliderItems";

// Swiper

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

// Icons
import { FiGlobe } from "react-icons/fi";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import MobileNavbar from "./MobileNavbar";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Header() {
  const [mobileNav, setMobileNav] = useState(false);
  const [isScrolling, setISScrolling] = useState(false);
  useEffect(() => {window.addEventListener("scroll", () => {
    if(window.scrollY !== 0) setISScrolling(true)
      else setISScrolling(false)
  })})
  return (
    <header className="w-full flex items-center justify-between">
      {/* Navigation Bar */}
      <div className={`${isScrolling ? "bg-white" : "bg-transparent"} duration-200 fixed top-0 w-full z-50 flex items-center justify-between px-5 py-4 lg:px-16 lg:py-1.5`}>
        <a href="/" className="w-28">
          <svg
            className={`${isScrolling ? "fill-red-600" : "fill-white"} hover:fill-red-600 duration-150`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 106.47 12.21"
          >
            <defs>
              <style>.cls-1</style>
            </defs>
            <title>咖博士_英文LOGO_白色</title>
            <g id="图层_2" data-name="图层 2">
              <g id="图层_1-2" data-name="图层 1">
                <g id="图层_2-2" data-name="图层 2">
                  <g id="图层_1-2-2" data-name="图层 1-2">
                    <path
                      className="cls-1"
                      d="M37.29,2.5c-3.56.29-6.77,1.77-7.17,5.5a2.87,2.87,0,0,0,1,2.63C32.4,11.7,34.89,12,37.28,12a9.56,9.56,0,0,0,5.64-1.33A11.21,11.21,0,0,1,43,9.52a9.16,9.16,0,0,1-4.57,1.1c-1.33,0-4.44-.52-3.84-4.07a3.35,3.35,0,0,1,3.65-3l.18,0s2-.06,1.17,2.26l4.48-.13a2.59,2.59,0,0,0-.37-1.94C43.1,3,40.74,2.23,37.29,2.5Z"
                    />
                    <path
                      className="cls-1"
                      d="M66.86,1.52a11.87,11.87,0,0,1,2.73-.19h2.07L72,.07H67.93s-5.78-.23-6.72,4.42c-1,4.82-1.56,7.61-1.56,7.61h4.2l1.09-6.52H68l.52-1.09H65.11S65.33,1.91,66.86,1.52Z"
                    />
                    <path
                      className="cls-1"
                      d="M76.17,1.52a11.88,11.88,0,0,1,2.73-.19H81L81.3.07H77.23s-5.79-.23-6.72,4.42C69.51,9.31,69,12.1,69,12.1h4.2l1.09-6.52h3.1l.52-1.09H74.41S74.63,1.91,76.17,1.52Z"
                    />
                    <path
                      className="cls-1"
                      d="M91.52,3.54c-.85-.93-4.42-1.24-6.46-1.06-3,.28-6.55,1.5-7,5.39-.34,3.73,3.9,4,6.15,4.14,4.1.23,5.71-.74,6.72-1.29L91,9.51a9.51,9.51,0,0,1-4.65,1c-1.33,0-4.45-.5-3.9-4.05a1,1,0,0,1,0-.12L92,6V5.07h0A2.26,2.26,0,0,0,91.52,3.54Zm-4,1.69-4.83.17c1.05-2.55,5.44-2.92,4.86-.17Z"
                    />
                    <path
                      className="cls-1"
                      d="M16.94,4.48c-1,4.82-1.56,7.61-1.56,7.61h4.2c.3-1.79,1.24-9,1.87-9.61a1.89,1.89,0,0,1,1.14-1,25,25,0,0,1,4.79-.2L27.73.07H23.65S17.87-.16,16.94,4.48Z"
                    />
                    <circle className="cls-1" cx="25.17" cy="10.38" r="1.71" />
                    <path
                      className="cls-1"
                      d="M2.22.08,0,12c4.88.36,12.56,1.06,14.61-5.71S6.07-.08,2.22.08Zm5.16,10c-2.05,1-3.91.17-4.15-1.95a6.25,6.25,0,0,1,3.3-5.74c2-1,3.91-.18,4.15,2a6.25,6.25,0,0,1-3.29,5.73Z"
                    />
                    <path
                      className="cls-1"
                      d="M53,2.5s-7.69-.58-8.61,5.22c-.69,4.34,5.11,4.34,7.17,4.37s6.48-.21,7.92-4.37C61.41,2.25,53,2.5,53,2.5Zm-.52,8.63c-2,1-3.91.18-4.14-1.94a6.25,6.25,0,0,1,3.29-5.74c2-1,3.91-.17,4.14,1.95a6.25,6.25,0,0,1-3.27,5.73Z"
                    />
                    <path
                      className="cls-1"
                      d="M106,3.54c-.85-.93-4.42-1.24-6.45-1.06-3,.28-6.55,1.5-7,5.39-.35,3.73,3.9,4,6.15,4.14,4.11.23,5.71-.74,6.72-1.29l.11-1.21a9.53,9.53,0,0,1-4.65,1c-1.33,0-4.45-.5-3.9-4.05V6.34L106.46,6V5.07h0A2.26,2.26,0,0,0,106,3.54Zm-4,1.69-4.83.17C98.22,2.85,102.62,2.48,102,5.23Z"
                    />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </a>
        <ul className="relative hidden lg:flex gap-6">
          {NavbarItems.map((item, index) => {
            return (
              <>
                <li
                  key={index}
                  className={`group/parent duration-150 ${isScrolling ? "text-black" : "text-zinc-100"} hover:text-zinc-400 text-sm cursor-pointer py-2`}
                >
                  <a href="#" className="flex items-center gap-1">
                    {item.title}
                    <IoIosArrowDown className="mt-1" />{" "}
                  </a>
                  <div
                    className={`hidden w-1/5 bg-zinc-100 p-2 rounded text-center absolute lg:group-hover/parent:flex flex-col gap-2 text-[13px] font-light shadow-md ${item.left} top-8`}
                  >
                    {item.children.map((child, i) => {
                      return (
                        <a
                          href="#"
                          key={i}
                          className="duration-150 text-black hover:text-red-600"
                        >
                          {child.title}
                        </a>
                      );
                    })}
                  </div>
                </li>
              </>
            );
          })}
        </ul>
        <div className="">
          <div className="hidden lg:flex items-center gap-4">
            <button className={`flex gap-1 items-center ${isScrolling ? "text-red-700" : "text-zinc-100"}  hover:text-red-700 ease-in duration-300`}>
              <FiGlobe className="mt-1 text-lg" />
              Languages
            </button>
            <button className={`${isScrolling ? "text-red-700" : "text-zinc-100"} hover:text-red-700 ease-in duration-300 text-lg`}>
              <IoIosSearch className="text-xl mt-1" />
            </button>
          </div>
          <div className="lg:hidden flex items-center gap-2">
            <button className={`${isScrolling ? "text-red-700" : "text-zinc-100"} hover:text-red-700 ease-in duration-300 text-lg`}>
              <IoIosSearch className="text-xl" />
            </button>
            <button
              onClick={() => {
                setMobileNav(true);
              }}
              className={`flex gap-2 items-center ${isScrolling ? "text-red-700" : "text-zinc-100"} hover:text-red-700 ease-in duration-300`}
            >
              <FaBars />
            </button>
          </div>
        </div>
        <MobileNavbar mobileNav={mobileNav} setMobileNav={setMobileNav} />
      </div>
      {/* Slider */}
      <Swiper
        breakpointsBase="window"
        grabCursor={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[FreeMode, Pagination, Autoplay]}
        loop={true}
        autoplay={{ delay: 10000 }}
        className="my-swiper"
      >
        {SliderItems.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                className="w-full h-screen flex justify-center"
                style={{
                  background: `url(${item.background})`,
                  backgroundPosition: item.bgPosition,
                  backgroundSize: "cover"
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
                  <div className="text-white text-center flex flex-col items-center lg:items-start gap-10">
                    <h1 className="font-bold text-2xl lg:text-4xl">{item.title}</h1>
                    {SliderItems.indexOf(item) > 0 && (
                      <button className="flex items-center gap-2 h-fit w-fit py-1 px-6 text-white hover:bg-red-700 hover:border-red-700 duration-300 text-sm lg:text-base border rounded-full">
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
    </header>
  );
}
