import React from 'react';
import { Link } from 'react-router-dom';

export const HeroSection = () => {
	return (
		// Main container matching the exact layout from the image
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
							TVG Academy
						</h1>

						{/* Subheading - Positioned to align with green background */}
						<p className='-translate-y-2 lg:-translate-y-4 font-gilroy font-bold text-[15px] sm:text-[15px] lg:text-[20px] uppercase tracking-[1.10px] leading-[0.5] text-[#7ddb8a] mb-6 mt-0'>
							The beginning of a better game
						</p>

						{/* Description Text - wider and smaller */}
						<div className='font-TVG-typography-hero-text font-medium text-[22px] leading-7 text-white space-y-4 max-w-[600px] mb-0 mt-4 lg:mt-6'>
							<p>
								It doesn’t matter if you're a complete beginner or chasing a
								lower handicap; this is your space to grow.
							</p>
							<p>
								At The Virtual Greens Academy, you won’t just swing for fun.
								You’ll train with purpose (while having fun, of course).
							</p>
							<p>
								Our coaching is built around your goals, powered by the same
								world-class Golfzon tech used by professional tours
							</p>
							<p>
								We make learning the game easy, enjoyable, and tailored to you.
							</p>
						</div>
					</div>
				</div>

				{/* Right Column: Image - Adjusted height */}
				<div className='hidden lg:flex lg:-translate-y-[48px]  justify-center'>
					<img
						className='w-[90%] max-w-[1000px] h-auto max-h-[580px] rounded-[30px] object-contain'
						src='/learn-hero-training.png'
						alt='Man playing on an indoor golf simulator with motion trails'
					/>
				</div>
			</div>

			{/* Green Background Section - Positioned to align with green text */}
			<div className='absolute top-[55%] left-0 w-full h-[45vh] bg-[#006F33]'></div>

			{/* Decorative SVG bottom-right */}
			<img
				alt='decorative green waves'
				src='/shape14-2.svg'
				className='pointer-events-none absolute right-[-420px] bottom-[-220px] w-[1100px] opacity-95 lg:right-[-620px] lg:bottom-[-520px] lg:w-[1800px] mix-blend-screen'
			/>
		</div>
	);
};
