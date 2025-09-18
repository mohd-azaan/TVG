// src/screens/AboutPage/Sections/FeaturesSection.jsx
// Features section with main headline, feature list, and comprehensive amenities grid
// Pixel-perfect recreation of Figma design with exact positioning and proper Figma assets
// RELEVANT FILES: AboutPage.jsx, styleguide.css, tailwind.config.js

import React from 'react';

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
		{ icon: 'http://localhost:3845/assets/5e898ed97f288ac5c4b1d74fedf72030a2ce769c.svg', text: '2 Floors' },
		{ icon: 'http://localhost:3845/assets/f467a14d0e52960dd064228cab0265a0ccc6b125.svg', text: '5 All-Weather Hitting Bays' },
		{ icon: 'http://localhost:3845/assets/4d1f10e0fa7532c65d63425a9b8062dd16fa9526.svg', text: 'VIP Private Screening' },
		{ icon: 'http://localhost:3845/assets/a2013cc197c303cd99d1aa3190493bc7913fbebc.svg', text: 'Free Wifi' },
		{ icon: 'http://localhost:3845/assets/3c8f5ec59c38276b010d52bee3a61337f429a40a.svg', text: 'Restaurant Partners' },
		{ icon: 'http://localhost:3845/assets/936176c27d82e5cbdd7c1267b2b43acf7c9cb032.svg', text: 'Golf Lessons' },
		{ icon: 'http://localhost:3845/assets/8d7756d432f895fd9d3f25299ddf19dacf12cf4d.svg', text: 'Junior Golf Arcade Games' },
		{ icon: 'http://localhost:3845/assets/3c908a8addbb52c586f082a397d1b82e7c4c599b.svg', text: 'Rental Clubs' },
		{ icon: 'http://localhost:3845/assets/704ff949ad343d6274d021d40f19bb9dee97f2df.svg', text: '275+ Golf Courses' },
		{ icon: 'http://localhost:3845/assets/8e891467f86f46634bf77a9538b4d96cc8a69ac0.svg', text: 'Live Sports On Screens' },
		{ icon: 'http://localhost:3845/assets/20999760d0f6f0e41991c452c21f21ce0f8d7dad.svg', text: 'Screens Advertising' },
		{ icon: 'http://localhost:3845/assets/f9c9d1c227861aa5480a24d52e8ef27d285db744.svg', text: 'Private Event Spaces' },
		{ icon: 'http://localhost:3845/assets/53e67fbcbf4bae4b3f24617bd495eec5ee29d79a.svg', text: 'Card/Contactless Payments Only' },
		{ icon: 'http://localhost:3845/assets/9a7eb314ec0197b946ce36ab52b2bcf8bb6e629b.svg', text: 'On-Site Basement Parking' },
		{ icon: 'http://localhost:3845/assets/bc60a1848893bf6411b4faecbec60bae9f72c1df.svg', text: 'VIP Paid Parking' }
	];

	return (
		<section className='relative w-full min-h-[1455px] bg-[#102121]'>
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
			<div className='absolute top-[389px] left-[279px]'>
				{forYouFeatures.map((feature, index) => (
					<div key={index} className='absolute flex items-center gap-12' style={{top: `${index * 40}px`}}>
						<div className='w-[30px] h-[30px]'>
							<img
								src='http://localhost:3845/assets/afd04c91f2bb5503a73ec009d61fe21ddec7dccc.svg'
								alt='Golf icon'
								className='w-full h-full'
							/>
						</div>
						<p className='font-TVG-typography-default font-[number:var(--TVG-typography-default-font-weight)] text-[length:var(--TVG-typography-default-font-size)] leading-[var(--TVG-typography-default-line-height)] tracking-[var(--TVG-typography-default-letter-spacing)] text-white [font-style:var(--TVG-typography-default-font-style)] w-[600px]'>
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
			<div className='absolute top-[923px] left-[280px] w-[1363px] h-[378px] bg-[#0c1a1a] rounded-[30px]'>
				{/* Grid items positioned exactly as in Figma */}
				{amenityFeatures.map((amenity, index) => {
					const positions = [
						{left: 32, top: 37}, {left: 478, top: 37}, {left: 924, top: 37},
						{left: 32, top: 87}, {left: 478, top: 88}, {left: 925, top: 87},
						{left: 32, top: 138}, {left: 478, top: 137}, {left: 925, top: 137},
						{left: 32, top: 188}, {left: 479, top: 188}, {left: 925, top: 188},
						{left: 32, top: 238}, {left: 479, top: 238}, {left: 925, top: 238}
					];
					const position = positions[index];

					return (
						<div key={index} className='absolute flex items-center' style={{left: `${position.left}px`, top: `${position.top}px`}}>
							<div className='w-[24px] h-[24px] mr-4'>
								<img
									src={amenity.icon}
									alt={amenity.text}
									className='w-full h-full'
								/>
							</div>
							<span className='font-TVG-typography-default font-[number:var(--TVG-typography-default-font-weight)] text-[length:var(--TVG-typography-default-font-size)] leading-[var(--TVG-typography-default-line-height)] tracking-[var(--TVG-typography-default-letter-spacing)] text-white [font-style:var(--TVG-typography-default-font-style)] w-[370px]'>
								{amenity.text}
							</span>
						</div>
					);
				})}

				{/* Virtual Tour CTA Button */}
				<div className='absolute left-[575px] top-[287px]'>
					<button className='bg-[#0c1a1a] hover:bg-[#1a2828] transition-colors rounded-[50px] px-[30px] py-[7px] flex items-center gap-[10px] border border-[#009444]'>
						<div className='w-[30px] h-[30px]'>
							<img
								src='http://localhost:3845/assets/8eac38fcc1337ade8f70708fa7dd76254f3859eb.svg'
								alt='VR icon'
								className='w-full h-full'
							/>
						</div>
						<span className='font-TVG-typography-button font-[number:var(--TVG-typography-button-font-weight)] text-[length:var(--TVG-typography-button-font-size)] leading-[var(--TVG-typography-button-line-height)] tracking-[var(--TVG-typography-button-letter-spacing)] text-[#009444] [font-style:var(--TVG-typography-button-font-style)] uppercase text-center whitespace-nowrap'>
							Virtual Tour
						</span>
					</button>
				</div>
			</div>

			{/* Hero image positioned exactly like Figma */}
			<div
				className='absolute bg-[position:50%_50%,_0%_0%] bg-[rgba(0,0,0,0.5)] bg-size-[cover,auto] h-[525px] left-[1027px] rounded-[30px] top-[130px] w-[613px]'
				style={{ backgroundImage: `url('http://localhost:3845/assets/e16a37c2c86ccabe501775e4e5eb22ba036cdd95.png')` }}
			/>

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
							src='http://localhost:3845/assets/e16a37c2c86ccabe501775e4e5eb22ba036cdd95.png'
						/>
					</div>

					<div className='space-y-6'>
						{forYouFeatures.map((feature, index) => (
							<div key={index} className='flex items-start gap-4'>
								<div className='flex-shrink-0 w-6 h-6 mt-1'>
									<img
										src='http://localhost:3845/assets/afd04c91f2bb5503a73ec009d61fe21ddec7dccc.svg'
										alt='Golf icon'
										className='w-full h-full'
									/>
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
									<div className='flex-shrink-0 w-5 h-5'>
										<img
											src={amenity.icon}
											alt={amenity.text}
											className='w-full h-full'
										/>
									</div>
									<span className='font-TVG-typography-default font-[number:var(--TVG-typography-default-font-weight)] text-[18px] leading-[var(--TVG-typography-default-line-height)] tracking-[var(--TVG-typography-default-letter-spacing)] text-white [font-style:var(--TVG-typography-default-font-style)]'>
										{amenity.text}
									</span>
								</div>
							))}

							<div className='flex justify-center pt-4'>
								<button className='bg-[#0c1a1a] hover:bg-[#1a2828] transition-colors rounded-[50px] px-6 py-2 flex items-center gap-2 border border-[#009444]'>
									<div className='w-5 h-5'>
										<img
											src='http://localhost:3845/assets/8eac38fcc1337ade8f70708fa7dd76254f3859eb.svg'
											alt='VR icon'
											className='w-full h-full'
										/>
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