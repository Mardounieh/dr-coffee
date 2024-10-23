import { FiGlobe } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";

export default function Search() {
  return (
    <div className="flex items-center gap-4">
      <button className="flex gap-2 items-center text-zinc-100 hover:text-red-700 ease-in duration-300">
        <FiGlobe className="text-lg" />
        Language
      </button>
      <button className=" text-zinc-100 hover:text-red-700 ease-in duration-300 text-lg "><IoSearch /></button>
    </div>
  );
}
