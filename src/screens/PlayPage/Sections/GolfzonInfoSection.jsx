// src/screens/PlayPage/Sections/GolfzonInfoSection.jsx
// Golfzon information section with concise messaging and real Golfzon interface screenshot
// Pixel-perfect recreation matching Figma design with side-by-side layout
// RELEVANT FILES: PlayPage.jsx, styleguide.css, tailwind.config.js, golfzon-screenshot.png

import React from 'react';

export const GolfzonInfoSection = () => {
	return (
		<section className='relative w-full min-h-[600px] bg-[#102121] overflow-hidden'>
			{/* Desktop layout */}
			<div className='hidden lg:block'>
			{/* Container positioned according to Figma layout */}
			<div className='relative max-w-[1920px] mx-auto'>
				{/* Main title */}
				<h2 className='absolute left-[280px] top-[159px] w-[655px] font-TVG-typography-h2 font-[800] text-[96px] leading-[90px] tracking-[1.92px] text-white uppercase'>
					What is Golfzon?
				</h2>

				{/* Green tagline */}
				<p className='absolute left-[280px] top-[255px] w-[542px] font-TVG-typography-tagline font-[700] text-[22px] leading-[26px] tracking-[0.44px] text-[#7ddb8a] uppercase'>
					The World's #1 Golf Simulator For a Reason
				</p>

				{/* Description text */}
				<div className='absolute left-[280px] top-[295px] w-[655px]'>
					<div className='font-TVG-typography-default font-[500] text-[20px] leading-[28px] text-[lightgrey]'>
						<p className='mb-5'>
							The first time you try Golfzon, it's hard to believe it's not the real thing. The visuals are jaw-dropping. The feel is unbelievably accurate. And the gameplay is just addictive.
						</p>
						<p>
							One swing in, and you'll wonder why you ever settled for less.
						</p>
					</div>
				</div>

				{/* CTA Button */}
				<div className='absolute left-[280px] top-[420px]'>
					<button className='bg-[#009444] hover:bg-[#007a38] transition-colors rounded-[50px] px-[30px] py-[7px] flex items-center gap-[10px]'>
						<span className='font-TVG-typography-button font-[600] text-[18px] leading-[40px] text-white uppercase text-center whitespace-nowrap'>
							Book a Bay
						</span>
						<div className='w-6 h-6'>
							<img
								src='/arrow-right-figma.svg'
								alt='Arrow right'
								className='w-full h-full object-contain'
							/>
						</div>
					</button>
				</div>

				{/* Golfzon Screenshot */}
				<div className='absolute left-[985px] top-[159px] w-[655px] h-[368px]'>
					<img
						src='/golfzon-screenshot.png'
						alt='Golfzon Interface Screenshot'
						className='w-full h-full object-cover rounded-[30px] shadow-lg'
					/>
				</div>
			</div>
			</div>

			{/* Mobile responsive layout */}
			<div className='block lg:hidden px-4 sm:px-6 py-16'>
				<div className='space-y-8 max-w-[600px] mx-auto text-center'>
					{/* Title */}
					<div>
						<h2 className='font-TVG-typography-h2 font-[800] text-[clamp(40px,10vw,72px)] leading-[1.1] tracking-[1.2px] text-white uppercase mb-4'>
							What is Golfzon?
						</h2>
						<p className='font-TVG-typography-tagline font-[number:var(--TVG-typography-tagline-font-weight)] text-[18px] leading-[22px] tracking-[0.3px] text-[#7ddb8a] uppercase'>
							The World's #1 Golf Simulator For a Reason
						</p>
					</div>

					{/* Mobile image */}
					<div className='w-full'>
						<img
							src='/golfzon-screenshot.png'
							alt='Golfzon Interface Screenshot'
							className='w-full aspect-[16/9] object-cover rounded-[20px] shadow-xl'
						/>
					</div>

					{/* Mobile description */}
					<div className='space-y-4'>
						<p className='font-TVG-typography-default font-[number:var(--TVG-typography-default-font-weight)] text-[18px] leading-[26px] text-[lightgrey]'>
							The first time you try Golfzon, it's hard to believe it's not the real thing. The visuals are jaw-dropping. The feel is unbelievably accurate. And the gameplay is just addictive.
						</p>
						<p className='font-TVG-typography-default font-[number:var(--TVG-typography-default-font-weight)] text-[18px] leading-[26px] text-[lightgrey]'>
							One swing in, and you'll wonder why you ever settled for less.
						</p>
					</div>

					{/* Mobile CTA Button */}
					<div className='pt-4'>
						<button className='bg-[#009444] hover:bg-[#007a38] transition-colors rounded-[50px] px-[24px] py-[10px] flex items-center gap-2 mx-auto'>
							<span className='font-TVG-typography-button font-[number:var(--TVG-typography-button-font-weight)] text-[16px] leading-[20px] text-white uppercase'>
								Book a Bay
							</span>
							<div className='w-5 h-5'>
								<img
									src='/arrow-right-figma.svg'
									alt='Arrow right'
									className='w-full h-full object-contain'
								/>
							</div>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};