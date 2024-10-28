import { CgClose } from "react-icons/cg";
import { FiGlobe } from "react-icons/fi";
import List from "./List";

export default function MobileNavbar(props) {
  return (
    <div
      className={`flex flex-col items-center duration-200 origin-right w-full ${
        props.mobileNav ? "scale-x-100" : "scale-x-0"
      } h-screen absolute top-0 left-0 bg-white text-black`}
    >
      <div className="flex justify-between items-center w-11/12 py-5 pr-4 border-b">
        <div className="flex items-center gap-2 cursor-pointer">
          <FiGlobe className="text-lg" />
          <span className="font-bold">Languages</span>
          <div className="text-sm flex gap-1">
            <span>中文</span>
            <span className="text-red-900">|</span>
            <span className="text-red-600">English</span>
          </div>
        </div>
        <button
          onClick={() => {
            props.setMobileNav(false);
          }}
        >
          <CgClose className="text-2xl text-red-700 cursor-pointer" />
        </button>
      </div>
      <ul className="w-11/12 flex flex-col">
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
        <List title="Brand Center" children={["News", "Videos", "Pictures"]} />
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
