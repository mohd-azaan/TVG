// src/screens/EventsPage/sections/HeroSection.jsx
// Hero section for Events page with main headline and background image
// Pixel-perfect recreation of Figma design with "Your Event a Hole-in-One" title
// RELEVANT FILES: EventsPage.jsx, styleguide.css, tailwind.config.js

import React from 'react';

export const HeroSection = () => {
	return (
		<section className='relative w-full min-h-[1024px] bg-[#272727] overflow-hidden'>
			{/* Green background section */}
			<div className='absolute bottom-0 left-0 w-full h-[435px] bg-[#006f33]' />

			{/* Decorative background shape positioned exactly like Figma */}
			<div className='absolute top-[431.9px] left-[341.99px] opacity-50'>
				<div
					className='w-[2102px] h-[1454px] transform rotate-[348.049deg]'
					style={{
						background: `url('/shape14-2.svg') no-repeat center`,
						backgroundSize: 'contain',
						mixBlendMode: 'screen'
					}}
				/>
			</div>

			{/* Main content container */}
			<div className='relative z-10 max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-0'>
				{/* Content positioned with absolute positioning to match Figma exactly */}
				<div className='absolute top-[619px] left-[280px] max-w-[655px]'>
					<p className='font-TVG-typography-hero-text font-[number:var(--TVG-typography-hero-text-font-weight)] text-[length:var(--TVG-typography-hero-text-font-size)] leading-[var(--TVG-typography-hero-text-line-height)] tracking-[var(--TVG-typography-hero-text-letter-spacing)] text-[#dedede] [font-style:var(--TVG-typography-hero-text-font-style)]'>
						In the heart of Riyadh's Hitteen district, The Virtual Greens is where serious fun meets serious golf. Plan a laid-back hangout or a large-scale celebration. We've got the space, the energy, and the food to make it unforgettable. Come rain or shine, morning or midnight, we're ready to host. Good times, great food, and swings that hit different. Oh, and food and drinks? We'll bring them to you right on the course. No need to pause the game.
					</p>
				</div>

				{/* Main title positioned exactly like Figma */}
				<div className='absolute top-[270px] left-[280px] w-[655px]'>
					{/* "Let's make" text */}
					<h2 className='font-TVG-typography-h2 font-[number:var(--TVG-typography-h2-font-weight)] text-[length:var(--TVG-typography-h2-font-size)] leading-[var(--TVG-typography-h2-line-height)] tracking-[var(--TVG-typography-h2-letter-spacing)] text-white [font-style:var(--TVG-typography-h2-font-style)]'>
						Let's make
					</h2>

					{/* "Your Event a Hole-in-One" main title */}
					<h1 className='font-TVG-typography-hero-title font-[number:var(--TVG-typography-hero-title-font-weight)] text-[length:var(--TVG-typography-hero-title-font-size)] leading-[var(--TVG-typography-hero-title-line-height)] tracking-[var(--TVG-typography-hero-title-letter-spacing)] text-white [font-style:var(--TVG-typography-hero-title-font-style)] mt-[45px]'>
						Your Event<br />a Hole-in-One
					</h1>
				</div>

				{/* Hero image positioned exactly like Figma */}
				<div className='absolute top-[289px] left-[990px] w-[650px] h-[535px]'>
					<img
						className='w-full h-full object-cover rounded-[30px]'
						alt='Virtual golf event setup with players'
						src='/freepik__background__81702-1.png'
					/>
				</div>
			</div>

			{/* Responsive adjustments for smaller screens */}
			<div className='block lg:hidden relative z-10 px-4 sm:px-6 pt-24 pb-16'>
				{/* Mobile layout */}
				<div className='space-y-8'>
					<div className='space-y-4'>
						<h2 className='font-TVG-typography-h2 font-[number:var(--TVG-typography-h2-font-weight)] text-[clamp(24px,6vw,32px)] leading-[1.2] tracking-[var(--TVG-typography-h2-letter-spacing)] text-white [font-style:var(--TVG-typography-h2-font-style)]'>
							Let's make
						</h2>

						<h1 className='font-TVG-typography-hero-title font-[number:var(--TVG-typography-hero-title-font-weight)] text-[clamp(48px,10vw,120px)] leading-[1.1] tracking-[var(--TVG-typography-hero-title-letter-spacing)] text-white [font-style:var(--TVG-typography-hero-title-font-style)]'>
							Your Event<br />a Hole-in-One
						</h1>
					</div>

					<div className='space-y-6 max-w-[600px]'>
						<p className='font-TVG-typography-hero-text font-[number:var(--TVG-typography-hero-text-font-weight)] text-[length:var(--TVG-typography-hero-text-font-size)] leading-[var(--TVG-typography-hero-text-line-height)] tracking-[var(--TVG-typography-hero-text-letter-spacing)] text-[#dedede] [font-style:var(--TVG-typography-hero-text-font-style)]'>
							In the heart of Riyadh's Hitteen district, The Virtual Greens is where serious fun meets serious golf. Plan a laid-back hangout or a large-scale celebration. We've got the space, the energy, and the food to make it unforgettable. Come rain or shine, morning or midnight, we're ready to host. Good times, great food, and swings that hit different. Oh, and food and drinks? We'll bring them to you right on the course. No need to pause the game.
						</p>
					</div>

					<div className='w-full max-w-[500px] mx-auto'>
						<img
							className='w-full h-auto object-cover rounded-[20px] shadow-xl'
							alt='Virtual golf event setup with players'
							src='/freepik__background__81702-1.png'
						/>
					</div>
				</div>
			</div>
		</section>
	);
};