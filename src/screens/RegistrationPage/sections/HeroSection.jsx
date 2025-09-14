// src/screens/RegistrationPage/sections/HeroSection.jsx
// Hero section for Registration page with "Join The 96" title and decorative background
// Pixel-perfect recreation of Figma design with proper typography and background elements
// RELEVANT FILES: RegistrationPage.jsx, styleguide.css, tailwind.config.js

import React from 'react';

export const HeroSection = () => {
	return (
		<section className='relative w-full h-[591px] bg-[#272727] overflow-hidden'>
			{/* Green background section at bottom */}
			<div className='absolute bottom-0 left-0 w-full h-[335px] bg-[#006f33]' />

			{/* Decorative background shape - Complex SVG background */}
			<div className='absolute top-[33.91px] left-[341.98px] w-[2102px] h-[1454px] transform rotate-[348.049deg] opacity-30'>
				<div className='relative w-full h-full'>
					{/* Main decorative shape group */}
					<div className='absolute inset-0 mix-blend-screen'>
						<div
							className='w-full h-full'
							style={{
								background: `url('http://localhost:3845/assets/d230ca1d6b764f5d8b3db692c524015d9597e87f.svg') no-repeat center`,
								backgroundSize: 'contain'
							}}
						/>
					</div>
					{/* Additional decorative vectors */}
					<div className='absolute' style={{ top: '41.71%', left: '15.3%', width: '59.2%', height: '38.17%' }}>
						<img
							src="http://localhost:3845/assets/660b5111503e1fcd4bc9a0af0bb5e4171f7753d5.svg"
							alt=""
							className='w-full h-full object-contain'
						/>
					</div>
				</div>
			</div>

			{/* Main content container */}
			<div className='relative z-10 max-w-[1920px] mx-auto h-full flex items-center'>
				{/* Main title - positioned exactly like Figma */}
				<div className='absolute left-[280px] top-[296px] w-[655px]'>
					<h1 className='font-TVG-typography-hero-title2 font-[number:var(--TVG-typography-hero-title2-font-weight)] text-[110px] leading-[100px] tracking-[2.2px] text-white uppercase'>
						Join The 96
					</h1>
				</div>

				{/* Descriptive text - positioned exactly like Figma */}
				<div className='absolute left-[690px] top-[323px] w-[800px]'>
					<p className='font-TVG-typography-default font-[number:var(--TVG-typography-default-font-weight)] text-[20px] leading-[28px] text-[#dedede]'>
						Membership at TVG is limited to just 96 individuals each year. Secure your place today and enjoy full benefits, including exclusive partner access for your first year.
					</p>
				</div>
			</div>

			{/* Responsive mobile layout */}
			<div className='block lg:hidden relative z-10 px-4 sm:px-6 pt-24 pb-16 h-full flex flex-col justify-center'>
				<div className='space-y-6'>
					<h1 className='font-TVG-typography-hero-title2 font-[number:var(--TVG-typography-hero-title2-font-weight)] text-[clamp(60px,12vw,110px)] leading-[1.1] tracking-[2.2px] text-white uppercase'>
						Join The 96
					</h1>

					<div className='max-w-[600px]'>
						<p className='font-TVG-typography-default font-[number:var(--TVG-typography-default-font-weight)] text-[18px] sm:text-[20px] leading-[28px] text-[#dedede]'>
							Membership at TVG is limited to just 96 individuals each year. Secure your place today and enjoy full benefits, including exclusive partner access for your first year.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};