import React from 'react';

export const HeroSection = () => {
	return (
		<section className='relative w-full h-[100vh] lg:h-[100vh] bg-[#102121] text-white overflow-hidden'>
			{/* Content Wrapper - Following design system standards */}
			<div className='relative z-10 mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-10 h-full pt-28 lg:pt-[200px] pb-8 lg:pb-12'>
				{/* Content Positioning - Following hero standards */}
				<div className='w-full lg:w-[50%] lg:pr-12 lg:ml-[12vw] md:ml-[8vw] max-w-[520px] lg:max-w-[560px]'>
					{/* Main Title - Following design system hero title standards */}
					<h1 className='font-morganite text-[clamp(72px,8vw,112px)] font-[900] uppercase leading-[0.90] tracking-[0.02em] lg:tracking-[0.03em] mb-2 mt-2 lg:mt-4'>
						PARTNER WITH <br /> THE VIRTUAL GREENS
					</h1>

					{/* Subtitle - Following design system hero subtitle standards */}
					<p className='font-gilroy font-bold text-[18px] text-[#7ddb8a] uppercase tracking-wide mb-2'>
						REVOLUTIONIZING GOLF ENTERTAINMENT
					</p>

					{/* Description Text - Following design system hero body text standards */}
					<div className='font-gilroy font-normal text-[18px] leading-6 text-white space-y-4 max-w-[510px] py-8 lg:py-8'>
						<p>
							The Virtual Greens is changing the way golf is played and
							experienced. Built for today's players and tomorrow's fans, we
							blend sport, hospitality, and tech into one bold concept that
							works in any city or suburb.
						</p>
						<p>
							We're now expanding across the region and inviting select partners
							to join the next wave of golf entertainment.
						</p>
					</div>
				</div>

				{/* Right Column: Image - Following design system hero image standards */}
				<div className='absolute top-[50%] right-0 lg:right-[8vw] transform -translate-y-1/2 hidden lg:block'>
					<img
						className='w-[85%] lg:w-[500px] lg:h-[420px] overflow-hidden rounded-[30px] lg:mr-36'
						src='/freepik-background.png'
						alt='Partnership Opportunity'
						fetchPriority='high'
						decoding='async'
						width='500'
						height='420'
					/>
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
