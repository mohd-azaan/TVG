// src/screens/ContactPage/sections/ReadyToVisitSection.jsx
// Ready to Visit section with CTA button matching standard design pattern
// Features dark background with centered content and call-to-action
// RELEVANT FILES: ContactPage.jsx, ContactPage.css, arrow-right.svg

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

export const ReadyToVisitSection = () => {
	return (
		<section className="ready-to-visit-section bg-[#102121] h-20 w-full relative">
			{/* Title positioned as in Figma */}
			<div className="absolute left-[724px] top-1/2 transform -translate-y-1/2">
				<h2 className="ready-title font-['Gilroy-Bold',sans-serif] text-[28px] font-bold leading-[normal] text-white uppercase text-nowrap">
					Ready to Visit?
				</h2>
			</div>

			{/* CTA Button positioned as in Figma */}
			<div className="absolute left-[980px] top-1/2 transform -translate-y-1/2">
				<button className="ready-cta-button bg-[#009444] border-none rounded-[50px] px-[30px] py-[7px] flex items-center gap-[10px] hover:bg-[#007a3a] transition-colors duration-200">
					<span className="ready-cta-text font-['Gilroy-SemiBold',sans-serif] text-[18px] font-semibold leading-[40px] text-white uppercase text-center">
						Plan Your Visit
					</span>
					<ArrowRight size="24" />
				</button>
			</div>
		</section>
	);
};