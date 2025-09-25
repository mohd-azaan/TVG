// src/screens/SimulatorPage/Sections/FeaturesSection.jsx
// Features section displaying advanced golf technology benefits
// Shows "THE MOST ADVANCED INDOOR GOLF TECH ON THE PLANET" with three feature boxes
// RELEVANT FILES: SimulatorPage.jsx, styleguide.css, tailwind.config.js

import React from 'react';

export const FeaturesSection = () => {
	const features = [
		{
			icon: '/speed_24dp.svg',
			title: 'ZERO-LATENCY',
			description:
				'These simulators mimic real-world terrain, track balls in real-time with zero latency, and look FIRE.',
		},
		{
			icon: '/public_24dp.svg',
			title: 'TRUSTED WORLDWIDE',
			description:
				"Golfzon's technology is trusted by tour players, coaches, and venues in over 60 countries.",
		},
		{
			icon: '/sports_golf.svg',
			title: 'REALISM & ACCURACY',
			description:
				'Every shot is captured. Every swing analyzed. Every game elevated.',
		},
	];

	return (
		<section className='w-full bg-[#F6F6F6] py-20 lg:py-24'>
			<div className='max-w-[1200px] mx-auto px-8 lg:px-16'>
				{/* Section Header */}
				<div className='text-center mb-16 lg:mb-20'>
					<h2 className='font-morganite font-black text-[clamp(64px,6vw,80px)] leading-[1.1] text-[#1a1a1a] tracking-[1px] max-w-5xl mx-auto uppercase'>
						THE MOST ADVANCED INDOOR
						<br />
						GOLF TECH ON THE PLANET
					</h2>
				</div>

				{/* Features Grid */}
				<div className='grid md:grid-cols-3 gap-8 lg:gap-10'>
					{features.map((feature, index) => (
						<div
							key={index}
							className='bg-[#EDEDED] rounded-[20px] p-6 lg:p-8 shadow-sm flex flex-col'
						>
							{/* Top block: icon + title - slightly reduced height to decrease card height */}
							<div className='min-h-[72px] lg:min-h-[80px] flex flex-col items-start'>
								<div className='mb-3'>
									<img
										src={feature.icon}
										alt={feature.title}
										className='w-[44px] h-[44px]'
									/>
								</div>

								<h3 className='font-gilroy font-bold text-[19px] lg:text-[20px] text-[#0b0b0b] mb-0 leading-[1.12] tracking-[0.4px] uppercase text-left'>
									{feature.title}
								</h3>
							</div>

							{/* Description block - aligned start and separated */}
							<div className='mt-3'>
								<p className='font-gilroy font-medium text-[15px] lg:text-[16px] leading-[1.45] text-[#7b7b7b] max-w-[520px]'>
									{feature.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
