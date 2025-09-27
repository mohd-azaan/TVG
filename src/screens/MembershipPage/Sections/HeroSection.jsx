import React from 'react';
import { Link } from 'react-router-dom';
import { HeroImage } from './HeroImage';

export const HeroSection = () => {
	return (
		<section className='relative w-full h-[100vh] lg:h-[100vh] bg-[#102121] text-white overflow-hidden'>
			{/* Content Wrapper - Following design system standards */}
			<div className='relative z-10 mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-10 h-full pt-28 lg:pt-36 pb-8 lg:pb-12'>
				{/* Dark Background Text - "BECAUSE GOLF IS BETTER" - Aligned with image */}
				<div className='absolute top-[40%] lg:top-[40%] left-0 w-full lg:w-[50%] lg:pr-12 lg:ml-[12vw] md:ml-[8vw] max-w-[520px] lg:max-w-[560px] transform -translate-y-1/2'>
					<div className='flex flex-col px-4 sm:px-6 lg:px-10'>
						<h1 className='font-morganite text-[clamp(72px,8vw,112px)] font-[900] uppercase leading-[0.90] tracking-[0.02em] lg:tracking-[0.03em] mb-2 mt-2 lg:mt-4'>
							BECAUSE GOLF <br /> IS BETTER
						</h1>
					</div>
				</div>

				{/* Green Background Text - "WHEN IT'S YOURS" - Positioned over green section */}
				<div className='absolute top-[58%] left-0 w-full lg:w-[50%] lg:ml-[12vw] md:ml-[8vw] max-w-[520px] lg:max-w-[560px] z-20'>
					<h1 className='font-morganite text-[clamp(72px,8vw,112px)] font-[900] uppercase leading-[0.90] tracking-[0.02em] lg:tracking-[0.03em] text-white px-4 sm:px-6 lg:px-10'>
						WHEN IT'S YOURS
					</h1>
				</div>

				{/* Right Column: Image - Following hero image standards */}
				<div className='absolute top-[54%] right-0 lg:right-[8vw] transform -translate-y-1/2 hidden lg:block'>
					<HeroImage
						src='/hero.png'
						alt='Membership hero image'
						className='w-[85%] lg:w-[480px] lg:h-[430px] overflow-hidden rounded-[30px] lg:mr-36'
					/>
				</div>
			</div>

			{/* Green Background Section */}
			<div className='absolute top-[55%] left-0 w-full h-[70vh] bg-[#006F33]'></div>

			{/* Decorative SVG bottom-right */}
			<img
				alt='decorative green waves'
				src='/shape14-2.svg'
				className='pointer-events-none absolute right-[-420px] bottom-[-220px] w-[1100px] opacity-95 lg:right-[-620px] lg:bottom-[-450px] lg:w-[1800px] mix-blend-screen'
			/>
		</section>
	);
};
