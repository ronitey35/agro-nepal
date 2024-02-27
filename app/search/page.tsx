'use client';
import { useProducts } from '@/hook/queries/useProducts';

type Props = {
  searchParams: Record<string, string>;
};
export default function Page({ searchParams }: Props) {
  const { isLoading, data } = useProducts(searchParams);
  const products = data?.pages.flat(1) || [];
  if (isLoading) return 'loading...';
  return <div>{JSON.stringify(products)}</div>;
}
