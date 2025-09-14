// src/screens/PartnershipPage/sections/HeroSection.jsx
// Hero section for Partnership page with title, description, and background image
// Features dark background with green accent section and professional golf imagery
// RELEVANT FILES: PartnershipPage.jsx, styleguide.css, PartnershipPage.css, freepik-background.png

import React from 'react';

export const HeroSection = () => {
	return (
		<section className='relative overflow-hidden bg-[#272727] h-[100vh] w-full'>
			{/* Green accent section at bottom */}
			<div className='absolute bg-[#006f33] h-[435px] left-0 top-[589px] w-full' />

			{/* Content container positioned like in Figma */}
			<div className='absolute left-[110px] top-0 w-[1700px] h-[1024px]'>
				<div className='relative h-full'>
					{/* Tagline */}
					<div className='absolute left-[170px] top-[529px]'>
						<p className="font-['Gilroy-Bold',sans-serif] text-[22px] font-bold leading-[26px] tracking-[0.44px] text-[#7ddb8a] uppercase">
							REVOLUTIONIZING GOLF ENTERTAINMENT
						</p>
					</div>

					{/* Main title */}
					<div className='absolute left-[170px] top-[275px] w-[655px]'>
						<h1 className="font-['Morganite',sans-serif] text-[148px] font-black leading-[130px] tracking-[2.96px] text-white uppercase">
							Partner with
							<br />
							The Virtual Greens
						</h1>
					</div>

					{/* Description text */}
					<div className='absolute left-[170px] top-[619px] w-[655px]'>
						<div className="font-['Gilroy-Medium',sans-serif] text-[24px] font-normal leading-[normal] text-[#dedede]">
							<p className='mb-6'>
								The Virtual Greens is changing the way golf is played and
								experienced. Built for today's players and tomorrow's fans, we
								blend sport, hospitality, and tech into one bold concept that
								works in any city or suburb.
							</p>
							<p>
								We're now expanding across the region and inviting select
								partners to join the next wave of golf entertainment.
							</p>
						</div>
					</div>

					{/* Right image positioned exactly as in Figma */}
					<div className='absolute left-[880px] top-[275px] w-[650px] h-[535px]'>
						<div
							className='w-full h-full rounded-[30px] bg-cover bg-center bg-no-repeat'
							style={{
								backgroundImage: "url('/freepik-background.png')",
								backgroundColor: '#000000',
							}}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
