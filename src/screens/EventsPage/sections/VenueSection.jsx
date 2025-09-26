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

export const VenueSection = () => {
	return (
		<section className='relative w-full bg-[#102121] overflow-hidden'>
			{/* Level 1: Page Container */}
			<div className='relative max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-28'>
				{/* Level 2: Universal Spacing Wrapper - MANDATORY FOR ALIGNMENT */}
				<div className='lg:ml-[12vw] md:ml-[8vw] lg:mr-[12vw] md:mr-[8vw]'>
					{/* Level 3: Content Container */}
					<div className='max-w-[1200px] mx-auto'>
						<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center'>
							{/* Left Column: Content */}
							<div className='space-y-6'>
								{/* Section Label */}
								<p className='font-gilroy font-bold text-[18px] text-[#7ddb8a] uppercase tracking-wide mb-4'>
									A VENUE THAT FITS
								</p>

								{/* Main Section Heading - Following design system standards */}
								<h2 className='font-morganite font-black text-[clamp(64px,6vw,80px)] leading-[0.95] tracking-[0.02em] text-white uppercase'>
									ANY VIBE
								</h2>

								{/* Section Subheadings - Following design system standards */}
								<div className='space-y-1'>
									<p className='font-gilroy font-bold text-[18px] leading-[22px] tracking-[0.3px] text-[#7ddb8a] uppercase'>
										Want the whole place to yourself?
									</p>
									<p className='font-gilroy font-bold text-[18px] leading-[22px] tracking-[0.3px] text-[#7ddb8a] uppercase'>
										Go for it!
									</p>
								</div>

								{/* Body Text - Following design system standards */}
								<div className='font-gilroy font-medium text-base leading-[24px] tracking-[0.1px] text-[rgba(209,211,212,0.85)] space-y-4'>
									<p>
										Exclusive venue hire means full access to every bay, every lounge, and every screen. You get the space, the service, and a fully customizable experience built around your group.
									</p>
									<p>
										Bring everyone. Friends, family, and even the people you just met. Our space holds up to 115 guests, with fully customized food and beverage packages to match your vibe.
									</p>
								</div>

								{/* CTA Button */}
								<div className='pt-4'>
									<Link
										to='/events-registration'
										className='bg-[#009444] hover:bg-[#007a3a] rounded-[50px] px-6 py-2.5 font-gilroy font-semibold text-[14px] text-white uppercase inline-flex items-center gap-2 transition-colors w-fit'
									>
										<span>PLAN YOUR EVENT</span>
										<ArrowIcon />
									</Link>
								</div>
							</div>

							{/* Right Column: Image */}
							<div className='w-full'>
								<img
									src='/indoor-golf-1.png'
									alt='Indoor Golf Venue'
									className='w-full aspect-[16/9] object-cover rounded-[30px] shadow-xl lg:w-[655px] lg:h-[400px] lg:aspect-auto'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};