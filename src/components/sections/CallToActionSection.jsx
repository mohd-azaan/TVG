// src/components/sections/CallToActionSection.jsx
// Reusable call-to-action section component
// "Ready to Visit?" section that appears after testimonials

import { ArrowRightIcon } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

export const CallToActionSection = ({
	title = "READY TO VISIT?",
	buttonText = "PLAN YOUR VISIT",
	buttonLink = "/contact",
	className = ""
}) => {
	return (
		<section className={`relative w-full bg-[#102121] border-b-[70px] border-[#009444] ${className}`}>
			<header className='relative w-full h-20 bg-[#0c1a1a]'>
				<div className='flex items-center justify-between h-full px-8 max-w-7xl mx-auto'>
					<h2 className='text-xl font-bold text-white tracking-wide leading-tight'>
						{title}
					</h2>
					<Link
						to={buttonLink}
						aria-label={`${buttonText} - Contact page`}
						className='gap-3 px-6 py-3 bg-[#009444] hover:bg-[#007a3a] rounded-full text-white inline-flex items-center transition-colors duration-200'
					>
						<span className='text-base font-semibold tracking-wide leading-tight whitespace-nowrap'>
							{buttonText}
						</span>
						<ArrowRightIcon className='w-5 h-5' />
					</Link>
				</div>
			</header>
		</section>
	);
};
