// src/screens/SimulatorPage/Sections/GolfzonAdvantagesSection.jsx
// Golfzon Advantages section displaying what makes Golfzon simulators exceptional
// Shows comprehensive list of benefits and features with sports_golf icons
// RELEVANT FILES: SimulatorPage.jsx, WhereToUse.jsx, FeaturesSection.jsx, styleguide.css

import React from 'react';

const trackingData = [
	{
		title: 'Ball speed',
		icon: '/sports_golf.svg',
	},
	{
		title: 'Swing path',
		icon: '/sports_golf.svg',
	},
	{
		title: 'Smash factor',
		icon: '/sports_golf.svg',
	},
	{
		title: 'Attack angle',
		icon: '/sports_golf.svg',
	},
	{
		title: 'Shot shape',
		icon: '/sports_golf.svg',
	},
	{
		title: 'Clubhead speed',
		icon: '/sports_golf.svg',
	},
	{
		title: 'Face angle',
		icon: '/sports_golf.svg',
	},
	{
		title: 'Carry & total distance',
		icon: '/sports_golf.svg',
	},
	{
		title: 'Apex height',
		icon: '/sports_golf.svg',
	},
	{
		title: 'Tempo',
		icon: '/sports_golf.svg',
	},
	{
		title: 'Launch angle',
		icon: '/sports_golf.svg',
	},
	{
		title: 'Spin rate',
		icon: '/sports_golf.svg',
	},
	{
		title: 'Ball direction',
		icon: '/sports_golf.svg',
	},
	{
		title: 'Club path',
		icon: '/sports_golf.svg',
	},
	{
		title: 'Lie angle',
		icon: '/sports_golf.svg',
	},
];

