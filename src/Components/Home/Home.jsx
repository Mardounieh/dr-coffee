import ExploreCard from "./ExploreCard";

// images
import explore1 from "../../assets/picture/explore1.jpg";
import explore2 from "../../assets/picture/explore2.jpg";
import explore3 from "../../assets/picture/explore3.jpg";
import explore4 from "../../assets/picture/explore4.jpg";
import product1 from "../../assets/picture/product1-Bip.png";
import product2 from "../../assets/picture/product2-Bip.png";
import product3 from "../../assets/picture/product3-Bip.png";
import product4 from "../../assets/picture/product4-Bip.png";
import technical1 from "../../assets/picture/technical1.jpg"
import technical2 from "../../assets/picture/technical2.jpg"
import technical3 from "../../assets/picture/technical3.jpg"
import technical4 from "../../assets/picture/technical4.jpg"
import { IoArrowForward } from "react-icons/io5";

export default function Home() {
  return (
    <main className="w-11/12 mt-10">
      <article className="flex flex-col gap-10">
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-2xl md:text-3xl font-bold">EXPLORE PRODUCTS</h2>
          <p className="w-5/6 sm:w-1/2 lg:w-1/4 text-center font-light">
            Premium coffee any time & anywhere Pleasant coffee experience
            dedicated to you
          </p>
        </div>
        <ExploreCard
          background={explore1}
          image={product1}
          title="Coffee Shop"
        />
        <ExploreCard
          background={explore2}
          image={product2}
          title="CVS&HoReCa"
        />
        <ExploreCard
          background={explore3}
          image={product3}
          title="CVS&HoReCa"
        />
        <ExploreCard
          background={explore4}
          image={product4}
          title="CVS&HoReCa"
        />
        <div className="bg-gray-100 rounded flex flex-col text-center items-center gap-5">
          <div className="w-full flex flex-col text-center items-center gap-2 mt-20">
            <h2 className="text-2xl md:text-3xl font-bold">
              TECHNOLOGICAL EXPLORATION
            </h2>
            <p className="text-center font-light">
              Customer-oriented, technology-driven
            </p>
          </div>
          <button className="bg-black hover:bg-red-600 duration-200 flex items-center gap-1 px-4 py-1.5  rounded-full text-white text-sm font-light">Explore <IoArrowForward className="mt-1"/></button>
          <div className="w-10/12 flex gap-5">
            <div>
              <div className="overflow-hidden rounded-xl">
                <img className="duration-1000 hover:scale-105" src={technical1} alt="A barista" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <div className="overflow-hidden rounded-xl">
                  <img className="duration-1000 hover:scale-105" src={technical2} alt="A man enjoying coffee" />
                </div>
                <div className="overflow-hidden rounded-xl">
                  <img className="duration-1000 hover:scale-105" src={technical3} alt="two people having fun" />
                </div>
              </div>
              <div className="overflow-hidden rounded-xl">
                <img className="duration-1000 hover:scale-105" src={technical4} alt="A business meeting" />
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
