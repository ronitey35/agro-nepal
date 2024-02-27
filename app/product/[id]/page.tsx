'use client';
import { useProduct } from '@/hook/queries/useProduct';

type Props = {
  params: { id: string };
};
export default function page({ params }: Props) {
  const { data: product } = useProduct(params.id);
  return <div>{product?.title}</div>;
}
