// src/screens/LearnPage/sections/NewToGolfSection/NewToGolfSection.jsx
// New to Golf CTA section encouraging beginners to start with swing evaluation
// This component displays a compelling call-to-action for first-time golfers with dark background
// RELEVANT FILES: LearnPage.jsx, Button.jsx, tailwind.config.js

import React from 'react';
import { Button } from '../../../../components/ui/button';

// Arrow Right icon component
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

export const NewToGolfSection = () => {
	return (
		<section className='relative w-full bg-[#102121] overflow-hidden'>
			{/* Level 1: Page Container */}
			<div className='relative max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 py-12 lg:py-16'>
				{/* Level 2: Universal Spacing Wrapper - MANDATORY FOR ALIGNMENT */}
				<div className='lg:ml-[12vw] md:ml-[8vw] lg:mr-[12vw] md:mr-[8vw]'>
					{/* Level 3: Content Container */}
					<div className='max-w-[1200px] mx-auto'>
						<div className='bg-[#0c1a1a] rounded-[30px] p-8 lg:p-12 relative overflow-hidden'>
							<div className='flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12'>
								{/* Left side - title */}
								<div className='flex-1 max-w-[60%] text-center lg:text-left'>
									<h2 className='font-morganite font-black text-[clamp(64px,6vw,80px)] leading-[0.95] tracking-[0.02em] text-white uppercase mb-2'>
										<span className='block'>New to Golf?</span>
										<span className='block text-[#009444]'>We Got You</span>
									</h2>
								</div>

								{/* Right side - content and CTA */}
								<div className='flex-1 text-center lg:text-left lg:-ml-[100px] left-4'>
									{/* Description */}
									<p className='font-gilroy font-medium text-base leading-[24px] text-[rgba(209,211,212,0.85)] mb-6'>
										Start with a Swing Evaluation. A low-pressure 45-minute
										intro with your coach. You'll discuss your goals, assess
										your swing, and get a clear roadmap to improvement.
									</p>

									{/* CTA Button */}
									<div className='flex justify-center lg:justify-start'>
										<a
											href='https://widget.servmeco.com/?oid=1662'
											target='_blank'
											rel='noopener noreferrer'
											className='bg-[#009444] hover:bg-[#007a3a] rounded-[50px] px-6 py-3 font-gilroy font-semibold text-base text-white uppercase inline-flex items-center gap-3 transition-colors'
										>
											<span>Book Evaluation</span>
											<ArrowRight className='w-5 h-5' />
										</a>
									</div>
								</div>
							</div>
						</div>

						{/* Decorative shape positioned relative to content container */}
						<div className='absolute right-[-300px] bottom-[-200px] w-[600px] h-[400px] opacity-60 pointer-events-none'>
							<img
								src={'/shape14-2.svg'}
								alt=''
								aria-hidden='true'
								className='w-full h-full object-cover'
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
