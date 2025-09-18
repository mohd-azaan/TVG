// src/screens/LearnPage/sections/CorporateSection/CorporateSection.jsx
// Corporate programs section featuring team-building and employee wellness golf initiatives
// This component displays corporate golf programs with image and description layout
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

export const CorporateSection = () => {
	return (
		<div className='relative w-full bg-white py-16'>
			<div className='max-w-[1700px] mx-auto px-4'>
				<div className='flex items-center gap-16'>
					{/* Left side - image placeholder */}
					<div className='w-[655px] h-[400px] bg-gray-400 rounded-[30px] bg-center bg-cover flex items-center justify-center'>
						<div className='text-white text-xl font-bold opacity-50'>
							Corporate Image
						</div>
					</div>

					{/* Right side - content */}
					<div className='flex-1 max-w-[655px]'>
						{/* Section title */}
						<h2 className='font-morganite font-extrabold text-[96px] leading-[90px] text-black uppercase tracking-[1.92px] mb-6'>
							Corporate Programs
						</h2>

						{/* Tagline */}
						<p className='font-TVG-typography-tagline font-gilroy font-medium text-[22px] leading-[26px] text-[#009444] uppercase tracking-[0.44px] mb-8'>
							Golf is a great team-building and well-being tool
						</p>

						{/* Description */}
						<div className='mb-8'>
							<p className='font-TVG-typography-default text-[20px] leading-[28px] text-[#757575] mb-4'>
								The Virtual Greens recognizes the importance of employee
								wellbeing and offers various initiatives to help companies
								support their employees.
							</p>
							<p className='font-TVG-typography-default text-[20px] leading-[28px] text-[#757575]'>
								We offer company individual or group golf lessons and beginners
								programmes that remove the barriers of traditional corporate
								golf membership and make the sport more accessible.
							</p>
						</div>

						{/* CTA Button */}
						<div className='flex justify-start'>
							<Button className='bg-[#009444] hover:bg-[#007a3a] rounded-[50px] px-8 py-8 font-TVG-typography-button text-[18px] text-white uppercase'>
								<span>Learn More</span>
								<ArrowRight className='w-6 h-6' />
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
