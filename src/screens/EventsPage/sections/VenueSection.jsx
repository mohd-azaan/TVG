import React from 'react';

const ArrowRight = () => (
    <img src="/arrow-right.svg" alt="arrow right" className="w-6 h-6" />
);

export const VenueSection = () => {
  return (
    <section className="bg-[#102121] py-14 lg:py-24 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[80px] font-morganite font-black tracking-wide leading-tight uppercase">
              A Venue That Fits Any Vibe
            </h2>
            <div className="mt-4">
              <p className="font-gilroy-bold text-xl text-[#7ddb8a] uppercase">
                Want the whole place to yourself?
              </p>
              <p className="font-gilroy-bold text-xl text-[#7ddb8a] uppercase">
                Go for it!
              </p>
            </div>
            <div className="mt-4 text-lg text-gray-400 font-gilroy space-y-4">
              <p>
                Exclusive venue hire means full access to every bay, every lounge, and every screen. You get the space, the service, and a fully customizable experience built around your group.
              </p>
              <p>
                Bring everyone. Friends, family, and even the people you just met. Our space holds up to 115 guests, with fully customized food and beverage packages to match your vibe.
              </p>
            </div>
            <div className="mt-8">
              <button className="bg-[#009444] text-white font-gilroy-semibold py-3 px-6 rounded-full flex items-center justify-center gap-2">
                <span>Plan Your Event</span>
                <ArrowRight />
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <img src="/indoor-golf-1.png" alt="Indoor Golf" className="rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};