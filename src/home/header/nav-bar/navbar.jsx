import { useContext, useState } from "react";
import { MenuContext } from "../header";
import { IoIosArrowDown } from "react-icons/io";
import { NavbarItems } from "../../../components/navbar-items";
import Close from "./close";

export default function Navbar() {
  const {isVisible} = useContext(MenuContext);
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <ul className="relative hidden lg:flex gap-6">
        {NavbarItems.map((item, index) => {
          return (
            <>
              <li
                key={index}
                className="group/parent duration-150 text-zinc-100 hover:text-zinc-400 text-sm cursor-pointer py-2"
              >
                <a href="/" className="flex items-center gap-1">
                  {item.title}
                  <IoIosArrowDown className="mt-1" />{" "}
                </a>
                <div
                  className={`hidden w-1/5 bg-zinc-100 p-2 rounded text-center absolute lg:group-hover/parent:flex flex-col gap-2 text-[13px] font-light shadow-md ${item.left} top-8`}
                >
                  {item.children.map((child, i) => {
                    return (
                      <a
                        href="/"
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
      <ul className={`overflow-y-scroll flex flex-col items-center duration-200 origin-right w-full ${isVisible ? "scale-x-100" : "scale-x-0"} h-screen absolute top-0 left-0 bg-white text-black`}>
      <Close />
      {NavbarItems.map((item, index) => {
          return (
            <>
              <li
                key={index}
                className="duration-150 text-sm font-bold cursor-pointer py-1 border-b w-10/12 group/mother"
              >
                <a href="#" onClick={() => {setIsShow(!isShow)}} className="flex items-center justify-between gap-1 p-5">
                  {item.title}
                  <IoIosArrowDown className="mt-1" />{" "}
                </a>
                <ul
                  className="px-5 pb-2 rounded flex flex-col gap-2 text-sm font-normal"
                >
                  {item.children.map((child, i) => {
                    return (
                      <li
                        href="/"
                        key={i}
                        className="p-1 duration-150 text-black hover:text-red-600 hover:bg-gradient-to-l hover:from-white hover:to-red-50/50 hidden group-hover/mother:inline-block"
                      >
                        {child.title}
                      </li>
                    );
                  })}
                </ul>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
}
