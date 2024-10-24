import { createContext, useState } from "react";
import Logo from "./nav-bar/logo";
import Navbar from "./nav-bar/navbar";
import Search from "./nav-bar/search&lang";
import { FiGlobe } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { FaBars } from "react-icons/fa";

export const MenuContext = createContext()


export default function Header() {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <MenuContext.Provider value={{isVisible,setIsVisible}}>
    <header className="w-full flex items-center justify-between">
      <div className="fixed top-0 w-full flex items-center justify-between px-5 pt-5 lg:px-16 lg:pt-3">
        <Logo />
        <Navbar />
        <div className="hidden lg:inline-block">
          <Search firstIcon={<FiGlobe className="text-lg" />} text="Language" secondIcon={<IoSearch />}/>
        </div>
        <div className="lg:hidden text-xl">
        <Search firstIcon={<IoSearch />} secondIcon={<FaBars />}/>
        </div>
      </div>
    </header>
    </MenuContext.Provider>
  );
}
