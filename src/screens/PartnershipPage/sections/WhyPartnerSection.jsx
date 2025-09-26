// src/screens/PartnershipPage/sections/WhyPartnerSection.jsx
// Why Partner section with three feature cards highlighting partnership benefits
// Features proven concept, local brand, and full support messaging
// RELEVANT FILES: PartnershipPage.jsx, PartnershipPage.css, verified-icon.svg, location-icon.svg, handshake-icon.svg

import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
	return (
		<div className='bg-[#F6F6F6] rounded-[20px] p-6 lg:p-8 shadow-sm flex flex-col h-full'>
			{/* Icon */}
			<div className='mb-6'>
				<img src={icon} alt={title} className='w-[40px] h-[40px] flex-shrink-0' />
			</div>

			{/* Title */}
			<h3 className='font-gilroy font-bold text-[19px] lg:text-[20px] text-[#0b0b0b] mb-4 leading-[1.12] tracking-[0.4px] uppercase'>
				{title}
			</h3>

			{/* Description */}
			<div className='flex-grow'>
				<p className='font-gilroy font-medium text-[15px] lg:text-[16px] leading-[1.45] text-[#7b7b7b]'>
					{description}
				</p>
			</div>
		</div>
	);
};

export const WhyPartnerSection = () => {
	return (
		<section className='relative w-full bg-white py-20 lg:py-24 overflow-hidden'>
			<div className='relative max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10'>
				{/* Universal Spacing Wrapper */}
				<div className='lg:ml-[12vw] md:ml-[8vw] lg:mr-[12vw] md:mr-[8vw]'>
					<div className='max-w-[1200px] mx-auto'>
						{/* Section Header */}
						<div className='text-center mb-16 lg:mb-20'>
							<h2 className='font-morganite font-black text-[clamp(64px,6vw,80px)] leading-[1.1] text-[#1a1a1a] tracking-[1px] max-w-5xl mx-auto uppercase mb-6'>
								Why Partner with
								<br />
								<span className='text-[#009444]'>The Virtual Greens?</span>
							</h2>
							<p className='font-gilroy font-medium text-base leading-[24px] tracking-[0.1px] text-[#757575] max-w-4xl mx-auto'>
								We've taken the best parts of a traditional golf club and reshaped
								them into a faster, more social, and more accessible experience.
								Everyone finds their game at The Virtual Greens. As a partner, you
								bring this winning formula to your own community, with full support
								from a brand that's already up and running.
							</p>
						</div>

						{/* Features Grid */}
						<div className='grid md:grid-cols-3 gap-8 lg:gap-10 mb-16 lg:mb-20'>
							<FeatureCard
								icon='/sports_golf.svg'
								title='A Proven Concept'
								description="The Virtual Greens has an operational venue, a loyal customer base, and a scalable model, all tested and refined. You'll receive everything you need to launch with confidence."
							/>

							<FeatureCard
								icon='/sports_golf.svg'
								title='A Local Brand'
								description='Born and built in the region, The Virtual Greens speaks the local language, literally and culturally. This is a business that fits right into its surroundings and builds a real connection with players.'
							/>

							<FeatureCard
								icon='/sports_golf.svg'
								title='Full Support, Start to Finish'
								description="Site selection, launch plans, and ongoing operations, we're with you every step of the way. Our playbook is detailed, flexible, and built to help you succeed from day one."
							/>
						</div>

						{/* The Indoor Movement section */}
						<div className='w-full bg-[#009444] rounded-[20px] p-8 lg:p-12'>
							<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
								{/* Title section */}
								<div>
									<h3 className='font-morganite font-black text-[clamp(48px,6vw,72px)] leading-[0.95] tracking-[0.02em] text-white uppercase'>
										THE INDOOR MOVEMENT
									</h3>
								</div>

								{/* Text section */}
								<div>
									<p className='font-gilroy font-medium text-base leading-[24px] tracking-[0.1px] text-white'>
										By 2028, reports estimates that 80% of golf rounds will be
										played indoors. Golf is currently positioned as one of the most
										popular sports in the world. Despite this there is still
										tremendous opportunity; we are currently on the cusp of golf
										next participation boom fuelled by increasing indoor popularity,
										and The Virtual Greens is leading the way.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
