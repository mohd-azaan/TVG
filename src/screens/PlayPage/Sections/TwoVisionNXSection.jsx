// src/screens/PlayPage/Sections/TwoVisionNXSection.jsx
// TwoVisionNX technology section with 5 alternating feature cards
// Showcases advanced golf simulator technology features with alternating left-right layout
// RELEVANT FILES: PlayPage.jsx, styleguide.css, tailwind.config.js, GolfzonInfoSection.jsx

import React from 'react';

export const TwoVisionNXSection = () => {
	const features = [
		{
			title: 'Precise Ball Tracking',
			description: 'Advanced dual-camera system captures ball flight data with millimeter precision, tracking spin, speed, and trajectory in real-time for accurate performance analysis.',
			icon: '🎯',
			placeholder: 'Ball tracking visualization'
		},
		{
			title: 'Swing Analysis Technology',
			description: 'Comprehensive swing analysis provides detailed feedback on club path, face angle, and impact position, helping golfers improve their technique with professional-grade data.',
			icon: '📈',
			placeholder: 'Swing analysis interface'
		},
		{
			title: 'Realistic Course Simulation',
			description: 'Play on authentic recreations of world-famous golf courses with accurate terrain, weather conditions, and course management challenges that mirror real-world play.',
			icon: '🏌️',
			placeholder: 'Course simulation view'
		},
		{
			title: 'Real-time Performance Data',
			description: 'Instant feedback on every shot including distance, accuracy, club head speed, and ball spin, displayed through intuitive graphics and detailed statistics.',
			icon: '⚡',
			placeholder: 'Performance metrics display'
		},
		{
			title: 'Professional Training Tools',
			description: 'Access professional-grade training programs, skill challenges, and practice modes designed to improve specific aspects of your game with measurable progress tracking.',
			icon: '🏆',
			placeholder: 'Training interface'
		}
	];

	return (
		<section className='relative w-full min-h-[2400px] bg-[#272727] overflow-hidden'>
			{/* Decorative background shapes */}
			<div className='absolute top-[400px] left-[200px] opacity-25'>
				<div
					className='w-[1600px] h-[1400px] transform rotate-[25deg]'
					style={{
						background: `url('/shape14-2.svg') no-repeat center`,
						backgroundSize: 'contain',
						mixBlendMode: 'screen'
					}}
				/>
			</div>

			{/* Container positioned according to design layout */}
			<div className='relative z-10 max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-0'>
				{/* Section title */}
				<div className='absolute top-[100px] left-1/2 transform -translate-x-1/2 w-[800px] text-center'>
					<h2 className='font-TVG-typography-h2 font-[number:var(--TVG-typography-h2-font-weight)] text-[length:var(--TVG-typography-h2-font-size)] leading-[var(--TVG-typography-h2-line-height)] tracking-[var(--TVG-typography-h2-letter-spacing)] text-white [font-style:var(--TVG-typography-h2-font-style)] uppercase'>
						TwoVisionNX Technology
					</h2>
				</div>

				{/* Subtitle */}
				<div className='absolute top-[180px] left-1/2 transform -translate-x-1/2 w-[600px] text-center'>
					<p className='font-TVG-typography-default font-[number:var(--TVG-typography-default-font-weight)] text-[length:var(--TVG-typography-default-font-size)] leading-[var(--TVG-typography-default-line-height)] tracking-[var(--TVG-typography-default-letter-spacing)] text-[#d1d3d4] [font-style:var(--TVG-typography-default-font-style)]'>
						Experience the most advanced golf simulation technology with precision sensors and real-time analysis.
					</p>
				</div>

				{/* Feature cards with alternating layout */}
				<div className='absolute top-[300px] left-0 w-full space-y-[120px]'>
					{features.map((feature, index) => {
						const isEven = index % 2 === 0;
						return (
							<div
								key={index}
								className={`flex items-center gap-[80px] ${
									isEven ? 'justify-start ml-[280px]' : 'justify-end mr-[280px] flex-row-reverse'
								}`}
							>
								{/* Content section */}
								<div className='w-[500px] space-y-6'>
									<div className='flex items-center gap-4'>
										<div className='w-[60px] h-[60px] bg-[#009444] rounded-full flex items-center justify-center text-3xl'>
											{feature.icon}
										</div>
										<h3 className='font-TVG-typography-h4 font-[number:var(--TVG-typography-h4-font-weight)] text-[28px] leading-normal tracking-[var(--TVG-typography-h4-letter-spacing)] text-white [font-style:var(--TVG-typography-h4-font-style)] uppercase'>
											{feature.title}
										</h3>
									</div>
									<p className='font-TVG-typography-default font-[number:var(--TVG-typography-default-font-weight)] text-[length:var(--TVG-typography-default-font-size)] leading-[var(--TVG-typography-default-line-height)] tracking-[var(--TVG-typography-default-letter-spacing)] text-[#d1d3d4] [font-style:var(--TVG-typography-default-font-style)]'>
										{feature.description}
									</p>
								</div>

								{/* Image placeholder */}
								<div className='w-[580px] h-[320px]'>
									<div className='w-full h-full bg-gradient-to-br from-[#006f33] to-[#004a22] rounded-[20px] flex items-center justify-center shadow-xl'>
										<div className='text-center text-white space-y-3'>
											<div className='text-4xl'>{feature.icon}</div>
											<div className='text-xl font-semibold'>{feature.title}</div>
											<div className='text-sm opacity-75 max-w-[300px]'>
												{feature.placeholder}
											</div>
											<div className='text-xs opacity-60'>Technology Demo Placeholder</div>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>

			{/* Mobile responsive layout */}
			<div className='block lg:hidden px-4 sm:px-6 py-16'>
				<div className='space-y-12 max-w-[600px] mx-auto'>
					{/* Title */}
					<div className='text-center space-y-6'>
						<h2 className='font-TVG-typography-h2 font-[number:var(--TVG-typography-h2-font-weight)] text-[clamp(32px,8vw,64px)] leading-[1.1] tracking-[var(--TVG-typography-h2-letter-spacing)] text-white [font-style:var(--TVG-typography-h2-font-style)] uppercase'>
							TwoVisionNX Technology
						</h2>
						<p className='font-TVG-typography-default font-[number:var(--TVG-typography-default-font-weight)] text-[18px] leading-[var(--TVG-typography-default-line-height)] tracking-[var(--TVG-typography-default-letter-spacing)] text-[#d1d3d4] [font-style:var(--TVG-typography-default-font-style)]'>
							Experience the most advanced golf simulation technology with precision sensors and real-time analysis.
						</p>
					</div>

					{/* Mobile feature cards */}
					<div className='space-y-8'>
						{features.map((feature, index) => (
							<div key={index} className='bg-[#102121] rounded-[20px] p-6 space-y-6'>
								{/* Mobile image */}
								<div className='w-full aspect-[16/10]'>
									<div className='w-full h-full bg-gradient-to-br from-[#006f33] to-[#004a22] rounded-[20px] flex items-center justify-center shadow-xl'>
										<div className='text-center text-white space-y-2'>
											<div className='text-3xl'>{feature.icon}</div>
											<div className='text-lg font-semibold'>{feature.title}</div>
											<div className='text-sm opacity-75 max-w-[250px]'>
												{feature.placeholder}
											</div>
											<div className='text-xs opacity-60'>Demo Placeholder</div>
										</div>
									</div>
								</div>

								{/* Mobile content */}
								<div className='space-y-4'>
									<div className='flex items-center gap-3'>
										<div className='w-[50px] h-[50px] bg-[#009444] rounded-full flex items-center justify-center text-2xl'>
											{feature.icon}
										</div>
										<h3 className='font-TVG-typography-h4 font-[number:var(--TVG-typography-h4-font-weight)] text-[clamp(20px,5vw,24px)] leading-normal tracking-[var(--TVG-typography-h4-letter-spacing)] text-white [font-style:var(--TVG-typography-h4-font-style)] uppercase'>
											{feature.title}
										</h3>
									</div>
									<p className='font-TVG-typography-default font-[number:var(--TVG-typography-default-font-weight)] text-[18px] leading-[var(--TVG-typography-default-line-height)] tracking-[var(--TVG-typography-default-letter-spacing)] text-[#d1d3d4] [font-style:var(--TVG-typography-default-font-style)]'>
										{feature.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};