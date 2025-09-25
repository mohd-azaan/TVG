import React from 'react';
import { Link } from 'react-router-dom';
import { HeroImage } from './HeroImage';

export const HeroSection = () => {
	return (
		<section className='relative w-full h-[100vh] lg:h-[110vh] bg-[#102121] text-white overflow-hidden'>
			{/* Content Wrapper - Design System Standard */}
			<div className='relative z-10 mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-10 h-full pt-28 lg:pt-36 pb-8 lg:pb-12'>
				{/* Level 2: Universal Spacing Wrapper - MANDATORY FOR ALIGNMENT */}
				<div className='lg:ml-[12vw] md:ml-[8vw] lg:mr-[12vw] md:mr-[8vw]'>
					{/* Content Positioning - Design System Standard */}
					<div className='w-full lg:w-[50%] lg:pr-12 max-w-[520px] lg:max-w-[560px] h-full flex items-center'>
						<div className='flex flex-col'>
							{/* Hero Title (H1) - Design System Standard */}
							<h1 className='font-morganite text-[clamp(72px,8vw,112px)] font-[900] uppercase leading-[0.90] tracking-[0.02em] lg:tracking-[0.03em] mb-2 mt-2 lg:mt-4'>
								TRAIN AT
								<br />
								TVG Academy
							</h1>

							{/* Hero Subtitle - Design System Standard */}
							<p className='font-gilroy font-bold text-[18px] text-[#7ddb8a] uppercase tracking-wide mb-2'>
								The beginning of a better game
							</p>

							{/* Hero Body Text - Design System Standard */}
							<div className='font-gilroy font-normal text-[18px] leading-6 text-white space-y-4 max-w-[510px] py-8 lg:py-12'>
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
									world-class Golfzon tech used by professional tours
								</p>
								<p>
									We make learning the game easy, enjoyable, and tailored to
									you.
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Hero Image - Design System Standard */}
				<div className='absolute right-[12vw] top-1/2 transform -translate-y-1/2 hidden lg:block'>
					<div className='w-[85%] lg:w-[500px] lg:h-[420px] overflow-hidden rounded-[30px]'>
						<HeroImage />
					</div>
				</div>
			</div>

			{/* Green Background Section - Positioned to align with green text */}
			<div className='absolute top-[55%] left-0 w-full h-[55vh] bg-[#006F33]'></div>

			{/* Decorative SVG bottom-right */}
			<img
				alt='decorative green waves'
				src='/shape14-2.svg'
				className='pointer-events-none absolute right-[-420px] bottom-[-220px] w-[1100px] opacity-95 lg:right-[-620px] lg:bottom-[-520px] lg:w-[1800px] mix-blend-screen'
			/>
		</section>
	);
};
