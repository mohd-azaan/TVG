// src/screens/LearnPage/sections/LeaguesSection/LeaguesSection.jsx
// Leagues promotional section with trophy icon and call-to-action for tournaments
// This component displays a green promotional card encouraging users to join leagues
// RELEVANT FILES: LearnPage.jsx, Button.jsx, tailwind.config.js

import React from 'react';
import { Button } from '../../../../components/ui/button';

// Trophy icon component
const TrophyIcon = ({ className = "w-12 h-12" }) => (
	<svg className={className} viewBox="0 0 24 24" fill="none">
		<path d="M6 9C6 10.45 6.39 11.8 7.11 12.96C7.83 14.13 8.85 15.08 10.07 15.68L11 17H13L13.93 15.68C15.15 15.08 16.17 14.13 16.89 12.96C17.61 11.8 18 10.45 18 9V4H6V9Z" fill="currentColor" />
		<path d="M4 8V9C4 10.1 4.9 11 6 11H6.5C6.78 10.33 7.17 9.7 7.63 9.15C7.38 8.78 7.18 8.4 7.02 8H4Z" fill="currentColor" />
		<path d="M20 8H16.98C16.82 8.4 16.62 8.78 16.37 9.15C16.83 9.7 17.22 10.33 17.5 11H18C19.1 11 20 10.1 20 9V8Z" fill="currentColor" />
		<path d="M7 20H17V21H7V20Z" fill="currentColor" />
		<path d="M8 19H16V20H8V19Z" fill="currentColor" />
	</svg>
);

// Arrow Right icon component
const ArrowRight = ({ className = "w-6 h-6" }) => (
	<svg className={className} viewBox="0 0 24 24" fill="none">
		<path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
	</svg>
);

export const LeaguesSection = () => {
	return (
		<div className='relative w-full bg-white py-16'>
			<div className='max-w-[1360px] mx-auto px-4'>
				<div className='bg-[#f6f6f6] rounded-[30px] h-[235px] flex items-center justify-between p-0 relative overflow-hidden'>
					{/* Left side - green section with trophy and title */}
					<div className='bg-[#009444] h-full w-[301px] rounded-l-[30px] flex flex-col items-center justify-center relative'>
						{/* Trophy icon */}
						<div className='bg-[#009444] rounded-[30px] w-[90px] h-[90px] flex items-center justify-center mb-4'>
							<TrophyIcon className="text-white w-[60px] h-[60px]" />
						</div>

						{/* Title */}
						<h3 className='font-morganite font-black text-[100px] leading-[110px] text-white uppercase tracking-[2px]'>
							Leagues
						</h3>
					</div>

					{/* Right side - content and CTA */}
					<div className='flex-1 px-8 py-12 flex flex-col justify-center'>
						{/* Main title */}
						<h2 className='font-TVG-typography-tagline text-[28px] text-black uppercase mb-6'>
							Join the Action
						</h2>

						{/* Description */}
						<p className='font-TVG-typography-default text-[20px] leading-[28px] text-black mb-8 max-w-[655px]'>
							Test your skills in leagues or tournaments. It's all friendly competition but with guaranteed growth.
						</p>

						{/* CTA Button */}
						<div className='flex justify-center'>
							<Button className='bg-[#009444] hover:bg-[#007a3a] rounded-[50px] px-8 py-4 font-TVG-typography-tagline text-[18px] text-white uppercase'>
								<span>Explore Leagues</span>
								<ArrowRight className="w-6 h-6" />
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};