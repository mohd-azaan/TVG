import React from 'react';
import { Link } from 'react-router-dom';

const ArrowIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
		<path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
	</svg>
);

export const ReadyToVisitSection = () => {
  return (
    <section className="bg-[#102121] py-12">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-center text-center lg:text-left gap-8">
        <h2 className="font-gilroy font-bold text-3xl text-white uppercase">
          Ready to Visit?
        </h2>
        <Link 
          to="/contact" // Assuming this links to the contact page or a booking page
          className="bg-[#009444] text-white font-gilroy font-semibold text-lg uppercase py-3 px-8 rounded-full flex items-center gap-3 hover:bg-opacity-90 transition-colors"
        >
          <span>Plan Your Visit</span>
          <ArrowIcon />
        </Link>
      </div>
    </section>
  );
};