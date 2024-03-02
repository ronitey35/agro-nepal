'use client';
import { useProduct } from '@/hook/queries/useProduct';
import { useShoppingCart } from '@/providers/shoppingCart-provider';

type Props = {
  params: { id: string };
};

export default function page({ params }: Props, { addToCart }: cartProps) {
  const { data: product } = useProduct(params.id);
  const { increaseCartQuantity } = useShoppingCart();

  return (
    <div>
      <div className=" bg-gray-100 py-8 dark:bg-gray-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="-mx-4 flex flex-col md:flex-row">
            <div className="px-4 md:flex-1">
              <div className="mb-4 h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700">
                <img
                  className="h-full w-full object-cover"
                  src=""
                  alt="Product Image"
                />
              </div>
              <div className="-mx-2 mb-4 flex">
                <div className="w-1/2 px-2">
                  {product && (
                    <button
                      onClick={() => increaseCartQuantity(product.id)}
                      className="w-full rounded-full bg-gray-900 px-4 py-2 font-bold text-white hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700"
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
                <div className="w-1/2 px-2">
                  <button className="w-full rounded-full bg-gray-200 px-4 py-2 font-bold text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
                    Add to Favourites
                  </button>
                </div>
              </div>
            </div>
            <div className="px-4 md:flex-1">
              <h2 className="mb-2 text-2xl font-bold text-gray-800 dark:text-white">
                {product?.title}
              </h2>
              <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                {product?.listedAt}
              </p>
              <div className="mr-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Price:
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  {product?.price}
                </span>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Availability:
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  {product?.stock}
                </span>
              </div>
            </div>

            <div>
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
