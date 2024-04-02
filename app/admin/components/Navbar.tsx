'use client';
import { useProfile } from '@/hook/queries/useProfile';
import {
  Avatar,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  const { data } = useProfile();

  return (
    <div className="flex h-[80px] items-center justify-between bg-slate-700 ">
      <h1>Admin Panel</h1>
      <div>
        <Popover placement="bottom-end" isLazy>
          <PopoverTrigger>
            <Avatar size="md" name="Dan Abrahmov" src={data?.image} />
          </PopoverTrigger>
          <PopoverContent className="bg-gray-100 text-black " width="200px">
            <PopoverCloseButton />
            <PopoverBody className="rounded-md hover:bg-gray-400">
              <Link href="/userprofile">Profile</Link>
            </PopoverBody>
            <PopoverBody className=" rounded-md hover:bg-gray-400">
              Setting
            </PopoverBody>

            <PopoverBody className="rounded-md hover:bg-gray-400">
              Logout
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default Navbar;
