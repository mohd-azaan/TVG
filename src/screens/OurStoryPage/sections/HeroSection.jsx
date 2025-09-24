// src/screens/OurStoryPage/sections/HeroSection.jsx
// Hero section for Our Story page with main headline, subtitle, and decorative background
// Pixel-perfect recreation of Figma design with dark background and green accent
// RELEVANT FILES: OurStoryPage.jsx, styleguide.css, tailwind.config.js, shape14-2.svg

import React from 'react';

export const HeroSection = () => {
	return (
		<section className='relative w-full h-[450px] bg-[#102121] overflow-hidden'>
			{/* Decorative background shape - positioned exactly like Figma */}
			<div className='absolute bottom-[-300px] right-[-200px]'>
				<img
					src='/shape14-2.svg'
					alt='Decorative background shape'
					className='w-[800px] h-[600px] transform rotate-[348.049deg] origin-center object-contain mix-blend-screen'
				/>
			</div>

			{/* Main content container */}
			<div className='relative z-10 flex flex-col items-center justify-center h-full max-w-[1920px] mx-auto text-center'>
				{/* Main title */}
				<h1 className='font-morganite font-extrabold text-[clamp(72px,8vw,112px)] leading-[148px] text-white uppercase tracking-[3.2px] mb-[-20px]'>
					Our Story
				</h1>

				{/* Subtitle */}
				<p className='font-gilroy font-bold text-[17px] uppercase leading-[32px] tracking-[0.5px] text-[#7DDB8A] max-w-[800px]'>
					Golf has a way of finding you when you least expect it
				</p>
			</div>

			{/* Responsive adjustments for smaller screens */}
			<div className='block lg:hidden relative z-10 px-4 sm:px-6 pt-24 pb-16'>
				{/* Mobile layout */}
				<div className='space-y-2 text-center'>
					<h1 className='font-morganite font-extrabold text-[clamp(72px,8vw,112px)] leading-[148px] tracking-[3.2px] text-white uppercase mb-[-20px]'>
						Our Story
					</h1>

					<div className='max-w-[600px] mx-auto'>
						<p className='font-gilroy font-bold text-[17px] uppercase leading-[32px] tracking-[0.5px] text-[#7DDB8A]'>
							Golf has a way of finding you when you least expect it
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
