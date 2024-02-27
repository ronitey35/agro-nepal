'use client';

import { useState } from 'react';
import { useProducts } from '../hook/queries/useProducts';

const Product = () => {
  const [pro, setPro] = useState([]);
  //   const Product_API = useProducts();
  const { data, isLoading } = useProducts();
  return (
    <div>{isLoading ? '..loading' : <div>{/* <h1>{data}</h1> */}</div>}</div>
  );
};

export default Product;