export const GolfzonAdvantagesSection = () => {
	return (
		<section className='w-full bg-[#102121] py-20 lg:py-32 relative overflow-hidden'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10'>
				{/* Section Header */}
				<div className='text-center mb-8 lg:mb-12'>
					<h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-black text-white leading-tight sm:leading-[0.9] lg:leading-[90px] tracking-wide mb-4 font-morganite uppercase'>
						WHAT DOES GOLFZON TRACK?
					</h2>
					<p className='text-lg sm:text-xl lg:text-[22px] font-bold text-[#7ddb8a] leading-relaxed tracking-wide max-w-4xl mx-auto font-gilroy uppercase'>
						GOLFZON SIMULATORS MEASURE EVERYTHING THAT MATTERS
					</p>
				</div>

				{/* Tracking Data Grid - Exactly matching the image layout */}
				{/* Tracking Data Grid - wrapped in a wide rounded dark container to match design */}
				<div className='w-full bg-[#0c1a1a] rounded-[26px] px-4 sm:px-6 lg:px-8 py-6 lg:py-8'>
					<div className='max-w-4xl mx-auto'>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8'>
							{/* Column 1 */}
							<div className='space-y-4'>
								<div className='flex items-center gap-2'>
									<img
										src='/sports_golf.svg'
										alt='Ball speed'
										className='w-5 h-5 opacity-80'
										style={{
											filter:
												'brightness(0) saturate(100%) invert(64%) sepia(85%) saturate(422%) hue-rotate(88deg) brightness(95%) contrast(87%)',
										}}
									/>
									<span className='text-sm lg:text-[15px] font-medium text-white font-gilroy'>
										Ball speed
									</span>
								</div>

								<div className='flex items-center gap-2'>
									<img
										src='/sports_golf.svg'
										alt='Swing path'
										className='w-5 h-5 opacity-80'
										style={{
											filter:
												'brightness(0) saturate(100%) invert(64%) sepia(85%) saturate(422%) hue-rotate(88deg) brightness(95%) contrast(87%)',
										}}
									/>
									<span className='text-sm lg:text-[15px] font-medium text-white font-gilroy'>
										Swing path
									</span>
								</div>

								<div className='flex items-center gap-2'>
									<img
										src='/sports_golf.svg'
										alt='Smash factor'
										className='w-5 h-5 opacity-80'
										style={{
											filter:
												'brightness(0) saturate(100%) invert(64%) sepia(85%) saturate(422%) hue-rotate(88deg) brightness(95%) contrast(87%)',
										}}
									/>
									<span className='text-sm lg:text-[15px] font-medium text-white font-gilroy'>
										Smash factor
									</span>
								</div>

								<div className='flex items-center gap-2'>
									<img
										src='/sports_golf.svg'
										alt='Attack angle'
										className='w-5 h-5 opacity-80'
										style={{
											filter:
												'brightness(0) saturate(100%) invert(64%) sepia(85%) saturate(422%) hue-rotate(88deg) brightness(95%) contrast(87%)',
										}}
									/>
									<span className='text-sm lg:text-[15px] font-medium text-white font-gilroy'>
										Attack angle
									</span>
								</div>

								<div className='flex items-center gap-2'>
									<img
										src='/sports_golf.svg'
										alt='Shot shape'
										className='w-5 h-5 opacity-80'
										style={{
											filter:
												'brightness(0) saturate(100%) invert(64%) sepia(85%) saturate(422%) hue-rotate(88deg) brightness(95%) contrast(87%)',
										}}
									/>
									<span className='text-sm lg:text-[15px] font-medium text-white font-gilroy'>
										Shot shape
									</span>
								</div>
							</div>

							{/* Column 2 */}
							<div className='space-y-4'>
								<div className='flex items-center gap-2'>
									<img
										src='/sports_golf.svg'
										alt='Clubhead speed'
										className='w-5 h-5 opacity-80'
										style={{
											filter:
												'brightness(0) saturate(100%) invert(64%) sepia(85%) saturate(422%) hue-rotate(88deg) brightness(95%) contrast(87%)',
										}}
									/>
									<span className='text-sm lg:text-[15px] font-medium text-white font-gilroy'>
										Clubhead speed
									</span>
								</div>

								<div className='flex items-center gap-2'>
									<img
										src='/sports_golf.svg'
										alt='Face angle'
										className='w-5 h-5 opacity-80'
										style={{
											filter:
												'brightness(0) saturate(100%) invert(64%) sepia(85%) saturate(422%) hue-rotate(88deg) brightness(95%) contrast(87%)',
										}}
									/>
									<span className='text-sm lg:text-[15px] font-medium text-white font-gilroy'>
										Face angle
									</span>
								</div>

								<div className='flex items-center gap-2'>
									<img
										src='/sports_golf.svg'
										alt='Carry & total distance'
										className='w-5 h-5 opacity-80'
										style={{
											filter:
												'brightness(0) saturate(100%) invert(64%) sepia(85%) saturate(422%) hue-rotate(88deg) brightness(95%) contrast(87%)',
										}}
									/>
									<span className='text-sm lg:text-[15px] font-medium text-white font-gilroy'>
										Carry & total distance
									</span>
								</div>

								<div className='flex items-center gap-2'>
									<img
										src='/sports_golf.svg'
										alt='Apex height'
										className='w-5 h-5 opacity-80'
										style={{
											filter:
												'brightness(0) saturate(100%) invert(64%) sepia(85%) saturate(422%) hue-rotate(88deg) brightness(95%) contrast(87%)',
										}}
									/>
									<span className='text-sm lg:text-[15px] font-medium text-white font-gilroy'>
										Apex height
									</span>
								</div>

								<div className='flex items-center gap-2'>
									<img
										src='/sports_golf.svg'
										alt='Tempo'
										className='w-5 h-5 opacity-80'
										style={{
											filter:
												'brightness(0) saturate(100%) invert(64%) sepia(85%) saturate(422%) hue-rotate(88deg) brightness(95%) contrast(87%)',
										}}
									/>
									<span className='text-sm lg:text-[15px] font-medium text-white font-gilroy'>
										Tempo
									</span>
								</div>
							</div>

							{/* Column 3 */}
							<div className='space-y-4'>
								<div className='flex items-center gap-2'>
									<img
										src='/sports_golf.svg'
										alt='Launch angle'
										className='w-5 h-5 opacity-80'
										style={{
											filter:
												'brightness(0) saturate(100%) invert(64%) sepia(85%) saturate(422%) hue-rotate(88deg) brightness(95%) contrast(87%)',
										}}
									/>
									<span className='text-sm lg:text-[15px] font-medium text-white font-gilroy'>
										Launch angle
									</span>
								</div>

								<div className='flex items-center gap-2'>
									<img
										src='/sports_golf.svg'
										alt='Spin rate'
										className='w-5 h-5 opacity-80'
										style={{
											filter:
												'brightness(0) saturate(100%) invert(64%) sepia(85%) saturate(422%) hue-rotate(88deg) brightness(95%) contrast(87%)',
										}}
									/>
									<span className='text-sm lg:text-[15px] font-medium text-white font-gilroy'>
										Spin rate
									</span>
								</div>

								<div className='flex items-center gap-2'>
									<img
										src='/sports_golf.svg'
										alt='Ball direction'
										className='w-5 h-5 opacity-80'
										style={{
											filter:
												'brightness(0) saturate(100%) invert(64%) sepia(85%) saturate(422%) hue-rotate(88deg) brightness(95%) contrast(87%)',
										}}
									/>
									<span className='text-sm lg:text-[15px] font-medium text-white font-gilroy'>
										Ball direction
									</span>
								</div>

								<div className='flex items-center gap-2'>
									<img
										src='/sports_golf.svg'
										alt='Club path'
										className='w-5 h-5 opacity-80'
										style={{
											filter:
												'brightness(0) saturate(100%) invert(64%) sepia(85%) saturate(422%) hue-rotate(88deg) brightness(95%) contrast(87%)',
										}}
									/>
									<span className='text-sm lg:text-[15px] font-medium text-white font-gilroy'>
										Club path
									</span>
								</div>

								<div className='flex items-center gap-2'>
									<img
										src='/sports_golf.svg'
										alt='Lie angle'
										className='w-5 h-5 opacity-80'
										style={{
											filter:
												'brightness(0) saturate(100%) invert(64%) sepia(85%) saturate(422%) hue-rotate(88deg) brightness(95%) contrast(87%)',
										}}
									/>
									<span className='text-sm lg:text-[15px] font-medium text-white font-gilroy'>
										Lie angle
									</span>
								</div>
							</div>
						</div>

						{/* "And many more" positioned at bottom right */}
						<div className='flex justify-end mt-6'>
							<div className='flex items-center gap-2'>
								<img
									src='/sports_golf.svg'
									alt='And many more'
									className='w-5 h-5 opacity-80'
									style={{
										filter:
											'brightness(0) saturate(100%) invert(77%) sepia(84%) saturate(396%) hue-rotate(88deg) brightness(95%) contrast(87%)',
									}}
								/>
								<span className='text-sm lg:text-[15px] font-medium text-[#7ddb8a] font-gilroy'>
									And many more
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
