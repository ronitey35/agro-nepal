import { useShoppingCart } from '@/providers/shoppingCart-provider';
import React from 'react';
import CartItem from './cartItem';

const Cart = () => {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <div className="fixed inset-y-0 right-0 w-80 bg-white p-4 shadow-lg">
      <div className="flex items-center justify-between">
        <h1 className=" text-xl font-semibold">Your Cart</h1>
        <button className=" text-2xl font-bold" onClick={closeCart}>
          X
        </button>
      </div>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Cart;
