import React from 'react';

const Navbar = () => {
  return (
    <div className="  ml-4 mr-4 mt-2 flex min-h-[60px] min-w-10 items-center  justify-between gap-6 rounded-[20px] p-4 ">
      <div className="image-logo flex items-center gap-5 text-2xl  font-bold">
        <h2 className="text-2xl">LOGO</h2>
        <h1>AgroNepal</h1>
      </div>

      <div className="list flex ">
        <ol className="flex items-center gap-16 text-2xl font-bold ">
          <li className="cursor-pointer ">Home</li>
          <li className="cursor-pointer ">Product</li>
          <li className="cursor-pointer ">Our Sevices</li>
          <li className="cursor-pointer ">About US</li>
        </ol>
      </div>
      <div className="flex items-center gap-5 text-2xl font-bold ">
        <h1 className="flex h-9 w-24 cursor-pointer items-center justify-center rounded-xl bg-inherit hover:bg-white ">
          SignUp
        </h1>
        <h1 className=" flex h-9 w-24 cursor-pointer items-center justify-center  rounded-xl bg-lime-300  hover:border-[1px]">
          Login
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
