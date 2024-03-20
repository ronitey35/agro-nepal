'use client';
import React from 'react';
import { useShoppingCart } from '@/providers/shoppingCart-provider';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Cart } from '../Index';
import { backend_url } from '@/lib/constants';
import {
  Avatar,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const { openCart, isOpen, cartQuantity } = useShoppingCart();
  const isAdmin = false;
  const islogged = false;
  return (
    <div className="  mb-3 ml-4 mr-4 mt-2 flex min-h-[60px] min-w-10 items-center justify-between gap-6  rounded-[20px] bg-white pb-5 pt-5   text-black  ">
      <div className=" image-logo ml-2 flex items-center gap-5 text-2xl font-bold">
        <Link href="/" className=" font-serif text-3xl text-blue-800">
          <span>AgroNepal</span>
        </Link>
      </div>
      <div className="list flex ">
        <ol className="flex items-center gap-16 font-mono text-2xl ">
          <li className="cursor-pointer transition-all hover:scale-[1.05] hover:font-medium hover:duration-100 ">
            Home
          </li>
          <li className="cursor-pointer  transition-all hover:scale-[1.05] hover:font-medium hover:duration-100  ">
            Product
          </li>
          <li className="cursor-pointer  transition-all hover:scale-[1.05] hover:font-medium hover:duration-100 ">
            Our Sevices
          </li>
          <li className="cursor-pointer transition-all hover:scale-[1.05] hover:font-medium hover:duration-100  ">
            About US
          </li>
        </ol>
      </div>

      {/* dynamic side */}
      <div className="flex items-center gap-14 text-2xl font-bold ">
        <div>
          {cartQuantity > 0 && (
            <div>
              {isOpen ? (
                <Cart />
              ) : (
                <button onClick={openCart} className="relative">
                  <AiOutlineShoppingCart size={40} />
                  {cartQuantity > 0 && (
                    <span className=" absolute -right-2 -top-1 flex h-[22px] w-[22px] items-center justify-center rounded-full bg-red-600 px-2 py-1 text-[8px] text-xl text-white">
                      {cartQuantity}
                    </span>
                  )}
                </button>
              )}
            </div>
          )}
        </div>

        <div className=" ">
          {islogged ? (
            !isOpen && (
              <Popover placement="bottom-end" isLazy>
                <PopoverTrigger>
                  <Avatar name="Dan Abrahmov" src="/luffy.jpg" />
                </PopoverTrigger>
                <PopoverContent
                  className="bg-gray-100 text-black "
                  width="200px"
                >
                  <PopoverCloseButton />
                  <PopoverBody className="rounded-md hover:bg-gray-400">
                    Profile
                  </PopoverBody>
                  <PopoverBody className=" rounded-md hover:bg-gray-400">
                    Setting
                  </PopoverBody>

                  {isAdmin ? (
                    <PopoverBody className="rounded-md hover:bg-gray-400">
                      Admin panel
                    </PopoverBody>
                  ) : (
                    <PopoverBody className="rounded-md hover:bg-gray-400">
                      User panel
                    </PopoverBody>
                  )}
                  <PopoverBody className="rounded-md hover:bg-gray-400">
                    Logout
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            )
          ) : (
            <Link
              href="/profile"
              // onClick={() =>
              //   window.open(`${backend_url}/api/login/google`, '_self')
              // }

              className="ease h-9 cursor-pointer  items-center justify-center rounded-lg bg-green-400  px-2  font-mono transition-all hover:scale-[1.05] hover:duration-200"
            >
              Get Started
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
