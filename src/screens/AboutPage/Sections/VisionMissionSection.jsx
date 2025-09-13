// src/screens/AboutPage/Sections/VisionMissionSection.jsx
// Vision & Mission section with three cards displaying company vision, mission, and beliefs
// Pixel-perfect recreation of Figma design with proper spacing and typography
// RELEVANT FILES: AboutPage.jsx, styleguide.css, tailwind.config.js

import React from 'react';

export const VisionMissionSection = () => {
	return (
		<section className='relative w-full min-h-[840px] bg-white'>
			{/* Container for all cards positioned according to Figma */}
			<div className='relative max-w-[1920px] mx-auto'>
				{/* What We Believe Card - Green background, positioned top-right */}
				<div className='absolute top-[137px] left-[986px] w-[655px] h-[566px] bg-[#009444] rounded-[30px] p-10 overflow-hidden'>
					<h2 className='font-TVG-typography-h2 font-[number:var(--TVG-typography-h2-font-weight)] text-[length:var(--TVG-typography-h2-font-size)] leading-[var(--TVG-typography-h2-line-height)] tracking-[var(--TVG-typography-h2-letter-spacing)] text-white [font-style:var(--TVG-typography-h2-font-style)] uppercase mb-5 w-[535px]'>
						What We Believe
					</h2>
					<div className='font-TVG-typography-default font-[number:var(--TVG-typography-default-font-weight)] text-[length:var(--TVG-typography-default-font-size)] leading-[var(--TVG-typography-default-line-height)] tracking-[var(--TVG-typography-default-letter-spacing)] text-white [font-style:var(--TVG-typography-default-font-style)] space-y-4'>
						<p>Golf should be easy to access, hard to leave, and always worth showing up for.</p>
						<p>We're inspired by what golf represents. Focus, fun, discipline and a bit of friendly competition. But we've swapped the dress codes and country clubs for a more inclusive, welcoming vibe.</p>
						<p>Our team is made up of golfers, tech-heads, hospitality experts, and community builders. We are different, but we are all connected by one mission. Making golf more fun, more flexible, and more social.</p>
					</div>
				</div>

				{/* Our Vision Card - Light gray background, positioned top-left */}
				<div className='absolute top-[137px] left-[280px] w-[655px] h-[276px] bg-[#f6f6f6] rounded-[30px] p-10'>
					<h2 className='font-TVG-typography-h2 font-[number:var(--TVG-typography-h2-font-weight)] text-[length:var(--TVG-typography-h2-font-size)] leading-[var(--TVG-typography-h2-line-height)] tracking-[var(--TVG-typography-h2-letter-spacing)] text-black [font-style:var(--TVG-typography-h2-font-style)] uppercase mb-[22px]'>
						Our Vision
					</h2>
					<div className='font-TVG-typography-default font-[number:var(--TVG-typography-default-font-weight)] text-[length:var(--TVG-typography-default-font-size)] leading-[var(--TVG-typography-default-line-height)] tracking-[var(--TVG-typography-default-letter-spacing)] text-[#757575] [font-style:var(--TVG-typography-default-font-style)]'>
						<p>To lead the evolution of indoor golf in Saudi Arabia and become the go-to destination for those who play hard, relax better, and love the game, whatever their level.</p>
					</div>
				</div>

				{/* Our Mission Card - Light gray background, positioned bottom-left */}
				<div className='absolute top-[455px] left-[280px] w-[655px] h-[248px] bg-[#f6f6f6] rounded-[30px] p-10'>
					<h2 className='font-TVG-typography-h2 font-[number:var(--TVG-typography-h2-font-weight)] text-[length:var(--TVG-typography-h2-font-size)] leading-[var(--TVG-typography-h2-line-height)] tracking-[var(--TVG-typography-h2-letter-spacing)] text-black [font-style:var(--TVG-typography-h2-font-style)] uppercase mb-[22px]'>
						Our Mission
					</h2>
					<div className='font-TVG-typography-default font-[number:var(--TVG-typography-default-font-weight)] text-[length:var(--TVG-typography-default-font-size)] leading-[var(--TVG-typography-default-line-height)] tracking-[var(--TVG-typography-default-letter-spacing)] text-[#757575] [font-style:var(--TVG-typography-default-font-style)]'>
						<p>To lower the barriers, upgrade the experience, and create a community where everyone feels right at home.</p>
					</div>
				</div>
			</div>

			{/* Mobile responsive layout */}
			<div className='block lg:hidden px-4 sm:px-6 py-16'>
				<div className='space-y-8 max-w-[600px] mx-auto'>
					{/* Our Vision - Mobile */}
					<div className='bg-[#f6f6f6] rounded-[20px] p-6'>
						<h2 className='font-TVG-typography-h2 font-[number:var(--TVG-typography-h2-font-weight)] text-[clamp(32px,8vw,96px)] leading-[1.1] tracking-[var(--TVG-typography-h2-letter-spacing)] text-black [font-style:var(--TVG-typography-h2-font-style)] uppercase mb-4'>
							Our Vision
						</h2>
						<div className='font-TVG-typography-default font-[number:var(--TVG-typography-default-font-weight)] text-[length:var(--TVG-typography-default-font-size)] leading-[var(--TVG-typography-default-line-height)] tracking-[var(--TVG-typography-default-letter-spacing)] text-[#757575] [font-style:var(--TVG-typography-default-font-style)]'>
							<p>To lead the evolution of indoor golf in Saudi Arabia and become the go-to destination for those who play hard, relax better, and love the game, whatever their level.</p>
						</div>
					</div>

					{/* Our Mission - Mobile */}
					<div className='bg-[#f6f6f6] rounded-[20px] p-6'>
						<h2 className='font-TVG-typography-h2 font-[number:var(--TVG-typography-h2-font-weight)] text-[clamp(32px,8vw,96px)] leading-[1.1] tracking-[var(--TVG-typography-h2-letter-spacing)] text-black [font-style:var(--TVG-typography-h2-font-style)] uppercase mb-4'>
							Our Mission
						</h2>
						<div className='font-TVG-typography-default font-[number:var(--TVG-typography-default-font-weight)] text-[length:var(--TVG-typography-default-font-size)] leading-[var(--TVG-typography-default-line-height)] tracking-[var(--TVG-typography-default-letter-spacing)] text-[#757575] [font-style:var(--TVG-typography-default-font-style)]'>
							<p>To lower the barriers, upgrade the experience, and create a community where everyone feels right at home.</p>
						</div>
					</div>

					{/* What We Believe - Mobile */}
					<div className='bg-[#009444] rounded-[20px] p-6'>
						<h2 className='font-TVG-typography-h2 font-[number:var(--TVG-typography-h2-font-weight)] text-[clamp(32px,8vw,96px)] leading-[1.1] tracking-[var(--TVG-typography-h2-letter-spacing)] text-white [font-style:var(--TVG-typography-h2-font-style)] uppercase mb-4'>
							What We Believe
						</h2>
						<div className='font-TVG-typography-default font-[number:var(--TVG-typography-default-font-weight)] text-[length:var(--TVG-typography-default-font-size)] leading-[var(--TVG-typography-default-line-height)] tracking-[var(--TVG-typography-default-letter-spacing)] text-white [font-style:var(--TVG-typography-default-font-style)] space-y-4'>
							<p>Golf should be easy to access, hard to leave, and always worth showing up for.</p>
							<p>We're inspired by what golf represents. Focus, fun, discipline and a bit of friendly competition. But we've swapped the dress codes and country clubs for a more inclusive, welcoming vibe.</p>
							<p>Our team is made up of golfers, tech-heads, hospitality experts, and community builders. We are different, but we are all connected by one mission. Making golf more fun, more flexible, and more social.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};