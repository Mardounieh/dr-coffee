import { useContext } from "react";
import { MenuContext } from "../header";
import { IoIosArrowDown } from "react-icons/io";
import { NavbarItems } from "./NavbarItems";
import Close from "./close";
import List from "./list";

export default function Navbar() {
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
    </>
  );
}

export function MobileNavbar() {
  const { isVisible } = useContext(MenuContext);
  return (
    <div
      className={`overflow-y-scroll flex flex-col items-center duration-200 origin-right w-full ${
        isVisible ? "scale-x-100" : "scale-x-0"
      } h-screen absolute top-0 left-0 bg-white text-black`}
    >
      <Close />
      <ul className="w-11/12 flex flex-col ">
        <List
          title="Product Series"
          children={[
            "Coffee shop",
            "CVS & Ho.Re.Ca",
            "OCS",
            "Home",
            "Accessories",
            "Shop now",
          ]}
        />
        <List
          title="Service & Support"
          children={[
            "Our principles",
            "Contact specialist",
            "FAQs",
            "Watch tutorial",
            "Download manual",
          ]}
        />
        <List
          title="About Us"
          children={[
            "Company",
            "Our Business",
            "Our technology",
            "Our quality",
            "Contact Us",
          ]}
        />
        <List
          title="Brand Center"
          children={[
            "News",
            "Videos",
            "Pictures",
          ]}
        />
        <List
          title="Coffee Academy"
          children={[
            "Introduction",
            "Coffee experts",
            "Course center",
            "Photos",
            "Consult now",
          ]}
        />
      </ul>
    </div>
  );
}
