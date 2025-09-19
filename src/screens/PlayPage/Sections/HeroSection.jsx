import React from 'react';
import { Link } from 'react-router-dom';

// A simple arrow icon component for the button
const ArrowIcon = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='h-6 w-6'
		fill='none'
		viewBox='0 0 24 24'
		stroke='currentColor'
		strokeWidth={2}
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			d='M13 7l5 5m0 0l-5 5m5-5H6'
		/>
	</svg>
);

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
							YOUR GAME, YOUR
							<br />
							PACE, YOUR GREENS
						</h1>

						{/* Subheading - Positioned to align with green background */}
						<p className='-translate-y-2 lg:-translate-y-4 font-gilroy font-bold text-[15px] sm:text-[15px] lg:text-[20px] uppercase tracking-[1.10px] leading-[0.5] text-[#7ddb8a] mb-6 mt-0'>
							THE NEW ERA OF INDOOR GOLF
						</p>

						{/* Description Text - wider and smaller */}
						<div className='font-TVG-typography-hero-text font-[number:var(--TVG-typography-hero-text-font-weight)] text-[22px] leading-7 text-white space-y-4 max-w-[600px] mb-0 mt-4 lg:mt-6'>
							<p>The ultimate golf and social experience, only in Riyadh.</p>
							<p>
								At The Virtual Greens, playing golf doesn't mean dressing up or
								heading out of town. It means stepping into a sleek,
								air-conditioned space where you can tee off on the world's most
								iconic course, day or night, rain or shine. Unwind after work,
								celebrate with friends, or host an event with a twist. This is
								golf on your terms.
							</p>
						</div>

						{/* CTA Button - Using homepage button style */}
						<a
							href='https://widget.servmeco.com/?oid=1662'
							target='_blank'
							rel='noopener noreferrer'
							className='inline-flex w-fit items-center gap-3 rounded-full bg-[#009444] px-6 py-2 mt-6 text-center text-[18px] font-gilroy font-medium uppercase leading-[40px] tracking-wide transition-transform duration-200 ease-out hover:scale-105 hover:shadow-lg hover:brightness-105 focus:outline-none focus:ring-4 focus:ring-[#0b6e38]/30'
						>
							<span>BOOK YOU BAY</span>
							<ArrowIcon />
						</a>
					</div>
				</div>

				{/* Right Column: Image - Adjusted height */}
				<div className='hidden lg:flex lg:-translate-y-[48px] w-[55%] justify-center'>
					<img
						className='w-[90%] max-w-[900px] h-auto max-h-[480px] rounded-[30px] object-contain'
						src='/play-bg.png'
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
