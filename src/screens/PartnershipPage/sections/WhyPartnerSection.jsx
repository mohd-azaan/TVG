// src/screens/PartnershipPage/sections/WhyPartnerSection.jsx
// Why Partner section with three feature cards highlighting partnership benefits
// Features proven concept, local brand, and full support messaging
// RELEVANT FILES: PartnershipPage.jsx, PartnershipPage.css, verified-icon.svg, location-icon.svg, handshake-icon.svg

import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
	return (
		<div className='feature-card bg-[#e9ebed] rounded-[30px] p-[40px] h-[450px] w-[420px]'>
			{/* Icon */}
			<div className='w-[60px] h-[60px] mb-[33px]'>
				<img src={icon} alt={title} className='w-full h-full' />
			</div>

			{/* Title */}
			<h3 className='font-gilroy font-bold text-[32px] leading-[38px] mb-[22px] min-h-[76px] flex items-start uppercase'>
				{title}
			</h3>

			{/* Description */}
			<div className='feature-card-text'>
				<p className='font-gilroy font-medium text-[20px] leading-[24px] text-[#666666]'>
					{description}
				</p>
			</div>
		</div>
	);
};

export const WhyPartnerSection = () => {
	return (
		<section className='bg-white py-16'>
			<div className='max-w-[1700px] mx-auto px-4 flex flex-col items-center'>
				{/* Section title */}
				<div className='w-[655px] text-center mb-8'>
					<h2 className='font-morganite font-bold text-[96px] leading-[90px] tracking-[1.92px] text-black uppercase'>
						Why Partner with
						<br />
						<span className='text-[#009444]'>The Virtual Greens?</span>
					</h2>
				</div>

				{/* Description text */}
				<div className='w-[655px] mb-12'>
					<p className='text-[#666666] text-[20px] leading-[28px] text-center font-gilroy font-medium'>
						We've taken the best parts of a traditional golf club and reshaped
						them into a faster, more social, and more accessible experience.
						Everyone finds their game at The Virtual Greens. As a partner, you
						bring this winning formula to your own community, with full support
						from a brand that's already up and running.
					</p>
				</div>

				{/* Feature cards */}
				<div className='w-full max-w-[1360px] mb-16'>
					<div className='flex gap-[50px] items-center justify-center py-[38px]'>
						<FeatureCard
							icon='/verified-24dp-e3e3e3-fill0-wght400-grad0-opsz24-1.svg'
							title='A Proven Concept'
							description="The Virtual Greens has an operational venue, a loyal customer base, and a scalable model, all tested and refined. You'll receive everything you need to launch with confidence."
						/>

						<FeatureCard
							icon='/location-on-24dp-e3e3e3-fill0-wght400-grad0-opsz24-1.svg'
							title='A Local Brand'
							description='Born and built in the region, The Virtual Greens speaks the local language, literally and culturally. This is a business that fits right into its surroundings and builds a real connection with players.'
						/>

						<FeatureCard
							icon='/handshake-24dp-e3e3e3-fill0-wght400-grad0-opsz24-1.svg'
							title='Full Support, Start to Finish'
							description="Site selection, launch plans, and ongoing operations, we're with you every step of the way. Our playbook is detailed, flexible, and built to help you succeed from day one."
						/>
					</div>
				</div>

				{/* The Indoor Movement section */}
				<div className='w-full max-w-[1343px] bg-[#009444] rounded-[30px] p-[40px]'>
					<div className='flex gap-[20px] items-start justify-start'>
						{/* Title section */}
						<div className='w-[535px]'>
							<h3 className='font-morganite font-bold text-[96px] leading-[90px] tracking-[1.92px] text-white uppercase'>
								THE INDOOR MOVEMENT
							</h3>
						</div>

						{/* Text section */}
						<div className='w-[655px]'>
							<p className='font-gilroy text-[20px] font-normal leading-[28px] text-white'>
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
		</section>
	);
};
