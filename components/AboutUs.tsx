import Image from "next/image";
import React from "react";
import aboutus from "../assets/images/aboutus.jpg";

const AboutUs = () => {
  return (
    <div>
      <div
        id="about"
        className="relative bg-white overflow-hidden mt-5 mr-4 rounded-3xl "
      >
        <div className="max-w-7xl mx-auto rounded-3xl ">
          <div className="relative z-10 pb-8 bg-lime-300 rounded-3xl mr-2 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100"></polygon>
            </svg>

            <div className="pt-1"></div>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h2 className="my-6 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                  About Us
                </h2>

                <p className="text-lg font-medium mr-4">
                  Founded on a passion for fresh, organic produce,
                  <span className="text2xl font-extrabold">AgroNepal</span> is
                  dedicated to bringing the best of nature to your table. With a
                  commitment to quality, sustainability, and community, we're
                  here to make healthy eating easy and enjoyable for all.
                  <span className="text-xl font-extrabold">
                    Our mission is simple:
                  </span>{" "}
                  to make fresh, organic produce accessible to everyone while
                  promoting health, sustainability, and community. Through
                  transparent sourcing, ethical practices, and a dedication to
                  customer satisfaction, we strive to nourish both people and
                  the planet, cultivating a healthier, happier future for all."
                </p>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full"
            src={aboutus}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
