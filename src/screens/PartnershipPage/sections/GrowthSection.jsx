// src/screens/PartnershipPage/sections/GrowthSection.jsx
// Growth section with "Let's Grow the Game" title and call-to-action button
// Features dark background with centered content and prominent CTA
// RELEVANT FILES: PartnershipPage.jsx, PartnershipPage.css, arrow-right.svg

import React from 'react';

export const GrowthSection = () => {
	return (
		<section className='relative w-full min-h-[400px] bg-[#102121] overflow-hidden'>
			<div className='relative max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-28'>
				{/* Universal Spacing Wrapper */}
				<div className='lg:ml-[12vw] md:ml-[8vw] lg:mr-[12vw] md:mr-[8vw]'>
					<div className='max-w-[1200px] mx-auto text-center'>
						{/* Title */}
						<h2 className='font-morganite font-black text-[clamp(64px,6vw,80px)] leading-[0.95] tracking-[0.02em] text-white uppercase mb-4'>
							Let's <span className='text-[#009444]'>Grow</span> the Game
						</h2>

						{/* Description text */}
						<p className='font-gilroy font-medium text-base leading-[24px] tracking-[0.1px] text-[rgba(209,211,212,0.85)] max-w-[540px] mx-auto mb-6'>
							We're looking for forward-thinking partners who believe in the
							future of indoor golf. If you're ready to bring The Virtual Greens
							to your city, let's start the conversation.
						</p>

						{/* CTA Button */}
						<div className='flex justify-center'>
							<a
								href='#'
								className='bg-[#009444] hover:bg-[#007a3a] transition-colors rounded-[50px] px-6 py-3 font-gilroy font-semibold text-base text-white uppercase inline-flex items-center gap-3'
							>
								Know More
								<svg
									className='w-[24px] h-[24px]'
									fill='currentColor'
									viewBox='0 0 20 20'
								>
									<path
										fillRule='evenodd'
										d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
										clipRule='evenodd'
									/>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
