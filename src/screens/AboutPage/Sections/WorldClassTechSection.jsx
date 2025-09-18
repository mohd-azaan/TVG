import React from 'react';

// Rewritten to use a single, responsive grid layout that prevents content overlap on all screen sizes and zoom levels.

export const WorldClassTechSection = () => {
  return (
    <section className='relative w-full bg-[#102121] py-16 lg:py-24'>
      <div className='relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8'>
        
        {/* Responsive Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Column: Text Content (centered on all viewports) */}
          <div className="text-left">
            <h3 className='font-gilroy font-bold text-xl text-[#7ddb8a] uppercase tracking-wide'>
              Powered by
            </h3>
            <h2 className='font-morganite font-black text-white text-7xl lg:text-8xl uppercase tracking-wider mt-2 mb-6'>
              World-Class Tech
            </h2>
            <div className='font-gilroy font-medium text-lg text-gray-300 space-y-4 max-w-lg'>
              <p>We use the most advanced system on the market to replicate the real-world feel of over 250 legendary courses. It's precise, fast, and immersive down to every slope, bounce, and swing.</p>
              <p>From auto-tee to instant shot feedback, it's the closest thing to stepping onto a real course. (Minus the sunburn).</p>
            </div>
            <div className='mt-8 flex justify-start'>
              <button className='bg-[#009444] hover:bg-opacity-90 transition-colors rounded-full px-8 py-3 flex items-center gap-3'>
                <span className='font-gilroy font-semibold text-base text-white uppercase'>
                  Learn About Our Tech
                </span>
                <img
                  src='/arrow-right-figma.svg'
                  alt='Arrow right'
                  className='w-6 h-6'
                />
              </button>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="flex items-center justify-center">
            <img
              className='w-full max-w-xl h-auto object-cover rounded-2xl shadow-2xl'
              alt='Indoor golf simulator technology setup'
              src='/indoor-golf-1.png'
            />
          </div>

        </div>
      </div>
    </section>
  );
};