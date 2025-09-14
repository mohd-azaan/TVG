// src/screens/EventsPage/sections/WhatsIncludedSection.jsx
// What's Included section with features grid and icons
// Pixel-perfect recreation of "What's Included?" section from Figma with feature icons
// RELEVANT FILES: EventsPage.jsx, styleguide.css, tailwind.config.js

import React from 'react';
import {
	Calendar,
	Utensils,
	MonitorSpeaker,
	HeadsetIcon,
	PartyPopper,
	DoorOpen,
	Plus,
	PlusCircle
} from 'lucide-react';

export const WhatsIncludedSection = () => {
	const features = [
		{
			icon: Calendar,
			title: 'Event planning support'
		},
		{
			icon: Utensils,
			title: 'Food & beverage service'
		},
		{
			icon: MonitorSpeaker,
			title: 'Golf bays with full access'
		},
		{
			icon: HeadsetIcon,
			title: 'On-site staff to help guests'
		},
		{
			icon: PartyPopper,
			title: 'Fun, inclusive setup for all skill levels'
		},
		{
			icon: DoorOpen,
			title: 'Private or semi-private spaces'
		},
		{
			icon: PlusCircle,
			title: 'Custom add-ons (tournaments, décor, merch, and more)'
		}
	];

	return (
		<section className='relative w-full min-h-[647px] bg-[#102121] overflow-hidden'>
			{/* Decorative background shape positioned exactly like Figma */}
			<div className='absolute top-[717.75px] left-[286.86px] opacity-20'>
				<div
					className='w-[2208px] h-[1862px] transform'
					style={{
						background: `url('/shape14-4.svg') no-repeat center`,
						backgroundSize: 'contain',
						mixBlendMode: 'screen'
					}}
				/>
			</div>

			{/* Main content container */}
			<div className='relative z-10 max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-0'>
				{/* Section title positioned exactly like Figma */}
				<div className='absolute top-[130px] left-[280px] w-[655px]'>
					<h2 className='font-TVG-typography-h1 font-[number:var(--TVG-typography-h1-font-weight)] text-[length:var(--TVG-typography-h1-font-size)] leading-[var(--TVG-typography-h1-line-height)] tracking-[var(--TVG-typography-h1-letter-spacing)] text-white [font-style:var(--TVG-typography-h1-font-style)] mb-[30px]'>
						What's Included?
					</h2>

					<p className='font-TVG-typography-h3 font-[number:var(--TVG-typography-h3-font-weight)] text-[length:var(--TVG-typography-h3-font-size)] leading-[var(--TVG-typography-h3-line-height)] tracking-[var(--TVG-typography-h3-letter-spacing)] text-white [font-style:var(--TVG-typography-h3-font-style)]'>
						We handle the details so you can <span className='uppercase'>ENJOY THE MOMENT</span>
					</p>
				</div>

				{/* Features grid positioned exactly like Figma */}
				<div className='absolute top-[300px] left-[280px] w-[1363px]'>
					<div className='grid grid-cols-3 gap-x-[56px] gap-y-[51px]'>
						{features.map((feature, index) => {
							const IconComponent = feature.icon;

							// Special handling for the last feature which spans two lines
							const isLastFeature = index === features.length - 1;

							return (
								<div
									key={index}
									className={`flex items-start gap-4 ${isLastFeature ? 'col-span-1 row-span-2' : ''}`}
								>
									{/* Icon container */}
									<div className='flex-shrink-0 w-[24px] h-[24px] flex items-center justify-center'>
										<IconComponent className='w-[24px] h-[24px] text-[#e3e3e3]' strokeWidth={1} />
									</div>

									{/* Feature text */}
									<div className={`flex-1 ${isLastFeature ? 'max-w-[370px]' : 'max-w-[370px]'}`}>
										<p className='font-TVG-typography-default font-[number:var(--TVG-typography-default-font-weight)] text-[length:var(--TVG-typography-default-font-size)] leading-[var(--TVG-typography-default-line-height)] tracking-[var(--TVG-typography-default-letter-spacing)] text-[#e3e3e3] [font-style:var(--TVG-typography-default-font-style)]'>
											{feature.title}
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
					<div className='space-y-4'>
						<h2 className='font-TVG-typography-h1 font-[number:var(--TVG-typography-h1-font-weight)] text-[clamp(36px,8vw,64px)] leading-[1.2] tracking-[var(--TVG-typography-h1-letter-spacing)] text-white [font-style:var(--TVG-typography-h1-font-style)]'>
							What's Included?
						</h2>

						<p className='font-TVG-typography-h3 font-[number:var(--TVG-typography-h3-font-weight)] text-[clamp(18px,4vw,28px)] leading-[1.3] tracking-[var(--TVG-typography-h3-letter-spacing)] text-white [font-style:var(--TVG-typography-h3-font-style)]'>
							We handle the details so you can <span className='uppercase'>ENJOY THE MOMENT</span>
						</p>
					</div>

					{/* Mobile features grid */}
					<div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
						{features.map((feature, index) => {
							const IconComponent = feature.icon;
							return (
								<div key={index} className='flex items-start gap-4'>
									{/* Icon container */}
									<div className='flex-shrink-0 w-[24px] h-[24px] flex items-center justify-center'>
										<IconComponent className='w-[24px] h-[24px] text-[#e3e3e3]' strokeWidth={1} />
									</div>

									{/* Feature text */}
									<div className='flex-1'>
										<p className='font-TVG-typography-default font-[number:var(--TVG-typography-default-font-weight)] text-[length:var(--TVG-typography-default-font-size)] leading-[var(--TVG-typography-default-line-height)] tracking-[var(--TVG-typography-default-letter-spacing)] text-[#e3e3e3] [font-style:var(--TVG-typography-default-font-style)]'>
											{feature.title}
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