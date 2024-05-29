import Image from 'next/image';
import React from 'react';

const Spinner = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Image src="/Spinner.svg" alt="spinner" height={40} width={40} />
      <h1>Loading please wait</h1>
    </div>
  );
};

export default Spinner;
