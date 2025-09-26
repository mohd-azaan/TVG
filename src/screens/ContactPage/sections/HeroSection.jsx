// src/screens/ContactPage/sections/HeroSection.jsx
// Contact page hero section with dark background and clean typography layout
// Displays "CONTACT THE VIRTUAL GREENS" title and description text based on Figma design
// RELEVANT FILES: src/screens/ContactPage/ContactPage.jsx, styleguide.css, tailwind.config.js

import React from 'react';

export const HeroSection = () => {
	return (
		<section className='relative w-full h-[591px] bg-[#102121] text-white overflow-hidden'>
			{/* Content Wrapper */}
			<div className='relative z-10 mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-10 h-full flex items-center'>
				{/* Two Column Layout - Following the design */}
				<div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center lg:ml-[12vw] md:ml-[8vw] lg:mr-[12vw] md:mr-[8vw]'>
					{/* Left Column - Title */}
					<div>
						<h1 className='font-morganite font-black text-[clamp(64px,6vw,110px)] leading-[0.90] tracking-[0.02em] text-white uppercase'>
							CONTACT <br /> THE VIRTUAL GREENS
						</h1>
					</div>

					{/* Right Column - Description */}
					<div className='space-y-6'>
						<p className='font-gilroy font-normal text-[18px] leading-6 text-white'>
							Experience Riyadh's home of indoor golf live and in full swing.
						</p>
						<p className='font-gilroy font-normal text-[18px] leading-6 text-white'>
							Have a question, comments, concerns, or compliments? — We'd love
							to hear from you!
						</p>
					</div>
				</div>
			</div>

			{/* Green Background Section at Bottom */}
			<div className='absolute bottom-0 left-0 w-full h-[30px] bg-[#009444]'></div>

			{/* Decorative Shape - Bottom Right */}
			<img
				alt='decorative green waves'
				src='/shape14-2-2.svg'
				className='pointer-events-none absolute right-[-420px] bottom-[-300px] w-[1100px]  lg:right-[-620px] lg:bottom-[-420px] lg:w-[1800px] mix-blend-screen z-0'
				fetchPriority='high'
				decoding='async'
				width='1400'
				height='700'
			/>
		</section>
	);
};
