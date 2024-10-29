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
import technical1 from "../../assets/picture/technical1.jpg";
import technical2 from "../../assets/picture/technical2.jpg";
import technical3 from "../../assets/picture/technical3.jpg";
import technical4 from "../../assets/picture/technical4.jpg";
import news1 from "../../assets/picture/news1.jpg"
import news2 from "../../assets/picture/news2.jpg"


// Icon
import { IoArrowForward } from "react-icons/io5";

export default function Home() {
  return (
    <main className="w-11/12 mt-10 flex flex-col gap-10">
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
          <button className="bg-black hover:bg-red-600 duration-200 flex items-center gap-1 px-4 py-1.5  rounded-full text-white text-sm font-light">
            Explore <IoArrowForward className="mt-1" />
          </button>
          <div className="w-10/12 flex gap-5">
            <div>
              <div className="overflow-hidden rounded-xl">
                <img
                  className="duration-1000 hover:scale-105"
                  src={technical1}
                  alt="A barista"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <div className="overflow-hidden rounded-xl">
                  <img
                    className="duration-1000 hover:scale-105"
                    src={technical2}
                    alt="A man enjoying coffee"
                  />
                </div>
                <div className="overflow-hidden rounded-xl">
                  <img
                    className="duration-1000 hover:scale-105"
                    src={technical3}
                    alt="two people having fun"
                  />
                </div>
              </div>
              <div className="overflow-hidden rounded-xl">
                <img
                  className="duration-1000 hover:scale-105"
                  src={technical4}
                  alt="A business meeting"
                />
              </div>
            </div>
          </div>
        </div>
      </article>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="relative min-h-96 group bg-cover bg-center flex flex-col items-center pt-16 gap-5 text-white overflow-hidden rounded-lg aspect-[8/3] text-center">
          <img
            className="group-hover:scale-105 duration-1000 absolute inset-0 w-full h-full -z-10 object-cover"
            src={news1}
            alt="Card Background"
          />
          <h2 className="text-2xl lg:text-3xl font-bold">Product Distribution</h2>
          <p className="text-sm font-light w-5/6">Dr. Coffee's product and services now cover 100+ countries and regions</p>
          <button className="flex items-center gap-1 bg-white py-1.5 px-4 rounded-full text-black text-sm font-light hover:text-white hover:bg-red-600 duration-200">
            Explore <IoArrowForward className="mt-1" />
          </button>
        </div>
        <div className="relative min-h-80 group bg-cover bg-center flex flex-col items-center pt-16 gap-5 text-white overflow-hidden rounded-lg aspect-[8/3] text-center">
          <img
            className="group-hover:scale-105 duration-1000 absolute inset-0 w-full h-full -z-10 object-cover"
            src={news2}
            alt="Card Background"
          />
          <h2 className="text-2xl lg:text-3xl font-bold">Latest News</h2>
          <p className="text-sm font-light w-5/6">All the latest updates about Dr. Coffee</p>
          <button className="flex items-center gap-1 bg-white py-1.5 px-4 rounded-full text-black text-sm font-light hover:text-white hover:bg-red-600 duration-200">
            Explore <IoArrowForward className="mt-1" />
          </button>
        </div>
      </div>
    </main>
  );
}
