// src/screens/AboutPage\Sections\WorldClassTechSection.jsx
// World-Class Tech section highlighting simulator technology and features
// Pixel-perfect recreation of Figma design with dark background and CTA button
// RELEVANT FILES: AboutPage.jsx, styleguide.css, tailwind.config.js

import React from 'react';

export const WorldClassTechSection = () => {
	return (
		<section className='relative w-full min-h-[755px] bg-[#102121]'>
			{/* Container positioned according to Figma */}
			<div className='relative max-w-[1920px] mx-auto'>
				{/* Hero image positioned exactly like Figma */}
				<div className='absolute top-[130px] left-[993px] w-[652px] h-[496px]'>
					<img
						className='w-full h-full object-cover'
						alt='Indoor golf simulator technology setup'
						src='/indoor-golf-1.png'
					/>
				</div>

				{/* Powered by text */}
				<div className='absolute top-[203px] left-[280px] w-[655px]'>
					<h3 className='font-TVG-typography-tagline font-[number:var(--TVG-typography-tagline-font-weight)] text-[length:var(--TVG-typography-tagline-font-size)] leading-[var(--TVG-typography-tagline-line-height)] tracking-[var(--TVG-typography-tagline-letter-spacing)] text-[#7ddb8a] [font-style:var(--TVG-typography-tagline-font-style)] uppercase'>
						Powered by
					</h3>
				</div>

				{/* Main heading */}
				<div className='absolute top-[244px] left-[280px] w-[655px]'>
					<h2 className='font-TVG-typography-h2 font-[number:var(--TVG-typography-h2-font-weight)] text-[length:var(--TVG-typography-h2-font-size)] leading-[var(--TVG-typography-h2-line-height)] tracking-[var(--TVG-typography-h2-letter-spacing)] text-white [font-style:var(--TVG-typography-h2-font-style)] uppercase'>
						World-Class Tech
					</h2>
				</div>

				{/* Description text */}
				<div className='absolute top-[359px] left-[280px] w-[655px]'>
					<div className='font-TVG-typography-default font-[number:var(--TVG-typography-default-font-weight)] text-[length:var(--TVG-typography-default-font-size)] leading-[var(--TVG-typography-default-line-height)] tracking-[var(--TVG-typography-default-letter-spacing)] text-[lightgrey] [font-style:var(--TVG-typography-default-font-style)] space-y-4'>
						<p>We use the most advanced system on the market to replicate the real-world feel of over 250 legendary courses. It's precise, fast, and immersive down to every slope, bounce, and swing.</p>
						<p>From auto-tee to instant shot feedback, it's the closest thing to stepping onto a real course. (Minus the sunburn).</p>
					</div>
				</div>

				{/* CTA Button */}
				<div className='absolute top-[545px] left-[280px]'>
					<button className='bg-[#009444] hover:bg-[#007a38] transition-colors rounded-[50px] px-[30px] py-[7px] flex items-center gap-2.5'>
						<span className='font-TVG-typography-button font-[number:var(--TVG-typography-button-font-weight)] text-[length:var(--TVG-typography-button-font-size)] leading-[var(--TVG-typography-button-line-height)] tracking-[var(--TVG-typography-button-letter-spacing)] text-white [font-style:var(--TVG-typography-button-font-style)] uppercase text-center whitespace-nowrap'>
							Learn About Our Tech
						</span>
						<div className='w-6 h-6'>
							<svg
								className='w-full h-full'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M5 12H19M19 12L12 5M19 12L12 19'
									stroke='white'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</div>
					</button>
				</div>
			</div>

			{/* Mobile responsive layout */}
			<div className='block lg:hidden px-4 sm:px-6 py-16'>
				<div className='space-y-8 max-w-[600px] mx-auto'>
					<div className='text-center space-y-6'>
						<h3 className='font-TVG-typography-tagline font-[number:var(--TVG-typography-tagline-font-weight)] text-[length:var(--TVG-typography-tagline-font-size)] leading-[var(--TVG-typography-tagline-line-height)] tracking-[var(--TVG-typography-tagline-letter-spacing)] text-[#7ddb8a] [font-style:var(--TVG-typography-tagline-font-style)] uppercase'>
							Powered by
						</h3>
						<h2 className='font-TVG-typography-h2 font-[number:var(--TVG-typography-h2-font-weight)] text-[clamp(32px,8vw,96px)] leading-[1.1] tracking-[var(--TVG-typography-h2-letter-spacing)] text-white [font-style:var(--TVG-typography-h2-font-style)] uppercase'>
							World-Class Tech
						</h2>
					</div>

					<div className='w-full max-w-[500px] mx-auto'>
						<img
							className='w-full h-auto object-cover rounded-[20px]'
							alt='Indoor golf simulator technology setup'
							src='/indoor-golf-1.png'
						/>
					</div>

					<div className='font-TVG-typography-default font-[number:var(--TVG-typography-default-font-weight)] text-[length:var(--TVG-typography-default-font-size)] leading-[var(--TVG-typography-default-line-height)] tracking-[var(--TVG-typography-default-letter-spacing)] text-[lightgrey] [font-style:var(--TVG-typography-default-font-style)] space-y-4 text-center'>
						<p>We use the most advanced system on the market to replicate the real-world feel of over 250 legendary courses. It's precise, fast, and immersive down to every slope, bounce, and swing.</p>
						<p>From auto-tee to instant shot feedback, it's the closest thing to stepping onto a real course. (Minus the sunburn).</p>
					</div>

					<div className='flex justify-center'>
						<button className='bg-[#009444] hover:bg-[#007a38] transition-colors rounded-[50px] px-[30px] py-[7px] flex items-center gap-2.5'>
							<span className='font-TVG-typography-button font-[number:var(--TVG-typography-button-font-weight)] text-[length:var(--TVG-typography-button-font-size)] leading-[var(--TVG-typography-button-line-height)] tracking-[var(--TVG-typography-button-letter-spacing)] text-white [font-style:var(--TVG-typography-button-font-style)] uppercase text-center whitespace-nowrap'>
								Learn About Our Tech
							</span>
							<div className='w-6 h-6'>
								<svg
									className='w-full h-full'
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M5 12H19M19 12L12 5M19 12L12 19'
										stroke='white'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							</div>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};