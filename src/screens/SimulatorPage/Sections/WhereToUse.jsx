// src/screens/SimulatorPage/Sections/WhereToUse.jsx
// WhereToUse component displays the "Where You Can Use It" section with cards
// Provides a responsive grid of use-cases (Homes, Offices, Hospitality, Schools, Golf Academies, Events)
// This file exists to encapsulate the Figma-designed section as a reusable React component
// RELEVANT FILES: SimulatorPage.jsx, HeroSection.jsx, styleguide.css

import React from 'react';

// Prefer loading these from the `public/` folder at runtime. Vite serves files in public at the app root.
const homeIcon = '/home_24dp.svg';
const officeIcon = '/office.svg';
const hotelIcon = '/hotelsvg.svg';
const schoolIcon = '/school.svg';
const golfIcon = '/sports_golf.svg';
const eventsIcon = '/celebration.svg';

const cards = [
	{
		title: 'Homes',
		text: 'Bring the full golf experience into your living room or basement. Perfect for year-round play, casual fun, or serious practice.',
		icon: homeIcon,
	},
	{
		title: 'Offices',
		text: 'Add a game-changing amenity to your workspace. Boost team morale, entertain clients, and create a unique environment.',
		icon: officeIcon,
	},
	{
		title: 'Hospitality & Leisure',
		text: 'From hotels to fitness centers and lounges, Golfzon draws in guests, increases dwell time, and adds premium appeal.',
		icon: hotelIcon,
	},
	{
		title: 'Schools & Universities',
		text: 'Offer students more than just physical education. Our simulators support skill-building, team practice, and data-based training.',
		icon: schoolIcon,
	},
	{
		title: 'Golf Academies',
		text: 'Take coaching to the next level with swing diagnostics, personalized progress tracking, and advanced feedback tools.',
		icon: golfIcon,
	},
	{
		title: 'Events',
		text: 'Rent a simulator for your next launch, corporate gathering, or private party. It’s interactive, memorable, and always a hit.',
		icon: eventsIcon,
	},
];

const WhereToUse = () => {
	return (
		<section className='w-full relative bg-[#102121] text-center py-20 text-[#d1d3d4]'>
			<div className='max-w-6xl mx-auto px-6 z-10 relative'>
				{/* Main heading (large Morganite) */}
				<h2 className='text-[clamp(40px,6.5vw,80px)] tracking-[0.02em] leading-[0.95] uppercase font-bold font-morganite text-white'>
					Where You Can Use It
				</h2>

				{/* Small green subtitle shown under the main heading in the design */}
				<h3 className='mt-3 text-[18px] tracking-[0.02em] leading-[20px] uppercase font-gilroy font-bold text-[#7ddb8a]'>
					One Simulator. Endless Possibilities
				</h3>

				<p className='mt-6 max-w-2xl mx-auto text-lg leading-7'>
					Golfzon simulators adapt to your space and purpose. Here’s how:
				</p>

				{/* Grid: 3 columns on large screens, matching spacing from the design */}
				<div className='mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
					{cards.map((c) => (
						<article
							key={c.title}
							className='bg-[#0c1a1a] rounded-[36px] p-8 min-h-[260px] flex flex-col justify-start text-left'
						>
							<div className='flex flex-col items-start w-full'>
								<img src={c.icon} alt='' className='w-12 h-12 mb-4' />
								<h4 className='text-white text-[20px] uppercase font-gilroy font-bold mb-2 tracking-[0.02em]'>
									{c.title}
								</h4>
							</div>

							<p className='text-[15px] leading-[24px] text-[#d1d3d4] max-w-[420px] font-gilroy font-medium'>
								{c.text}
							</p>
						</article>
					))}
				</div>

				{/* Decorative shape in the bottom-right (non-interactive) */}
				<img
					src={'shape14-2-2.svg'}
					alt=''
					aria-hidden='true'
					className='pointer-events-none absolute -z-10 right-[-300px] bottom-[-290px] w-[520px] lg:w-[900px] opacity-90 translate-y-6'
				/>
			</div>
		</section>
	);
};

export default WhereToUse;
