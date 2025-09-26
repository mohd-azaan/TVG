// src/screens/EventsPage/sections/PlanYourEventSection.jsx
// Plan Your Event CTA section with centered layout and green button
// RELEVANT FILES: EventsPage.jsx, styleguide.css, tailwind.config.js

import React from 'react';

export const PlanYourEventSection = () => {
	return (
		<section className='relative w-full bg-[#f6f6f6] py-16 lg:py-20'>
			<div className='relative max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10'>
				<div className='lg:ml-[12vw] md:ml-[8vw] lg:mr-[12vw] md:mr-[8vw]'>
					<div className='max-w-[800px] mx-auto text-center'>
						{/* Section Label */}
						<p className='font-gilroy font-bold text-[18px] text-[#7ddb8a] uppercase tracking-wide mb-4'>
							LET'S MAKE
						</p>

						{/* Main Title */}
						<h2 className='font-morganite font-black text-[clamp(48px,5vw,64px)] leading-[0.95] tracking-[0.02em] text-black uppercase mb-6'>
							PLAN YOUR EVENT
						</h2>

						{/* Description */}
						<p className='font-gilroy font-normal text-[18px] leading-[1.4] text-[#757575] mb-8 max-w-[600px] mx-auto'>
							Have a date in mind or just exploring ideas? Share a few details, and
							our team will craft an experience tailored to you.
						</p>

						{/* CTA Button */}
						<a
							href='/events-registration'
							className='inline-flex items-center gap-3 bg-[#009444] hover:bg-[#007a3a] rounded-[50px] px-8 py-4 font-gilroy font-semibold text-[16px] text-white uppercase tracking-wide transition-colors duration-200'
						>
							PLAN YOUR EVENT
							<svg
								width='20'
								height='20'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								className='transform transition-transform group-hover:translate-x-1'
							>
								<path
									d='M5 12H19M19 12L13 6M19 12L13 18'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PlanYourEventSection;