// src/screens/AboutPage/Sections/HeroSection.jsx
// Hero section for About page with main headline and background image
// Pixel-perfect recreation of Figma design with proper typography and layout
// RELEVANT FILES: AboutPage.jsx, styleguide.css, tailwind.config.js

import React from 'react';

export const HeroSection = () => {
	return (
		<section className='relative w-full min-h-[1024px] bg-[#272727] overflow-hidden'>
			{/* Green background section */}
			<div className='absolute bottom-0 left-0 w-full h-[435px] bg-[#006f33]' />

			{/* Decorative background shape */}
			<div className='absolute top-[431.9px] left-[341.99px] opacity-50'>
				<div
					className='w-[1920px] h-[1080px] transform rotate-[348.049deg]'
					style={{
						background: `url('/shape14-2.svg') no-repeat center`,
						backgroundSize: 'contain',
						mixBlendMode: 'screen'
					}}
				/>
			</div>

			{/* Main content container */}
			<div className='relative z-10 max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-0'>
				{/* Content positioned with absolute positioning to match Figma */}
				<div className='absolute top-[619px] left-[280px] max-w-[655px]'>
					<p className='font-TVG-typography-hero-text font-[number:var(--TVG-typography-hero-text-font-weight)] text-[length:var(--TVG-typography-hero-text-font-size)] leading-[var(--TVG-typography-hero-text-line-height)] tracking-[var(--TVG-typography-hero-text-letter-spacing)] text-[#dedede] [font-style:var(--TVG-typography-hero-text-font-style)]'>
						Step into a place built for people who live the game, not just play it. Our advanced simulator technology recreates the world's greatest courses in precise detail. You'll get the analytics you need, the challenges you crave, and a community that speaks your language.
					</p>
					<div className='h-6' />
					<p className='font-TVG-typography-hero-text font-[number:var(--TVG-typography-hero-text-font-weight)] text-[length:var(--TVG-typography-hero-text-font-size)] leading-[var(--TVG-typography-hero-text-line-height)] tracking-[var(--TVG-typography-hero-text-letter-spacing)] text-[#dedede] [font-style:var(--TVG-typography-hero-text-font-style)]'>
						Improve your swing, hang with friends, or host a private event in The Virtual Greens. We're building a community of modern golfers, casual players, and anyone looking for a better way to spend their time in Riyadh.
					</p>
				</div>

				{/* Main title positioned exactly like Figma */}
				<div className='absolute top-[307px] left-[280px] w-[655px]'>
					<h1 className='font-TVG-typography-hero-title font-[number:var(--TVG-typography-hero-title-font-weight)] text-[length:var(--TVG-typography-hero-title-font-size)] leading-[var(--TVG-typography-hero-title-line-height)] tracking-[var(--TVG-typography-hero-title-letter-spacing)] text-white [font-style:var(--TVG-typography-hero-title-font-style)] uppercase'>
						Where Golf People Belong
					</h1>
				</div>

				{/* Hero image positioned exactly like Figma */}
				<div className='absolute top-[307px] left-[990px] w-[650px] h-[503px]'>
					<img
						className='w-full h-full object-cover rounded-[30px]'
						alt='Golf players in virtual greens environment'
						src='/hero.png'
					/>
				</div>
			</div>

			{/* Responsive adjustments for smaller screens */}
			<div className='block lg:hidden relative z-10 px-4 sm:px-6 pt-24 pb-16'>
				{/* Mobile layout */}
				<div className='space-y-8'>
					<h1 className='font-TVG-typography-hero-title font-[number:var(--TVG-typography-hero-title-font-weight)] text-[clamp(48px,10vw,148px)] leading-[1.1] tracking-[var(--TVG-typography-hero-title-letter-spacing)] text-white [font-style:var(--TVG-typography-hero-title-font-style)] uppercase'>
						Where Golf People Belong
					</h1>

					<div className='space-y-6 max-w-[600px]'>
						<p className='font-TVG-typography-hero-text font-[number:var(--TVG-typography-hero-text-font-weight)] text-[length:var(--TVG-typography-hero-text-font-size)] leading-[var(--TVG-typography-hero-text-line-height)] tracking-[var(--TVG-typography-hero-text-letter-spacing)] text-[#dedede] [font-style:var(--TVG-typography-hero-text-font-style)]'>
							Step into a place built for people who live the game, not just play it. Our advanced simulator technology recreates the world's greatest courses in precise detail. You'll get the analytics you need, the challenges you crave, and a community that speaks your language.
						</p>
						<p className='font-TVG-typography-hero-text font-[number:var(--TVG-typography-hero-text-font-weight)] text-[length:var(--TVG-typography-hero-text-font-size)] leading-[var(--TVG-typography-hero-text-line-height)] tracking-[var(--TVG-typography-hero-text-letter-spacing)] text-[#dedede] [font-style:var(--TVG-typography-hero-text-font-style)]'>
							Improve your swing, hang with friends, or host a private event in The Virtual Greens. We're building a community of modern golfers, casual players, and anyone looking for a better way to spend their time in Riyadh.
						</p>
					</div>

					<div className='w-full max-w-[500px] mx-auto'>
						<img
							className='w-full h-auto object-cover rounded-[20px] shadow-xl'
							alt='Golf players in virtual greens environment'
							src='/hero.png'
						/>
					</div>
				</div>
			</div>
		</section>
	);
};