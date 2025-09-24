import React from 'react';
import { Link } from 'react-router-dom';

// A simple arrow icon component for the button
const ArrowIcon = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='h-6 w-6 text-white group-hover:text-black'
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
		<section className='relative w-full h-[120vh] bg-[#102121] text-white overflow-hidden'>
			{/* Content wrapper */}
			<div className='relative z-10 mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-10 h-full pt-32 lg:pt-36 pb-8 lg:pb-12'>
				{/* Title column (stays in flow) */}
				<div className='w-full lg:w-[50%] lg:pr-12 lg:ml-[12vw] md:ml-[8vw] max-w-[520px] lg:max-w-[560px]'>
					<h1 className='font-morganite text-[clamp(72px,8vw,112px)] font-[900] uppercase leading-[0.90] tracking-[0.02em] lg:tracking-[0.03em] mb-2 mt-2 lg:mt-4'>
						YOUR GAME, YOUR
						<br />
						PACE, YOUR GREENS
					</h1>
					<p className='font-gilroy font-bold text-[18px] text-[#7ddb8a] uppercase tracking-wide mb-2'>
						THE NEW ERA OF INDOOR GOLF
					</p>
				</div>

				{/* Image: absolutely positioned on large screens so it doesn't affect title layout */}
				<div className='lg:absolute lg:top-0 lg:right-0 lg:bottom-0 lg:w-1/2 hidden lg:flex justify-center items-start lg:pt-44 pointer-events-none'>
					{/* cropped fixed-size wrapper */}
					<div className='w-[70%] lg:w-[510px] lg:h-[370px] overflow-hidden rounded-[30px] lg:mr-[200px]'>
						<img
							src='/play-bg.png'
							alt='Man playing on an indoor golf simulator with motion trails'
							className='w-full h-full object-cover pointer-events-auto'
							fetchPriority='high'
							decoding='async'
							width='550'
							height='503'
						/>
					</div>
				</div>
			</div>

			{/* Green background */}
			<div className='absolute bottom-0 left-0 w-full h-[50%] bg-[#006F33] z-0'></div>

			{/* Description placed over the green area */}
			<div className='absolute left-0 top-[48%] z-20 w-full flex justify-start'>
				<div className='mx-auto px-4 sm:px-6 lg:px-10 w-full max-w-[1920px]'>
					<div className='w-full lg:w-[50%] lg:pr-12 lg:ml-[12vw] md:ml-[8vw] max-w-[520px] lg:max-w-[560px]'>
						<div className='font-gilroy font-normal text-[18px] leading-6 text-white space-y-4 max-w-[510px] py-8 lg:py-12'>
							<p>The ultimate golf and social experience, only in Riyadh.</p>
							<p>
								At The Virtual Greens, playing golf doesn't mean dressing up or
								heading out of town. It means stepping into a sleek,
								air-conditioned space where you can tee off on the world's most
								iconic course, day or night, rain or shine. Unwind after work,
								celebrate with friends, or host an event with a twist. This is
								golf on your terms.
							</p>
							<div className='mt-12'>
								<a
									href='https://widget.servmeco.com/?oid=1662'
									target='_blank'
									rel='noopener noreferrer'
									className='bg-[#009444] hover:bg-[#7ddb8a] transition-colors rounded-full px-6 py-2.5 flex items-center gap-3 group w-fit'
								>
									<span className='font-gilroy font-medium text-[14px] text-white group-hover:text-black uppercase'>
										BOOK YOUR BAY
									</span>
									<ArrowIcon />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Decorative SVG bottom-right */}
			<img
				alt='decorative green waves'
				src='/shape14-2.svg'
				className='pointer-events-none absolute right-[-420px] bottom-[-100px] w-[1100px] opacity-95 lg:right-[-620px] lg:bottom-[-420px] lg:w-[1800px] mix-blend-screen z-0'
				fetchPriority='high'
				decoding='async'
				width='1800'
				height='800'
			/>
		</section>
	);
};
