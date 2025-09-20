// src/screens/PlayPage/Sections/GolfzonNumbersSection.jsx
// Golfzon Worldwide Numbers section with masonry layout and branded statistics
// Pixel-perfect recreation of Figma design with exact positioning and Bottom Line section
// RELEVANT FILES: PlayPage.jsx, styleguide.css, tailwind.config.js, TwoVisionNXSection.jsx

import React from 'react';

export const GolfzonNumbersSection = () => {
	return (
		<section className='relative w-full min-h-[1200px] bg-[#102121] overflow-hidden pb-16'>
			{/* Container positioned according to Figma layout */}
			<div className='relative max-w-[1920px] mx-auto'>
				{/* Main title */}
				<h2 className='absolute left-1/2 top-[130px] transform -translate-x-1/2 w-[655px] text-center font-morganite font-black text-[96px] leading-[90px] tracking-[1.92px] text-white uppercase'>
					Golfzon Worldwide Numbers
				</h2>

				{/* Statistics cards container with responsive centering */}
				<div className='absolute top-[279px] left-1/2 transform -translate-x-1/2 w-[1360px] h-[520px]'>
					{/* #1 Card - Light Green */}
					<div className='absolute left-0 top-0 w-[312px] h-[250px] bg-[#64ff8a] rounded-[30px] p-[20px] flex flex-col justify-between'>
					<p className='font-morganite font-black text-[96px] leading-[90px] tracking-[1.92px] text-black uppercase'>
						#1
					</p>
					<p className='font-gilroy font-medium text-[22px] leading-[28px] text-black'>
						Largest Simulator Company by Market Cap, Revenue & Shots Tracked
					</p>
				</div>

					{/* 100+ Million Card - Dark Green */}
					<div className='absolute left-[332px] top-0 w-[392px] h-[250px] bg-[#006f33] rounded-[30px] p-[20px] flex flex-col justify-between'>
					<p className='font-morganite font-black text-[96px] leading-[90px] tracking-[1.92px] text-white uppercase'>
						100+ Million
					</p>
					<p className='font-gilroy font-medium text-[22px] leading-[28px] text-white'>
						Rounds Played Annually
					</p>
				</div>

					{/* 160K+ Card - Green */}
					<div className='absolute left-[744px] top-0 w-[328px] h-[250px] bg-[#009444] rounded-[30px] p-[20px] flex flex-col justify-between'>
					<p className='font-morganite font-black text-[96px] leading-[90px] tracking-[1.92px] text-white uppercase'>
						160K+
					</p>
					<p className='font-gilroy font-medium text-[22px] leading-[28px] text-white'>
						Tournaments Hosted Annually
					</p>
				</div>

					{/* 13,490K Card - Light Green */}
					<div className='absolute left-[1092px] top-0 w-[268px] h-[250px] bg-[#33a969] rounded-[30px] p-[20px] flex flex-col justify-between'>
					<p className='font-morganite font-black text-[96px] leading-[90px] tracking-[1.92px] text-black uppercase'>
						13,490K
					</p>
					<p className='font-gilroy font-medium text-[22px] leading-[28px] text-black'>
						Locations Worldwide
					</p>
				</div>

					{/* 8.5+ Billion Card - Dark Green */}
					<div className='absolute left-0 top-[270px] w-[510px] h-[250px] bg-[#004a22] rounded-[30px] p-[20px] flex flex-col justify-between'>
					<p className='font-morganite font-black text-[96px] leading-[90px] tracking-[1.92px] text-white uppercase'>
						8.5+ Billion
					</p>
					<p className='font-gilroy font-medium text-[22px] leading-[28px] text-white'>
						Shots Tracked Last Year
					</p>
				</div>

					{/* 51K+ Card - Light Green */}
					<div className='absolute left-[530px] top-[270px] w-[262px] h-[250px] bg-[#33a969] rounded-[30px] p-[20px] flex flex-col justify-between'>
					<p className='font-morganite font-black text-[96px] leading-[90px] tracking-[1.92px] text-black uppercase'>
						51K+
					</p>
					<p className='font-gilroy font-medium text-[22px] leading-[28px] text-black'>
						Simulators in Operation
					</p>
				</div>

					{/* 63 Card - Light Green */}
					<div className='absolute left-[812px] top-[270px] w-[139px] h-[250px] bg-[#66bf8f] rounded-[30px] p-[20px] flex flex-col justify-between'>
					<p className='font-morganite font-black text-[96px] leading-[90px] tracking-[1.92px] text-black uppercase'>
						63
					</p>
					<p className='font-gilroy font-medium text-[22px] leading-[28px] text-black'>
						Countries Served
					</p>
				</div>

					{/* 6.2+ Million Card - Green */}
					<div className='absolute left-[971px] top-[270px] w-[389px] h-[250px] bg-[#009444] rounded-[30px] p-[20px] flex flex-col justify-between'>
					<p className='font-morganite font-black text-[96px] leading-[90px] tracking-[1.92px] text-white uppercase'>
						6.2+ Million
					</p>
					<p className='font-gilroy font-medium text-[22px] leading-[28px] text-white'>
						Registered Users
					</p>
				</div>
			</div>

			{/* Bottom Line Section */}
			<div className='absolute left-1/2 top-[882px] transform -translate-x-1/2 w-[1360px] h-[213px] bg-[#0c1a1a] rounded-[30px]'>
					<h3 className='absolute left-[50px] top-[50px] font-morganite font-black text-[96px] leading-[90px] tracking-[1.92px] text-white uppercase whitespace-nowrap'>
						Bottom Line?
					</h3>
					<div className='absolute left-[454px] top-[50px] w-[655px]'>
						<p className='font-gilroy font-medium text-[20px] leading-[28px] text-[lightgrey]'>
							This isn't just a simulator. It's the closest you'll get to
							playing outdoors without breaking a sweat.
						</p>
					</div>
					<p className='absolute left-1/2 top-[135px] transform -translate-x-1/2 w-[655px] text-center font-gilroy font-bold text-[22px] leading-[26px] tracking-[0.44px] text-[#7ddb8a] uppercase'>
						Now playing exclusively at The Virtual Greens
					</p>
				</div>
			</div>

			{/* Mobile responsive layout */}
			<div className='block lg:hidden px-4 sm:px-6 py-16 pb-20'>
				<div className='space-y-12 max-w-[600px] mx-auto'>
					{/* Title */}
					<div className='text-center'>
						<h2 className='font-morganite font-black text-[clamp(40px,10vw,72px)] leading-[1.1] tracking-[1.2px] text-white uppercase'>
							Golfzon Worldwide Numbers
						</h2>
					</div>

					{/* Mobile statistics cards */}
					<div className='space-y-6'>
						{/* #1 Card */}
						<div className='bg-[#64ff8a] rounded-[20px] p-6'>
							<p className='font-morganite font-black text-[clamp(48px,12vw,72px)] leading-[1] tracking-[1.2px] text-black uppercase mb-3'>
								#1
							</p>
							<p className='font-gilroy font-medium text-[18px] leading-[24px] text-black'>
								Largest Simulator Company by Market Cap, Revenue & Shots Tracked
							</p>
						</div>

						{/* 100+ Million Card */}
						<div className='bg-[#006f33] rounded-[20px] p-6'>
							<p className='font-morganite font-black text-[clamp(48px,12vw,72px)] leading-[1] tracking-[1.2px] text-white uppercase mb-3'>
								100+ Million
							</p>
							<p className='font-gilroy font-medium text-[18px] leading-[24px] text-white'>
								Rounds Played Annually
							</p>
						</div>

						{/* 160K+ Card */}
						<div className='bg-[#009444] rounded-[20px] p-6'>
							<p className='font-morganite font-black text-[clamp(48px,12vw,72px)] leading-[1] tracking-[1.2px] text-white uppercase mb-3'>
								160K+
							</p>
							<p className='font-gilroy font-medium text-[18px] leading-[24px] text-white'>
								Tournaments Hosted Annually
							</p>
						</div>

						{/* 13,490K Card */}
						<div className='bg-[#33a969] rounded-[20px] p-6'>
							<p className='font-morganite font-black text-[clamp(48px,12vw,72px)] leading-[1] tracking-[1.2px] text-black uppercase mb-3'>
								13,490K
							</p>
							<p className='font-gilroy font-medium text-[18px] leading-[24px] text-black'>
								Locations Worldwide
							</p>
						</div>

						{/* 8.5+ Billion Card */}
						<div className='bg-[#004a22] rounded-[20px] p-6'>
							<p className='font-morganite font-black text-[clamp(48px,12vw,72px)] leading-[1] tracking-[1.2px] text-white uppercase mb-3'>
								8.5+ Billion
							</p>
							<p className='font-gilroy font-medium text-[18px] leading-[24px] text-white'>
								Shots Tracked Last Year
							</p>
						</div>

						{/* 51K+ Card */}
						<div className='bg-[#33a969] rounded-[20px] p-6'>
							<p className='font-morganite font-black text-[clamp(48px,12vw,72px)] leading-[1] tracking-[1.2px] text-black uppercase mb-3'>
								51K+
							</p>
							<p className='font-gilroy font-medium text-[18px] leading-[24px] text-black'>
								Simulators in Operation
							</p>
						</div>

						{/* 63 Card */}
						<div className='bg-[#66bf8f] rounded-[20px] p-6'>
							<p className='font-morganite font-black text-[clamp(48px,12vw,72px)] leading-[1] tracking-[1.2px] text-black uppercase mb-3'>
								63
							</p>
							<p className='font-gilroy font-medium text-[18px] leading-[24px] text-black'>
								Countries Served
							</p>
						</div>

						{/* 6.2+ Million Card */}
						<div className='bg-[#009444] rounded-[20px] p-6'>
							<p className='font-morganite font-black text-[clamp(48px,12vw,72px)] leading-[1] tracking-[1.2px] text-white uppercase mb-3'>
								6.2+ Million
							</p>
							<p className='font-gilroy font-medium text-[18px] leading-[24px] text-white'>
								Registered Users
							</p>
						</div>
					</div>

					{/* Mobile Bottom Line Section */}
					<div className='bg-[#0c1a1a] rounded-[20px] p-6 space-y-4'>
						<h3 className='font-morganite font-black text-[clamp(40px,10vw,64px)] leading-[1.1] tracking-[1.2px] text-white uppercase'>
							Bottom Line?
						</h3>
						<p className='font-gilroy font-medium text-[18px] leading-[26px] text-[lightgrey]'>
							This isn't just a simulator. It's the closest you'll get to
							playing outdoors without breaking a sweat.
						</p>
						<p className='font-gilroy font-bold text-[18px] leading-[22px] tracking-[0.3px] text-[#7ddb8a] uppercase text-center'>
							Now playing exclusively at The Virtual Greens
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
