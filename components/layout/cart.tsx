import { useShoppingCart } from '@/providers/shoppingCart-provider';
import React from 'react';

const Cart = () => {
  const {
    closeCart,
    cartItems,
    cartQuantity,
    increaseCartQuantity,
    decreaseCartQuantity
  } = useShoppingCart();
  console.log(cartItems);
  return (
    <div className="fixed inset-y-0 right-0 w-80 bg-white p-4 shadow-lg">
      <div className="flex items-center justify-between">
        <h1 className=" m-3  text-xl font-semibold"> Cart</h1>
        <button className=" text-2xl font-bold" onClick={closeCart}>
          X
        </button>
      </div>
      <div>
        {cartQuantity > 0 ? (
          cartItems.map((item) => (
            <div key={item.id}>
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src="/carrot.jpg"
                    alt={item.title}
                    className="mr-4 h-16 w-16"
                  />
                  <div>
                    <p className="text-lg font-semibold">{item.title}</p>
                    <p className="text-gray-500">Rs {item?.price}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => decreaseCartQuantity(item.id)}
                    className="rounded-l-md bg-gray-200 px-3 py-1 text-gray-700 hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="bg-gray-100 px-3 py-1">{item.quantity}</span>
                  <button
                    onClick={() =>
                      increaseCartQuantity({
                        id: item?.id,
                        quantity: item.quantity
                      })
                    }
                    className="rounded-r-md bg-gray-200 px-3 py-1 text-gray-700 hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <>
            <h1>Cart is Empty</h1>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
