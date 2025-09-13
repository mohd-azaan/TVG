// src/screens/AboutPage/Sections/FeaturesSection.jsx
// Features section with main headline, feature list, and comprehensive amenities grid
// Pixel-perfect recreation of Figma design with proper icon placement and grid layout
// RELEVANT FILES: AboutPage.jsx, styleguide.css, tailwind.config.js

import React from 'react';

// Icon components for features (simplified SVG icons)
const GolfIcon = ({ className = '' }) => (
	<svg className={`w-full h-full ${className}`} viewBox='0 0 24 24' fill='currentColor'>
		<path d='M12.5,3.5C13.6,3.5 14.5,4.4 14.5,5.5C14.5,6.6 13.6,7.5 12.5,7.5C11.4,7.5 10.5,6.6 10.5,5.5C10.5,4.4 11.4,3.5 12.5,3.5M10.5,8.5H14.5L12.75,11.25L15,13.5V22H13V15L10.5,12.5V22H8.5V8.5Z'/>
	</svg>
);

const FeatureIcon = ({ icon, className = '' }) => {
	const icons = {
		golf: <GolfIcon className={className} />,
		parking: (
			<svg className={`w-full h-full ${className}`} viewBox='0 0 24 24' fill='currentColor'>
				<path d='M6 19V5H10.5C12.43 5 14 6.57 14 8.5S12.43 12 10.5 12H8V19H6M8 7V10H10.5C11.33 10 12 9.33 12 8.5S11.33 7 10.5 7H8Z'/>
			</svg>
		),
		payment: (
			<svg className={`w-full h-full ${className}`} viewBox='0 0 24 24' fill='currentColor'>
				<path d='M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M20 11H4V8H20Z'/>
			</svg>
		),
		event: (
			<svg className={`w-full h-full ${className}`} viewBox='0 0 24 24' fill='currentColor'>
				<path d='M12 6C13.11 6 14 6.89 14 8S13.11 10 12 10 10 9.11 10 8 10.89 6 12 6M12 2C17.39 2 22 6.61 22 12S17.39 22 12 22 2 17.39 2 12 6.61 2 12 2M12 20C16.28 20 20 16.28 20 12S16.28 4 12 4 4 7.72 4 12 7.72 20 12 20Z'/>
			</svg>
		),
		screen: (
			<svg className={`w-full h-full ${className}`} viewBox='0 0 24 24' fill='currentColor'>
				<path d='M21 16V4H3V16H21M21 2C22.11 2 23 2.89 23 4V16C23 17.11 22.11 18 21 18H14L16 21V22H8V21L10 18H3C1.89 18 1 17.11 1 16V4C1 2.89 1.89 2 3 2H21Z'/>
			</svg>
		),
		course: (
			<svg className={`w-full h-full ${className}`} viewBox='0 0 24 24' fill='currentColor'>
				<path d='M6.63 14.64L12 17.36L17.37 14.64L12 11.93L6.63 14.64M17.37 10.08L12 7.36L6.63 10.08L12 12.79L17.37 10.08Z'/>
			</svg>
		),
		club: (
			<svg className={`w-full h-full ${className}`} viewBox='0 0 24 24' fill='currentColor'>
				<path d='M7 2V13H10V22H14V13H17V2H7Z'/>
			</svg>
		),
		game: (
			<svg className={`w-full h-full ${className}`} viewBox='0 0 24 24' fill='currentColor'>
				<path d='M7.97 16L5 19C4.67 19.3 4.23 19.5 3.75 19.5S2.83 19.3 2.5 19C1.83 18.35 1.83 17.25 2.5 16.5L5.5 13.5C6.17 12.83 7.33 12.83 8 13.5C8.67 14.17 8.67 15.33 8 16H7.97M16 7.97L19 5C19.3 4.67 19.5 4.23 19.5 3.75S19.3 2.83 19 2.5C18.35 1.83 17.25 1.83 16.5 2.5L13.5 5.5C12.83 6.17 12.83 7.33 13.5 8C14.17 8.67 15.33 8.67 16 8V7.97Z'/>
			</svg>
		),
		lesson: (
			<svg className={`w-full h-full ${className}`} viewBox='0 0 24 24' fill='currentColor'>
				<path d='M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z'/>
			</svg>
		),
		restaurant: (
			<svg className={`w-full h-full ${className}`} viewBox='0 0 24 24' fill='currentColor'>
				<path d='M8.1 13.34L2.91 8.15C2.35 7.59 2.35 6.69 2.91 6.13C3.47 5.57 4.37 5.57 4.93 6.13L10.12 11.32L8.1 13.34M14.88 11.53C16.26 12.91 16.26 15.16 14.88 16.54L14.19 17.23L12.17 15.21L12.86 14.52C13.42 13.96 13.42 13.06 12.86 12.5C12.3 11.94 11.4 11.94 10.84 12.5L10.15 13.19L8.13 11.17L8.82 10.48C10.2 9.1 12.45 9.1 13.83 10.48L14.88 11.53M12.17 15.21L15.46 18.5C16.02 19.06 16.02 19.96 15.46 20.52C14.9 21.08 14 21.08 13.44 20.52L10.15 17.23L12.17 15.21Z'/>
			</svg>
		),
		wifi: (
			<svg className={`w-full h-full ${className}`} viewBox='0 0 24 24' fill='currentColor'>
				<path d='M1 9L3 11C7.97 6.03 16.03 6.03 21 11L23 9C16.93 2.93 7.07 2.93 1 9M5 13L7 15C9.76 12.24 14.24 12.24 17 15L19 13C14.14 8.14 9.86 8.14 5 13M9 17L11 19C11.55 18.45 12.45 18.45 13 19L15 17C13.34 15.34 10.66 15.34 9 17Z'/>
			</svg>
		),
		vr: (
			<svg className={`w-full h-full ${className}`} viewBox='0 0 24 24' fill='currentColor'>
				<path d='M5 3C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.11 21 21 20.1 21 19V5C21 3.9 20.11 3 19 3H5M7.5 6C8.33 6 9 6.67 9 7.5S8.33 9 7.5 9 6 8.33 6 7.5 6.67 6 7.5 6M16.5 6C17.33 6 18 6.67 18 7.5S17.33 9 16.5 9 15 8.33 15 7.5 15.67 6 16.5 6Z'/>
			</svg>
		),
		shield: (
			<svg className={`w-full h-full ${className}`} viewBox='0 0 24 24' fill='currentColor'>
				<path d='M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.1 16,12.7V16.2C16,16.8 15.4,17.3 14.8,17.3H9.2C8.6,17.3 8,16.8 8,16.2V12.7C8,12.1 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z'/>
			</svg>
		),
		stairs: (
			<svg className={`w-full h-full ${className}`} viewBox='0 0 24 24' fill='currentColor'>
				<path d='M15,5V7H13V9H11V11H9V13H7V15H5V17H15V15H17V13H19V11H21V9H17V7H15V5Z'/>
			</svg>
		)
	};

	return icons[icon] || icons.golf;
};

