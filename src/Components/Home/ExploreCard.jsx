import { IoArrowForward } from "react-icons/io5";

export default function ExploreCard(props) {
  return (
    <div
      className="relative min-h-80 group bg-cover bg-center flex flex-col items-center justify-center gap-5 text-white overflow-hidden rounded aspect-[8/3]"
    >
      <img className="group-hover:scale-105 duration-1000 absolute inset-0 w-full h-full -z-10 object-cover" src={props.background} alt="Card Background" />
      <img className="w-14" src={props.image} alt="Product Image" />
      <h2 className="text-2xl lg:text-3xl font-bold">{props.title}</h2>
      <button className="flex items-center gap-1 bg-white py-1.5 px-4 rounded-full text-black text-sm font-light hover:text-white hover:bg-red-600 duration-200">
        Explore <IoArrowForward className="mt-1" />
      </button>
    </div>
  );
}
