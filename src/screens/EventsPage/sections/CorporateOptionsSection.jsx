// src/screens/EventsPage/sections/CorporateOptionsSection.jsx
// Corporate Options section with corporate event types grid
// Pixel-perfect recreation of "Corporate Event Options" section from Figma
// RELEVANT FILES: EventsPage.jsx, styleguide.css, tailwind.config.js

import React from 'react';
import { Users, PartyPopper, Handshake, Award, Network, Building2, Rocket, Trophy, Target } from 'lucide-react';

export const CorporateOptionsSection = () => {
	const corporateOptions = [
		{
			icon: Users,
			title: 'Team Building Experiences'
		},
		{
			icon: PartyPopper,
			title: 'Work Parties & Socials'
		},
		{
			icon: Handshake,
			title: 'Client Entertainment'
		},
		{
			icon: Award,
			title: 'Employee Recognition Events'
		},
		{
			icon: Network,
			title: 'Networking Nights'
		},
		{
			icon: Building2,
			title: 'Exclusive Meeting Space'
		},
		{
			icon: Rocket,
			title: 'Product Launches'
		},
		{
			icon: Trophy,
			title: 'Tournaments & Fundraisers'
		},
		{
			icon: Target,
			title: 'Golf Days'
		}
	];

	return (
		<section className='relative w-full min-h-[584px] bg-white overflow-hidden'>
			{/* Main content container */}
			<div className='relative max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-0'>
				{/* Section title positioned exactly like Figma */}
				<div className='absolute top-[661px] left-[280px] w-[655px]'>
					<h2 className='font-TVG-typography-h1 font-[number:var(--TVG-typography-h1-font-weight)] text-[length:var(--TVG-typography-h1-font-size)] leading-[var(--TVG-typography-h1-line-height)] tracking-[var(--TVG-typography-h1-letter-spacing)] text-[#272727] [font-style:var(--TVG-typography-h1-font-style)]'>
						Corporate Event Options
					</h2>
				</div>

				{/* Corporate options grid positioned exactly like Figma */}
				<div className='absolute top-[791px] left-[280px] w-[1360px] h-[193px]'>
					<div className='grid grid-cols-3 gap-x-[56px] gap-y-[48px] h-full'>
						{corporateOptions.map((option, index) => {
							const IconComponent = option.icon;

							return (
								<div key={index} className='flex items-center gap-4 h-[26.84px]'>
									{/* Icon container - exact size from Figma */}
									<div className='flex-shrink-0 w-[26.84px] h-[26.84px] flex items-center justify-center'>
										<IconComponent className='w-[24px] h-[24px] text-[#e3e3e3]' strokeWidth={1} />
									</div>

									{/* Option text - exact positioning from Figma */}
									<div className='flex-1 max-w-[365px] flex items-center h-full'>
										<p className='font-TVG-typography-default font-[number:var(--TVG-typography-default-font-weight)] text-[length:var(--TVG-typography-default-font-size)] leading-[var(--TVG-typography-default-line-height)] tracking-[var(--TVG-typography-default-letter-spacing)] text-[#272727] [font-style:var(--TVG-typography-default-font-style)]'>
											{option.title}
										</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>

			{/* Responsive adjustments for smaller screens */}
			<div className='block lg:hidden relative z-10 px-4 sm:px-6 pt-16 pb-16'>
				{/* Mobile layout */}
				<div className='space-y-8'>
					<div>
						<h2 className='font-TVG-typography-h1 font-[number:var(--TVG-typography-h1-font-weight)] text-[clamp(36px,8vw,64px)] leading-[1.2] tracking-[var(--TVG-typography-h1-letter-spacing)] text-[#272727] [font-style:var(--TVG-typography-h1-font-style)]'>
							Corporate Event Options
						</h2>
					</div>

					{/* Mobile options grid */}
					<div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
						{corporateOptions.map((option, index) => {
							const IconComponent = option.icon;
							return (
								<div key={index} className='flex items-center gap-4'>
									{/* Icon container */}
									<div className='flex-shrink-0 w-[24px] h-[24px] flex items-center justify-center'>
										<IconComponent className='w-[24px] h-[24px] text-[#666666]' strokeWidth={1} />
									</div>

									{/* Option text */}
									<div className='flex-1'>
										<p className='font-TVG-typography-default font-[number:var(--TVG-typography-default-font-weight)] text-[length:var(--TVG-typography-default-font-size)] leading-[var(--TVG-typography-default-line-height)] tracking-[var(--TVG-typography-default-letter-spacing)] text-[#272727] [font-style:var(--TVG-typography-default-font-style)]'>
											{option.title}
										</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};