import React from 'react';
import { Link } from 'react-router-dom';
import { HeroImage } from './HeroImage';

export const HeroSection = () => {
	const title = (
		<div className='mb-[56px]'>
			<div className='mb-7 top-2'>
				BECAUSE GOLF <br /> IS BETTER <br />
			</div>
			<span className='mb-5'>WHEN IT’S YOURS</span>
		</div>
	);

	return (
		<div className='relative w-full h-[100vh] bg-[#102121] text-white overflow-hidden'>
			{/* Content Wrapper (Learn hero style) */}
			<div className='relative z-10 mx-auto flex max-w-[1440px] items-center px-8 pt-20 lg:px-16 lg:pt-24 h-full'>
				{/* Left Column: Title only */}
				<div className='w-full lg:w-1/2 lg:pr-16'>
					<div className='flex flex-col lg:mt-6'>
						<h1 className='-translate-y-4 lg:-translate-y-6 font-morganite text-[clamp(80px,10vw,120px)] font-[900] uppercase leading-[0.88] tracking-[2.2px] mb-2 mt-0'>
							{title}
						</h1>
					</div>
				</div>

				{/* Right Column: Image (uses Learn hero image styling) */}
				<div className='hidden lg:flex lg:w-1/2 lg:pl-16 lg:-translate-y-[48px] justify-center'>
					<HeroImage src='/hero.png' alt='Membership hero image' />
				</div>
			</div>

			{/* Green Background Section - same as Learn hero */}
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
