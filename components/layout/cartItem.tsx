import { useShoppingCart } from '@/providers/shoppingCart-provider';
import React from 'react';

type cartItemProps = {
  item: CartItem;
};

const CartItem = ({ item }: cartItemProps) => {
  const { cartItems } = useShoppingCart();
  return <div className="grid grid-cols-1 "></div>;
};

export default CartItem;
