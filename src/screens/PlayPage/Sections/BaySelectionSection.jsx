// src/screens/PlayPage/Sections/BaySelectionSection.jsx
// Bay selection section with 3 bay type cards and feature lists
// Pixel-perfect recreation of Figma design with dark background and feature icons
// RELEVANT FILES: PlayPage.jsx, styleguide.css, tailwind.config.js

import React from 'react';

// Golf icon component — replaced with provided 30x30 SVG
const GolfIcon = ({ className = '' }) => (
	<svg
		className={className || 'w-[30px] h-[30px]'}
		width='30'
		height='30'
		viewBox='0 0 30 30'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-hidden
	>
		<path
			d='M21.2373 21.2627V23.7373H18.75C18.0592 23.7373 17.4675 23.9837 16.9756 24.4756C16.4837 24.9675 16.2373 25.5592 16.2373 26.25V27.4873H13.7627V26.25C13.7627 25.5592 13.5163 24.9675 13.0244 24.4756C12.5325 23.9837 11.9408 23.7373 11.25 23.7373H8.7627V21.2627H21.2373ZM15 2.5127C17.4342 2.5127 19.4988 3.36013 21.1943 5.05566C22.8899 6.7512 23.7373 8.81576 23.7373 11.25C23.7373 13.6842 22.8899 15.7488 21.1943 17.4443C19.4988 19.1399 17.4342 19.9873 15 19.9873C12.5658 19.9873 10.5012 19.1399 8.80566 17.4443C7.11013 15.7488 6.2627 13.6842 6.2627 11.25C6.2627 8.81576 7.11013 6.7512 8.80566 5.05566C10.5012 3.36013 12.5658 2.5127 15 2.5127ZM15 4.9873C13.2675 4.9873 11.7904 5.59823 10.5693 6.81934C9.34823 8.04044 8.7373 9.51753 8.7373 11.25C8.7373 12.9825 9.34823 14.4596 10.5693 15.6807C11.7904 16.9018 13.2675 17.5127 15 17.5127C16.7325 17.5127 18.2096 16.9018 19.4307 15.6807C20.6518 14.4596 21.2627 12.9825 21.2627 11.25C21.2627 9.51753 20.6518 8.04044 19.4307 6.81934C18.2096 5.59823 16.7325 4.9873 15 4.9873ZM12.5 8.7627C12.851 8.7627 13.1447 8.88104 13.3818 9.11816C13.619 9.35529 13.7373 9.64898 13.7373 10C13.7373 10.351 13.619 10.6447 13.3818 10.8818C13.1447 11.119 12.851 11.2373 12.5 11.2373C12.149 11.2373 11.8553 11.119 11.6182 10.8818C11.381 10.6447 11.2627 10.351 11.2627 10C11.2627 9.64898 11.381 9.35529 11.6182 9.11816C11.8553 8.88104 12.149 8.7627 12.5 8.7627ZM17.5 8.7627C17.851 8.7627 18.1447 8.88104 18.3818 9.11816C18.619 9.35529 18.7373 9.64898 18.7373 10C18.7373 10.351 18.619 10.6447 18.3818 10.8818C18.1447 11.119 17.851 11.2373 17.5 11.2373C17.149 11.2373 16.8553 11.119 16.6182 10.8818C16.381 10.6447 16.2627 10.351 16.2627 10C16.2627 9.64898 16.381 9.35529 16.6182 9.11816C16.8553 8.88104 17.149 8.7627 17.5 8.7627ZM15 6.2627C15.351 6.2627 15.6447 6.38104 15.8818 6.61816C16.119 6.85529 16.2373 7.14898 16.2373 7.5C16.2373 7.85102 16.119 8.14471 15.8818 8.38184C15.6447 8.61896 15.351 8.7373 15 8.7373C14.649 8.7373 14.3553 8.61896 14.1182 8.38184C13.881 8.14471 13.7627 7.85102 13.7627 7.5C13.7627 7.14898 13.881 6.85529 14.1182 6.61816C14.3553 6.38104 14.649 6.2627 15 6.2627Z'
			fill='#7DDB8A'
			stroke='#7DDB8A'
			strokeWidth='0.025'
		/>
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
				'2x Right handed',
			],
		},
		{
			title: 'Semi-Private Bay',
			location: 'Ground Floor',
			features: [
				'Semi-enclosed for added privacy.',
				'Up to 6 players.',
				'Ideal for birthdays, friend groups, or focused practice.',
				'Food and drinks delivered right to your screen.',
				'1x Right handed & 1x Both handed',
			],
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
				'Body weight shift sensors in moving plate',
			],
		},
	];

	return (
		// Clip large decorative background shapes so they don't add to page width
		<section className='relative w-full min-h-[1420px] bg-[#102121] overflow-hidden'>
			{/* Decorative background shape (increased size + rotated) */}
			<div className='absolute top-[559px] left-[1020.86px] transform rotate-[20deg] pointer-events-none select-none'>
				<div
					className='w-[2400px] h-[1800px] max-w-none'
					aria-hidden='true'
					style={{
						background: `url('/shape14-2.svg') no-repeat center`,
						backgroundSize: 'contain',
						mixBlendMode: 'screen',
						transform: 'translateZ(0)'
					}}
				/>
			</div>

			{/* Container positioned according to Figma */}
			<div className='relative z-10 max-w-[1920px] mx-auto'>
				{/* Section title */}
				<div className='absolute top-[100px] left-1/2 transform -translate-x-1/2 w-[655px] text-center'>
					<h2 className='font-morganite font-black text-[96px] leading-[90px] tracking-[1.92px] text-white uppercase'>
						Choose Your Bay
					</h2>
				</div>

				{/* Description text */}
				<div className='absolute top-[190px] left-1/2 transform -translate-x-1/2 w-[655px] text-center'>
					<p className='font-gilroy font-medium text-[20px] leading-[28px] tracking-[0.1px] text-[lightgrey]'>
						Each bay is powered by Golfzon's cutting-edge technology, but the
						vibe is up to you. Here's how to play it
					</p>
				</div>

				{/* Bay cards grid */}
				<div className='absolute top-[554px] left-1/2 transform -translate-x-1/2 flex gap-[50px]'>
					{bayTypes.map((bay, index) => (
						<div
							key={index}
							className='w-[420px] h-[746px] bg-[#0c1a1a] rounded-[30px] relative'
						>
							{/* Placeholder image at top */}
							<div className='absolute top-[-241px] left-0 w-[420px] h-[356px] bg-[#081010] rounded-[30px] flex items-center justify-center'>
								<div className='text-center text-white space-y-2'>
									<div className='text-lg font-gilroy font-bold'>
										{bay.title}
									</div>
									<div className='text-xs opacity-75'>Simulator Bay Image</div>
								</div>
							</div>

							{/* Bay title */}
							<div className='absolute top-[154px] left-[41px] w-[362px]'>
								<h3 className='font-gilroy font-bold text-[28px] leading-normal tracking-[var(--TVG-typography-h4-letter-spacing)] text-white [font-style:var(--TVG-typography-h4-font-style)] uppercase'>
									{bay.title}
								</h3>
							</div>

							{/* Location */}
							<div className='absolute top-[187px] left-[41px] w-[362px]'>
								<p className='font-gilroy font-normal text-[18px] leading-normal tracking-[0.2px] text-white uppercase'>
									{bay.location}
								</p>
							</div>

							{/* Features list */}
							<div className='absolute top-[232px] left-[40px] space-y-4'>
								{bay.features.map((feature, featureIndex) => (
									<div
										key={featureIndex}
										className='flex items-start gap-4 w-[348px]'
									>
										<div className='flex-shrink-0 w-[30px] h-[30px] text-[#d1d3d4] mt-[2px]'>
											<GolfIcon className='w-[30px] h-[30px]' />
										</div>
										<p className='font-gilroy font-medium text-[20px] leading-[28px] tracking-[0.1px] text-[#d1d3d4] flex-1'>
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
						<h2 className='font-morganite font-black text-[clamp(32px,8vw,96px)] leading-[1.1] tracking-[1.92px] text-white uppercase'>
							Choose Your Bay
						</h2>
						<p className='font-gilroy font-medium text-[20px] leading-[28px] tracking-[0.1px] text-[lightgrey]'>
							Each bay is powered by Golfzon's cutting-edge technology, but the
							vibe is up to you. Here's how to play it
						</p>
					</div>

					<div className='space-y-8'>
						{bayTypes.map((bay, index) => (
							<div
								key={index}
								className='bg-[#0c1a1a] rounded-[20px] p-6 space-y-6'
							>
								{/* Placeholder image */}
								<div className='w-full aspect-[4/3] bg-[#081010] rounded-[20px] flex items-center justify-center'>
									<div className='text-center text-white space-y-2'>
										<div className='text-lg font-gilroy font-bold'>
											{bay.title}
										</div>
										<div className='text-xs opacity-75'>
											Simulator Bay Image
										</div>
									</div>
								</div>

								{/* Content */}
								<div className='space-y-4'>
									<div>
										<h3 className='font-gilroy font-bold text-[clamp(20px,5vw,28px)] leading-normal tracking-[0.5px] text-white uppercase'>
											{bay.title}
										</h3>
										<p className='font-gilroy font-normal text-[16px] leading-normal tracking-[0.2px] text-white uppercase opacity-75'>
											{bay.location}
										</p>
									</div>

									<div className='space-y-3'>
										{bay.features.map((feature, featureIndex) => (
											<div
												key={featureIndex}
												className='flex items-start gap-3'
											>
												<div className='flex-shrink-0 w-5 h-5 text-[#d1d3d4] mt-1'>
													<GolfIcon className='w-5 h-5' />
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
