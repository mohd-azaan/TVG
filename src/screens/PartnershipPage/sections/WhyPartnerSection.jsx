// src/screens/PartnershipPage/sections/WhyPartnerSection.jsx
// Why Partner section with three feature cards highlighting partnership benefits
// Features proven concept, local brand, and full support messaging
// RELEVANT FILES: PartnershipPage.jsx, PartnershipPage.css, verified-icon.svg, location-icon.svg, handshake-icon.svg

import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
	return (
		<div className="feature-card bg-[#e9ebed] rounded-[30px] p-[40px] h-[450px] w-[420px]">
			{/* Icon */}
			<div className="w-[60px] h-[60px] mb-[33px]">
				<img src={icon} alt={title} className="w-full h-full" />
			</div>

			{/* Title */}
			<h3 className="feature-card-title mb-[22px] h-[37px]">
				{title}
			</h3>

			{/* Description */}
			<div className="feature-card-text">
				<p>{description}</p>
			</div>
		</div>
	);
};

export const WhyPartnerSection = () => {
	return (
		<section className="bg-white h-[1398px] relative overflow-hidden">
			{/* Section title */}
			<div className="absolute left-[949.5px] top-[129px] w-[655px] transform -translate-x-1/2 text-center">
				<h2 className="font-['Morganite',sans-serif] text-[96px] font-extrabold leading-[90px] tracking-[1.92px] text-black uppercase">
					Why Partner with<br />
					<span className="text-[#009444]">The Virtual Greens?</span>
				</h2>
			</div>

			{/* Description text */}
			<div className="absolute left-[622px] top-[310px] w-[655px]">
				<p className="text-[#757575] text-[20px] leading-[28px] text-center font-['Gilroy-Medium',sans-serif]">
					We've taken the best parts of a traditional golf club and reshaped them into a faster,
					more social, and more accessible experience. Everyone finds their game at The Virtual Greens.
					As a partner, you bring this winning formula to your own community, with full support
					from a brand that's already up and running.
				</p>
			</div>

			{/* Feature cards positioned exactly as in Figma */}
			<div className="absolute left-[280px] top-[485px] w-[1360px]">
				<div className="flex gap-[50px] items-center justify-start py-[38px]">
					<FeatureCard
						icon="/verified-24dp-e3e3e3-fill0-wght400-grad0-opsz24-1.svg"
						title="A Proven Concept"
						description="The Virtual Greens has an operational venue, a loyal customer base, and a scalable model, all tested and refined. You'll receive everything you need to launch with confidence."
					/>

					<FeatureCard
						icon="/location-on-24dp-e3e3e3-fill0-wght400-grad0-opsz24-1.svg"
						title="A Local Brand"
						description="Born and built in the region, The Virtual Greens speaks the local language, literally and culturally. This is a business that fits right into its surroundings and builds a real connection with players."
					/>

					<FeatureCard
						icon="/handshake-24dp-e3e3e3-fill0-wght400-grad0-opsz24-1.svg"
						title="Full Support, Start to Finish"
						description="Site selection, launch plans, and ongoing operations, we're with you every step of the way. Our playbook is detailed, flexible, and built to help you succeed from day one."
					/>
				</div>
			</div>

			{/* The Indoor Movement section positioned at bottom */}
			<div className="absolute left-[280px] top-[1053px] w-[1343px] bg-[#009444] rounded-[30px] p-[40px] h-[216px]">
				<div className="flex gap-[20px] items-start justify-start">
					{/* Title section */}
					<div className="w-[535px]">
						<h3 className="font-['Morganite',sans-serif] text-[96px] font-extrabold leading-[90px] tracking-[1.92px] text-white uppercase">
							THE INDOOR MOVEMENT
						</h3>
					</div>

					{/* Text section */}
					<div className="w-[655px]">
						<p className="font-['Gilroy-Medium',sans-serif] text-[20px] font-normal leading-[28px] text-white">
							By 2028, reports estimates that 80% of golf rounds will be played indoors.
							Golf is currently positioned as one of the most popular sports in the world.
							Despite this there is still tremendous opportunity; we are currently on the cusp
							of golf next participation boom fuelled by increasing indoor popularity,
							and The Virtual Greens is leading the way.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};