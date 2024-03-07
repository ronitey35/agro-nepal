'use client';
import Product from '@/components/Product';
import { useProduct } from '@/hook/queries/useProduct';
import { useShoppingCart } from '@/providers/shoppingCart-provider';

type Props = {
  params: { id: string };
};

export default function page({ params }: Props) {
  const { data: product } = useProduct(params.id);
  const { increaseCartQuantity } = useShoppingCart();

  return (
    <div className="bg-gray-100 dark:bg-gray-800">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="-mx-4 flex flex-col md:flex-row">
          <div className="px-4 md:w-1/2">
            <div className="aspect-w-4 aspect-h-3 md:aspect-w-16 md:aspect-h-9 mb-4 overflow-hidden rounded-lg bg-gray-300 dark:bg-gray-700">
              <img
                className="h-full w-full object-cover"
                src="/carrot.jpg"
                alt="Product Image"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <button
                onClick={() => {
                  increaseCartQuantity({
                    id: product?.id,
                    quantity: 1,
                    image: product?.image,
                    price: product?.price
                  });
                }}
                className="mr-2 w-1/2 rounded-full bg-gray-900 px-4 py-2 font-bold text-white hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700"
              >
                Add to Cart
              </button>
              <button className="ml-2 w-1/2 rounded-full bg-gray-200 px-4 py-2 font-bold text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
                Add to Favourites
              </button>
            </div>
          </div>
          <div className="mt-4 px-4 md:mt-0 md:w-1/2">
            <h2 className="mb-2 text-2xl font-bold text-gray-800 dark:text-white">
              {product?.title}
            </h2>
            <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
              {product?.listedAt}
            </p>
            <div className="mb-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Price:Rs
              </span>
              <span className="ml-2 text-gray-600 dark:text-gray-300">
                {product?.price}
              </span>
            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Availability:
              </span>
              <span className="ml-2 text-gray-600 dark:text-gray-300">
                {product?.stock}
              </span>
            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Product Description:
              </span>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                {product?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
