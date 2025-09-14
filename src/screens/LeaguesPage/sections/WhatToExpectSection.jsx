// src/screens/LeaguesPage/sections/WhatToExpectSection.jsx
// What to Expect section featuring league benefits and features with golf icons
// Displays image, main heading, and feature list with detailed descriptions
// RELEVANT FILES: LeaguesPage.jsx, styleguide.css, indoor-golf-1.png, sports_golf icons

import React from 'react';

const WhatToExpectSection = () => {
	const features = [
		"Weekly matches with a rotating format.",
		"Exclusive league-night food and drink specials.",
		"Prizes and giveaways for top players and standout moments.",
		"Live leaderboard to track your progress.",
		"Laid-back, social atmosphere with just the right level of friendly competition."
	];

	return (
		<div className="absolute bg-[#f6f6f6] h-[768px] left-0 overflow-clip top-[2108px] w-[1920px]" data-name="What to expect">
			{/* Left side image */}
			<div className="absolute bg-center bg-cover bg-no-repeat h-[508px] left-[280px] rounded-[30px] top-[130px] w-[655px]" data-name="indoor-golf 1" style={{ backgroundImage: "url('/indoor-golf-1.png')" }} />

			{/* Right side content */}
			<div className="absolute font-['Morganite:ExtraBold',_sans-serif] leading-[0] left-[986px] not-italic text-[96px] text-black top-[200px] tracking-[1.92px] uppercase w-[655px]">
				<p className="leading-[90px]">What to Expect</p>
			</div>

			<div className="absolute font-['Gilroy-Bold:☞',_sans-serif] h-[60px] leading-[0] left-[986px] not-italic text-[#009444] text-[22px] top-72 tracking-[0.44px] uppercase w-[750px]">
				<p className="leading-[26px]">Stay Tuned...</p>
			</div>

			{/* Features list */}
			{features.map((feature, index) => (
				<div key={index} className="absolute contents" data-name={`Feature ${index + 2}`} style={{ left: '985px', top: `${348 + (index * 36)}px` }}>
					<div className="absolute font-['Gilroy-Medium:☞',_sans-serif] leading-[0] left-[1033px] not-italic text-[#757575] text-[20px] w-[600px]" style={{ top: `${349 + (index * 36)}px` }}>
						<p className="leading-[28px]">{feature}</p>
					</div>
					<div className="absolute left-[985px] size-[30px]" data-name="sports_golf_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24 1" style={{ top: `${348 + (index * 36)}px` }}>
						<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M15 3C8.925 3 4 7.925 4 14C4 20.075 8.925 25 15 25C21.075 25 26 20.075 26 14C26 7.925 21.075 3 15 3ZM15 23C10.025 23 6 18.975 6 14C6 9.025 10.025 5 15 5C19.975 5 24 9.025 24 14C24 18.975 19.975 23 15 23Z" fill="#E3E3E3"/>
							<path d="M15 7C11.14 7 8 10.14 8 14C8 17.86 11.14 21 15 21C18.86 21 22 17.86 22 14C22 10.14 18.86 7 15 7ZM15 19C12.24 19 10 16.76 10 14C10 11.24 12.24 9 15 9C17.76 9 20 11.24 20 14C20 16.76 17.76 19 15 19Z" fill="#E3E3E3"/>
						</svg>
					</div>
				</div>
			))}
		</div>
	);
};

export { WhatToExpectSection };