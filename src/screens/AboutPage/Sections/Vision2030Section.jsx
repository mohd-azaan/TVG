// src/screens/AboutPage/Sections/Vision2030Section.jsx
// Vision 2030 section highlighting alignment with Saudi Arabia's national vision
// Features decorative background shapes and Vision 2030 logo placement
// RELEVANT FILES: AboutPage.jsx, styleguide.css, tailwind.config.js

import React from 'react';

export const Vision2030Section = () => {
	return (
		<section className='relative w-full min-h-[400px] bg-white overflow-hidden'>
			{/* Waves image on left */}
			<div className='absolute left-0 top-1/2 transform -translate-y-1/2 z-5'>
				<img
					src='/waves.svg'
					alt='Decorative waves'
					className='w-auto h-auto max-w-[500px] opacity-80'
				/>
			</div>

			{/* Main content container */}
			<div className='relative z-10 max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 lg:ml-[12vw] md:ml-[8vw] lg:mr-[12vw] md:mr-[8vw]'>
				{/* Desktop layout */}
				<div className='hidden lg:block'>
					{/* Responsive centered container for content */}
					<div className='relative flex items-start justify-center py-[120px] max-w-[1360px] mx-auto'>
						{/* Saudi Vision 2030 Logo - positioned to the left of title, higher up, larger */}
						<div className='w-[240px] h-[160px] flex-shrink-0 mr-2 mt-[8px] ml-[200px]'>
							<img
								className='w-full h-full object-contain'
								alt='Saudi Vision 2030 Logo'
								src='/assets/figma/vision-2030-logo.svg'
							/>
						</div>

						{/* Text content positioned on the right */}
						<div className='w-[1300px] ml-12 text-left'>
							<h3 className='font-gilroy font-bold text-[18px] text-green-600 uppercase tracking-wide mb-1'>
								In Line with
							</h3>
							<h2 className='font-morganite font-black text-[clamp(56px,7vw,80px)] text-black uppercase tracking-[2px] mb-1'>
								Vision 2030
							</h2>
							<p className='font-gilroy font-normal text-[16px] text-[##757575] leading-normal -mt-1'>
								We're proud to contribute and support the national movement
								towards healthier lifestyles, diversified entertainment, and a
								thriving Saudi sports culture by growing the game, inspiring new
								players, and offering world-class sporting experiences in the
								heart of Riyadh.
							</p>
						</div>
					</div>
				</div>

				{/* Tablet layout */}
				<div className='hidden md:block lg:hidden py-12'>
					<div className='flex flex-col items-center gap-8 max-w-[800px] mx-auto text-center'>
						<div className='w-[200px] h-[133px]'>
							<img
								className='w-full h-full object-contain'
								alt='Saudi Vision 2030 Logo'
								src='/assets/figma/vision-2030-logo.svg'
							/>
						</div>

						<div className='space-y-4'>
							<h3 className='font-gilroy font-bold text-[18px] text-black uppercase tracking-wide'>
								In Line with
							</h3>
							<h2 className='font-morganite font-black text-[clamp(48px,6vw,64px)] text-black uppercase tracking-wider'>
								Vision 2030
							</h2>
						</div>

						<p className='font-gilroy font-medium text-[16px] text-black leading-normal'>
							We're proud to contribute and support the national movement
							towards healthier lifestyles, diversified entertainment, and a
							thriving Saudi sports culture by growing the game, inspiring new
							players, and offering world-class sporting experiences in the
							heart of Riyadh.
						</p>
					</div>
				</div>

				{/* Mobile layout */}
				<div className='block md:hidden py-12'>
					<div className='space-y-8 max-w-[600px] mx-auto text-center'>
						<div className='w-full max-w-[200px] mx-auto'>
							<img
								className='w-full h-auto object-contain'
								alt='Saudi Vision 2030 Logo'
								src='/assets/figma/vision-2030-logo.svg'
							/>
						</div>

						<div className='space-y-4'>
							<h3 className='font-gilroy font-bold text-[18px] text-black uppercase tracking-wide'>
								In Line with
							</h3>
							<h2 className='font-morganite font-black text-[clamp(48px,6vw,64px)] text-black uppercase tracking-wider'>
								Vision 2030
							</h2>
						</div>

						<div className='text-center'>
							<p className='font-gilroy font-medium text-[16px] text-black leading-normal'>
								We're proud to contribute and support the national movement
								towards healthier lifestyles, diversified entertainment, and a
								thriving Saudi sports culture by growing the game, inspiring new
								players, and offering world-class sporting experiences in the
								heart of Riyadh.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
