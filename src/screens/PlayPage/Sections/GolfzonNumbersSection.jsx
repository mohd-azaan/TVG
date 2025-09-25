// src/screens/PlayPage/Sections/GolfzonNumbersSection.jsx
// Golfzon Worldwide Numbers section with masonry layout and branded statistics
// Pixel-perfect recreation of Figma design with exact positioning and Bottom Line section
// RELEVANT FILES: PlayPage.jsx, styleguide.css, tailwind.config.js, TwoVisionNXSection.jsx

import React from 'react';

export const GolfzonNumbersSection = () => {
	return (
		<section className='relative w-full min-h-[300px] bg-[#102121] overflow-hidden'>
			{/* Level 1: Page Container */}
			<div className='relative max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10'>
				{/* Level 2: MANDATORY PlayPage Hero-Aligned Content Wrapper */}
				<div className='lg:ml-[12vw] md:ml-[8vw] lg:mr-[12vw] md:mr-[8vw]'>
					{/* Level 3: Content Container */}
					<div className='max-w-[1360px] mx-auto py-20'>
						{/* Level 4: Actual Content - Hidden on mobile */}
						<div className='hidden lg:block'>
							{/* Main title */}
							<div className='text-center mb-[80px]'>
								<h2 className='font-morganite font-black text-[clamp(64px,6vw,80px)] leading-[0.95] tracking-[0.02em] text-white uppercase'>
									Golfzon Worldwide Numbers
								</h2>
							</div>

							{/* Statistics cards container with responsive centering */}
							<div className='relative w-full max-w-[1160px] h-[420px] mb-[30px] mx-auto'>
								{/* #1 Card - Light Green */}
								<div className='absolute left-0 top-0 w-[260px] h-[200px] bg-[#64ff8a] rounded-[30px] p-[20px] flex flex-col justify-between'>
									<p className='font-morganite font-black text-[clamp(48px,6vw,72px)] leading-[0.95] tracking-[0.02em] text-black uppercase'>
										#1
									</p>
									<p className='font-gilroy font-semibold text-[16px] leading-[24px] tracking-[0.1px] text-black'>
										Largest Simulator Company by Market Cap, Revenue & Shots
										Tracked
									</p>
								</div>

								{/* 100+ Million Card - Dark Green */}
								<div className='absolute left-[270px] top-0 w-[300px] h-[200px] bg-[#006f33] rounded-[30px] p-[20px] flex flex-col justify-between'>
									<p className='font-morganite font-black text-[clamp(48px,6vw,72px)] leading-[0.95] tracking-[0.02em] text-white uppercase'>
										100+ Million
									</p>
									<p className='font-gilroy font-semibold text-[16px] leading-[24px] tracking-[0.1px] text-white'>
										Rounds Played Annually
									</p>
								</div>

								{/* 160K+ Card - Green */}
								<div className='absolute left-[580px] top-0 w-[260px] h-[200px] bg-[#009444] rounded-[30px] p-[20px] flex flex-col justify-between'>
									<p className='font-morganite font-black text-[clamp(48px,6vw,72px)] leading-[0.95] tracking-[0.02em] text-white uppercase'>
										160K+
									</p>
									<p className='font-gilroy font-semibold text-[16px] leading-[24px] tracking-[0.1px] text-white'>
										Tournaments Hosted Annually
									</p>
								</div>

								{/* 13,490K Card - Light Green */}
								<div className='absolute left-[850px] top-0 w-[200px] h-[200px] bg-[#33a969] rounded-[30px] p-[20px] flex flex-col justify-between'>
									<p className='font-morganite font-black text-[clamp(48px,6vw,72px)] leading-[0.95] tracking-[0.02em] text-black uppercase'>
										13,490K
									</p>
									<p className='font-gilroy font-semibold text-[16px] leading-[24px] tracking-[0.1px] text-black'>
										Locations Worldwide
									</p>
								</div>

								{/* 8.5+ Billion Card - Dark Green */}
								<div className='absolute left-0 top-[210px] w-[380px] h-[200px] bg-[#004a22] rounded-[30px] p-[20px] flex flex-col justify-between'>
									<p className='font-morganite font-black text-[clamp(48px,6vw,72px)] leading-[0.95] tracking-[0.02em] text-white uppercase'>
										8.5+ Billion
									</p>
									<p className='font-gilroy font-semibold text-[16px] leading-[24px] tracking-[0.1px] text-white'>
										Shots Tracked Last Year
									</p>
								</div>

								{/* 51K+ Card - Light Green */}
								<div className='absolute left-[390px] top-[210px] w-[200px] h-[200px] bg-[#33a969] rounded-[30px] p-[20px] flex flex-col justify-between'>
									<p className='font-morganite font-black text-[clamp(48px,6vw,72px)] leading-[0.95] tracking-[0.02em] text-black uppercase'>
										51K+
									</p>
									<p className='font-gilroy font-semibold text-[16px] leading-[24px] tracking-[0.1px] text-black'>
										Simulators in Operation
									</p>
								</div>

								{/* 63 Card - Light Green */}
								<div className='absolute left-[600px] top-[210px] w-[130px] h-[200px] bg-[#66bf8f] rounded-[30px] p-[20px] flex flex-col justify-between'>
									<p className='font-morganite font-black text-[clamp(48px,6vw,72px)] leading-[0.95] tracking-[0.02em] text-black uppercase'>
										63
									</p>
									<p className='font-gilroy font-semibold text-[16px] leading-[24px] tracking-[0.1px] text-black'>
										Countries Served
									</p>
								</div>

								{/* 6.2+ Million Card - Green */}
								<div className='absolute left-[740px] top-[210px] w-[310px] h-[200px] bg-[#009444] rounded-[30px] p-[20px] flex flex-col justify-between'>
									<p className='font-morganite font-black text-[clamp(48px,6vw,72px)] leading-[0.95] tracking-[0.02em] text-white uppercase'>
										6.2+ Million
									</p>
									<p className='font-gilroy font-semibold text-[16px] leading-[24px] tracking-[0.1px] text-white'>
										Registered Users
									</p>
								</div>
							</div>

							{/* Bottom Line Section */}
							<div className='w-full bg-[#0c1a1a] rounded-[30px] p-[50px] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8'>
								<h3 className='font-morganite font-black text-[clamp(48px,6vw,72px)] leading-[0.95] tracking-[0.02em] text-white uppercase whitespace-nowrap'>
									Bottom Line?
								</h3>
								<div className='flex-1 lg:max-w-[655px]'>
									<p className='font-gilroy font-normal text-[17px] leading-[26px] tracking-[0.1px] text-[lightgrey]'>
										This isn't just a simulator. It's the closest you'll get to
										playing outdoors without breaking a sweat.
									</p>
									<p className='font-gilroy font-bold text-[18px] leading-[22px] tracking-[0.3px] text-[#7ddb8a] uppercase text-center lg:text-left mt-[20px]'>
										Now playing exclusively at The Virtual Greens
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Mobile responsive layout */}
			<div className='block lg:hidden px-4 sm:px-6 py-16'>
				<div className='space-y-8 max-w-[700px] mx-auto text-center'>
					{/* Title */}
					<div>
						<h2 className='font-morganite font-black text-[clamp(32px,8vw,56px)] leading-[1.1] tracking-[0.02em] text-white uppercase'>
							Golfzon Worldwide Numbers
						</h2>
					</div>

					{/* Mobile statistics cards */}
					<div className='space-y-4'>
						{/* #1 Card */}
						<div className='bg-[#64ff8a] rounded-[20px] p-6 text-left'>
							<p className='font-morganite font-black text-[clamp(32px,8vw,56px)] leading-[1.1] tracking-[0.02em] text-black uppercase mb-3'>
								#1
							</p>
							<p className='font-gilroy font-normal text-[14px] leading-[22px] tracking-[0.1px] text-black'>
								Largest Simulator Company by Market Cap, Revenue & Shots Tracked
							</p>
						</div>

						{/* 100+ Million Card */}
						<div className='bg-[#006f33] rounded-[20px] p-6 text-left'>
							<p className='font-morganite font-black text-[clamp(32px,8vw,56px)] leading-[1.1] tracking-[0.02em] text-white uppercase mb-3'>
								100+ Million
							</p>
							<p className='font-gilroy font-normal text-[14px] leading-[22px] tracking-[0.1px] text-white'>
								Rounds Played Annually
							</p>
						</div>

						{/* 160K+ Card */}
						<div className='bg-[#009444] rounded-[20px] p-6 text-left'>
							<p className='font-morganite font-black text-[clamp(32px,8vw,56px)] leading-[1.1] tracking-[0.02em] text-white uppercase mb-3'>
								160K+
							</p>
							<p className='font-gilroy font-normal text-[14px] leading-[22px] tracking-[0.1px] text-white'>
								Tournaments Hosted Annually
							</p>
						</div>

						{/* 13,490K Card */}
						<div className='bg-[#33a969] rounded-[20px] p-6 text-left'>
							<p className='font-morganite font-black text-[clamp(32px,8vw,56px)] leading-[1.1] tracking-[0.02em] text-black uppercase mb-3'>
								13,490K
							</p>
							<p className='font-gilroy font-normal text-[14px] leading-[22px] tracking-[0.1px] text-black'>
								Locations Worldwide
							</p>
						</div>

						{/* 8.5+ Billion Card */}
						<div className='bg-[#004a22] rounded-[20px] p-6 text-left'>
							<p className='font-morganite font-black text-[clamp(32px,8vw,56px)] leading-[1.1] tracking-[0.02em] text-white uppercase mb-3'>
								8.5+ Billion
							</p>
							<p className='font-gilroy font-normal text-[14px] leading-[22px] tracking-[0.1px] text-white'>
								Shots Tracked Last Year
							</p>
						</div>

						{/* 51K+ Card */}
						<div className='bg-[#33a969] rounded-[20px] p-6 text-left'>
							<p className='font-morganite font-black text-[clamp(32px,8vw,56px)] leading-[1.1] tracking-[0.02em] text-black uppercase mb-3'>
								51K+
							</p>
							<p className='font-gilroy font-normal text-[14px] leading-[22px] tracking-[0.1px] text-black'>
								Simulators in Operation
							</p>
						</div>

						{/* 63 Card */}
						<div className='bg-[#66bf8f] rounded-[20px] p-6 text-left'>
							<p className='font-morganite font-black text-[clamp(32px,8vw,56px)] leading-[1.1] tracking-[0.02em] text-black uppercase mb-3'>
								63
							</p>
							<p className='font-gilroy font-normal text-[14px] leading-[22px] tracking-[0.1px] text-black'>
								Countries Served
							</p>
						</div>

						{/* 6.2+ Million Card */}
						<div className='bg-[#009444] rounded-[20px] p-6 text-left'>
							<p className='font-morganite font-black text-[clamp(32px,8vw,56px)] leading-[1.1] tracking-[0.02em] text-white uppercase mb-3'>
								6.2+ Million
							</p>
							<p className='font-gilroy font-normal text-[14px] leading-[22px] tracking-[0.1px] text-white'>
								Registered Users
							</p>
						</div>
					</div>

					{/* Mobile Bottom Line Section */}
					<div className='bg-[#0c1a1a] rounded-[20px] p-6 space-y-4 text-left'>
						<h3 className='font-morganite font-black text-[clamp(32px,8vw,56px)] leading-[1.1] tracking-[0.02em] text-white uppercase'>
							Bottom Line?
						</h3>
						<p className='font-gilroy font-normal text-[14px] leading-[22px] tracking-[0.1px] text-[lightgrey]'>
							This isn't just a simulator. It's the closest you'll get to
							playing outdoors without breaking a sweat.
						</p>
						<p className='font-gilroy font-bold text-[16px] leading-[20px] tracking-[0.3px] text-[#7ddb8a] uppercase text-center'>
							Now playing exclusively at The Virtual Greens
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
