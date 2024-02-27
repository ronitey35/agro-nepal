import { useQuery } from "@tanstack/react-query";

import axios from "axios";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
};

const fetchProducts = async (): Promise<Product[]> => {
  const { data } = await axios.get(
    "https://online-grocery-x.vercel.app/api/products"
  );
  return data.products;
};
