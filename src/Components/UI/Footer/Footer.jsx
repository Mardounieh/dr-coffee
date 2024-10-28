// styles
import "./Footer.css"
// Icons
import { LuShoppingCart } from "react-icons/lu";
import { BiCommentDetail } from "react-icons/bi";
import { TfiHeadphoneAlt } from "react-icons/tfi";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center bg-[#1e282d]">
      <div className="w-full flex items-center justify-around text-white py-10"> 
        <div className="flex items-center gap-5 parent cursor-pointer">
          <div className="p-3 group-hover: duration-200 rounded-full text-2xl border child">
            <LuShoppingCart />
          </div>
          <div>
            <h3>Shop Now</h3>
            <p>Order coffee machines online</p>
          </div>
        </div>
        <div className="flex items-center gap-5 parent cursor-pointer">
          <div className="p-3 group-hover: duration-200 rounded-full text-2xl border child">
            <BiCommentDetail />
          </div>
          <div>
            <h3>Shop Now</h3>
            <p>Order coffee machines online</p>
          </div>
        </div>
        <div className="flex items-center gap-5 parent cursor-pointer">
          <div className="p-3 group-hover: duration-200 rounded-full text-2xl border child">
            <TfiHeadphoneAlt />
          </div>
          <div>
            <h3>Shop Now</h3>
            <p>Order coffee machines online</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
