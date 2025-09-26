
import React from 'react';

export const HeroSection = () => {
	return (
		<section className='relative w-full h-[100vh] lg:h-[120vh] bg-[#102121] text-white overflow-hidden'>
			{/* Content Wrapper - Following design system standards */}
			<div className='relative z-10 mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-10 h-full pt-28 lg:pt-36 pb-8 lg:pb-12'>
				{/* Content Positioning - Following hero standards */}
				<div className='w-full lg:w-[50%] lg:pr-12 lg:ml-[12vw] md:ml-[8vw] max-w-[520px] lg:max-w-[560px]'>
					{/* Main Title - Following design system hero title standards */}
					<h1 className='font-morganite text-[clamp(72px,8vw,112px)] font-[900] uppercase leading-[0.90] tracking-[0.02em] lg:tracking-[0.03em] mb-2 mt-2 lg:mt-4'>
						JOIN THE <br /> 96
					</h1>

					{/* Subtitle - Following design system hero subtitle standards */}
					<p className='font-gilroy font-bold text-[18px] text-[#7ddb8a] uppercase tracking-wide mb-2'>
						EXCLUSIVE MEMBERSHIP
					</p>

					{/* Description Text - Following design system hero body text standards */}
					<div className='font-gilroy font-normal text-[18px] leading-6 text-white space-y-4 max-w-[510px] py-8 lg:py-12'>
						<p>Membership at TVG is limited to just 96 individuals each year. Secure your place today and enjoy full benefits, including exclusive partner access for your first year.</p>
					</div>

					{/* CTA Button - Following design system hero CTA standards */}
					<a
						href="#registration-form"
						className='bg-[#009444] hover:bg-[#7ddb8a] transition-colors rounded-full px-6 py-2.5 flex items-center gap-3 group w-fit'
					>
						<span className='font-gilroy font-medium text-[14px] text-white group-hover:text-black uppercase'>
							REGISTER NOW
						</span>
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
					</a>
				</div>
			</div>

			{/* Green Background Section */}
			<div className='absolute top-[55%] left-0 w-full h-[70vh] bg-[#006F33]'></div>

			{/* Decorative SVG bottom-right */}
			<img
				alt='decorative green waves'
				src='/shape14-2.svg'
				className='pointer-events-none absolute right-[-420px] bottom-[-220px] w-[1100px] opacity-95 lg:right-[-620px] lg:bottom-[-520px] lg:w-[1800px] mix-blend-screen z-0'
				fetchPriority='high'
				decoding='async'
				width='1800'
				height='800'
			/>
		</section>
	);
};
