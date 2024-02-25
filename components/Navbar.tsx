import React from "react";

const Navbar = () => {
  return (
    <div className="  ml-4 mr-4 mt-2 rounded-[20px] flex items-center justify-between  p-4 gap-6 min-w-10 min-h-[60px] ">
      <div className="image-logo flex gap-5 font-bold text-2xl  items-center">
        <h2 className="text-2xl">LOGO</h2>
        <h1>AgroNepal</h1>
      </div>

      <div className="list flex ">
        <ol className="flex gap-16 items-center font-bold text-2xl ">
          <li className="cursor-pointer ">Home</li>
          <li className="cursor-pointer ">Product</li>
          <li className="cursor-pointer ">Our Sevices</li>
          <li className="cursor-pointer ">About US</li>
        </ol>
      </div>
      <div className="flex gap-5 items-center font-bold text-2xl ">
        <h1 className="flex cursor-pointer h-9 w-24 items-center justify-center bg-inherit rounded-xl hover:bg-white ">
          SignUp
        </h1>
        <h1 className=" flex cursor-pointer h-9 w-24 items-center justify-center  bg-lime-300 rounded-xl  hover:border-[1px]">
          Login
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