export const FeaturesSection = () => {
	const forYouFeatures = [
		"For people curious about golf but unsure where to start.",
		"For players looking to sharpen their swing.",
		"For hosts planning birthdays, parties, or big client events.",
		"For anyone who wants a different kind of night out.",
		"The game is just the beginning.",
		"The experience is what keeps people coming back."
	];

	const amenityFeatures = [
		{ icon: 'stairs', text: '2 Floors' },
		{ icon: 'shield', text: '5 All-Weather Hitting Bays' },
		{ icon: 'vr', text: 'VIP Private Screening' },
		{ icon: 'wifi', text: 'Free Wifi' },
		{ icon: 'restaurant', text: 'Restaurant Partners' },
		{ icon: 'lesson', text: 'Golf Lessons' },
		{ icon: 'game', text: 'Junior Golf Arcade Games' },
		{ icon: 'club', text: 'Rental Clubs' },
		{ icon: 'course', text: '275+ Golf Courses' },
		{ icon: 'screen', text: 'Live Sports On Screens' },
		{ icon: 'screen', text: 'Screens Advertising' },
		{ icon: 'event', text: 'Private Event Spaces' },
		{ icon: 'payment', text: 'Card/Contactless Payments Only' },
		{ icon: 'parking', text: 'On-Site Basement Parking' },
		{ icon: 'parking', text: 'VIP Paid Parking' }
	];

	return (
		<section className='relative w-full min-h-[1455px] bg-[#102121]'>
			{/* Hero image positioned exactly like Figma */}
			<div className='absolute top-[130px] left-[1027px] w-[613px] h-[525px] rounded-[30px] overflow-hidden'>
				<img
					className='w-full h-full object-cover'
					alt='Indoor golf facility overview'
					src='/indoor-golf-1.png'
				/>
			</div>

			{/* Main headline section */}
			<div className='absolute top-[130px] left-[280px] w-[655px]'>
				<h2 className='font-TVG-typography-h2 font-[number:var(--TVG-typography-h2-font-weight)] text-[length:var(--TVG-typography-h2-font-size)] leading-[var(--TVG-typography-h2-line-height)] tracking-[var(--TVG-typography-h2-letter-spacing)] text-white [font-style:var(--TVG-typography-h2-font-style)] uppercase'>
					<span className='text-white'>Not a Golfer Yet?</span>
					<br />
					<span className='text-[#009444]'>That's the Point</span>
				</h2>
			</div>

			{/* Tagline */}
			<div className='absolute top-[308px] left-[280px] w-[542px]'>
				<h3 className='font-TVG-typography-tagline font-[number:var(--TVG-typography-tagline-font-weight)] text-[length:var(--TVG-typography-tagline-font-size)] leading-[var(--TVG-typography-tagline-line-height)] tracking-[var(--TVG-typography-tagline-letter-spacing)] text-[#7ddb8a] [font-style:var(--TVG-typography-tagline-font-style)] uppercase'>
					We built The Virtual Greens for you
				</h3>
			</div>

			{/* "For You" features list */}
			<div className='absolute top-[389px] left-[279px] w-[649px] space-y-10'>
				{forYouFeatures.map((feature, index) => (
					<div key={index} className='flex items-center gap-12'>
						<div className='flex-shrink-0 w-[30px] h-[30px] text-[#dedede]'>
							<FeatureIcon icon='golf' />
						</div>
						<p className='font-TVG-typography-default font-[number:var(--TVG-typography-default-font-weight)] text-[length:var(--TVG-typography-default-font-size)] leading-[var(--TVG-typography-default-line-height)] tracking-[var(--TVG-typography-default-letter-spacing)] text-white [font-style:var(--TVG-typography-default-font-style)] flex-1'>
							{feature}
						</p>
					</div>
				))}
			</div>

			{/* Features and Amenities title */}
			<div className='absolute top-[805px] left-[290px] w-[755px]'>
				<h2 className='font-TVG-typography-h2 font-[number:var(--TVG-typography-h2-font-weight)] text-[length:var(--TVG-typography-h2-font-size)] leading-[var(--TVG-typography-h2-line-height)] tracking-[var(--TVG-typography-h2-letter-spacing)] [font-style:var(--TVG-typography-h2-font-style)] uppercase'>
					<span className='text-white'>Features and </span>
					<span className='text-[#009444]'>Amenities</span>
				</h2>
			</div>

			{/* Amenities grid */}
			<div className='absolute top-[923px] left-[280px] w-[1363px] h-[378px] bg-[#0c1a1a] rounded-[30px] p-8'>
				<div className='grid grid-cols-3 gap-x-[54px] gap-y-[50px] h-full'>
					{amenityFeatures.map((amenity, index) => (
						<div key={index} className='flex items-center gap-4'>
							<div className='flex-shrink-0 w-6 h-6 text-[#dedede]'>
								<FeatureIcon icon={amenity.icon} />
							</div>
							<span className='font-TVG-typography-default font-[number:var(--TVG-typography-default-font-weight)] text-[length:var(--TVG-typography-default-font-size)] leading-[var(--TVG-typography-default-line-height)] tracking-[var(--TVG-typography-default-letter-spacing)] text-white [font-style:var(--TVG-typography-default-font-style)]'>
								{amenity.text}
							</span>
						</div>
					))}
				</div>

				{/* Virtual Tour CTA Button */}
				<div className='absolute bottom-[32px] left-1/2 transform -translate-x-1/2'>
					<button className='bg-[#0c1a1a] hover:bg-[#1a2828] transition-colors rounded-[50px] px-[30px] py-[7px] flex items-center gap-2.5 border border-[#009444]'>
						<div className='w-[30px] h-[30px] text-[#dedede]'>
							<FeatureIcon icon='vr' />
						</div>
						<span className='font-TVG-typography-button font-[number:var(--TVG-typography-button-font-weight)] text-[length:var(--TVG-typography-button-font-size)] leading-[var(--TVG-typography-button-line-height)] tracking-[var(--TVG-typography-button-letter-spacing)] text-[#009444] [font-style:var(--TVG-typography-button-font-style)] uppercase text-center whitespace-nowrap'>
							Virtual Tour
						</span>
					</button>
				</div>
			</div>

			{/* Mobile responsive layout */}
			<div className='block lg:hidden px-4 sm:px-6 py-16'>
				<div className='space-y-12 max-w-[600px] mx-auto'>
					<div className='text-center space-y-6'>
						<h2 className='font-TVG-typography-h2 font-[number:var(--TVG-typography-h2-font-weight)] text-[clamp(32px,8vw,96px)] leading-[1.1] tracking-[var(--TVG-typography-h2-letter-spacing)] [font-style:var(--TVG-typography-h2-font-style)] uppercase'>
							<span className='text-white'>Not a Golfer Yet?</span>
							<br />
							<span className='text-[#009444]'>That's the Point</span>
						</h2>
						<h3 className='font-TVG-typography-tagline font-[number:var(--TVG-typography-tagline-font-weight)] text-[length:var(--TVG-typography-tagline-font-size)] leading-[var(--TVG-typography-tagline-line-height)] tracking-[var(--TVG-typography-tagline-letter-spacing)] text-[#7ddb8a] [font-style:var(--TVG-typography-tagline-font-style)] uppercase'>
							We built The Virtual Greens for you
						</h3>
					</div>

					<div className='w-full max-w-[500px] mx-auto'>
						<img
							className='w-full h-auto object-cover rounded-[20px]'
							alt='Indoor golf facility overview'
							src='/indoor-golf-1.png'
						/>
					</div>

					<div className='space-y-6'>
						{forYouFeatures.map((feature, index) => (
							<div key={index} className='flex items-start gap-4'>
								<div className='flex-shrink-0 w-6 h-6 text-[#dedede] mt-1'>
									<FeatureIcon icon='golf' />
								</div>
								<p className='font-TVG-typography-default font-[number:var(--TVG-typography-default-font-weight)] text-[length:var(--TVG-typography-default-font-size)] leading-[var(--TVG-typography-default-line-height)] tracking-[var(--TVG-typography-default-letter-spacing)] text-white [font-style:var(--TVG-typography-default-font-style)]'>
									{feature}
								</p>
							</div>
						))}
					</div>

					<div className='space-y-6'>
						<h2 className='font-TVG-typography-h2 font-[number:var(--TVG-typography-h2-font-weight)] text-[clamp(24px,6vw,96px)] leading-[1.1] tracking-[var(--TVG-typography-h2-letter-spacing)] [font-style:var(--TVG-typography-h2-font-style)] uppercase text-center'>
							<span className='text-white'>Features and </span>
							<span className='text-[#009444]'>Amenities</span>
						</h2>

						<div className='bg-[#0c1a1a] rounded-[20px] p-6 space-y-4'>
							{amenityFeatures.map((amenity, index) => (
								<div key={index} className='flex items-center gap-4'>
									<div className='flex-shrink-0 w-5 h-5 text-[#dedede]'>
										<FeatureIcon icon={amenity.icon} />
									</div>
									<span className='font-TVG-typography-default font-[number:var(--TVG-typography-default-font-weight)] text-[18px] leading-[var(--TVG-typography-default-line-height)] tracking-[var(--TVG-typography-default-letter-spacing)] text-white [font-style:var(--TVG-typography-default-font-style)]'>
										{amenity.text}
									</span>
								</div>
							))}

							<div className='flex justify-center pt-4'>
								<button className='bg-[#0c1a1a] hover:bg-[#1a2828] transition-colors rounded-[50px] px-6 py-2 flex items-center gap-2 border border-[#009444]'>
									<div className='w-5 h-5 text-[#dedede]'>
										<FeatureIcon icon='vr' />
									</div>
									<span className='font-TVG-typography-button font-[number:var(--TVG-typography-button-font-weight)] text-[16px] leading-[var(--TVG-typography-button-line-height)] tracking-[var(--TVG-typography-button-letter-spacing)] text-[#009444] [font-style:var(--TVG-typography-button-font-style)] uppercase'>
										Virtual Tour
									</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};