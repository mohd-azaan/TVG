// src/screens/EventsPage/sections/FullAccessSection.jsx
// Full Access section with venue hire information and CTA
// Pixel-perfect recreation of "A Venue That Fits Any Vibe" section from Figma
// RELEVANT FILES: EventsPage.jsx, styleguide.css, tailwind.config.js

import React from 'react';

export const FullAccessSection = () => {
	return (
		<section className='relative w-full min-h-[723px] bg-[#102121] overflow-hidden'>
			{/* Decorative background shape positioned exactly like Figma */}
			<div className='absolute top-[876.75px] left-[286.86px] opacity-30'>
				<div
					className='w-[2208px] h-[1862px] transform'
					style={{
						background: `url('/shape14-3.svg') no-repeat center`,
						backgroundSize: 'contain',
						mixBlendMode: 'screen'
					}}
				/>
			</div>

			{/* Main content container */}
			<div className='relative z-10 max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-0'>
				{/* Left side content positioned exactly like Figma */}
				<div className='absolute top-[130px] left-[280px] max-w-[655px]'>
					{/* Main heading */}
					<h2 className='font-TVG-typography-h1 font-[number:var(--TVG-typography-h1-font-weight)] text-[length:var(--TVG-typography-h1-font-size)] leading-[var(--TVG-typography-h1-line-height)] tracking-[var(--TVG-typography-h1-letter-spacing)] text-white [font-style:var(--TVG-typography-h1-font-style)] mb-[30px]'>
						A Venue That Fits Any Vibe
					</h2>

					{/* Subtitle */}
					<h3 className='font-TVG-typography-h3 font-[number:var(--TVG-typography-h3-font-weight)] text-[length:var(--TVG-typography-h3-font-size)] leading-[var(--TVG-typography-h3-line-height)] tracking-[var(--TVG-typography-h3-letter-spacing)] text-white [font-style:var(--TVG-typography-h3-font-style)] mb-[85px]'>
						Want the whole place to yourself? Go for it!
					</h3>

					{/* Description text */}
					<div className='space-y-6 mb-[235px]'>
						<p className='font-TVG-typography-default font-[number:var(--TVG-typography-default-font-weight)] text-[length:var(--TVG-typography-default-font-size)] leading-[var(--TVG-typography-default-line-height)] tracking-[var(--TVG-typography-default-letter-spacing)] text-white [font-style:var(--TVG-typography-default-font-style)]'>
							Exclusive venue hire means full access to every bay, every lounge, and every screen. You get the space, the service, and a fully customizable experience built around your group. Bring everyone. Friends, family, and even the people you just met. Our space holds up to 115 guests, with fully customized food and beverage packages to match your vibe.
						</p>
					</div>

					{/* CTA Button */}
					<button className='inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#009444] rounded-full hover:bg-[#007a3a] transition-colors duration-200 cursor-pointer'>
						<span className='font-TVG-typography-button font-[number:var(--TVG-typography-button-font-weight)] text-white text-[length:var(--TVG-typography-button-font-size)] tracking-[var(--TVG-typography-button-letter-spacing)] leading-[var(--TVG-typography-button-line-height)] [font-style:var(--TVG-typography-button-font-style)] whitespace-nowrap'>
							BOOK FULL VENUE
						</span>
					</button>
				</div>

				{/* Right side image positioned exactly like Figma */}
				<div className='absolute top-[130px] left-[1011px] w-[613px] h-[403px]'>
					<img
						className='w-full h-full object-cover rounded-[20px]'
						alt='Indoor golf venue with multiple bays'
						src='/indoor-golf-1.png'
					/>
				</div>
			</div>

			{/* Responsive adjustments for smaller screens */}
			<div className='block lg:hidden relative z-10 px-4 sm:px-6 pt-16 pb-16'>
				{/* Mobile layout */}
				<div className='space-y-8'>
					<div className='space-y-6'>
						<h2 className='font-TVG-typography-h1 font-[number:var(--TVG-typography-h1-font-weight)] text-[clamp(36px,8vw,64px)] leading-[1.2] tracking-[var(--TVG-typography-h1-letter-spacing)] text-white [font-style:var(--TVG-typography-h1-font-style)]'>
							A Venue That Fits Any Vibe
						</h2>

						<h3 className='font-TVG-typography-h3 font-[number:var(--TVG-typography-h3-font-weight)] text-[clamp(24px,6vw,40px)] leading-[1.3] tracking-[var(--TVG-typography-h3-letter-spacing)] text-white [font-style:var(--TVG-typography-h3-font-style)]'>
							Want the whole place to yourself? Go for it!
						</h3>

						<p className='font-TVG-typography-default font-[number:var(--TVG-typography-default-font-weight)] text-[length:var(--TVG-typography-default-font-size)] leading-[var(--TVG-typography-default-line-height)] tracking-[var(--TVG-typography-default-letter-spacing)] text-white [font-style:var(--TVG-typography-default-font-style)]'>
							Exclusive venue hire means full access to every bay, every lounge, and every screen. You get the space, the service, and a fully customizable experience built around your group. Bring everyone. Friends, family, and even the people you just met. Our space holds up to 115 guests, with fully customized food and beverage packages to match your vibe.
						</p>
					</div>

					<div className='w-full max-w-[500px] mx-auto'>
						<img
							className='w-full h-auto object-cover rounded-[20px] shadow-xl'
							alt='Indoor golf venue with multiple bays'
							src='/indoor-golf-1.png'
						/>
					</div>

					<div className='flex justify-center'>
						<button className='inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#009444] rounded-full hover:bg-[#007a3a] transition-colors duration-200 cursor-pointer'>
							<span className='font-TVG-typography-button font-[number:var(--TVG-typography-button-font-weight)] text-white text-[length:var(--TVG-typography-button-font-size)] tracking-[var(--TVG-typography-button-letter-spacing)] leading-[var(--TVG-typography-button-line-height)] [font-style:var(--TVG-typography-button-font-style)] whitespace-nowrap'>
								BOOK FULL VENUE
							</span>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};