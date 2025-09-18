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
		<div className='relative w-full bg-[#102121] py-16'>
			<div className='max-w-[1700px] mx-auto px-4'>
				<div className='flex items-center justify-center gap-16'>
					{/* Left side - image */}
					<div className='w-[655px] h-[400px] rounded-[30px] relative overflow-hidden flex items-center justify-center'>
						<img
							src='/freepik__background__81702-1.png'
							alt='Golf team members'
							className='w-full h-full object-cover object-center rounded-[30px]'
						/>
					</div>
					<div className='flex-1 max-w-[655px]'>
						{/* Section title */}
						<h2 className='font-morganite font-extrabold text-[96px] leading-[90px] text-white uppercase tracking-[1.92px] mb-8'>
							WHY BECOME A MEMBER?
						</h2>

						{/* Benefits list */}
						<div className='mb-8 space-y-3'>
							{benefits.map((benefit, index) => (
								<div key={index} className='flex items-center gap-4'>
									<img
										src='/sports_golf_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24 1.svg'
										alt='Golf icon'
										className='w-[30px] h-[30px] flex-shrink-0'
									/>
									<p className='font-gilroy font-medium text-[20px] leading-[28px] text-white'>
										{benefit}
									</p>
								</div>
							))}
						</div>

						{/* Bottom tagline */}
						<p className='font-gilroy font-medium text-[20px] leading-[28px] text-[#b0b0b0]'>
							It's golf on your terms with benefits that go far beyond the game.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
