// list
import { FooterItems } from "./FooterItems";
// styles
import "./Footer.css";
// Icons
import { LuShoppingCart } from "react-icons/lu";
import { BiCommentDetail } from "react-icons/bi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center">
      <div className="w-full flex items-center justify-around bg-[#1e282d] text-white py-10 px-5">
        <div className="flex flex-col md:flex-row items-center gap-3 parent cursor-pointer">
          <div className="p-3 group-hover: duration-200 rounded-full text-2xl border child relative">
            <LuShoppingCart />
          </div>
          <div>
            <h3 className="font-bold text-base lg:text-lg">Shop Now</h3>
            <p className="hidden md:block text-xs lg:text-sm text-neutral-400/80">
              Order coffee machines online
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-3 parent cursor-pointer">
          <div className="p-3 group-hover: duration-200 rounded-full text-2xl border child">
            <BiCommentDetail />
          </div>
          <div>
            <h3 className="font-bold text-base lg:text-lg">Shop Now</h3>
            <p className="hidden md:block text-xs lg:text-sm text-neutral-400/80">
              Order coffee machines online
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-3 parent cursor-pointer">
          <div className="p-3 group-hover: duration-200 rounded-full text-2xl border child">
            <TfiHeadphoneAlt />
          </div>
          <div>
            <h3 className="font-bold text-base lg:text-lg">Shop Now</h3>
            <p className="hidden md:block text-xs lg:text-sm text-neutral-400/80">
              Order coffee machines online
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center gap-10 bg-[#141b1f]">
        <div className="hidden md:flex w-full justify-around pt-8 px-5 lg:px-12">
          {FooterItems.map((item, index) => {
            return (
              <div key={index} className="flex flex-col gap-2">
                <a className="text-white cursor-pointer">{item.title}</a>
                <ul className="flex flex-col gap-1">
                  {item.children.map((child, i) => {
                    return (
                      <li className="text-zinc-500 cursor-pointer text-sm lg:text-base" key={i}>
                        <a href="#">{child.title}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="w-10/12 px-2 pt-10 flex justify-center md:justify-start gap-3 text-gray-400 text-xl">
          <FaLinkedinIn className="cursor-pointer hover:text-white duration-200" />
          <FaFacebookF className="cursor-pointer hover:text-blue-600 duration-200" />
          <FaTwitter className="cursor-pointer hover:text-sky-500 duration-200" />
        </div>
        <div className="w-10/12 border-t border-gray-800 flex items-center text-gray-500 justify-between pt-5 pb-10">
          <p className="font-light text-center">
            Copyright © 2021 Suzhou Dr.coffee System Technology Co., Ltd.
            版权所有 苏ICP备17060705号-3
          </p>
          <a href="#" className="hidden lg:inline-block">
          <svg
            className="w-28 fill-gray-500 hover:fill-red-600 duration-150"
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
        </div>
      </div>
    </footer>
  );
}
