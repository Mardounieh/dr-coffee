import { useContext } from "react";
import { MenuContext } from "../header";
import { CgClose } from "react-icons/cg";
import { FiGlobe } from "react-icons/fi";


export default function Close() {
  const {setIsVisible} = useContext(MenuContext);
  return (
    <div className="flex justify-between items-center w-11/12 py-5 pr-4 border-b">
      <div className="flex items-center gap-2 cursor-pointer">
        <FiGlobe className="text-lg"/>
        <span className="font-bold">Languages</span>
        <div className="text-sm  flex gap-1">
          <span>中文</span>
          <span className="text-red-900">|</span>
          <span className="text-red-600">English</span>
        </div>
      </div>
      <div>
        <CgClose onClick={() => {setIsVisible(false)}} className="text-2xl text-red-700 cursor-pointer"/>
      </div>
    </div>
  );
}
