// src/screens/LearnPage/sections/PackagesSection/PackagesSection.jsx

import React from 'react';
// Assuming your Button component is set up correctly
// import { Button } from '../../../../components/ui/button';

// Mock Button for standalone example
const Button = ({ className, children }) => (
	<button
		className={`${className} flex items-center justify-center gap-2 px-6 py-3 text-white transition-colors duration-300`}
	>
		{children}
	</button>
);

// --- ICONS (New icons created to match the design) ---

const SaudiRiyalSymbol = ({ className = 'w-5 h-5' }) => (
	<img
		// NOTE: Using your local path now. Ensure this file is in your /public directory.
		src={'/packages-saudi-riyal-symbol-1.svg'}
		alt='SAR'
		className={`${className} object-contain inline-block`}
	/>
);

const SearchIcon = ({ className = 'w-6 h-6' }) => (
	<svg
		className={className}
		fill='none'
		viewBox='0 0 24 24'
		strokeWidth={2}
		stroke='currentColor'
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
		/>
	</svg>
);

const ChartIcon = ({ className = 'w-6 h-6' }) => (
	<svg
		className={className}
		fill='none'
		viewBox='0 0 24 24'
		strokeWidth={2}
		stroke='currentColor'
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			d='M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941'
		/>
	</svg>
);

const RocketIcon = ({ className = 'w-6 h-6' }) => (
	<svg
		className={className}
		fill='none'
		viewBox='0 0 24 24'
		strokeWidth={2}
		stroke='currentColor'
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			d='M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a6 6 0 01-7.38 5.84m2.56-5.84a6 6 0 016.38-5.84m-11.18 0a6 6 0 015.84-1.14m-5.84 1.14a6 6 0 01-1.14-5.84m5.84 5.84L5.121 5.121m0 0A6.002 6.002 0 0111.5 2.25a6 6 0 016.379 7.379m-13.758 0A6 6 0 012.25 11.5a6 6 0 017.379-6.379'
		/>
	</svg>
);

const ArrowRight = ({ className = 'w-6 h-6' }) => (
	<svg className={className} viewBox='0 0 24 24' fill='none'>
		<path
			d='M5 12H19M19 12L12 5M19 12L12 19'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);

