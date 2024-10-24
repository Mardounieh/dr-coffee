import { useContext } from "react";
import { MenuContext } from "../header";

export default function Search(props) {
  const {setIsVisible} = useContext(MenuContext)
  return (
    <div className="flex items-center gap-4">
      <button className="flex gap-2 items-center text-zinc-100 hover:text-red-700 ease-in duration-300">
        {props.firstIcon}
        {props.text}
      </button>
      <button onClick={() => {setIsVisible(true)}} className=" text-zinc-100 hover:text-red-700 ease-in duration-300 text-lg lg:pointer-events-none">{props.secondIcon}</button>
    </div>
  );
}
