// src/screens/PlayPage/Sections/GolfzonInfoSection.jsx
// Golfzon information section explaining what Golfzon is with description and placeholder image
// Simple layout section introducing Golfzon golf simulator technology
// RELEVANT FILES: PlayPage.jsx, styleguide.css, tailwind.config.js, HeroSection.jsx

import React from 'react';

export const GolfzonInfoSection = () => {
	return (
		<section className='relative w-full min-h-[800px] bg-[#102121] overflow-hidden'>
			{/* Decorative background shape */}
			<div className='absolute top-[200px] left-[500px] opacity-20'>
				<div
					className='w-[1800px] h-[1200px] transform rotate-[15deg]'
					style={{
						background: `url('/shape14-2.svg') no-repeat center`,
						backgroundSize: 'contain',
						mixBlendMode: 'screen'
					}}
				/>
			</div>

			{/* Container positioned according to design layout */}
			<div className='relative z-10 max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-0'>
				{/* Section title */}
				<div className='absolute top-[100px] left-1/2 transform -translate-x-1/2 w-[800px] text-center'>
					<h2 className='font-TVG-typography-h2 font-[number:var(--TVG-typography-h2-font-weight)] text-[length:var(--TVG-typography-h2-font-size)] leading-[var(--TVG-typography-h2-line-height)] tracking-[var(--TVG-typography-h2-letter-spacing)] text-white [font-style:var(--TVG-typography-h2-font-style)] uppercase'>
						What is Golfzon?
					</h2>
				</div>

				{/* Content layout with image and text */}
				<div className='absolute top-[220px] left-[280px] flex items-center gap-[80px]'>
					{/* Left side - Description text */}
					<div className='w-[600px] space-y-6'>
						<p className='font-TVG-typography-default font-[number:var(--TVG-typography-default-font-weight)] text-[length:var(--TVG-typography-default-font-size)] leading-[var(--TVG-typography-default-line-height)] tracking-[var(--TVG-typography-default-letter-spacing)] text-[#d1d3d4] [font-style:var(--TVG-typography-default-font-style)]'>
							Golfzon is the world's leading golf simulator technology, trusted by millions of golfers worldwide. With cutting-edge sensors, real-time swing analysis, and authentic course replicas, Golfzon delivers the most realistic indoor golf experience available.
						</p>
						<p className='font-TVG-typography-default font-[number:var(--TVG-typography-default-font-weight)] text-[length:var(--TVG-typography-default-font-size)] leading-[var(--TVG-typography-default-line-height)] tracking-[var(--TVG-typography-default-letter-spacing)] text-[#d1d3d4] [font-style:var(--TVG-typography-default-font-style)]'>
							From beginners to professionals, Golfzon provides detailed performance data, course management insights, and the ability to play on legendary courses from around the world - all in a climate-controlled environment.
						</p>
						<p className='font-TVG-typography-default font-[number:var(--TVG-typography-default-font-weight)] text-[length:var(--TVG-typography-default-font-size)] leading-[var(--TVG-typography-default-line-height)] tracking-[var(--TVG-typography-default-letter-spacing)] text-[#7ddb8a] [font-style:var(--TVG-typography-default-font-style)] font-semibold'>
							Experience the future of golf at The Virtual Greens.
						</p>
					</div>

					{/* Right side - Placeholder image */}
					<div className='w-[680px] h-[400px]'>
						<div className='w-full h-full bg-gradient-to-br from-[#006f33] to-[#004a22] rounded-[20px] flex items-center justify-center shadow-xl'>
							<div className='text-center text-white space-y-4'>
								<div className='text-5xl'>📊</div>
								<div className='text-2xl font-semibold'>Golfzon Technology</div>
								<div className='text-sm opacity-75 max-w-[300px]'>
									Advanced simulator interface showing swing analysis and course visualization
								</div>
								<div className='text-xs opacity-60'>Screenshot Placeholder</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Mobile responsive layout */}
			<div className='block lg:hidden px-4 sm:px-6 py-16'>
				<div className='space-y-12 max-w-[600px] mx-auto'>
					{/* Title */}
					<div className='text-center'>
						<h2 className='font-TVG-typography-h2 font-[number:var(--TVG-typography-h2-font-weight)] text-[clamp(32px,8vw,64px)] leading-[1.1] tracking-[var(--TVG-typography-h2-letter-spacing)] text-white [font-style:var(--TVG-typography-h2-font-style)] uppercase'>
							What is Golfzon?
						</h2>
					</div>

					{/* Mobile image */}
					<div className='w-full'>
						<div className='w-full aspect-[16/10] bg-gradient-to-br from-[#006f33] to-[#004a22] rounded-[20px] flex items-center justify-center shadow-xl'>
							<div className='text-center text-white space-y-3'>
								<div className='text-4xl'>📊</div>
								<div className='text-xl font-semibold'>Golfzon Technology</div>
								<div className='text-sm opacity-75 max-w-[250px]'>
									Advanced simulator interface showing swing analysis
								</div>
								<div className='text-xs opacity-60'>Screenshot Placeholder</div>
							</div>
						</div>
					</div>

					{/* Mobile description */}
					<div className='space-y-6 text-center'>
						<p className='font-TVG-typography-default font-[number:var(--TVG-typography-default-font-weight)] text-[18px] leading-[var(--TVG-typography-default-line-height)] tracking-[var(--TVG-typography-default-letter-spacing)] text-[#d1d3d4] [font-style:var(--TVG-typography-default-font-style)]'>
							Golfzon is the world's leading golf simulator technology, trusted by millions of golfers worldwide. With cutting-edge sensors, real-time swing analysis, and authentic course replicas, Golfzon delivers the most realistic indoor golf experience available.
						</p>
						<p className='font-TVG-typography-default font-[number:var(--TVG-typography-default-font-weight)] text-[18px] leading-[var(--TVG-typography-default-line-height)] tracking-[var(--TVG-typography-default-letter-spacing)] text-[#d1d3d4] [font-style:var(--TVG-typography-default-font-style)]'>
							From beginners to professionals, Golfzon provides detailed performance data, course management insights, and the ability to play on legendary courses from around the world.
						</p>
						<p className='font-TVG-typography-default font-[number:var(--TVG-typography-default-font-weight)] text-[18px] leading-[var(--TVG-typography-default-line-height)] tracking-[var(--TVG-typography-default-letter-spacing)] text-[#7ddb8a] [font-style:var(--TVG-typography-default-font-style)] font-semibold'>
							Experience the future of golf at The Virtual Greens.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};