// src/screens/PlayPage/Sections/BaySelectionSection.jsx
// Bay selection section with 3 bay type cards and feature lists
// Pixel-perfect recreation of Figma design with dark background and feature icons
// RELEVANT FILES: PlayPage.jsx, styleguide.css, tailwind.config.js

import React from 'react';

// Golf icon component
const GolfIcon = ({ className = '' }) => (
	<svg className={`w-full h-full ${className}`} viewBox='0 0 24 24' fill='currentColor'>
		<path d='M12.5,3.5C13.6,3.5 14.5,4.4 14.5,5.5C14.5,6.6 13.6,7.5 12.5,7.5C11.4,7.5 10.5,6.6 10.5,5.5C10.5,4.4 11.4,3.5 12.5,3.5M10.5,8.5H14.5L12.75,11.25L15,13.5V22H13V15L10.5,12.5V22H8.5V8.5Z'/>
	</svg>
);

export const BaySelectionSection = () => {
	const bayTypes = [
		{
			title: 'Standard Bay',
			location: 'Mezzanine Floor',
			features: [
				'Walk in or book online.',
				'Up to 6 players.',
				'Great for practice or casual games.',
				"Height shouldn't exceed 5'6 ft or 168cm",
				'2x Right handed'
			]
		},
		{
			title: 'Semi-Private Bay',
			location: 'Ground Floor',
			features: [
				'Semi-enclosed for added privacy.',
				'Up to 6 players.',
				'Ideal for birthdays, friend groups, or focused practice.',
				'Food and drinks delivered right to your screen.',
				'1x Right handed & 1x Both handed'
			]
		},
		{
			title: 'VIP Bay',
			location: 'Ground Floor',
			features: [
				'High-end design with luxury seating.',
				'Up to 6 players.',
				'Equipped with swing plate and pro-level data.',
				'Perfect for networking, hosting, or just showing off!',
				'1x Both handed',
				'Fully private suite',
				'Body weight shift sensors in moving plate'
			]
		}
	];

	return (
		<section className='relative w-full min-h-[1420px] bg-[#102121]'>
			{/* Decorative background shape */}
			<div className='absolute top-[489px] left-[286.86px] opacity-30'>
				<div
					className='w-[2208px] h-[1862px] transform rotate-[332.19deg]'
					style={{
						background: `url('/shape14-2.svg') no-repeat center`,
						backgroundSize: 'contain',
						mixBlendMode: 'screen'
					}}
				/>
			</div>

			{/* Container positioned according to Figma */}
			<div className='relative z-10 max-w-[1920px] mx-auto'>
				{/* Section title */}
				<div className='absolute top-[130px] left-1/2 transform -translate-x-1/2 w-[655px] text-center'>
					<h2 className='font-TVG-typography-h2 font-[number:var(--TVG-typography-h2-font-weight)] text-[length:var(--TVG-typography-h2-font-size)] leading-[var(--TVG-typography-h2-line-height)] tracking-[var(--TVG-typography-h2-letter-spacing)] text-white [font-style:var(--TVG-typography-h2-font-style)] uppercase'>
						Choose Your Bay
					</h2>
				</div>

				{/* Description text */}
				<div className='absolute top-[220px] left-[626px] w-[655px] text-center'>
					<p className='font-TVG-typography-default font-[number:var(--TVG-typography-default-font-weight)] text-[length:var(--TVG-typography-default-font-size)] leading-[var(--TVG-typography-default-line-height)] tracking-[var(--TVG-typography-default-letter-spacing)] text-[lightgrey] [font-style:var(--TVG-typography-default-font-style)]'>
						Each bay is powered by Golfzon's cutting-edge technology, but the vibe is up to you. Here's how to play it
					</p>
				</div>

				{/* Bay cards grid */}
				<div className='absolute top-[554px] left-[280px] flex gap-[50px]'>
					{bayTypes.map((bay, index) => (
						<div key={index} className='w-[420px] h-[746px] bg-[#0c1a1a] rounded-[30px] relative'>
							{/* Placeholder image at top */}
							<div className='absolute top-[-241px] left-0 w-[420px] h-[356px] bg-gradient-to-br from-[#006f33] to-[#004a22] rounded-[30px] flex items-center justify-center'>
								<div className='text-center text-white space-y-2'>
									<div className='text-4xl'>🏌️‍♂️</div>
									<div className='text-lg font-semibold'>{bay.title}</div>
									<div className='text-xs opacity-75'>Simulator Bay Image</div>
								</div>
							</div>

							{/* Bay title */}
							<div className='absolute top-[154px] left-[41px] w-[362px]'>
								<h3 className='font-TVG-typography-h4 font-[number:var(--TVG-typography-h4-font-weight)] text-[28px] leading-normal tracking-[var(--TVG-typography-h4-letter-spacing)] text-white [font-style:var(--TVG-typography-h4-font-style)] uppercase'>
									{bay.title}
								</h3>
							</div>

							{/* Location */}
							<div className='absolute top-[187px] left-[41px] w-[362px]'>
								<p className='font-TVG-typography-footer-menu font-[number:var(--TVG-typography-footer-menu-font-weight)] text-[18px] leading-normal tracking-[var(--TVG-typography-footer-menu-letter-spacing)] text-white [font-style:var(--TVG-typography-footer-menu-font-style)] uppercase'>
									{bay.location}
								</p>
							</div>

							{/* Features list */}
							<div className='absolute top-[232px] left-[40px] space-y-4'>
								{bay.features.map((feature, featureIndex) => (
									<div key={featureIndex} className='flex items-start gap-[38px] w-[348px]'>
										<div className='flex-shrink-0 w-[30px] h-[30px] text-[#d1d3d4] mt-[2px]'>
											<GolfIcon />
										</div>
										<p className='font-TVG-typography-default font-[number:var(--TVG-typography-default-font-weight)] text-[length:var(--TVG-typography-default-font-size)] leading-[var(--TVG-typography-default-line-height)] tracking-[var(--TVG-typography-default-letter-spacing)] text-[#d1d3d4] [font-style:var(--TVG-typography-default-font-style)] flex-1'>
											{feature}
										</p>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Mobile responsive layout */}
			<div className='block lg:hidden px-4 sm:px-6 py-16'>
				<div className='space-y-12 max-w-[600px] mx-auto'>
					<div className='text-center space-y-6'>
						<h2 className='font-TVG-typography-h2 font-[number:var(--TVG-typography-h2-font-weight)] text-[clamp(32px,8vw,96px)] leading-[1.1] tracking-[var(--TVG-typography-h2-letter-spacing)] text-white [font-style:var(--TVG-typography-h2-font-style)] uppercase'>
							Choose Your Bay
						</h2>
						<p className='font-TVG-typography-default font-[number:var(--TVG-typography-default-font-weight)] text-[length:var(--TVG-typography-default-font-size)] leading-[var(--TVG-typography-default-line-height)] tracking-[var(--TVG-typography-default-letter-spacing)] text-[lightgrey] [font-style:var(--TVG-typography-default-font-style)]'>
							Each bay is powered by Golfzon's cutting-edge technology, but the vibe is up to you. Here's how to play it
						</p>
					</div>

					<div className='space-y-8'>
						{bayTypes.map((bay, index) => (
							<div key={index} className='bg-[#0c1a1a] rounded-[20px] p-6 space-y-6'>
								{/* Placeholder image */}
								<div className='w-full aspect-[4/3] bg-gradient-to-br from-[#006f33] to-[#004a22] rounded-[20px] flex items-center justify-center'>
									<div className='text-center text-white space-y-2'>
										<div className='text-3xl'>🏌️‍♂️</div>
										<div className='text-lg font-semibold'>{bay.title}</div>
										<div className='text-xs opacity-75'>Simulator Bay Image</div>
									</div>
								</div>

								{/* Content */}
								<div className='space-y-4'>
									<div>
										<h3 className='font-TVG-typography-h4 font-[number:var(--TVG-typography-h4-font-weight)] text-[clamp(20px,5vw,28px)] leading-normal tracking-[var(--TVG-typography-h4-letter-spacing)] text-white [font-style:var(--TVG-typography-h4-font-style)] uppercase'>
											{bay.title}
										</h3>
										<p className='font-TVG-typography-footer-menu font-[number:var(--TVG-typography-footer-menu-font-weight)] text-[16px] leading-normal tracking-[var(--TVG-typography-footer-menu-letter-spacing)] text-white [font-style:var(--TVG-typography-footer-menu-font-style)] uppercase opacity-75'>
											{bay.location}
										</p>
									</div>

									<div className='space-y-3'>
										{bay.features.map((feature, featureIndex) => (
											<div key={featureIndex} className='flex items-start gap-3'>
												<div className='flex-shrink-0 w-5 h-5 text-[#d1d3d4] mt-1'>
													<GolfIcon />
												</div>
												<p className='font-TVG-typography-default font-[number:var(--TVG-typography-default-font-weight)] text-[18px] leading-[var(--TVG-typography-default-line-height)] tracking-[var(--TVG-typography-default-letter-spacing)] text-[#d1d3d4] [font-style:var(--TVG-typography-default-font-style)] flex-1'>
													{feature}
												</p>
											</div>
										))}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};