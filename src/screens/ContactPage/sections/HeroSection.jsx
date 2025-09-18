// src/screens/ContactPage/sections/HeroSection.jsx
// Hero section for Contact page with title and descriptive text
// Features dark background with green accent section and professional styling
// RELEVANT FILES: ContactPage.jsx, ContactPage.css, styleguide.css

import React from 'react';

export const HeroSection = () => {
	return (
		<section className="bg-[#102121] h-[591px] relative overflow-hidden w-full">
			{/* Green accent section at bottom */}
			<div className="absolute bg-[#006f33] h-[335px] left-0 top-[558px] w-full" />

			{/* Decorative background shape */}
			<div className="absolute flex items-center justify-center left-[341.98px] top-[33.91px]">
				<div className="rotate-[348.049deg]">
					<div className="h-[1080px] w-[1920px] relative overflow-hidden">
						{/* Background decorative elements */}
						<div className="absolute inset-[20.68%_-3.0%_13.63%_6.06%]">
							<div className="absolute inset-[30.68%_-0.3%_3.63%_3.06%] mix-blend-screen">
								<img
									src="/shape14-2.svg"
									alt=""
									className="w-full h-full object-cover"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Main content positioned exactly as in Figma */}
			<div className="absolute left-[280px] top-[237px] w-[655px]">
				<h1 className="contact-hero-title font-['Morganite',sans-serif] text-[110px] font-black leading-[100px] tracking-[2.2px] text-white uppercase">
					Contact<br />
					The Virtual Greens
				</h1>
			</div>

			{/* Description text centered */}
			<div className="absolute left-1/2 top-[307px] transform -translate-x-1/2 translate-x-[283px]">
				<div className="w-[800px]">
					<div className="contact-hero-text font-['Gilroy-Medium',sans-serif] text-[24px] font-normal leading-[normal] text-[#dedede]">
						<p className="mb-6">
							Experience Riyadh's home of indoor golf live and in full swing.
						</p>
						<p>
							Have a question, comments, concerns, or compliments? — We'd love to hear from you!
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};