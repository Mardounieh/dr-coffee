import { FaArrowRightLong } from "react-icons/fa6";

export default function SliderButton(props) {
  return (
    <button className="flex items-center gap-2 h-fit w-fit py-1 px-6 text-white hover:bg-red-700 hover:border-red-700 duration-300 text-sm lg:text-lg border rounded-full">
      {props.title} <FaArrowRightLong className="mt-1" />
    </button>
  );
}
