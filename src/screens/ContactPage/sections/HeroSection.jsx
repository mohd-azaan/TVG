// src/screens/ContactPage/sections/HeroSection.jsx
// Contact page hero section with dark background and clean typography layout
// Displays "CONTACT THE VIRTUAL GREENS" title and description text based on Figma design
// RELEVANT FILES: src/screens/ContactPage/ContactPage.jsx, styleguide.css, tailwind.config.js

import React from 'react';

export const HeroSection = () => {
	return (
		<div className='w-full relative bg-[#1a2929] h-[591px] overflow-hidden'>
			{/* Green bottom accent */}
			<div className='absolute bottom-0 left-0 w-full h-[100px] bg-[#009444]' />

			{/* Main title */}
			<div className='absolute top-[180px] left-[280px] z-10'>
				<h1 className='text-[110px] font-black font-morganite text-white uppercase leading-[100px] tracking-[0.02em] m-0'>
					CONTACT
					<br />
					THE VIRTUAL GREENS
				</h1>
			</div>

			{/* Description text */}
			<div className='absolute top-[250px] right-[200px] z-10'>
				<div className='w-[500px] text-left'>
					<p className='text-white text-[18px] font-gilroy leading-relaxed m-0 mb-4'>
						Experience Riyadh's home of indoor golf live and in full swing.
					</p>
					<p className='text-white text-[18px] font-gilroy leading-relaxed m-0'>
						Have a question, comments, concerns, or compliments? — We'd love to
						hear from you!
					</p>
				</div>
			</div>
		</div>
	);
};
