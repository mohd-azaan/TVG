// src/screens/MembershipPage/Sections/WhyBecomeMemberSection.jsx
// Membership benefits section showcasing why users should become members with detailed benefits
// Features dark background with member benefits list and promotional content
// RELEVANT FILES: MembershipPage.jsx, tailwind.config.js

import React from 'react';

export const WhyBecomeMemberSection = () => {
	const benefits = [
		'Priority access to our most popular bays.',
		'Exclusive rates on food, drinks, coaching, and gear.',
		'Invites to tournaments, events, and members-only socials.',
		'Guest passes so your crew can join in.',
	];

	return (
		<section className='relative w-full bg-[#102121] overflow-hidden'>
			<div className='relative max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-28'>
				<div className='lg:ml-[12vw] md:ml-[8vw] lg:mr-[12vw] md:mr-[8vw]'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center'>
						{/* Left side - image */}
						<div className='w-full'>
							<img
								src='/freepik__background__81702-1.png'
								alt='Golf team members'
								className='w-full aspect-[16/9] object-cover rounded-[30px] shadow-xl lg:w-[655px] lg:h-[400px] lg:aspect-auto'
							/>
						</div>

						{/* Right side - content */}
						<div className='space-y-6'>
							{/* Section title */}
							<h2 className='font-morganite font-black text-[clamp(48px,6vw,80px)] leading-[0.95] tracking-[0.02em] text-white uppercase'>
								WHY BECOME A MEMBER?
							</h2>

							{/* Benefits list */}
							<div className='space-y-4'>
								{benefits.map((benefit, index) => (
									<div key={index} className='flex items-start gap-3'>
										<img
											src='/sports_golf_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24 1.svg'
											alt='Golf icon'
											className='w-5 h-5 flex-shrink-0 opacity-80 mt-1'
										/>
										<p className='font-gilroy font-medium text-base leading-[24px] tracking-[0.1px] text-[rgba(209,211,212,0.85)]'>
											{benefit}
										</p>
									</div>
								))}
							</div>

							{/* Bottom tagline */}
							<p className='font-gilroy font-medium text-base leading-[24px] tracking-[0.1px] text-[#757575] pt-4'>
								It's golf on your terms with benefits that go far beyond the game.
							</p>
						</div>
					</div>

					{/* Mobile Layout */}
					<div className='block lg:hidden px-4 sm:px-6 py-16'>
						<div className='space-y-8 max-w-[700px] mx-auto text-center'>
							<h2 className='font-morganite font-black text-[clamp(32px,8vw,56px)] leading-[1.1] tracking-[0.02em] text-white uppercase'>
								WHY BECOME A MEMBER?
							</h2>
							<img
								src='/freepik__background__81702-1.png'
								alt='Golf team members'
								className='w-full aspect-[16/9] object-cover rounded-[20px] shadow-xl'
							/>
							<div className='space-y-4 px-4'>
								{benefits.map((benefit, index) => (
									<div key={index} className='flex items-start gap-3'>
										<img
											src='/sports_golf_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24 1.svg'
											alt='Golf icon'
											className='w-4 h-4 flex-shrink-0 opacity-100 mt-1'
										/>
										<p className='font-gilroy font-medium text-[14px] leading-[22px] tracking-[0.1px] text-[rgba(209,211,212,0.85)] text-left'>
											{benefit}
										</p>
									</div>
								))}
								<p className='font-gilroy font-medium text-[14px] leading-[22px] tracking-[0.1px] text-[#757575] pt-4'>
									It's golf on your terms with benefits that go far beyond the game.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
