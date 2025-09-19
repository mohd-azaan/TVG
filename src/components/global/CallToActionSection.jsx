// src/components/global/CallToActionSection.jsx
// "Ready to Visit?" call-to-action section component
// Appears after testimonials with green button

import { ArrowRightIcon } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

export const CallToActionSection = () => {
	return (
		<section className='relative w-full'>
			<header className='relative w-full h-20 bg-[#0c1a1a]'>
				<div className='flex items-center justify-center gap-4 h-full px-8 py-8 max-w-7xl mx-auto'>
					<h2
						className={`text-white font-gilroy font-bold text-[30px] tracking-[1.28px] leading-[60px]`}
					>
						READY TO VISIT?
					</h2>
					<Link
						to='/contact'
						aria-label='Plan your visit - Contact page'
						className='gap-3 px-6 py-3 bg-[#009444] hover:bg-[#007a3a] rounded-full text-white inline-flex items-center transition-colors duration-200'
					>
						<span className='whitespace-nowrap font-gilroy font-semibold text-[18px] leading-[40px]'>
							PLAN YOUR VISIT
						</span>
						<ArrowRightIcon className='w-5 h-5' />
					</Link>
				</div>
			</header>
		</section>
	);
};
