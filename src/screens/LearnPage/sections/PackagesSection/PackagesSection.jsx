// src/screens/LearnPage/sections/PackagesSection/PackagesSection.jsx

import React from 'react';
import { Link } from 'react-router-dom';
// Assuming your Button component is set up correctly
// import { Button } from '../../../../components/ui/button';

// Mock Button for standalone example
const Button = ({ className, children, to }) => (
	<Link
		to={to}
		className={`${className} flex items-center justify-center gap-2 px-6 py-3 text-white transition-colors duration-300 no-underline`}
	>
		{children}
	</Link>
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

const TrophyIcon = ({ className = 'w-6 h-6' }) => (
	<svg
		className={className}
		viewBox='0 0 60 60'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-hidden='true'
	>
		<path
			d='M17.5 52.5V47.5H27.5V39.75C25.4583 39.2917 23.6354 38.4271 22.0312 37.1562C20.4271 35.8854 19.25 34.2917 18.5 32.375C15.375 32 12.7604 30.6354 10.6562 28.2812C8.55208 25.9271 7.5 23.1667 7.5 20V17.5C7.5 16.125 7.98958 14.9479 8.96875 13.9688C9.94792 12.9896 11.125 12.5 12.5 12.5H17.5V7.5H42.5V12.5H47.5C48.875 12.5 50.0521 12.9896 51.0312 13.9688C52.0104 14.9479 52.5 16.125 52.5 17.5V20C52.5 23.1667 51.4479 25.9271 49.3438 28.2812C47.2396 30.6354 44.625 32 41.5 32.375C40.75 34.2917 39.5729 35.8854 37.9688 37.1562C36.3646 38.4271 34.5417 39.2917 32.5 39.75V47.5H42.5V52.5H17.5ZM17.5 27V17.5H12.5V20C12.5 21.5833 12.9583 23.0104 13.875 24.2812C14.7917 25.5521 16 26.4583 17.5 27ZM30 35C32.0833 35 33.8542 34.2708 35.3125 32.8125C36.7708 31.3542 37.5 29.5833 37.5 27.5V12.5H22.5V27.5C22.5 29.5833 23.2292 31.3542 24.6875 32.8125C26.1458 34.2708 27.9167 35 30 35ZM42.5 27C44 26.4583 45.2083 25.5521 46.125 24.2812C47.0417 23.0104 47.5 21.5833 47.5 20V17.5H42.5V27Z'
			fill='currentColor'
		/>
	</svg>
);

export const PackagesSection = () => {
	return (
		<section className='relative w-full bg-white overflow-hidden'>
			{/* Level 1: Page Container */}
			<div className='relative max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-28'>
				{/* Level 2: Universal Spacing Wrapper - MANDATORY FOR ALIGNMENT */}
				<div className='lg:ml-[12vw] md:ml-[8vw] lg:mr-[12vw] md:mr-[8vw]'>
					{/* Level 3: Content Container */}
					<div className='max-w-[1200px] mx-auto'>
						{/* Title section - "Our Coaching Approach" heading */}
						<div className='text-center mb-16'>
							<h2 className='font-morganite font-black text-[clamp(64px,6vw,80px)] leading-[0.95] tracking-[0.02em] text-black uppercase mb-4'>
								OUR COACHING APPROACH
							</h2>
							<p className='font-gilroy font-bold text-[18px] leading-[22px] tracking-[0.3px] text-[#009444] uppercase max-w-[655px] mx-auto'>
								NO TWO SWINGS ARE THE SAME. <br />
								SO LET'S PUT A GAME PLAN TOGETHER THAT'S JUST FOR YOU
							</p>
						</div>

						{/* Three pricing cards container */}
						<div className='flex flex-col lg:flex-row gap-8 items-stretch justify-center mb-16'>
							{/* Card 1: Start Package */}
							<div className='bg-[#f6f6f6] rounded-[28px] flex-1 min-w-0 flex flex-col'>
								<div className='bg-[#009444] rounded-t-[28px] h-[70px] flex items-center justify-between px-6 md:px-8 text-white'>
									<h3 className='font-TVG-typography-tagline text-[22px] uppercase tracking-[0.56px] font-bold'>
										Start
									</h3>
									<SearchIcon className='w-6 h-6 text-white' />
								</div>
								<div className='p-6 md:p-8 flex-grow flex flex-col'>
									<div className='text-center py-4'>
										<div className='flex items-baseline justify-center gap-1'>
											<SaudiRiyalSymbol className='w-[36px] h-[36px] text-black' />
											<span className='font-morganite text-[90px] md:text-[100px] leading-[0.75] text-black tracking-wide font-bold'>
												199
											</span>
											<span className='font-TVG-typography-default text-[16px] md:text-[18px] text-black/80'>
												/person
											</span>
										</div>
									</div>
									<div className='bg-[#F9F9F9] border border-gray-200 rounded-[20px] pl-4 pr-6 py-6 text-left mb-6'>
										<h4 className='font-TVG-typography-tagline text-[20px] text-black uppercase tracking-wide mb-3 font-bold'>
											Swing Evaluation
										</h4>
										<p className='font-TVG-typography-default text-[14px] leading-relaxed text-[#757575]'>
											Start with a 45-minute deep dive into your swing, goals,
											and game. You'll walk away with a game plan and probably a
											few lightbulb moments.
											<br />
											<br />
											For all levels — a clear diagnosis for experienced
											players, a guided starting point for newcomers.
										</p>
									</div>
									<div className='space-y-4 font-TVG-typography-default text-[15px] text-center text-black/90 mb-8'>
										<p className='border-t border-gray-200 pt-4'>
											45-minute session
										</p>
										<p className='border-t border-gray-200 pt-4'>
											Adults & Juniors
										</p>
										<p className='border-t border-gray-200 pt-4'>
											One-on-one session
										</p>
									</div>
									<div className='flex-grow'></div>
									<div className='mt-auto flex justify-center'>
										<a
											href='https://widget.servmeco.com/?oid=1662'
											target='_blank'
											rel='noopener noreferrer'
											className='w-[65%] bg-[#009444] hover:bg-[#007a3a] rounded-[50px] py-3 font-gilroy font-semibold text-[13px] text-white uppercase tracking-wider inline-flex items-center justify-center gap-2'
										>
											<span>Book Evaluation</span>
											<ArrowRight className='w-5 h-5 text-white font-bold' />
										</a>
									</div>
								</div>
							</div>

							{/* Card 2: Improve Package */}
							<div className='bg-[#f6f6f6] rounded-[28px] flex-1 min-w-0 flex flex-col'>
								<div className='bg-[#006f33] rounded-t-[28px] h-[70px] flex items-center justify-between px-6 md:px-8 text-white'>
									<h3 className='font-TVG-typography-tagline text-[22px] uppercase tracking-[0.56px] font-bold'>
										Improve
									</h3>
									<ChartIcon className='w-6 h-6 text-white' />
								</div>
								<div className='p-6 md:p-8 flex-grow flex flex-col'>
									<div className='text-center py-4'>
										<div className='flex items-baseline justify-center gap-1'>
											<SaudiRiyalSymbol className='w-[36px] h-[36px] text-black' />
											<span className='font-morganite text-[90px] md:text-[100px] leading-[0.75] text-black tracking-[1px] font-bold'>
												499
											</span>
											<span className='font-TVG-typography-default text-[16px] md:text-[18px] text-black/80'>
												/adult
											</span>
										</div>
									</div>
									<div className='bg-[#F9F9F9] border border-gray-200 rounded-[20px] pl-4 pr-6 py-6 text-left mb-6'>
										<h4 className='font-TVG-typography-tagline text-[18px] text-black uppercase tracking-wide mb-3 font-bold whitespace-nowrap'>
											Lessons & Packages
										</h4>
										<p className='font-TVG-typography-default text-[14px] leading-relaxed text-[#757575]'>
											Private sessions taught by our tour professionals,
											leveraging Golfzon's advanced simulator technology.
										</p>
									</div>
									<div className='font-TVG-typography-default text-[15px] text-center text-black/90 space-y-4 mb-4'>
										<p className='border-t border-gray-200 pt-4'>
											60-minute session
										</p>
										<p className='border-t border-gray-200 pt-4'>
											One-on-one session
										</p>
									</div>
									<div className='space-y-6'>
										<div>
											<h5 className='font-gilroy font-bold uppercase text-black text-left mb-4 text-[18px]'>
												ADULTS
											</h5>
											<div className='space-y-3 font-gilroy font-medium'>
												<div className='flex items-center justify-between'>
													<span className='bg-[#D6EFE5] px-3 py-1.5 rounded-full text-black text-[14px] font-semibold'>
														60-Minute
													</span>
													<span className='text-xl flex items-center gap-1 font-bold'>
														<SaudiRiyalSymbol className='w-5 h-5' /> 499
													</span>
												</div>
												<div className='flex items-center justify-between'>
													<span className='bg-[#D6EFE5] px-3 py-1.5 rounded-full text-black text-[14px] font-semibold'>
														5-lesson Package
													</span>
													<span className='text-xl flex items-center gap-1 font-bold'>
														<SaudiRiyalSymbol className='w-5 h-5' /> 2,375
													</span>
												</div>
												<div className='flex items-center justify-between'>
													<span className='bg-[#D6EFE5] px-3 py-1.5 rounded-full text-black text-[14px] font-semibold'>
														10-lesson Package
													</span>
													<span className='text-xl flex items-center gap-1 font-bold'>
														<SaudiRiyalSymbol className='w-5 h-5' /> 4,500
													</span>
												</div>
											</div>
										</div>
										<div>
											<h5 className='font-gilroy font-bold uppercase text-black text-left mb-4 text-[18px]'>
												JUNIORS
											</h5>
											<div className='space-y-3 font-gilroy font-medium'>
												<div className='flex items-center justify-between'>
													<span className='bg-[#D6EFE5] px-3 py-1.5 rounded-full text-black text-[14px] font-semibold'>
														60-Minute
													</span>
													<span className='text-xl flex items-center gap-1 font-bold'>
														<SaudiRiyalSymbol className='w-5 h-5' /> 349
													</span>
												</div>
												<div className='flex items-center justify-between'>
													<span className='bg-[#D6EFE5] px-3 py-1.5 rounded-full text-black text-[14px] font-semibold'>
														5-Lesson Package
													</span>
													<span className='text-xl flex items-center gap-1 font-bold'>
														<SaudiRiyalSymbol className='w-5 h-5' /> 1,625
													</span>
												</div>
												<div className='flex items-center justify-between'>
													<span className='bg-[#D6EFE5] px-3 py-1.5 rounded-full text-black text-[14px] font-semibold'>
														10-Lesson Package
													</span>
													<span className='text-xl flex items-center gap-1 font-bold'>
														<SaudiRiyalSymbol className='w-5 h-5' /> 3,000
													</span>
												</div>
											</div>
										</div>
									</div>
									<div className='mt-auto pt-8 flex justify-center'>
										<a
											href='https://widget.servmeco.com/?oid=1662'
											target='_blank'
											rel='noopener noreferrer'
											className='w-[65%] bg-[#009444] hover:bg-[#007a3a] rounded-[50px] py-3 font-gilroy font-semibold text-[13px] text-white uppercase tracking-wider inline-flex items-center justify-center gap-2'
										>
											<span>Book a Lesson</span>
											<ArrowRight className='w-5 h-5 text-white font-bold' />
										</a>
									</div>
								</div>
							</div>

							{/* Card 3: Boost Package */}
							<div className='bg-[#f6f6f6] rounded-[28px] flex-1 min-w-0 flex flex-col'>
								<div className='bg-[#004a22] rounded-t-[28px] h-[70px] flex items-center justify-between px-6 md:px-8 text-white'>
									<h3 className='font-TVG-typography-tagline text-[22px] uppercase tracking-[0.56px] font-bold'>
										Boost
									</h3>
									<RocketIcon className='w-6 h-6 text-white' />
								</div>
								<div className='p-6 md:p-8 flex-grow flex flex-col'>
									<div className='text-center py-4'>
										<div className='flex items-baseline justify-center gap-1'>
											<SaudiRiyalSymbol className='w-[36px] h-[36px] text-black' />
											<span className='font-morganite text-[90px] md:text-[100px] leading-[0.75] text-black tracking-[1px] font-bold'>
												199
											</span>
											<span className='font-TVG-typography-default text-[16px] md:text-[18px] text-black/80'>
												/hour
											</span>
										</div>
									</div>
									<div className='bg-[#F9F9F9] border border-gray-200 rounded-[20px] pl-4 pr-6 py-6 text-left mb-6'>
										<h4 className='font-TVG-typography-tagline text-[18px] text-black uppercase tracking-wide mb-3 font-bold whitespace-nowrap'>
											Practice on your Own
										</h4>
										<p className='font-TVG-typography-default text-[14px] leading-relaxed text-[#757575]'>
											Become a member or book simulator time without a coach,
											apply what you've learned, and measure real improvement.
											<br />
											<br />
											For seasoned players chasing precision — deep data
											analysis and advanced drills.
										</p>
									</div>
									<div className='space-y-4 font-TVG-typography-default text-[15px] mb-8'>
										<p className='text-center border-t border-gray-200 pt-4 text-black/90'>
											60-minute session
										</p>
										<p className='text-center border-t border-gray-200 pt-4 text-black/90'>
											Adults & Juniors
										</p>
										<div className='border-t border-gray-200 pt-4'>
											<div className='flex items-center justify-between font-gilroy font-medium'>
												<span className='bg-[#D6EFE5] px-3 py-1.5 rounded-full text-black text-[14px] font-semibold'>
													With coach
												</span>
												<span className='text-xl flex items-center gap-1 text-black font-bold'>
													<SaudiRiyalSymbol className='w-5 h-5' /> 250
													<span className='text-sm font-normal text-black/70'>
														first hour
													</span>
												</span>
											</div>
											<div className='flex items-center justify-center mt-2'>
												<span className='text-sm font-normal text-black/60'>
													<SaudiRiyalSymbol className='w-4 h-4 inline' />{' '}
													100/hour additional
												</span>
											</div>
										</div>
									</div>
									<div className='flex-grow'></div>
									<div className='mt-auto flex justify-center'>
										<a
											href='https://widget.servmeco.com/?oid=1662'
											target='_blank'
											rel='noopener noreferrer'
											className='w-[65%] bg-[#009444] hover:bg-[#007a3a] rounded-[50px] py-3 font-gilroy font-semibold text-[13px] text-white uppercase tracking-wider inline-flex items-center justify-center gap-2'
										>
											<span>Book a Bay</span>
											<ArrowRight className='w-5 h-5 text-white font-bold' />
										</a>
									</div>
								</div>
							</div>
						</div>

						{/* Leagues banner */}
						<div className='w-full mb-16'>
							<div className='w-full relative rounded-[30px] bg-[#e8e8e8] h-[190px] overflow-hidden'>
								{/* Left green section with LEAGUES text and trophy icon */}
								<div className='absolute top-0 left-0 rounded-tl-[30px] rounded-tr-none rounded-br-none rounded-bl-[30px] bg-[#003318] w-[250px] h-full flex flex-col items-center justify-center'>
									<TrophyIcon className='w-[45px] h-[45px] text-white mb-3' />
									<div className='text-white font-morganite text-[60px] md:text-[60px] lg:text-[85px] font-black uppercase tracking-[0.02em] leading-[0.95] text-center'>
										LEAGUES
									</div>
								</div>

								{/* Right content section */}
								<div className='absolute left-[260px] top-0 h-full flex flex-col justify-center px-8'>
									<h3 className='text-black font-gilroy font-bold text-[24px] uppercase mb-3 tracking-wide'>
										JOIN THE ACTION
									</h3>
									<p className='text-black text-[16px] leading-relaxed mb-6 max-w-[600px] font-medium'>
										Test your skills in leagues or tournaments. It's all
										friendly competition but with guaranteed growth.
									</p>

									<Button
										to='/leagues'
										className='bg-[#009444] hover:bg-[#007a3a] rounded-[50px] py-2.5 px-6 text-white text-[13px] font-semibold uppercase tracking-wide w-max flex items-center gap-2 transition-colors duration-300 no-underline'
									>
										EXPLORE LEAGUES
										<ArrowRight className='w-4 h-4' />
									</Button>
								</div>
							</div>
						</div>

						{/* Footer notes */}
						<div className='text-center space-y-2 mb-16'>
							<p className='font-gilroy font-normal text-[16px] leading-[24px] tracking-[0.1px] text-[#757575]'>
								<span className='font-bold text-black'>NOTE:</span> The prices
								are exclusive of 15% VAT
							</p>
							<p className='font-gilroy font-normal text-[16px] leading-[24px] tracking-[0.1px] text-[#757575]'>
								Your session data and videos will be available to you on your
								Golfzon account. While your key notes, takeaways and next steps
								will be emailed to you right after each session.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
