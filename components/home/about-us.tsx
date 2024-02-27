export const aboutUs = (
  <div>
    <div
      id="about"
      className="relative mr-4 mt-5 overflow-hidden rounded-3xl bg-white "
    >
      <div className="mx-auto max-w-7xl rounded-3xl ">
        <div className="relative z-10 mr-2 rounded-3xl bg-lime-300 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100"></polygon>
          </svg>

          <div className="pt-1"></div>

          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h2 className="my-6 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
                About Us
              </h2>

              <p className="mr-4 text-lg font-medium">
                Founded on a passion for fresh, organic produce,
                <span className="text2xl font-extrabold">AgroNepal</span> is
                dedicated to bringing the best of nature to your table. With a
                commitment to quality, sustainability, and community, we're here
                to make healthy eating easy and enjoyable for all.
                <span className="text-xl font-extrabold">
                  Our mission is simple:
                </span>{' '}
                to make fresh, organic produce accessible to everyone while
                promoting health, sustainability, and community. Through
                transparent sourcing, ethical practices, and a dedication to
                customer satisfaction, we strive to nourish both people and the
                planet, cultivating a healthier, happier future for all."
              </p>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:h-full lg:w-full"
          src="/aboutus.jpg"
          alt=""
        />
      </div>
    </div>
  </div>
);
