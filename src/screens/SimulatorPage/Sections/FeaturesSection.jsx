// src/screens/SimulatorPage/Sections/FeaturesSection.jsx
// Features section displaying benefits and conveniences of the simulator service
// Shows "THE MOST CONVENIENT FORMS AND LOCATION" with three benefit boxes
// RELEVANT FILES: SimulatorPage.jsx, styleguide.css, tailwind.config.js

import React from 'react';

export const FeaturesSection = () => {
	const features = [
		{
			icon: '🏢',
			title: 'Professional Setup',
			description: 'State-of-the-art equipment and professional installation for the ultimate golf experience'
		},
		{
			icon: '🏠',
			title: 'Home Convenience',
			description: 'Play anytime, anywhere in the comfort of your own space without travel time'
		},
		{
			icon: '⚡',
			title: 'Instant Access',
			description: 'No waiting for tee times or weather delays. Perfect golf conditions 24/7'
		}
	];

	return (
		<section className='w-full bg-white py-16 lg:py-24'>
			<div className='max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10'>
				{/* Section Header */}
				<div className='text-center mb-12 lg:mb-16'>
					<h2 className="font-['Morganite',Helvetica] font-bold text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.1] text-[#1a1a1a] tracking-[-1px] max-w-4xl mx-auto">
						THE MOST CONVENIENT FORMS AND LOCATION
					</h2>
				</div>

				{/* Features Grid */}
				<div className='grid md:grid-cols-3 gap-8 lg:gap-12'>
					{features.map((feature, index) => (
						<div key={index} className='text-center group hover:transform hover:scale-105 transition-all duration-300'>
							{/* Feature Icon */}
							<div className='text-[48px] sm:text-[56px] lg:text-[64px] mb-6 group-hover:scale-110 transition-transform duration-300'>
								{feature.icon}
							</div>

							{/* Feature Title */}
							<h3 className='font-TVG-typography-h3 font-bold text-[24px] sm:text-[28px] lg:text-[32px] text-[#1a1a1a] mb-4 leading-[1.2]'>
								{feature.title}
							</h3>

							{/* Feature Description */}
							<p className='font-TVG-typography-default text-[16px] sm:text-[18px] leading-[1.6] text-[#666666] max-w-[300px] mx-auto'>
								{feature.description}
							</p>
						</div>
					))}
				</div>

				{/* Bottom spacing for visual separation */}
				<div className='mt-16 lg:mt-20 border-b border-gray-200'></div>
			</div>
		</section>
	);
};