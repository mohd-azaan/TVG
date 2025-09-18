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
		<div className='relative w-full bg-[#102121] py-16'>
			{/* Content wrapper */}
			<div className='relative max-w-[1360px] mx-auto px-4'>
				<div className='bg-[#0c1a1a] rounded-[30px] h-[280px] flex items-center justify-between px-12 relative overflow-hidden'>
					{/* Left side - title */}
					<div className='flex-1 max-w-[600px]'>
						<h2 className='font-morganite font-extrabold text-[96px] leading-[90px] text-white uppercase tracking-[1.92px] mb-0'>
							<span className='block'>New to Golf?</span>
							<span className='block text-[#009444]'>We Got You</span>
						</h2>
					</div>

					{/* Right side - content and CTA */}
					<div className='flex-1 max-w-[655px] pl-8'>
						{/* Nudge this block slightly left and up */}
						<div className='-translate-y-3 -ml-4'>
							{/* Description */}
							<p className='font-TVG-typography-default text-[20px] leading-[28px] text-[lightgrey] mb-8'>
								Start with a Swing Evaluation. A low-pressure 45-minute intro
								with your coach. You'll discuss your goals, assess your swing,
								and get a clear roadmap to improvement.
							</p>

							{/* CTA Button */}
							<div className='flex justify-start'>
								<Button className='bg-[#009444] hover:bg-[#007a3a] rounded-[50px] px-8 py-6 min-h-[64px] font-TVG-typography-button text-[18px] text-white uppercase'>
									<span>Book Evaluation</span>
									<ArrowRight className='w-6 h-6' />
								</Button>
							</div>
						</div>
					</div>
				</div>

				{/* Decorative shape outside the rounded container (bottom-right) */}
				<img
					src={'/shape14-2.svg'}
					alt='decorative shape'
					className='absolute right-[-480px] -bottom-[380px] w-[900px] h-[600px] opacity-80 pointer-events-none select-none '
				/>
			</div>
		</div>
	);
};
