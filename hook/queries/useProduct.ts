import { backend_url } from '@/lib/constants';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useProduct = (id: string) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProduct(id)
  });
};

export const fetchProduct = async (id: string): Promise<Product> => {
  const { data } = await axios.get(`${backend_url}/api/product/${id}`);
  return data.product;
};
