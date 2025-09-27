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

// WhatsApp icon component for CTA button
const WhatsAppIcon = () => (
	<svg
		className='h-5 w-5'
		fill='currentColor'
		viewBox='0 0 24 24'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.595z' />
	</svg>
);


export const HeroSection = () => {
	return (
		<section className='relative w-full h-[100vh] lg:h-[100vh] bg-[#102121] text-white overflow-hidden'>
			{/* Content Wrapper - Following design system standards */}
			<div className='relative z-10 mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-10 h-full pt-28 lg:pt-[190px] pb-8 lg:pb-12'>
				{/* Content Positioning - Following hero standards */}
				<div className='w-full lg:w-[50%] lg:pr-12 lg:ml-[12vw] md:ml-[8vw] max-w-[520px] lg:max-w-[560px]'>
					<div className='flex flex-col'>
						{/* Main Title - Following design system hero title standards */}
						<h1 className='font-morganite text-[clamp(72px,8vw,112px)] font-[900] uppercase leading-[0.80] tracking-[0.02em] lg:tracking-[0.03em] mb-2 mt-2 lg:mt-4'>
							LEAGUES AT THE
							<br />
							VIRTUAL GREENS
						</h1>

						{/* Subtitle - Following design system hero subtitle standards */}
						<p className='font-gilroy font-bold text-[18px] text-[#7ddb8a] uppercase tracking-wide mb-2'>
							WELCOME TO YOUR WEEKLY GOLF ROUTINE.
						</p>

						{/* Description Text - Following design system hero body text standards */}
						<div className='font-gilroy font-normal text-[18px] leading-6 text-white space-y-4 max-w-[510px] py-8 lg:py-12'>
							<p>
								With this league, we're bringing the heat indoors, literally!!
							</p>
							<p>
								While the sun blazes outside, we're getting everything ready for
								a season of high-energy league play. Expect good games, better
								company, and a weekly competition you'll actually look forward
								to.
							</p>
						</div>

						<div className='flex flex-col sm:flex-row gap-4'>
							<Link
								to='#'
								className='border-2 border-white bg-transparent hover:bg-white/20 hover:border-transparent transition-colors rounded-full px-6 py-2.5 flex items-center gap-3 group w-fit'
							>
								<div className='text-white group-hover:text-black transition-colors'>
									<WhatsAppIcon />
								</div>
								<span className='font-gilroy font-medium text-[14px] text-white group-hover:text-black uppercase'>
									JOIN THE WHATSAPP GROUP
								</span>
								<div className='text-white group-hover:text-black transition-colors'>
									<ArrowIcon />
								</div>
							</Link>
						</div>
					</div>
				</div>

				{/* Right Column: Image - Following design system hero image standards */}
				<div className='absolute top-[50%] right-0 lg:right-[8vw] transform -translate-y-1/2 hidden lg:block'>
					<img
						className='w-[85%] lg:w-[500px] lg:h-[420px] overflow-hidden rounded-[30px] lg:mr-36'
						src='/indoor-golf-1.png'
						alt='Indoor golf league setup'
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
