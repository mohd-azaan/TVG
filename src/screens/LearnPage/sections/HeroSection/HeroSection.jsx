// src/screens/LearnPage/sections/HeroSection/HeroSection.jsx
// Hero section for Learn page featuring "Train at TVG Academy" with pixel-perfect Figma recreation
// Uses exact positioning, typography, and assets from Figma design
// RELEVANT FILES: LearnPage.jsx, learn-hero-training.png, learn-hero-*.svg assets

import React from 'react';

export const HeroSection = () => {
	return (
		<div className='relative w-full h-[100vh] bg-[#102121] text-white overflow-hidden'>
			{/* Content Wrapper */}
			<div className='relative z-10 mx-auto flex max-w-[1440px] items-center px-8 pt-20 lg:px-16 lg:pt-24 h-full'>
				{/* Left Column: Text content */}
				<div className='w-full lg:w-[55%] lg:pr-12'>
					<div className='flex flex-col lg:mt-6'>
						{/* Main Heading - Matching homepage hero title2 (110px) */}
						<h1 className='-translate-y-4 lg:-translate-y-6 font-morganite text-[clamp(80px,10vw,120px)] font-[900] uppercase leading-[0.88] tracking-[2.2px] mb-2 mt-0'>
							TRAIN AT
							<br />
							TVG ACADEMY
						</h1>

						{/* Subheading - Positioned to align with green background */}
						<p className='-translate-y-2 lg:-translate-y-4 font-gilroy font-bold text-[15px] sm:text-[15px] lg:text-[20px] uppercase tracking-[1.10px] leading-[0.5] text-[#7ddb8a] mb-6 mt-0'>
							THE BEGINNING OF A BETTER GAME
						</p>

						{/* Description Text - wider and smaller */}
						<div className='font-TVG-typography-hero-text font-[number:var(--TVG-typography-hero-text-font-weight)] text-[22px] leading-7 text-white space-y-4 max-w-[600px] mb-0 mt-4 lg:mt-6'>
							<p>
								It doesn't matter if you're a complete beginner or chasing a
								lower handicap; this is your space to grow.
							</p>
							<p>
								At The Virtual Greens Academy, you won't just swing for fun.
								You'll train with purpose (while having fun, of course).
							</p>
							<p>
								Our coaching is built around your goals, powered by the same
								world-class Golfzon tech used by professional tours.
							</p>
							<p>
								We make learning the game easy, enjoyable, and tailored to you.
							</p>
						</div>
					</div>
				</div>

				{/* Right Column: Image */}
				<div className='hidden lg:flex lg:-translate-y-[48px] justify-center '>
					<img
						className='w-[90%] max-w-[900px] h-auto max-h-[480px] rounded-[30px] object-contain'
						src='/learn-hero-training.png'
						alt='TVG Academy Training'
					/>
				</div>
			</div>

			{/* Green Background Section */}
			<div className='absolute top-[55%] left-0 w-full h-[50vh] bg-[#006F33]'></div>

			{/* Decorative SVG bottom-right (match Play page framing) */}
			<img
				alt='decorative green waves'
				src='/shape14-2.svg'
				className='pointer-events-none absolute right-[-420px] bottom-[-220px] w-[1100px] opacity-95 lg:right-[-620px] lg:bottom-[-520px] lg:w-[1800px] mix-blend-screen'
			/>

			{/* Mobile responsive layout - Enhanced for smaller screens */}
			<div className='block lg:hidden px-8 py-16'>
				<div className='space-y-12 max-w-[600px] mx-auto relative'>
					{/* Mobile background green section - Matches Play page percentage approach */}
					<div className='absolute -mx-8 bottom-0 left-0 right-0 h-[30vh] bg-[#006F33] rounded-t-[20px]' />

					{/* Content */}
					<div className='relative z-10 space-y-8 text-center'>
						{/* Title - Responsive scaling similar to Play page */}
						<div>
							<div className='font-morganite font-[900] text-[clamp(48px,12vw,80px)] leading-[0.9] tracking-[1.5px] text-white uppercase mb-4'>
								<p className='mb-2'>TRAIN AT</p>
								<p>TVG ACADEMY</p>
							</div>
							<p className='font-gilroy font-bold text-[16px] leading-[20px] tracking-[0.8px] text-[#7ddb8a] uppercase'>
								THE BEGINNING OF A BETTER GAME
							</p>
						</div>

						{/* Mobile image - Consistent with Play page sizing approach */}
						<div className='w-full max-w-[400px] mx-auto'>
							<img
								src='/learn-hero-training.png'
								alt='TVG Academy Training'
								className='w-full aspect-[4/3] object-cover rounded-[20px] shadow-xl'
							/>
						</div>

						{/* Mobile description - Enhanced typography */}
						<div className='space-y-4 text-left max-w-[500px] mx-auto'>
							<p className='font-TVG-typography-hero-text font-[500] text-[18px] leading-7 text-white'>
								It doesn't matter if you're a complete beginner or chasing a
								lower handicap; this is your space to grow.
							</p>
							<p className='font-TVG-typography-hero-text font-[500] text-[18px] leading-7 text-white'>
								At The Virtual Greens Academy, you won't just swing for fun.
								You'll train with purpose (while having fun, of course).
							</p>
							<p className='font-TVG-typography-hero-text font-[500] text-[18px] leading-7 text-white'>
								Our coaching is built around your goals, powered by the same
								world-class Golfzon tech used by professional tours.
							</p>
							<p className='font-TVG-typography-hero-text font-[500] text-[18px] leading-7 text-white'>
								We make learning the game easy, enjoyable, and tailored to you.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
