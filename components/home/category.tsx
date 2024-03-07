import Link from 'next/link';

interface Icardprops {
  title: string;
  image?: string;
  desc?: string;
  price?: number;
}
const Category = ({ title }: Icardprops) => {
  return (
    <div className="relative max-w-sm overflow-hidden rounded-[20px] border-[3px] bg-lime-200 shadow-lg ">
      <img
        className="w-full"
        src="/vegetables.jpg"
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{title}</div>
        <p className="text-base text-gray-700">
          Best Things you will Ever have in your entire life
        </p>
      </div>
      <Link href={`/products?category=${title}`} className=" ml-14">
        Click Here to Explore
      </Link>
    </div>
  );
};

export default Category;
