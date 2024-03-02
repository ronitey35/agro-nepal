'use client';
import { useProducts } from '@/hook/queries/useProducts';
import Link from 'next/link';

type Props = {
  searchParams: Record<string, string>;
};
export default function Page({ searchParams }: Props) {
  const { isLoading, data } = useProducts(searchParams);
  const products = data?.pages.flat(1) || [];
  if (isLoading) return 'loading...';
  return (
    <div className="grid grid-cols-3 gap-4 ">
      {products.map((item) => (
        <div
          key={item.id}
          className="group rounded-lg bg-gray-200 p-4
      text-center transition-all hover:bg-white hover:shadow-md hover:shadow-black/25"
        >
          <div className="text-center">
            <img
              src={item.owner.image}
              className="max-h-auto mx-auto block max-h-24"
              alt="image"
            />
            <h1>{item.owner.name}</h1>
          </div>
          <h4 className="my-3 text-xl font-semibold">{item.title}</h4>
          <p className="line-clamp-3 text-sm text-gray-500">
            {item.description}
          </p>
          <Link href={`/product/${item.id}`}> Click Me</Link>
        </div>
      ))}
    </div>
  );
}
