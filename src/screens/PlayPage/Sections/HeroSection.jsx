// src/screens/PlayPage/Sections/HeroSection.jsx
// Hero section for Play page with main headline and CTA
// Pixel-perfect recreation of Figma design with decorative background and hero image
// RELEVANT FILES: PlayPage.jsx, styleguide.css, tailwind.config.js

import React from 'react';

export const HeroSection = () => {
	return (
		<section className='relative w-full min-h-[1024px] bg-[#272727] overflow-hidden'>
			{/* Green background section */}
			<div className='absolute bottom-0 left-0 w-full h-[435px] bg-[#006f33]' />

			{/* Decorative background shape */}
			<div className='absolute top-[431.9px] left-[341.98px] opacity-50'>
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
				{/* Content positioned with absolute positioning to match Figma */}
				<div className='absolute top-[619px] left-[280px] max-w-[655px]'>
					<div className='space-y-6'>
						<p className='font-TVG-typography-hero-text font-[number:var(--TVG-typography-hero-text-font-weight)] text-[length:var(--TVG-typography-hero-text-font-size)] leading-[var(--TVG-typography-hero-text-line-height)] tracking-[var(--TVG-typography-hero-text-letter-spacing)] text-[#dedede] [font-style:var(--TVG-typography-hero-text-font-style)]'>
							The ultimate golf and social experience, only in Riyadh.
						</p>
						<p className='font-TVG-typography-hero-text font-[number:var(--TVG-typography-hero-text-font-weight)] text-[length:var(--TVG-typography-hero-text-font-size)] leading-[var(--TVG-typography-hero-text-line-height)] tracking-[var(--TVG-typography-hero-text-letter-spacing)] text-[#dedede] [font-style:var(--TVG-typography-hero-text-font-style)]'>
							At The Virtual Greens, playing golf doesn't mean dressing up or heading out of town. It means stepping into a sleek, air-conditioned space where you can tee off on the world's most iconic course, day or night, rain or shine. Unwind after work, celebrate with friends, or host an event with a twist. This is golf on your terms.
						</p>
					</div>
				</div>

				{/* Tagline */}
				<div className='absolute top-[529px] left-[280px] w-[521px]'>
					<h3 className='font-TVG-typography-tagline font-[number:var(--TVG-typography-tagline-font-weight)] text-[length:var(--TVG-typography-tagline-font-size)] leading-[var(--TVG-typography-tagline-line-height)] tracking-[var(--TVG-typography-tagline-letter-spacing)] text-[#7ddb8a] [font-style:var(--TVG-typography-tagline-font-style)] uppercase'>
						The New Era of Indoor Golf
					</h3>
				</div>

				{/* Main title positioned exactly like Figma */}
				<div className='absolute top-[278px] left-[280px] w-[655px]'>
					<h1 className='font-TVG-typography-hero-title font-[number:var(--TVG-typography-hero-title-font-weight)] text-[length:var(--TVG-typography-hero-title-font-size)] leading-[var(--TVG-typography-hero-title-line-height)] tracking-[var(--TVG-typography-hero-title-letter-spacing)] text-white [font-style:var(--TVG-typography-hero-title-font-style)] uppercase'>
						Your Game, Your Pace, Your Greens
					</h1>
				</div>

				{/* Hero image placeholder positioned exactly like Figma */}
				<div className='absolute top-[278px] left-[990px] w-[650px] h-[480px]'>
					<div className='w-full h-full bg-gradient-to-br from-[#009444] to-[#006f33] rounded-[30px] flex items-center justify-center shadow-xl'>
						<div className='text-center text-white space-y-4'>
							<div className='text-6xl'>⛳</div>
							<div className='text-xl font-semibold'>Golf Simulator</div>
							<div className='text-sm opacity-75'>Hero Image Placeholder</div>
						</div>
					</div>
				</div>

				{/* CTA Button positioned exactly like Figma */}
				<div className='absolute top-[891px] left-[280px]'>
					<button className='bg-[#009444] hover:bg-[#007a38] transition-colors rounded-[50px] px-[30px] py-[7px] flex items-center gap-2.5'>
						<span className='font-TVG-typography-button font-[number:var(--TVG-typography-button-font-weight)] text-[length:var(--TVG-typography-button-font-size)] leading-[var(--TVG-typography-button-line-height)] tracking-[var(--TVG-typography-button-letter-spacing)] text-white [font-style:var(--TVG-typography-button-font-style)] uppercase text-center whitespace-nowrap'>
							Book Your Bay
						</span>
						<div className='w-6 h-6'>
							<svg
								className='w-full h-full'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M5 12H19M19 12L12 5M19 12L12 19'
									stroke='white'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</div>
					</button>
				</div>
			</div>

			{/* Responsive adjustments for smaller screens */}
			<div className='block lg:hidden relative z-10 px-4 sm:px-6 pt-24 pb-16'>
				{/* Mobile layout */}
				<div className='space-y-8 text-center'>
					<h3 className='font-TVG-typography-tagline font-[number:var(--TVG-typography-tagline-font-weight)] text-[length:var(--TVG-typography-tagline-font-size)] leading-[var(--TVG-typography-tagline-line-height)] tracking-[var(--TVG-typography-tagline-letter-spacing)] text-[#7ddb8a] [font-style:var(--TVG-typography-tagline-font-style)] uppercase'>
						The New Era of Indoor Golf
					</h3>

					<h1 className='font-TVG-typography-hero-title font-[number:var(--TVG-typography-hero-title-font-weight)] text-[clamp(48px,10vw,148px)] leading-[1.1] tracking-[var(--TVG-typography-hero-title-letter-spacing)] text-white [font-style:var(--TVG-typography-hero-title-font-style)] uppercase'>
						Your Game, Your Pace, Your Greens
					</h1>

					<div className='w-full max-w-[500px] mx-auto'>
						<div className='w-full aspect-[4/3] bg-gradient-to-br from-[#009444] to-[#006f33] rounded-[20px] flex items-center justify-center shadow-xl'>
							<div className='text-center text-white space-y-2'>
								<div className='text-4xl'>⛳</div>
								<div className='text-lg font-semibold'>Golf Simulator</div>
								<div className='text-xs opacity-75'>Hero Image Placeholder</div>
							</div>
						</div>
					</div>

					<div className='space-y-6 max-w-[600px] mx-auto'>
						<p className='font-TVG-typography-hero-text font-[number:var(--TVG-typography-hero-text-font-weight)] text-[length:var(--TVG-typography-hero-text-font-size)] leading-[var(--TVG-typography-hero-text-line-height)] tracking-[var(--TVG-typography-hero-text-letter-spacing)] text-[#dedede] [font-style:var(--TVG-typography-hero-text-font-style)]'>
							The ultimate golf and social experience, only in Riyadh.
						</p>
						<p className='font-TVG-typography-hero-text font-[number:var(--TVG-typography-hero-text-font-weight)] text-[length:var(--TVG-typography-hero-text-font-size)] leading-[var(--TVG-typography-hero-text-line-height)] tracking-[var(--TVG-typography-hero-text-letter-spacing)] text-[#dedede] [font-style:var(--TVG-typography-hero-text-font-style)]'>
							At The Virtual Greens, playing golf doesn't mean dressing up or heading out of town. It means stepping into a sleek, air-conditioned space where you can tee off on the world's most iconic course, day or night, rain or shine. Unwind after work, celebrate with friends, or host an event with a twist. This is golf on your terms.
						</p>
					</div>

					<div className='flex justify-center'>
						<button className='bg-[#009444] hover:bg-[#007a38] transition-colors rounded-[50px] px-[30px] py-[7px] flex items-center gap-2.5'>
							<span className='font-TVG-typography-button font-[number:var(--TVG-typography-button-font-weight)] text-[length:var(--TVG-typography-button-font-size)] leading-[var(--TVG-typography-button-line-height)] tracking-[var(--TVG-typography-button-letter-spacing)] text-white [font-style:var(--TVG-typography-button-font-style)] uppercase text-center whitespace-nowrap'>
								Book Your Bay
							</span>
							<div className='w-6 h-6'>
								<svg
									className='w-full h-full'
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M5 12H19M19 12L12 5M19 12L12 19'
										stroke='white'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							</div>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};