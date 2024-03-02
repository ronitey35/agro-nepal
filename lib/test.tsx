import { useProduct } from '@/hook/queries/useProduct';
import React from 'react';

const test = ({ id }: { id: string }) => {
  const { data } = useProduct(id);
  return <div>{JSON.stringify(data)}</div>;
};

export default test;
