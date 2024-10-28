import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function List(props) {
  const [showChild, setShowChild] = useState(false);
  return (
    <>
      <li className={`p-5 border-b font-bold text-sm duration-200 ${showChild ? "bg-red-700 text-white" : "bg-transparent"}`}>
        <a onClick={() => {setShowChild(!showChild)}} href="#" className="flex justify-between items-center">
          {props.title} <IoIosArrowDown />
        </a>
      </li>
      <ul className={`${showChild ? 'flex' : 'hidden'} flex-col gap-2 w-11/12 py-5 text-sm`}>
        {props.children.map((child, index) => {
          return <li key={index} className="px-5 py-1 hover:bg-gradient-to-r hover:from-red-50" onClick={() => {setShowChild(!showChild)}}><a href="#">{child}</a></li>;
        })}
      </ul>
    </>
  );
}
