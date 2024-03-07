import { aboutUs } from '@/components/home/about-us';
import Category from '@/components/home/category';
import OurServices from '@/components/home/our-services';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div className="mb-2 ml-4  mr-4 mt-2 flex max-h-[500px] justify-between rounded-[20px] bg-lime-300 ">
        <div className="m-28 ml-48 flex flex-col gap-6 font-extrabold  ">
          <pre className="text-6xl">Order your</pre>
          <pre className="text-5xl">Daily Groceries</pre>
          <pre className="text-4xl">free Delivery</pre>
        </div>
        <div className="w-full md:w-1/2">
          <Image src="" alt="Image" />
        </div>
      </div>
      <div className="flex items-center justify-center text-3xl">
        <span className="mr-5 w-1/4 border-t border-gray-400"></span>
        <span className="relative z-10 inline-block bg-white px-4 py-2">
          Categories
        </span>
        <span className="ml-5 w-1/4 border-t border-gray-400"></span>
      </div>
      {/* Category cards */}
      <div className="m-4 flex flex-row justify-between">
        <Category title="vegetables" />
        <Category title="fruits" />
        <Category title="Honey" />
        <Category title="Meat" />
      </div>
      {/* ourservices */}
      <OurServices />
      {aboutUs}
    </main>
  );
}
