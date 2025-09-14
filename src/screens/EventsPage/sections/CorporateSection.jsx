// src/screens/EventsPage/sections/CorporateSection.jsx
// Corporate section with image and content about corporate events
// Pixel-perfect recreation of "Corporate Events That Don't Feel Like Work" from Figma
// RELEVANT FILES: EventsPage.jsx, styleguide.css, tailwind.config.js

import React from 'react';

export const CorporateSection = () => {
	return (
		<section className='relative w-full min-h-[1113px] bg-white overflow-hidden'>
			{/* Main content container */}
			<div className='relative max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-0'>
				{/* Left side image positioned exactly like Figma */}
				<div className='absolute top-[129px] left-[280px] w-[655px] h-[400px]'>
					<img
						className='w-full h-full object-cover rounded-[20px]'
						alt='Corporate golf event with team members'
						src='/screenshot-2025-08-16-163742-1.png'
					/>
				</div>

				{/* Right side content positioned exactly like Figma */}
				<div className='absolute top-[159px] left-[985px] max-w-[655px]'>
					{/* Main heading */}
					<h2 className='font-TVG-typography-h1 font-[number:var(--TVG-typography-h1-font-weight)] text-[length:var(--TVG-typography-h1-font-size)] leading-[var(--TVG-typography-h1-line-height)] tracking-[var(--TVG-typography-h1-letter-spacing)] text-[#272727] [font-style:var(--TVG-typography-h1-font-style)] mb-[180px]'>
						Corporate Events That Don't Feel Like Work
					</h2>

					{/* Tagline */}
					<h3 className='font-TVG-typography-h3 font-[number:var(--TVG-typography-h3-font-weight)] text-[length:var(--TVG-typography-h3-font-size)] leading-[var(--TVG-typography-h3-line-height)] tracking-[var(--TVG-typography-h3-letter-spacing)] text-[#272727] [font-style:var(--TVG-typography-h3-font-style)] mb-[64px]'>
						Because employee well-being shouldn't be boring
					</h3>

					{/* Description text */}
					<div className='space-y-6 mb-[126px]'>
						<p className='font-TVG-typography-default font-[number:var(--TVG-typography-default-font-weight)] text-[length:var(--TVG-typography-default-font-size)] leading-[var(--TVG-typography-default-line-height)] tracking-[var(--TVG-typography-default-letter-spacing)] text-[#272727] [font-style:var(--TVG-typography-default-font-style)]'>
							We help companies host events that build teams, boost morale, and keep people talking long after. With TVG, you can celebrate a big win or just treat your team to a fun day out.
						</p>
					</div>

					{/* CTA Button */}
					<button className='inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#009444] rounded-full hover:bg-[#007a3a] transition-colors duration-200 cursor-pointer'>
						<span className='font-TVG-typography-button font-[number:var(--TVG-typography-button-font-weight)] text-white text-[length:var(--TVG-typography-button-font-size)] tracking-[var(--TVG-typography-button-letter-spacing)] leading-[var(--TVG-typography-button-line-height)] [font-style:var(--TVG-typography-button-font-style)] whitespace-nowrap'>
							PLAN CORPORATE EVENT
						</span>
					</button>
				</div>
			</div>

			{/* Responsive adjustments for smaller screens */}
			<div className='block lg:hidden relative z-10 px-4 sm:px-6 pt-16 pb-16'>
				{/* Mobile layout */}
				<div className='space-y-8'>
					<div className='space-y-6'>
						<h2 className='font-TVG-typography-h1 font-[number:var(--TVG-typography-h1-font-weight)] text-[clamp(36px,8vw,64px)] leading-[1.2] tracking-[var(--TVG-typography-h1-letter-spacing)] text-[#272727] [font-style:var(--TVG-typography-h1-font-style)]'>
							Corporate Events That Don't Feel Like Work
						</h2>

						<h3 className='font-TVG-typography-h3 font-[number:var(--TVG-typography-h3-font-weight)] text-[clamp(24px,6vw,40px)] leading-[1.3] tracking-[var(--TVG-typography-h3-letter-spacing)] text-[#272727] [font-style:var(--TVG-typography-h3-font-style)]'>
							Because employee well-being shouldn't be boring
						</h3>

						<p className='font-TVG-typography-default font-[number:var(--TVG-typography-default-font-weight)] text-[length:var(--TVG-typography-default-font-size)] leading-[var(--TVG-typography-default-line-height)] tracking-[var(--TVG-typography-default-letter-spacing)] text-[#272727] [font-style:var(--TVG-typography-default-font-style)]'>
							We help companies host events that build teams, boost morale, and keep people talking long after. With TVG, you can celebrate a big win or just treat your team to a fun day out.
						</p>
					</div>

					<div className='w-full max-w-[500px] mx-auto'>
						<img
							className='w-full h-auto object-cover rounded-[20px] shadow-xl'
							alt='Corporate golf event with team members'
							src='/screenshot-2025-08-16-163742-1.png'
						/>
					</div>

					<div className='flex justify-center'>
						<button className='inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#009444] rounded-full hover:bg-[#007a3a] transition-colors duration-200 cursor-pointer'>
							<span className='font-TVG-typography-button font-[number:var(--TVG-typography-button-font-weight)] text-white text-[length:var(--TVG-typography-button-font-size)] tracking-[var(--TVG-typography-button-letter-spacing)] leading-[var(--TVG-typography-button-line-height)] [font-style:var(--TVG-typography-button-font-style)] whitespace-nowrap'>
								PLAN CORPORATE EVENT
							</span>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};