// src/screens/PartnershipPage/sections/GrowthSection.jsx
// Growth section with "Let's Grow the Game" title and call-to-action button
// Features dark background with centered content and prominent CTA
// RELEVANT FILES: PartnershipPage.jsx, PartnershipPage.css, arrow-right.svg

import React from 'react';

const ArrowRight = ({ size = "24" }) => {
	if (size === "24") {
		return (
			<div className="relative w-6 h-6">
				<img src="/arrow-right.svg" alt="" className="w-full h-full" />
			</div>
		);
	}
	return null;
};

export const GrowthSection = () => {
	return (
		<section className="bg-[#102121] h-[435px] relative overflow-hidden">
			{/* Title positioned exactly as in Figma */}
			<div className="absolute left-[959.5px] top-[100px] w-[655px] transform -translate-x-1/2">
				<h2 className="font-['Morganite',sans-serif] text-[96px] font-extrabold leading-[90px] tracking-[1.92px] text-white uppercase text-center">
					Let's{' '}
					<span className="text-[#009444] text-[120px] tracking-[2.4px]">
						Grow
					</span>{' '}
					the Game
				</h2>
			</div>

			{/* Description text positioned exactly as in Figma */}
			<div className="absolute left-[632px] top-[191px] w-[655px]">
				<p className="font-['Gilroy-Medium',sans-serif] text-[20px] font-normal leading-[28px] text-[lightgrey] text-center">
					We're looking for forward-thinking partners who believe in the future
					of indoor golf. If you're ready to bring The Virtual Greens to your city,
					let's start the conversation.
				</p>
			</div>

			{/* CTA Button positioned exactly as in Figma */}
			<div className="absolute left-[959.5px] top-[291px] transform -translate-x-1/2">
				<button className="bg-[#009444] rounded-[50px] px-[30px] py-[7px] flex items-center gap-[10px] hover:bg-[#007a3a] transition-colors duration-200">
					<span className="font-['Gilroy-SemiBold',sans-serif] text-[18px] font-semibold leading-[40px] text-white uppercase text-center">
						Know More
					</span>
					<ArrowRight size="24" />
				</button>
			</div>
		</section>
	);
};