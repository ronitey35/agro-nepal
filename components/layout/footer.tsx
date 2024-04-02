'use client';
import { usePathname } from 'next/navigation';
import path from 'path';
import React from 'react';

const Footer = () => {
  const pathName = usePathname();
  if (pathName == '/profile') return null;
  if (pathName.startsWith('/admin')) return null;

  return (
    <footer className="m-4 rounded-3xl bg-gradient-to-br from-green-400 to-blue-400 font-sans">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div className="text-center sm:col-span-2 sm:text-left">
            <h1 className="font-serif text-xl font-semibold tracking-tight text-white md:text-2xl">
              Subscribe to get an exclusive offer as the first one.
            </h1>
            <div className="mt-6 flex flex-col space-y-3 md:flex-row md:space-y-0">
              <input
                id="email"
                type="text"
                className="rounded-md border bg-lime-300 px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                placeholder="Email Address"
              />
              <button className="w-full transform rounded-lg bg-gray-800 px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-80 md:mx-4 md:w-auto">
                Subscribe
              </button>
            </div>
          </div>
          <div className="text-center">
            <p className="font-serif font-semibold text-white">Quick Links</p>
            <div className="mt-5 flex flex-col items-center space-y-2">
              <p className="text-white transition-colors duration-300 hover:cursor-pointer hover:text-blue-500 hover:underline">
                Home
              </p>
              <p className="text-white transition-colors duration-300 hover:cursor-pointer hover:text-blue-500 hover:underline">
                Who We Are
              </p>
              <p className="text-white transition-colors duration-300 hover:cursor-pointer hover:text-blue-500 hover:underline">
                Our Philosophy
              </p>
            </div>
          </div>
          <div className="text-center">
            <p className="font-serif font-semibold text-white">Industries</p>
            <div className="mt-5 flex flex-col items-center space-y-2">
              <p className="text-white transition-colors duration-300 hover:cursor-pointer hover:text-blue-500 hover:underline">
                Retail & E-Commerce
              </p>
              <p className="text-white transition-colors duration-300 hover:cursor-pointer hover:text-blue-500 hover:underline">
                Home to Home
              </p>
              <p className="text-white transition-colors duration-300 hover:cursor-pointer hover:text-blue-500 hover:underline">
                Loan
              </p>
            </div>
          </div>
        </div>
        <hr className="my-6 h-2 border-gray-200 md:my-8" />
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="flex justify-center gap-4 md:justify-start">
            <img
              src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg"
              width="130"
              height="110"
              alt="Google Play Store"
            />
            <img
              src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg"
              width="130"
              height="110"
              alt="App Store"
            />
          </div>
          <div className="flex justify-center gap-4 md:justify-end">
            <img
              src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg"
              width="30"
              height="30"
              alt="Facebook"
            />
            <img
              src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg"
              width="30"
              height="30"
              alt="Twitter"
            />
            <img
              src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"
              width="30"
              height="30"
              alt="Instagram"
            />
            <img
              src="https://www.svgrepo.com/show/94698/github.svg"
              width="30"
              height="30"
              alt="GitHub"
            />
            <img
              src="https://www.svgrepo.com/show/22037/path.svg"
              width="30"
              height="30"
              alt="Path"
            />
            <img
              src="https://www.svgrepo.com/show/28145/linkedin.svg"
              width="30"
              height="30"
              alt="LinkedIn"
            />
            <img
              src="https://www.svgrepo.com/show/22048/dribbble.svg"
              width="30"
              height="30"
              alt="Dribbble"
            />
          </div>
        </div>
        <p className="mt-8 text-center text-white md:text-lg">
          © 2023 Agro Nepal Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
