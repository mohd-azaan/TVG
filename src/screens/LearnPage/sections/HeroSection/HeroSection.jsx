// src/screens/LearnPage/sections/HeroSection/HeroSection.jsx
// Hero section for Learn page featuring "Train at TVG Academy" title with background graphics
// This component displays the main hero area with title, description text, and background image
// RELEVANT FILES: LearnPage.jsx, styleguide.css, Button.jsx, tailwind.config.js

import React from 'react';

export const HeroSection = () => {
	return (
		<div className='relative w-full h-[1024px] bg-[#272727] overflow-hidden'>
			{/* Green accent rectangle at bottom */}
			<div className='absolute bottom-0 left-0 w-full h-[435px] bg-[#006f33]' />

			{/* Complex background graphics */}
			<div className='absolute top-[431.9px] left-[341.98px] w-0 h-0 flex items-center justify-center'>
				<div className='rotate-[348.049deg]'>
					<div className='w-[1920px] h-[1080px] relative overflow-hidden'>
						{/* Background decorative elements */}
						<div className='absolute inset-0 mix-blend-screen opacity-30'>
							{/* Placeholder for complex SVG background - simplified for now */}
							<div className='absolute inset-0 bg-gradient-to-br from-green-400/20 to-transparent' />
						</div>
					</div>
				</div>
			</div>

			{/* Content wrapper */}
			<div className='absolute left-[110px] top-0 w-[1700px] h-full'>
				<div className='absolute left-[170px] top-0 w-[1360px] h-full'>
					{/* Main content text */}
					<div className='absolute left-[110px] top-[619px] w-[655px]'>
						<div className='font-TVG-typography-hero-text text-[24px] leading-normal text-[#dedede] space-y-6'>
							<p className='mb-4'>
								It doesn't matter if you're a complete beginner or chasing a lower handicap; this is your space to grow.
							</p>
							<p className='mb-4'>
								At The Virtual Greens Academy, you won't just swing for fun. You'll train with purpose (while having fun, of course).
							</p>
							<p className='mb-4'>
								Our coaching is built around your goals, powered by the same world-class Golfzon tech used by professional tours.
							</p>
							<p>
								We make learning the game easy, enjoyable, and tailored to you.
							</p>
						</div>
					</div>

					{/* Tagline */}
					<div className='absolute left-[110px] top-[529px] w-[521px]'>
						<p className='font-TVG-typography-tagline text-[22px] leading-[26px] text-[#7ddb8a] uppercase tracking-[0.44px]'>
							The beginning of a better game
						</p>
					</div>

					{/* Main title */}
					<div className='absolute left-[110px] top-[278px] w-[655px]'>
						<h1 className='font-morganite font-black text-[148px] leading-[130px] text-white uppercase tracking-[2.96px]'>
							<div>Train at</div>
							<div>TVG Academy</div>
						</h1>
					</div>

					{/* Hero background image */}
					<div className='absolute right-[170px] top-[278px] w-[650px] h-[536px] bg-center bg-cover bg-no-repeat rounded-[30px] bg-gray-600'>
						{/* Placeholder for hero image - will be replaced with actual image */}
						<div className='w-full h-full bg-gradient-to-br from-green-600 to-green-800 rounded-[30px] flex items-center justify-center'>
							<div className='text-white text-xl font-bold opacity-50'>
								Hero Image Placeholder
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Header space reservation */}
			<div className='absolute left-[110px] top-0 w-[1700px] h-[110px]'>
				{/* Header will be rendered by MainLayout */}
			</div>
		</div>
	);
};