export const PackagesSection = () => {
	return (
		// Set background back to white as requested
		<div className='relative w-full bg-white py-16 lg:py-28'>
			{/* Title section - "Our Coaching Approach" heading */}
			<div className='text-center mb-16'>
				<h2 className='font-morganite font-extrabold text-[80px] md:text-[96px] leading-[80px] md:leading-[90px] text-black uppercase tracking-[1.6px] md:tracking-[1.92px] mb-6'>
					OUR COACHING APPROACH
				</h2>
				<p className='font-TVG-typography-tagline text-[20px] md:text-[22px] leading-[24px] md:leading-[26px] text-[#009444] uppercase tracking-[0.4px] md:tracking-[0.44px] max-w-[655px] mx-auto'>
					NO TWO SWINGS ARE THE SAME. SO LET'S PUT A GAME PLAN TOGETHER THAT'S
					JUST FOR YOU
				</p>
			</div>{' '}
			{/* Three pricing cards container */}
			<div className='max-w-[1400px] mx-auto px-4 flex flex-col lg:flex-row gap-8 items-stretch justify-center mb-16'>
				{/* Card 1: Start Package */}
				<div className='bg-[#f6f6f6] rounded-[28px] w-full max-w-[420px] mx-auto flex flex-col'>
					<div className='bg-[#009444] rounded-t-[28px] h-[88px] flex items-center justify-between px-6 md:px-8 text-white'>
						<h3 className='font-TVG-typography-tagline text-[28px] uppercase tracking-[0.56px] font-bold'>
							Start
						</h3>
						<SearchIcon className='w-8 h-8 text-white' />
					</div>
					<div className='p-6 md:p-8 flex-grow flex flex-col'>
						<div className='text-center py-4'>
							<div className='flex items-baseline justify-center gap-1'>
								<SaudiRiyalSymbol className='w-[48px] h-[48px] text-black' />
								<span className='font-morganite text-[120px] md:text-[140px] leading-[0.75] text-black tracking-wide font-bold'>
									199
								</span>
								<span className='font-TVG-typography-default text-[20px] md:text-[24px] text-black/80'>
									/person
								</span>
							</div>
						</div>
						<div className='bg-white border border-gray-200 rounded-[20px] p-6 text-left mb-6'>
							<h4 className='font-TVG-typography-tagline text-[24px] text-black uppercase tracking-wide mb-3 font-bold'>
								Swing Evaluation
							</h4>
							<p className='font-TVG-typography-default text-base leading-relaxed text-[#757575]'>
								Start with a 45-minute deep dive into your swing, goals, and
								game. You'll walk away with a game plan and probably a few
								lightbulb moments.
								<br />
								<br />
								For all levels — a clear diagnosis for experienced players, a
								guided starting point for newcomers.
							</p>
						</div>
						<div className='space-y-4 font-TVG-typography-default text-lg text-center text-black/90 mb-8'>
							<p className='border-t border-gray-200 pt-4'>45-minute session</p>
							<p className='border-t border-gray-200 pt-4'>Adults & Juniors</p>
							<p className='border-t border-gray-200 pt-4'>
								One-on-one session
							</p>
						</div>
						{/* Add spacing to match middle card height */}
						<div className='flex-grow'></div>
						<div className='mt-auto'>
							<Button className='w-full bg-[#009444] hover:bg-[#007a3a] rounded-[50px] py-4 font-TVG-typography-button text-[18px] uppercase tracking-wider'>
								<span>Book Evaluation</span>
								<ArrowRight className='w-5 h-5' />
							</Button>
						</div>
					</div>
				</div>

				{/* Card 2: Improve Package */}
				<div className='bg-[#f6f6f6] rounded-[28px] w-full max-w-[420px] mx-auto flex flex-col'>
					{/* Restored correct header color */}
					<div className='bg-[#006f33] rounded-t-[28px] h-[88px] flex items-center justify-between px-6 md:px-8 text-white'>
						<h3 className='font-TVG-typography-tagline text-[28px] uppercase tracking-[0.56px] font-bold'>
							Improve
						</h3>
						<ChartIcon className='w-8 h-8 text-white' />
					</div>
					<div className='p-6 md:p-8 flex-grow flex flex-col'>
						<div className='text-center py-4'>
							<div className='flex items-baseline justify-center gap-1'>
								<SaudiRiyalSymbol className='w-[48px] h-[48px] text-black' />
								<span className='font-morganite text-[120px] md:text-[140px] leading-[0.75] text-black tracking-wide font-bold'>
									400+
								</span>
								<span className='font-TVG-typography-default text-[20px] md:text-[24px] text-black/80'>
									/person
								</span>
							</div>
						</div>
						<div className='bg-white border border-gray-200 rounded-[20px] p-6 text-left mb-6'>
							<h4 className='font-TVG-typography-tagline text-[24px] text-black uppercase tracking-wide mb-3 font-bold whitespace-nowrap'>
								Lessons & Packages
							</h4>
							<p className='font-TVG-typography-default text-base leading-relaxed text-[#757575]'>
								Private sessions taught by our tour professionals, leveraging
								Golfzon's advanced simulator technology.
							</p>
						</div>
						<div className='font-TVG-typography-default text-lg text-center text-black/90 space-y-4 mb-4'>
							<p className='border-t border-gray-200 pt-4'>60-minute session</p>
							<p className='border-t border-gray-200 pt-4'>
								One-on-one session
							</p>
						</div>
						<div className='space-y-6'>
							<div>
								<h5 className='font-gilroy font-bold uppercase text-black text-left mb-4 text-xl'>
									ADULTS
								</h5>
								<div className='space-y-3 font-gilroy font-medium'>
									<div className='flex items-center justify-between'>
										<span className='bg-[#D6EFE5] px-4 py-2 rounded-full text-black text-base font-semibold'>
											60-Minute
										</span>
										<span className='text-2xl flex items-center gap-1 font-bold'>
											<SaudiRiyalSymbol className='w-5 h-5' /> 500
										</span>
									</div>
									<div className='flex items-center justify-between'>
										<span className='bg-[#D6EFE5] px-4 py-2 rounded-full text-black text-base font-semibold'>
											5-lesson Package
										</span>
										<span className='text-2xl flex items-center gap-1 font-bold'>
											<SaudiRiyalSymbol className='w-5 h-5' /> 2,400
										</span>
									</div>
									<div className='flex items-center justify-between'>
										<span className='bg-[#D6EFE5] px-4 py-2 rounded-full text-black text-base font-semibold'>
											10-lesson Package
										</span>
										<span className='text-2xl flex items-center gap-1 font-bold'>
											<SaudiRiyalSymbol className='w-5 h-5' /> 4,500
										</span>
									</div>
								</div>
							</div>
							<div>
								<h5 className='font-gilroy font-bold uppercase text-black text-left mb-4 text-xl'>
									JUNIORS
								</h5>
								<div className='space-y-3 font-gilroy font-medium'>
									<div className='flex items-center justify-between'>
										<span className='bg-[#D6EFE5] px-4 py-2 rounded-full text-black text-base font-semibold'>
											60-Minute
										</span>
										<span className='text-2xl flex items-center gap-1 font-bold'>
											<SaudiRiyalSymbol className='w-5 h-5' /> 400
										</span>
									</div>
									<div className='flex items-center justify-between'>
										<span className='bg-[#D6EFE5] px-4 py-2 rounded-full text-black text-base font-semibold'>
											5-Lesson Package
										</span>
										<span className='text-2xl flex items-center gap-1 font-bold'>
											<SaudiRiyalSymbol className='w-5 h-5' /> 1,900
										</span>
									</div>
									<div className='flex items-center justify-between'>
										<span className='bg-[#D6EFE5] px-4 py-2 rounded-full text-black text-base font-semibold'>
											10-Lesson Package
										</span>
										<span className='text-2xl flex items-center gap-1 font-bold'>
											<SaudiRiyalSymbol className='w-5 h-5' /> 3,500
										</span>
									</div>
								</div>
							</div>
						</div>
						<div className='mt-auto pt-8'>
							<Button className='w-full bg-[#009444] hover:bg-[#007a3a] rounded-[50px] py-4 font-TVG-typography-button text-[18px] uppercase tracking-wider'>
								<span>Book a Lesson</span>
								<ArrowRight className='w-5 h-5' />
							</Button>
						</div>
					</div>
				</div>

				{/* Card 3: Boost Package */}
				<div className='bg-[#f6f6f6] rounded-[28px] w-full max-w-[420px] mx-auto flex flex-col'>
					{/* Restored correct header color */}
					<div className='bg-[#004a22] rounded-t-[28px] h-[88px] flex items-center justify-between px-6 md:px-8 text-white'>
						<h3 className='font-TVG-typography-tagline text-[28px] uppercase tracking-[0.56px] font-bold'>
							Boost
						</h3>
						<RocketIcon className='w-8 h-8 text-white' />
					</div>
					<div className='p-6 md:p-8 flex-grow flex flex-col'>
						<div className='text-center py-4'>
							<div className='flex items-baseline justify-center gap-1'>
								<SaudiRiyalSymbol className='w-[48px] h-[48px] text-black' />
								<span className='font-morganite text-[120px] md:text-[140px] leading-[0.75] text-black tracking-tight font-bold'>
									180
								</span>
								<span className='font-TVG-typography-default text-[20px] md:text-[24px] text-black/80'>
									/person
								</span>
							</div>
						</div>
						<div className='bg-white border border-gray-200 rounded-[20px] p-6 text-left mb-6'>
							<h4 className='font-TVG-typography-tagline text-[24px] text-black uppercase tracking-wide mb-3 font-bold whitespace-nowrap'>
								Practice on your Own
							</h4>
							<p className='font-TVG-typography-default text-base leading-relaxed text-[#757575]'>
								Become a member or book simulator time without a coach, apply
								what you've learned, and measure real improvement.
								<br />
								<br />
								For seasoned players chasing precision — deep data analysis and
								advanced drills.
							</p>
						</div>
						<div className='space-y-4 font-TVG-typography-default text-lg mb-8'>
							<p className='text-center border-t border-gray-200 pt-4 text-black/90'>
								60-minute session
							</p>
							<p className='text-center border-t border-gray-200 pt-4 text-black/90'>
								Adults & Juniors
							</p>
							<div className='border-t border-gray-200 pt-4'>
								<div className='flex items-center justify-between font-gilroy font-medium'>
									<span className='bg-[#D6EFE5] px-4 py-2 rounded-full text-black text-base font-semibold'>
										With coach
									</span>
									<span className='text-2xl flex items-center gap-1 text-black font-bold'>
										+ <SaudiRiyalSymbol className='w-5 h-5' /> 250
										<span className='text-lg font-normal text-black/70'>
											/hour
										</span>
									</span>
								</div>
							</div>
						</div>
						{/* Add spacing to match middle card height */}
						<div className='flex-grow'></div>
						<div className='mt-auto'>
							<Button className='w-full bg-[#009444] hover:bg-[#007a3a] rounded-[50px] py-4 font-TVG-typography-button text-[18px] uppercase tracking-wider'>
								<span>Book a Bay</span>
								<ArrowRight className='w-5 h-5' />
							</Button>
						</div>
					</div>
				</div>
			</div>
			{/* Footer notes */}
			<div className='text-center space-y-2 mb-16'>
				<p className='font-TVG-typography-default text-base text-[#757575]'>
					Your session data, videos, and notes are emailed to you after each
					lesson
				</p>
				<p className='font-TVG-typography-default text-base text-[#757575]'>
					<strong>NOTE:</strong> The prices are exclusive of 15% VAT
				</p>
			</div>
			{/* Leagues banner (matching the green badge on left and white panel on right) */}
			<div className='max-w-[1000px] mx-auto px-4'>
				<div className='flex items-stretch gap-4'>
					<div className='w-36 bg-[#009444] rounded-[12px] flex items-center justify-center p-4'>
						<div className='text-white uppercase tracking-wider font-TVG-typography-tagline text-xl text-center'>
							LEAGUES
						</div>
					</div>
					<div className='flex-1 bg-white rounded-[12px] shadow-[0_8px_20px_rgba(0,0,0,0.04)] p-6 flex flex-col justify-center'>
						<h4 className='font-TVG-typography-tagline text-[18px] text-black mb-2 uppercase'>
							JOIN THE ACTION
						</h4>
						<p className='font-TVG-typography-default text-[#6b6b6b] mb-4 text-sm'>
							Test your skills in leagues or tournaments. It's all friendly
							competition but with guaranteed growth.
						</p>
						<Button className='w-max bg-[#009444] hover:bg-[#007a3a] rounded-[50px] py-2 px-4 text-white text-sm'>
							Explore Leagues
							<ArrowRight className='w-4 h-4' />
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
