// src/screens/PlayPage/Sections/TwoVisionNXSection.jsx
// TwoVisionNX section with Meet TwoVisionNX branding and 5 specific feature showcases
// Pixel-perfect recreation of Figma design with real TwoVisionNX interface screenshots
// RELEVANT FILES: PlayPage.jsx, styleguide.css, tailwind.config.js, twovision-*.png assets

import React from 'react';

export const TwoVisionNXSection = () => {
	const features = [
		{
			title: 'Play the Legends',
			description: 'Over 275+ world-famous courses, perfectly recreated in stunning, 3D lifelike detail on Unreal 5 Engine: The most powerful real-time 3-d creation tool. Step into the iconic St. Andrews Old Course of Scotland or walk the Pebble Beach fairways of California without ever leaving the bay.',
			image: '/twovision-play-legends.png',
			position: 'right'
		},
		{
			title: 'Dial In Your Game',
			description: 'With tools like slope indicators, heat maps, putting guides, and green grids, you\'ll have the data to make smarter swings and lower scores.',
			image: '/twovision-dial-game.png',
			position: 'left'
		},
		{
			title: 'Total Customization',
			description: 'Change the time of day, add a little fog, or clear the skies. Every round is yours to set, mood and all.',
			image: '/twovision-customization.png',
			position: 'right'
		},
		{
			title: 'Moving Swing Plate',
			description: 'The plate beneath your feet moves with the terrain, with over 24 different lie angles that simulate real-world slopes. Tell us if any other simulator can do that?',
			image: '/twovision-swing-plate.png',
			position: 'left'
		},
		{
			title: 'Zero Latency',
			description: 'You get instant feedback with zero lag between swing and stats. You\'ll know exactly how you hit it the second the club makes contact.',
			image: '/twovision-zero-latency.png',
			position: 'right'
		}
	];

	return (
		<section className='relative w-full min-h-[2800px] bg-white overflow-hidden'>
			{/* Container positioned according to Figma layout */}
			<div className='relative max-w-[1920px] mx-auto'>
				{/* Main title */}
				<h2 className='absolute left-1/2 top-[130px] transform -translate-x-1/2 w-[655px] text-center font-TVG-typography-h2 font-[800] text-[96px] leading-[90px] tracking-[1.92px] text-black uppercase'>
					Meet TwoVisionNX
				</h2>

				{/* Green tagline */}
				<p className='absolute left-1/2 top-[221px] transform -translate-x-1/2 w-[655px] text-center font-TVG-typography-tagline font-[700] text-[22px] leading-[26px] tracking-[0.44px] text-[#009444] uppercase'>
					Our Most Advanced Simulator Yet
				</p>

				{/* Description text */}
				<div className='absolute left-[632px] top-[283px] w-[655px]'>
					<p className='font-TVG-typography-default font-[500] text-[20px] leading-[28px] text-[#757575] text-center'>
						At The Virtual Greens, we've teamed up with the best in the game, Golfzon TwoVisionNX. It's a global leader in simulation tech, trusted by top-tier tours across Asia (with multi-million dollar prize pools, by the way). And now, it's right here in Riyadh. We're bringing next-level realism to every round.
					</p>
				</div>

				{/* Feature cards with exact Figma positioning */}
				<div className='absolute top-[482px] left-[280px]'>
					{/* Play the Legends */}
					<div className='bg-[#f6f6f6] h-[430px] w-[1360px] rounded-[30px] relative'>
						<img
							src='/twovision-play-legends.png'
							alt='Play the Legends interface'
							className='absolute left-[675px] top-1/2 transform -translate-y-1/2 w-[655px] h-[368px] object-cover rounded-[30px]'
						/>
						<div className='absolute left-[35px] top-[186px] w-[600px]'>
							<p className='font-TVG-typography-default font-[500] text-[20px] leading-[28px] text-[#757575]'>
								Over 275+ world-famous courses, perfectly recreated in stunning, 3D lifelike detail on Unreal 5 Engine: The most powerful real-time 3-d creation tool. Step into the iconic St. Andrews Old Course of Scotland or walk the Pebble Beach fairways of California without ever leaving the bay.
							</p>
						</div>
						<h3 className='absolute left-[37px] top-[104px] w-[600px] font-TVG-typography-h3 font-[800] text-[64px] leading-[60px] tracking-[1.28px] text-black uppercase'>
							Play the Legends
						</h3>
					</div>

					{/* Dial In Your Game */}
					<div className='bg-[#f6f6f6] h-[430px] w-[1360px] rounded-[30px] relative mt-[30px]'>
						<img
							src='/twovision-dial-game.png'
							alt='Dial In Your Game interface'
							className='absolute left-[28px] top-1/2 transform -translate-y-1/2 w-[655px] h-[368px] object-cover rounded-[30px]'
						/>
						<div className='absolute left-[718px] top-[214px] w-[600px]'>
							<p className='font-TVG-typography-default font-[500] text-[20px] leading-[28px] text-[#757575]'>
								With tools like slope indicators, heat maps, putting guides, and green grids, you'll have the data to make smarter swings and lower scores.
							</p>
						</div>
						<h3 className='absolute left-[718px] top-[131px] w-[600px] font-TVG-typography-h3 font-[800] text-[64px] leading-[60px] tracking-[1.28px] text-black uppercase'>
							Dial In Your Game
						</h3>
					</div>

					{/* Total Customization */}
					<div className='bg-[#f6f6f6] h-[430px] w-[1360px] rounded-[30px] relative mt-[30px]'>
						<img
							src='/twovision-customization.png'
							alt='Total Customization interface'
							className='absolute left-[675px] top-1/2 transform -translate-y-1/2 w-[655px] h-[368px] object-cover rounded-[30px]'
						/>
						<div className='absolute left-[35px] top-[228px] w-[600px]'>
							<p className='font-TVG-typography-default font-[500] text-[20px] leading-[28px] text-[#757575]'>
								Change the time of day, add a little fog, or clear the skies. Every round is yours to set, mood and all.
							</p>
						</div>
						<h3 className='absolute left-[37px] top-[145px] w-[600px] font-TVG-typography-h3 font-[800] text-[64px] leading-[60px] tracking-[1.28px] text-black uppercase'>
							Total Customization
						</h3>
					</div>

					{/* Moving Swing Plate */}
					<div className='bg-[#f6f6f6] h-[430px] w-[1360px] rounded-[30px] relative mt-[30px]'>
						<img
							src='/twovision-swing-plate.png'
							alt='Moving Swing Plate interface'
							className='absolute left-[30px] top-1/2 transform -translate-y-1/2 w-[655px] h-[368px] object-cover rounded-[30px]'
						/>
						<div className='absolute left-[718px] top-[214px] w-[600px]'>
							<p className='font-TVG-typography-default font-[500] text-[20px] leading-[28px] text-[#757575]'>
								The plate beneath your feet moves with the terrain, with over 24 different lie angles that simulate real-world slopes. Tell us if any other simulator can do that?
							</p>
						</div>
						<h3 className='absolute left-[720px] top-[131px] w-[600px] font-TVG-typography-h3 font-[800] text-[64px] leading-[60px] tracking-[1.28px] text-black uppercase'>
							Moving Swing Plate
						</h3>
					</div>

					{/* Zero Latency */}
					<div className='bg-[#f6f6f6] h-[430px] w-[1360px] rounded-[30px] relative mt-[30px]'>
						<img
							src='/twovision-zero-latency.png'
							alt='Zero Latency interface'
							className='absolute left-[675px] top-1/2 transform -translate-y-1/2 w-[655px] h-[368px] object-cover rounded-[30px]'
						/>
						<div className='absolute left-[35px] top-[214px] w-[600px]'>
							<p className='font-TVG-typography-default font-[500] text-[20px] leading-[28px] text-[#757575]'>
								You get instant feedback with zero lag between swing and stats. You'll know exactly how you hit it the second the club makes contact.
							</p>
						</div>
						<h3 className='absolute left-[37px] top-[131px] w-[600px] font-TVG-typography-h3 font-[800] text-[64px] leading-[60px] tracking-[1.28px] text-black uppercase'>
							Zero Latency
						</h3>
					</div>
				</div>
			</div>

			{/* Mobile responsive layout */}
			<div className='block lg:hidden px-4 sm:px-6 py-16'>
				<div className='space-y-12 max-w-[600px] mx-auto'>
					{/* Title */}
					<div className='text-center space-y-4'>
						<h2 className='font-TVG-typography-h2 font-[800] text-[clamp(40px,10vw,72px)] leading-[1.1] tracking-[1.2px] text-black uppercase'>
							Meet TwoVisionNX
						</h2>
						<p className='font-TVG-typography-tagline font-[700] text-[18px] leading-[22px] tracking-[0.3px] text-[#009444] uppercase'>
							Our Most Advanced Simulator Yet
						</p>
						<p className='font-TVG-typography-default font-[500] text-[18px] leading-[26px] text-[#757575]'>
							At The Virtual Greens, we've teamed up with the best in the game, Golfzon TwoVisionNX. It's a global leader in simulation tech, trusted by top-tier tours across Asia. And now, it's right here in Riyadh.
						</p>
					</div>

					{/* Mobile feature cards */}
					<div className='space-y-8'>
						{features.map((feature, index) => (
							<div key={index} className='bg-[#f6f6f6] rounded-[20px] p-6 space-y-6'>
								{/* Mobile image */}
								<div className='w-full aspect-[16/9]'>
									<img
										src={feature.image}
										alt={`${feature.title} interface`}
										className='w-full h-full object-cover rounded-[15px]'
									/>
								</div>

								{/* Mobile content */}
								<div className='space-y-4'>
									<h3 className='font-TVG-typography-h3 font-[800] text-[clamp(24px,6vw,32px)] leading-[1.1] tracking-[0.8px] text-black uppercase'>
										{feature.title}
									</h3>
									<p className='font-TVG-typography-default font-[500] text-[18px] leading-[26px] text-[#757575]'>
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