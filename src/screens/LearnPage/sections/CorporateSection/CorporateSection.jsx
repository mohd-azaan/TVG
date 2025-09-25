// src/screens/LearnPage/sections/CorporateSection/CorporateSection.jsx
// Corporate programs section featuring team-building and employee wellness golf initiatives
// This component displays corporate golf programs with image and description layout
// RELEVANT FILES: LearnPage.jsx, Button.jsx, tailwind.config.js

import React from 'react';
import { Button } from '../../../../components/ui/button';

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

export const CorporateSection = () => {
	return (
		<section className='relative w-full bg-white overflow-hidden'>
			{/* Level 1: Page Container */}
			<div className='relative max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-28'>

				{/* Level 2: Universal Spacing Wrapper - MANDATORY FOR ALIGNMENT */}
				<div className='lg:ml-[12vw] md:ml-[8vw] lg:mr-[12vw] md:mr-[8vw]'>

					{/* Level 3: Content Container */}
					<div className='max-w-[1200px] mx-auto'>

						<div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-10'>
							{/* Left side - image */}
							<div className='w-full lg:w-[500px] flex-shrink-0'>
								<img
									src="/freepik__background__81702-1.png"
									alt="Corporate Event"
									className="rounded-[30px] w-full h-[350px] object-cover"
								/>
							</div>

							{/* Right side - content */}
							<div className='flex-1 text-center lg:text-left'>
								{/* Section title */}
								<h2 className="font-morganite font-black text-[clamp(64px,6vw,80px)] leading-[0.95] tracking-[0.02em] text-black uppercase mb-4">
									Corporate Programs
								</h2>

								{/* Subtitle */}
								<p className="font-gilroy font-bold text-lg leading-[24px] tracking-[0.02em] text-[#009444] uppercase mb-6">
									Golf is a great team-building and well-being tool
								</p>

								{/* Description */}
								<div className="font-gilroy font-medium text-base text-[#757575] leading-[24px] mb-8 space-y-4">
									<p>The Virtual Greens recognizes the importance of employee wellbeing and offers various initiatives to help companies support their employees.</p>
									<p>We offer company individual or group golf lessons and beginners programmes that remove the barriers of traditional corporate golf membership and make the sport more accessible.</p>
								</div>

								{/* CTA Button */}
								<div className="flex justify-center lg:justify-start">
									<a
										href="#"
										className="bg-[#009444] hover:bg-[#007a3a] rounded-[50px] px-6 py-3 font-gilroy font-semibold text-base text-white uppercase inline-flex items-center gap-3 transition-colors"
									>
										<span>Learn More</span>
										<ArrowRight className='w-5 h-5' />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
