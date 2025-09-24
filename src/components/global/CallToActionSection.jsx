// src/components/global/CallToActionSection.jsx
// "Ready to Visit?" call-to-action section component
// Appears after testimonials with green button

import { ArrowRightIcon } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

export const CallToActionSection = () => {
	return (
		<section className='relative w-full'>
			<header className='relative w-full py-4 bg-[#0c1a1a]'>
				<div className='flex items-center justify-center gap-4 px-8 max-w-[1920px] mx-auto'>
					<h2 className='text-white font-gilroy font-bold text-[24px] tracking-wide'>
						READY TO VISIT?
					</h2>
					<a
						href='https://widget.servmeco.com/?oid=1662'
						target='_blank'
						rel='noopener noreferrer'
						aria-label='Plan your visit - booking widget'
						className='gap-2 px-6 py-3 bg-[#009444] hover:bg-[#007a3a] rounded-full text-white inline-flex items-center transition-colors duration-200'
					>
						<span className='whitespace-nowrap font-gilroy font-semibold text-sm tracking-wide'>
							PLAN YOUR VISIT
						</span>
						<ArrowRightIcon className='w-4 h-4' />
					</a>
				</div>
			</header>
		</section>
	);
};
