import AboutUs from "@/components/AboutUs";
import Category from "@/components/Category";
import OurServices from "@/components/OurServices";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex bg-lime-300  ml-4 mr-4 mt-2 mb-2 rounded-[20px] justify-between max-h-[500px] ">
        <div className="flex flex-col gap-6 m-28 ml-48 font-extrabold  ">
          <pre className="text-6xl">Order your</pre>
          <pre className="text-5xl">Daily Groceries</pre>
          <pre className="text-4xl">free Delivery</pre>
        </div>
        <div className="w-full md:w-1/2">
          <Image src="" alt="Image" />
        </div>
      </div>
      <div className="flex items-center justify-center text-3xl">
        <span className="border-t border-gray-400 w-1/4 mr-5"></span>
        <span className="inline-block px-4 py-2 bg-white relative z-10">
          Categories
        </span>
        <span className="border-t border-gray-400 w-1/4 ml-5"></span>
      </div>
      {/* Category cards */}
      <div className="flex flex-row justify-between m-4">
        <Category title="vegetable" />
        <Category title="fruits" />
        <Category title="Honey" />
        <Category title="Meat" />
      </div>
      {/* ourservices */}
      <OurServices />
      {/* about us */}
      <AboutUs />
    </main>
  );
}
