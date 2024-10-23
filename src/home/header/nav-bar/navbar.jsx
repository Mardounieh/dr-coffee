import { IoIosArrowDown } from "react-icons/io";
import { NavbarItems } from "../../../components/navbar-items";
import { useState } from "react";

export default function Navbar() {
  return (
    <ul className="flex gap-6">
      {NavbarItems.map((item, index) => {
        return (
          <>
            <li
              key={index}
              className="group/item inner-hover duration-150 text-zinc-100 hover:text-zinc-400 text-sm cursor-pointer"
            >
              <a href="/" className="flex items-center gap-1">
                {item.title}
                <IoIosArrowDown className="mt-1" />{" "}
              </a>
            </li>
            <div
              className={`w-1/12 bg-zinc-100 p-2 rounded text-center absolute flex flex-col gap-2 text-[13px] font-light shadow-md ${item.left} top-12`}
            >
              {item.children.map((child, i) => {
                return (
                  <a href="/" key={i} className="duration-150 hover:text-red-600">
                    {child.title}
                  </a>
                );
              })}
            </div>
          </>
        );
      })}
    </ul>
  );
}
