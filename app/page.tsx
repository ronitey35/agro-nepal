import React from 'react';
import { aboutUs } from '@/components/home/about-us';
import Category from '@/components/home/category';
import OurServices from '@/components/home/our-services';
import { Img } from '@chakra-ui/react';

export default function Home() {
  return (
    <main>
      <div className="mx-4 mb-8 mt-2 flex flex-col items-center justify-between rounded-[20px] bg-gradient-to-br from-green-300 to-blue-400 md:flex-row">
        {/* Text Section */}
        <div className="rounded-l-lg bg-white bg-opacity-30 p-8 md:w-1/2">
          <div className="flex flex-col gap-6 text-center font-extrabold md:text-left">
            <h1 className="text-6xl text-blue-700">Order your Favourites </h1>
            <h1 className="text-5xl text-red-500">Groceries Online </h1>
            <h1 className="text-4xl text-green-700">with us</h1>
          </div>
        </div>
        {/* Image Section */}
        <div className="relative h-[500px] md:w-1/2">
          <Img
            src="/agro.png"
            objectFit="cover"
            className="rounded-r-lg"
            alt="Image"
          />
        </div>
      </div>

      {/* Categories Section */}
      <div className="mb-8 flex items-center justify-center text-3xl">
        <span className="mr-5 w-1/4 border-t border-gray-400"></span>
        <span className="relative z-10 inline-block bg-white px-4 py-2">
          Categories
        </span>
        <span className="ml-5 w-1/4 border-t border-gray-400"></span>
      </div>

      {/* Category Cards */}
      <div className="m-4 flex min-w-[1333px] flex-row gap-2">
        <Category title="vegetables" />
        <Category title="fruits" />
        <Category title="Honey" />
        <Category title="Meat" />
      </div>

      {/* Our Services Section */}
      <OurServices />

      {/* About Us Section */}
      <div className="relative m-4 block min-w-[500px] rounded-2xl border-b border-t border-green-500 bg-gradient-to-br from-green-400 to-blue-400 px-6 py-10 md:px-10 md:py-20">
        {aboutUs}
      </div>
    </main>
  );
}
