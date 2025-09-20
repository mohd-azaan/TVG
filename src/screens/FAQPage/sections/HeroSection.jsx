
	// src/screens/FAQPage/sections/HeroSection.jsx
// Hero section for FAQ page with main headline, subtitle, and decorative background
// Pixel-perfect recreation of Figma design with green background and shape overlay
// RELEVANT FILES: FAQPage.jsx, styleguide.css, tailwind.config.js, shape14-2.svg

import React from 'react';

export const HeroSection = () => {
	return (
		<section className='relative w-full h-[591px] bg-[#0c1a1a] overflow-hidden'>
			{/* Green curved bottom section */}
			<div className='absolute bottom-0 left-0 w-full h-[335px] bg-[#009444] rounded-tl-[30px]' />

			{/* Decorative background shape - positioned exactly like Figma */}
			<div className='absolute top-[431.5px] left-[341.98px] opacity-30'>
				<div
					className='w-[2102px] h-[1454px] transform rotate-[348.049deg] origin-center'
					style={{
						background: `url('/shape14-2.svg') no-repeat center`,
						backgroundSize: 'contain',
						mixBlendMode: 'screen'
					}}
				/>
			</div>

			{/* Main content container */}
			<div className='relative z-10 max-w-[1920px] mx-auto'>
				{/* Content positioned with absolute positioning to match Figma exactly */}
				<div className='absolute top-[237px] left-[280px] w-[655px]'>
					{/* Main title */}
					<h1 className='font-morganite font-extrabold text-[160px] leading-[148px] text-white uppercase tracking-[3.2px] mb-6'>
						Frequently Asked Questions
					</h1>
				</div>

				{/* Subtitle positioned exactly like Figma */}
				<div className='absolute top-[357px] left-[843px] w-[800px]'>
					<p className='font-tvg-hero-text font-medium text-[24px] leading-[32px] tracking-[0.5px] text-[#dedede]'>
						Most answers can be found below, but if you still have a question, our team is just a message away.
					</p>
				</div>
			</div>

			{/* Responsive adjustments for smaller screens */}
			<div className='block lg:hidden relative z-10 px-4 sm:px-6 pt-24 pb-16'>
				{/* Mobile layout */}
				<div className='space-y-8 text-center'>
					<h1 className='font-morganite font-extrabold text-[clamp(48px,10vw,120px)] leading-[1.1] tracking-[2px] text-white uppercase'>
						Frequently Asked Questions
					</h1>

					<div className='max-w-[600px] mx-auto'>
						<p className='font-tvg-hero-text font-medium text-[24px] leading-[32px] tracking-[0.5px] text-[#dedede]'>
							Most answers can be found below, but if you still have a question, our team is just a message away.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};