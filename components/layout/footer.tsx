import React from 'react';

const Footer = () => {
  return (
    <footer className=" m-4 rounded-3xl bg-lime-300 font-sans dark:bg-lime-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">
              Subscribe to get an existing offer as first one.
            </h1>

            <div className="mx-auto mt-6 flex flex-col space-y-3 md:flex-row md:space-y-0">
              <input
                id="email"
                type="text"
                className="rounded-md border bg-lime-300 px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                placeholder="Email Address"
              />

              <button className="w-full transform rounded-lg bg-gray-800 px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-80 md:mx-4 md:w-auto">
                Subscribe
              </button>
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-800 dark:text-white">
              Quick Link
            </p>

            <div className="mt-5 flex flex-col items-start space-y-2">
              <p className="text-black-600 dark:text-white-300 transition-colors duration-300 hover:cursor-pointer hover:text-blue-500 hover:underline dark:hover:text-blue-400">
                Home
              </p>
              <p className="text-black-600 dark:text-white-300 transition-colors duration-300 hover:cursor-pointer hover:text-blue-500 hover:underline dark:hover:text-blue-400">
                Who We Are
              </p>
              <p className="text-black-600 dark:text-white-300 transition-colors duration-300 hover:cursor-pointer hover:text-blue-500 hover:underline dark:hover:text-blue-400">
                Our Philosophy
              </p>
            </div>
          </div>

          <div>
            <p className="text-black-800 font-semibold dark:text-white">
              Industries
            </p>

            <div className="mt-5 flex flex-col items-start space-y-2">
              <p className="text-black-600 dark:text-white-300 transition-colors duration-300 hover:cursor-pointer hover:text-blue-500 hover:underline dark:hover:text-blue-400">
                Retail & E-Commerce
              </p>
              <p className="text-black-600 dark:text-white-300 transition-colors duration-300 hover:cursor-pointer hover:text-blue-500 hover:underline dark:hover:text-blue-400">
                Home to Home
              </p>
              <p className="text-black-600 dark:text-white-300 transition-colors duration-300 hover:cursor-pointer hover:text-blue-500 hover:underline dark:hover:text-blue-400">
                Loan
              </p>
            </div>
          </div>
        </div>

        <hr className="my-6 h-2 border-gray-200 md:my-8 dark:border-gray-700" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex flex-1 gap-4 hover:cursor-pointer">
            <img
              src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg"
              width="130"
              height="110"
              alt=""
            />
            <img
              src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg"
              width="130"
              height="110"
              alt=""
            />
          </div>

          <div className="flex gap-4 hover:cursor-pointer">
            <img
              src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg"
              width="30"
              height="30"
              alt="fb"
            />
            <img
              src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg"
              width="30"
              height="30"
              alt="tw"
            />
            <img
              src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"
              width="30"
              height="30"
              alt="inst"
            />
            <img
              src="https://www.svgrepo.com/show/94698/github.svg"
              className=""
              width="30"
              height="30"
              alt="gt"
            />
            <img
              src="https://www.svgrepo.com/show/22037/path.svg"
              width="30"
              height="30"
              alt="pn"
            />
            <img
              src="https://www.svgrepo.com/show/28145/linkedin.svg"
              width="30"
              height="30"
              alt="in"
            />
            <img
              src="https://www.svgrepo.com/show/22048/dribbble.svg"
              className=""
              width="30"
              height="30"
              alt="db"
            />
          </div>
        </div>
        <p className="p-8 text-start font-sans md:p-4 md:text-center md:text-lg">
          © 2023 Agro Nepal Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
