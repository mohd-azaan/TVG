// src/screens/PartnershipPage/sections/GrowthSection.jsx
// Growth section with "Let's Grow the Game" title and call-to-action button
// Features dark background with centered content and prominent CTA
// RELEVANT FILES: PartnershipPage.jsx, PartnershipPage.css, arrow-right.svg

import React from 'react';

const ArrowRight = ({ size = '24' }) => {
	if (size === '24') {
		return (
			<div className='relative w-6 h-6'>
				<img src='/arrow-right.svg' alt='' className='w-full h-full' />
			</div>
		);
	}
	return null;
};

export const GrowthSection = () => {
	return (
		<section className='bg-[#102121] py-16'>
			<div className='max-w-[1700px] mx-auto px-4 flex flex-col items-center justify-center min-h-[435px]'>
				{/* Title */}
				<div className='w-[655px] text-center mb-8'>
					<h2 className='font-morganite font-bold text-[96px] leading-[90px] tracking-[1.92px] text-white uppercase'>
						Let's{' '}
						<span className='text-[#009444] text-[120px] tracking-[2.4px]'>
							Grow
						</span>{' '}
						the Game
					</h2>
				</div>

				{/* Description text */}
				<div className='w-[655px] mb-8'>
					<p className='font-gilroy font-medium text-[20px] leading-[28px] text-[#b0b0b0] text-center'>
						We're looking for forward-thinking partners who believe in the
						future of indoor golf. If you're ready to bring The Virtual Greens
						to your city, let's start the conversation.
					</p>
				</div>

				{/* CTA Button */}
				<div className='flex justify-center'>
					<button className='bg-[#009444] rounded-[50px] px-[30px] py-[7px] flex items-center gap-[10px] hover:bg-[#007a3a] transition-colors duration-200'>
						<span className='font-gilroy font-semibold text-[18px] leading-[40px] text-white uppercase text-center'>
							Know More
						</span>
						<ArrowRight size='24' />
					</button>
				</div>
			</div>
		</section>
	);
};
