import { IoIosArrowDown } from "react-icons/io";
import { NavbarItems } from "../../../components/navbar-items";

export default function Navbar() {
  return (
    <ul className="flex gap-6">
      {NavbarItems.map((item, index) => {
        return (
          <li
            key={index}
            className="flex items-center gap-1 duration-150 text-zinc-100 hover:text-zinc-400 text-sm cursor-pointer"
          >
            {item.title} 
            <IoIosArrowDown className="mt-1"/>{" "}
          </li>
        );
      })}
    </ul>
  );
}
