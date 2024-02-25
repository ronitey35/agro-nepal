import { Icardprops } from "@/Types";
import Image from "next/image";
import Veges from "../assets/images/vegetables.jpg";

const Category = ({ title }: Icardprops) => {
  return (
    <div className="bg-lime-200 max-w-sm rounded-[20px] overflow-hidden relative shadow-lg border-[3px] ">
      <Image className="w-full" src={Veges} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          Best Things you will Ever have in your entire life
        </p>
      </div>
    </div>
  );
};

export default Category;
