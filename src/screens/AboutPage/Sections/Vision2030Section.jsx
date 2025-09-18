// src/screens/AboutPage/Sections/Vision2030Section.jsx
// Vision 2030 section highlighting alignment with Saudi Arabia's national vision
// Features decorative background shapes and Vision 2030 logo placement
// RELEVANT FILES: AboutPage.jsx, styleguide.css, tailwind.config.js

import React from 'react';

export const Vision2030Section = () => {
	return (
		<section className='relative w-full min-h-[609px] bg-white overflow-hidden'>
			{/* Decorative background shapes */}
			<div className='absolute left-[-607px] top-[-28px] w-[1325px] h-[745px] overflow-hidden'>
				<div className='absolute inset-0' style={{
					background: `url('/shape12-2.svg') no-repeat center`,
					backgroundSize: 'cover'
				}} />
			</div>

			{/* Main content container */}
			<div className='relative z-10 max-w-[1920px] mx-auto px-4'>
				{/* Desktop layout */}
				<div className='hidden lg:block'>
					{/* Responsive centered container for content */}
					<div className='relative flex items-center justify-center py-[183px] max-w-[1360px] mx-auto'>
						{/* Saudi Vision 2030 Logo */}
						<div className='w-[290px] h-[193px] flex-shrink-0'>
							<img
								className='w-full h-full object-contain'
								alt='Saudi Vision 2030 Logo'
								src='/assets/figma/vision-2030-logo.svg'
							/>
						</div>

						{/* Text content positioned on the right */}
						<div className='w-[655px] ml-28 pl-10'>
							<h3 className='font-TVG-typography-tagline font-[number:var(--TVG-typography-tagline-font-weight)] text-[length:var(--TVG-typography-tagline-font-size)] leading-[var(--TVG-typography-tagline-line-height)] tracking-[var(--TVG-typography-tagline-letter-spacing)] text-black [font-style:var(--TVG-typography-tagline-font-style)] uppercase mb-4'>
								In Line with
							</h3>
							<h2 className='font-TVG-typography-h2 font-[number:var(--TVG-typography-h2-font-weight)] text-[length:var(--TVG-typography-h2-font-size)] leading-[var(--TVG-typography-h2-line-height)] tracking-[var(--TVG-typography-h2-letter-spacing)] text-black [font-style:var(--TVG-typography-h2-font-style)] uppercase mb-8'>
								Vision 2030
							</h2>
							<p className='font-TVG-typography-default font-[number:var(--TVG-typography-default-font-weight)] text-[length:var(--TVG-typography-default-font-size)] leading-[var(--TVG-typography-default-line-height)] tracking-[var(--TVG-typography-default-letter-spacing)] text-black [font-style:var(--TVG-typography-default-font-style)]'>
								We're proud to contribute and support the national movement towards healthier lifestyles, diversified entertainment, and a thriving Saudi sports culture by growing the game, inspiring new players, and offering world-class sporting experiences in the heart of Riyadh.
							</p>
						</div>
					</div>
				</div>

				{/* Tablet layout */}
				<div className='hidden md:block lg:hidden px-8 py-16'>
					<div className='flex flex-col items-center gap-8 max-w-[800px] mx-auto text-center'>
						<div className='w-[200px] h-[133px]'>
							<img
								className='w-full h-full object-contain'
								alt='Saudi Vision 2030 Logo'
								src='/assets/figma/vision-2030-logo.svg'
							/>
						</div>

						<div className='space-y-4'>
							<h3 className='font-TVG-typography-tagline font-[number:var(--TVG-typography-tagline-font-weight)] text-[length:var(--TVG-typography-tagline-font-size)] leading-[var(--TVG-typography-tagline-line-height)] tracking-[var(--TVG-typography-tagline-letter-spacing)] text-black [font-style:var(--TVG-typography-tagline-font-style)] uppercase'>
								In Line with
							</h3>
							<h2 className='font-TVG-typography-h2 font-[number:var(--TVG-typography-h2-font-weight)] text-[clamp(40px,8vw,80px)] leading-[1.1] tracking-[var(--TVG-typography-h2-letter-spacing)] text-black [font-style:var(--TVG-typography-h2-font-style)] uppercase'>
								Vision 2030
							</h2>
						</div>

						<p className='font-TVG-typography-default font-[number:var(--TVG-typography-default-font-weight)] text-[length:var(--TVG-typography-default-font-size)] leading-[var(--TVG-typography-default-line-height)] tracking-[var(--TVG-typography-default-letter-spacing)] text-black [font-style:var(--TVG-typography-default-font-style)]'>
							We're proud to contribute and support the national movement towards healthier lifestyles, diversified entertainment, and a thriving Saudi sports culture by growing the game, inspiring new players, and offering world-class sporting experiences in the heart of Riyadh.
						</p>
					</div>
				</div>
			</div>

			{/* Mobile responsive layout */}
			<div className='block lg:hidden px-4 sm:px-6 py-16'>
				<div className='space-y-8 max-w-[600px] mx-auto text-center'>
					<div className='w-full max-w-[200px] mx-auto'>
						<img
							className='w-full h-auto object-contain'
							alt='Saudi Vision 2030 Logo'
							src='/assets/figma/vision-2030-logo.svg'
						/>
					</div>

					<div className='space-y-4'>
						<h3 className='font-TVG-typography-tagline font-[number:var(--TVG-typography-tagline-font-weight)] text-[length:var(--TVG-typography-tagline-font-size)] leading-[var(--TVG-typography-tagline-line-height)] tracking-[var(--TVG-typography-tagline-letter-spacing)] text-black [font-style:var(--TVG-typography-tagline-font-style)] uppercase'>
							In Line with
						</h3>
						<h2 className='font-TVG-typography-h2 font-[number:var(--TVG-typography-h2-font-weight)] text-[clamp(32px,8vw,96px)] leading-[1.1] tracking-[var(--TVG-typography-h2-letter-spacing)] text-black [font-style:var(--TVG-typography-h2-font-style)] uppercase'>
							Vision 2030
						</h2>
					</div>

					<div className='text-center'>
						<p className='font-TVG-typography-default font-[number:var(--TVG-typography-default-font-weight)] text-[length:var(--TVG-typography-default-font-size)] leading-[var(--TVG-typography-default-line-height)] tracking-[var(--TVG-typography-default-letter-spacing)] text-black [font-style:var(--TVG-typography-default-font-style)]'>
							We're proud to contribute and support the national movement towards healthier lifestyles, diversified entertainment, and a thriving Saudi sports culture by growing the game, inspiring new players, and offering world-class sporting experiences in the heart of Riyadh.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};