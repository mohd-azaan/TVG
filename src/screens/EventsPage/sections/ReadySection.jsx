// src/screens/EventsPage/sections/ReadySection.jsx
// Ready section with main CTA for event planning
// Pixel-perfect recreation of "Let's Plan Your Event" section from Figma
// RELEVANT FILES: EventsPage.jsx, styleguide.css, tailwind.config.js

import React from 'react';

export const ReadySection = () => {
	return (
		<section className='relative w-full min-h-[438px] bg-[#f8f8f8] overflow-hidden'>
			{/* Main content container */}
			<div className='relative max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-0'>
				{/* Content positioned exactly like Figma - centered */}
				<div className='absolute top-[100px] left-[632px] w-[655px] text-center'>
					{/* Main heading */}
					<h2 className='font-TVG-typography-h1 font-[number:var(--TVG-typography-h1-font-weight)] text-[length:var(--TVG-typography-h1-font-size)] leading-[var(--TVG-typography-h1-line-height)] tracking-[var(--TVG-typography-h1-letter-spacing)] text-[#272727] [font-style:var(--TVG-typography-h1-font-style)] mb-[100px]'>
						Let's Plan Your Event
					</h2>

					{/* Description text positioned exactly like Figma */}
					<div className='mb-[100px]'>
						<p className='font-TVG-typography-default font-[number:var(--TVG-typography-default-font-weight)] text-[length:var(--TVG-typography-default-font-size)] leading-[var(--TVG-typography-default-line-height)] tracking-[var(--TVG-typography-default-letter-spacing)] text-[#272727] [font-style:var(--TVG-typography-default-font-style)]'>
							Have a date in mind or just exploring ideas? Share a few details, and our team will craft an experience tailored to you.
						</p>
					</div>

					{/* CTA Button positioned exactly like Figma */}
					<div className='flex justify-center'>
						<button className='inline-flex items-center justify-center gap-3 px-12 py-4 bg-[#009444] rounded-full hover:bg-[#007a3a] transition-colors duration-200 cursor-pointer'>
							<span className='font-TVG-typography-button font-[number:var(--TVG-typography-button-font-weight)] text-white text-[length:var(--TVG-typography-button-font-size)] tracking-[var(--TVG-typography-button-letter-spacing)] leading-[var(--TVG-typography-button-line-height)] [font-style:var(--TVG-typography-button-font-style)] whitespace-nowrap'>
								GET STARTED
							</span>
						</button>
					</div>
				</div>
			</div>

			{/* Responsive adjustments for smaller screens */}
			<div className='block lg:hidden relative z-10 px-4 sm:px-6 py-16'>
				{/* Mobile layout */}
				<div className='space-y-8 text-center max-w-[600px] mx-auto'>
					<div className='space-y-6'>
						<h2 className='font-TVG-typography-h1 font-[number:var(--TVG-typography-h1-font-weight)] text-[clamp(36px,8vw,64px)] leading-[1.2] tracking-[var(--TVG-typography-h1-letter-spacing)] text-[#272727] [font-style:var(--TVG-typography-h1-font-style)]'>
							Let's Plan Your Event
						</h2>

						<p className='font-TVG-typography-default font-[number:var(--TVG-typography-default-font-weight)] text-[length:var(--TVG-typography-default-font-size)] leading-[var(--TVG-typography-default-line-height)] tracking-[var(--TVG-typography-default-letter-spacing)] text-[#272727] [font-style:var(--TVG-typography-default-font-style)]'>
							Have a date in mind or just exploring ideas? Share a few details, and our team will craft an experience tailored to you.
						</p>
					</div>

					<div className='flex justify-center'>
						<button className='inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#009444] rounded-full hover:bg-[#007a3a] transition-colors duration-200 cursor-pointer'>
							<span className='font-TVG-typography-button font-[number:var(--TVG-typography-button-font-weight)] text-white text-[length:var(--TVG-typography-button-font-size)] tracking-[var(--TVG-typography-button-letter-spacing)] leading-[var(--TVG-typography-button-line-height)] [font-style:var(--TVG-typography-button-font-style)] whitespace-nowrap'>
								GET STARTED
							</span>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};