import React from 'react';
import Link from 'next/link';

interface Icardprops {
  title: string;
  image?: string;
  desc?: string;
  price?: number;
}

const Category = ({ title }: Icardprops) => {
  return (
    <Link
      href={`/products?category=${title}`}
      className="relative rounded-lg border-2 bg-white shadow-lg transition-all duration-200 ease-in hover:scale-[1.05]"
    >
      <img
        className="h-40 w-full object-cover object-center"
        src="/vegetables.jpg"
        alt="Vegetables"
      />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold text-gray-800">{title}</div>
        <p className="text-base text-gray-700">
          Discover the finest selection of {title.toLowerCase()}.
        </p>
      </div>
    </Link>
  );
};

export default Category;
