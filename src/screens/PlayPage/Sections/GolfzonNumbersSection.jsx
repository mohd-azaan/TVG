// src/screens/PlayPage/Sections/GolfzonNumbersSection.jsx
// Golfzon statistics and numbers section with impressive achievements grid
// Grid layout showcasing Golfzon's global reach and technology achievements
// RELEVANT FILES: PlayPage.jsx, styleguide.css, tailwind.config.js, TwoVisionNXSection.jsx

import React from 'react';

export const GolfzonNumbersSection = () => {
	const statistics = [
		{
			number: '10M+',
			label: 'Golfers Worldwide',
			description: 'Players trust Golfzon technology',
			icon: '👥'
		},
		{
			number: '40+',
			label: 'Countries',
			description: 'Global presence across continents',
			icon: '🌍'
		},
		{
			number: '200+',
			label: 'Golf Courses',
			description: 'Authentic course recreations',
			icon: '⛳'
		},
		{
			number: '99.9%',
			label: 'Accuracy Rate',
			description: 'Precision in ball tracking',
			icon: '🎯'
		},
		{
			number: '30+',
			label: 'Years Experience',
			description: 'Industry-leading innovation',
			icon: '🏆'
		},
		{
			number: '15,000+',
			label: 'Installations',
			description: 'Golf simulators worldwide',
			icon: '📊'
		}
	];

	return (
		<section className='relative w-full min-h-[900px] bg-[#006f33] overflow-hidden'>
			{/* Decorative background elements */}
			<div className='absolute top-[200px] left-[300px] opacity-20'>
				<div
					className='w-[1400px] h-[800px] transform rotate-[-10deg]'
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
						Golfzon by the Numbers
					</h2>
				</div>

				{/* Subtitle */}
				<div className='absolute top-[180px] left-1/2 transform -translate-x-1/2 w-[600px] text-center'>
					<p className='font-TVG-typography-default font-[number:var(--TVG-typography-default-font-weight)] text-[length:var(--TVG-typography-default-font-size)] leading-[var(--TVG-typography-default-line-height)] tracking-[var(--TVG-typography-default-letter-spacing)] text-[#e6f7e6] [font-style:var(--TVG-typography-default-font-style)]'>
						Trusted by millions of golfers worldwide, Golfzon leads the industry in golf simulation technology.
					</p>
				</div>

				{/* Statistics grid */}
				<div className='absolute top-[320px] left-[280px] w-[1360px]'>
					<div className='grid grid-cols-3 gap-[40px]'>
						{statistics.map((stat, index) => (
							<div
								key={index}
								className='bg-white/10 backdrop-blur-sm rounded-[20px] p-[40px] text-center space-y-4 hover:bg-white/15 transition-colors'
							>
								{/* Icon */}
								<div className='text-5xl mb-4'>
									{stat.icon}
								</div>

								{/* Number */}
								<div className='font-TVG-typography-hero-title font-[number:var(--TVG-typography-hero-title-font-weight)] text-[64px] leading-[1] tracking-[var(--TVG-typography-hero-title-letter-spacing)] text-white [font-style:var(--TVG-typography-hero-title-font-style)]'>
									{stat.number}
								</div>

								{/* Label */}
								<div className='font-TVG-typography-h4 font-[number:var(--TVG-typography-h4-font-weight)] text-[20px] leading-normal tracking-[var(--TVG-typography-h4-letter-spacing)] text-white [font-style:var(--TVG-typography-h4-font-style)] uppercase'>
									{stat.label}
								</div>

								{/* Description */}
								<div className='font-TVG-typography-default font-[number:var(--TVG-typography-default-font-weight)] text-[length:var(--TVG-typography-default-font-size)] leading-[var(--TVG-typography-default-line-height)] tracking-[var(--TVG-typography-default-letter-spacing)] text-[#e6f7e6] [font-style:var(--TVG-typography-default-font-style)]'>
									{stat.description}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Mobile responsive layout */}
			<div className='block lg:hidden px-4 sm:px-6 py-16'>
				<div className='space-y-12 max-w-[600px] mx-auto'>
					{/* Title */}
					<div className='text-center space-y-6'>
						<h2 className='font-TVG-typography-h2 font-[number:var(--TVG-typography-h2-font-weight)] text-[clamp(32px,8vw,64px)] leading-[1.1] tracking-[var(--TVG-typography-h2-letter-spacing)] text-white [font-style:var(--TVG-typography-h2-font-style)] uppercase'>
							Golfzon by the Numbers
						</h2>
						<p className='font-TVG-typography-default font-[number:var(--TVG-typography-default-font-weight)] text-[18px] leading-[var(--TVG-typography-default-line-height)] tracking-[var(--TVG-typography-default-letter-spacing)] text-[#e6f7e6] [font-style:var(--TVG-typography-default-font-style)]'>
							Trusted by millions of golfers worldwide, Golfzon leads the industry in golf simulation technology.
						</p>
					</div>

					{/* Mobile statistics grid */}
					<div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
						{statistics.map((stat, index) => (
							<div
								key={index}
								className='bg-white/10 backdrop-blur-sm rounded-[16px] p-6 text-center space-y-3'
							>
								{/* Icon */}
								<div className='text-3xl mb-2'>
									{stat.icon}
								</div>

								{/* Number */}
								<div className='font-TVG-typography-hero-title font-[number:var(--TVG-typography-hero-title-font-weight)] text-[clamp(40px,8vw,56px)] leading-[1] tracking-[var(--TVG-typography-hero-title-letter-spacing)] text-white [font-style:var(--TVG-typography-hero-title-font-style)]'>
									{stat.number}
								</div>

								{/* Label */}
								<div className='font-TVG-typography-h4 font-[number:var(--TVG-typography-h4-font-weight)] text-[18px] leading-normal tracking-[var(--TVG-typography-h4-letter-spacing)] text-white [font-style:var(--TVG-typography-h4-font-style)] uppercase'>
									{stat.label}
								</div>

								{/* Description */}
								<div className='font-TVG-typography-default font-[number:var(--TVG-typography-default-font-weight)] text-[16px] leading-[var(--TVG-typography-default-line-height)] tracking-[var(--TVG-typography-default-letter-spacing)] text-[#e6f7e6] [font-style:var(--TVG-typography-default-font-style)]'>
									{stat.description}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};