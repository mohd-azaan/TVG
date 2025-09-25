import { Link } from 'react-router-dom';

// Arrow icon component for the button
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
		<section className='relative w-full h-[100vh] lg:h-[120vh] bg-[#102121] text-white overflow-hidden'>
			{/* Content Wrapper - Following design system standards */}
			<div className='relative z-10 mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-10 h-full pt-28 lg:pt-[190px] pb-8 lg:pb-12'>
				{/* Content Positioning - Following hero standards */}
				<div className='w-full lg:w-[50%] lg:pr-12 lg:ml-[12vw] md:ml-[8vw] max-w-[520px] lg:max-w-[560px]'>
					<div className='flex flex-col'>
						{/* Subtitle First - Following design system hero subtitle standards */}
						<p className='font-gilroy font-bold text-[18px] text-[#7ddb8a] uppercase tracking-wide mb-1'>
							LET'S MAKE
						</p>

						{/* Main Title - Following design system hero title standards */}
						<h1 className='font-morganite text-[clamp(72px,8vw,112px)] font-[900] uppercase leading-[0.90] tracking-[0.02em] lg:tracking-[0.03em] mb-2 '>
							YOUR EVENT
							<br />A HOLE-IN-ONE
						</h1>

						{/* Description Text - Following design system hero body text standards */}
						<div className='font-gilroy font-normal text-[18px] leading-6 text-white space-y-4 max-w-[510px] py-8 lg:py-4'>
							<p>
								In the heart of Riyadh's Hitteen district, The Virtual Greens is
								where serious fun meets serious golf. Plan a laid-back hangout
								or a large-scale celebration. We've got the space, the energy,
								and the food to make it unforgettable.
							</p>
							<p>
								Come rain or shine, morning or midnight, we're ready to host.
								Good times, great food, and swings that hit different. Oh, and
								food and drinks? We'll bring them to you right on the course. No
								need to pause the game.
							</p>
						</div>
					</div>
				</div>

				{/* Right Column: Image - Following design system hero image standards */}
				<div className='absolute top-[50%] right-0 lg:right-[8vw] transform -translate-y-1/2 hidden lg:block'>
					<img
						className='w-[85%] lg:w-[500px] lg:h-[420px] overflow-hidden rounded-[30px] lg:mr-36'
						src='/freepik__background__81702-1.png'
						alt='Indoor golf event space'
						fetchPriority='high'
						decoding='async'
						width='500'
						height='420'
					/>
				</div>
			</div>

			{/* Green Background Section */}
			<div className='absolute top-[50%] left-0 w-full h-[70vh] bg-[#006F33]'></div>

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
