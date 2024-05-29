import { backend_url } from '@/lib/constants';
import { useInfiniteQuery } from '@tanstack/react-query';

import axios from 'axios';

export const useProducts = (query: Record<string, string>) => {
  return useInfiniteQuery({
    queryKey: ['products'],
    queryFn: ({ pageParam }) => fetchProducts({ page: pageParam, query }),
    initialPageParam: 1,
    getNextPageParam(lastPage, allPages, lastPageParam) {
      if (!lastPage.length) return undefined;
      return lastPageParam + 1;
    }
  });
};

//
type Options = {
  query: Record<string, string>;
  page: string | number | undefined;
};

const fetchProducts = async ({ query, page }: Options): Promise<Product[]> => {
  const urlSearchParams = new URLSearchParams(query);
  urlSearchParams.set('page', page?.toString() || '');
  const searchQuery = urlSearchParams.toString();
  const url = `${backend_url}/api/products?${searchQuery}`;

  const { data } = await axios.get(url);
  return data.products;
};
