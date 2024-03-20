import React from 'react';

const OurServices = () => {
  return (
    <div>
      <section
        id="features"
        className="relative m-4 block min-w-[500px] rounded-2xl border-b border-t border-blue-500 bg-gradient-to-br from-purple-500 to-blue-500 px-6 py-10 md:px-10 md:py-20"
      >
        <div className="relative mx-auto max-w-5xl text-center">
          <span className="my-3 flex items-center justify-center text-3xl font-extrabold uppercase tracking-wider text-white shadow-lg">
            Why choose us
          </span>
          <h2 className="block w-full bg-gradient-to-b bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
            <span className="text-white shadow-lg">
              Fresh from Farm to Table, Straight to You
            </span>
          </h2>
          <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center text-xl font-medium leading-relaxed tracking-wide text-white">
            "Experience farm-fresh goodness delivered to your door. Enjoy the
            convenience of organic fruits and vegetables, handpicked just for
            you."
          </p>
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-white bg-gradient-to-br from-blue-400 to-purple-400 p-8 text-center shadow">
            <h3 className="mt-6 text-xl text-white ">Fresh Produce Delivery</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-white">
              Get farm-fresh organic fruits and vegetables conveniently
              delivered to your doorstep, ensuring you always have access to the
              highest quality produce.
            </p>
          </div>

          <div className="rounded-xl border border-white bg-gradient-to-br from-blue-400 to-purple-400 p-8 text-center shadow">
            <h3 className="mt-6 text-xl text-white">
              Sustainable Farming Support
            </h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-white">
              By choosing us, you're not just getting fresh produce- you're also
              supporting sustainable farming practices and local farmers,
              contributing to a healthier planet for future generations.
            </p>
          </div>

          <div className="rounded-xl border border-white bg-gradient-to-br from-blue-400 to-purple-400 p-8 text-center shadow">
            <h3 className="mt-6 text-xl text-white ">Fully Featured</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-white">
              Everything you need to succeed and launch your landing page, right
              out of the box. No need to install anything else.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b"></div>
        <div className="absolute bottom-0 right-0 z-0 h-1/3 w-full"></div>
      </section>
    </div>
  );
};

export default OurServices;
