import React from 'react';

export const aboutUs = (
  <div className="relative m-4 block min-w-[500px] rounded-2xl border-b border-t border-green-500 bg-gradient-to-br from-green-400 to-blue-400 px-6 py-10 md:px-10 md:py-20">
    <div className="relative z-10 lg:w-1/2">
      <div className="mx-auto max-w-5xl text-center lg:text-left">
        <span className="my-3 flex items-center justify-center text-3xl font-extrabold uppercase tracking-wider text-white shadow-lg lg:justify-start">
          About Us
        </span>
        <h2 className="block w-full bg-gradient-to-b bg-clip-text text-4xl font-bold text-transparent text-white shadow-lg sm:text-5xl">
          "Founded on a Passion for Fresh, Organic Produce"
        </h2>
        <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center text-lg font-medium leading-relaxed tracking-wide text-white lg:text-left">
          AgroNepal is dedicated to bringing the best of nature to your table.
          With a commitment to quality, sustainability, and community, we're
          here to make healthy eating easy and enjoyable for all. Our mission is
          simple: to make fresh, organic produce accessible to everyone while
          promoting health, sustainability, and community.
        </p>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b"></div>
    <div className="absolute bottom-0 right-0 z-0 h-1/3 w-full"></div>
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        className="h-56 w-full  rounded-md object-cover object-top sm:h-72 md:h-96 lg:h-full lg:w-full"
        src="/aboutus.jpg"
        alt="About Us"
      />
    </div>
  </div>
);
