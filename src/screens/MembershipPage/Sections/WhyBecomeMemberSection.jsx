// src/screens/MembershipPage/Sections/WhyBecomeMemberSection.jsx
// Why become a member section with benefits list and compelling reasons to join
// This component displays the reasons why users should become members with engaging visuals
// RELEVANT FILES: MembershipPage.jsx, MembershipPage.css, styleguide.css, WhyBecomeMemberSection.css

import React from 'react';

export const WhyBecomeMemberSection = () => {
	const membershipReasons = [
		{
			icon: '🎯',
			title: 'Improve Your Game',
			description: 'Access advanced swing analysis, personalized coaching, and practice sessions designed to elevate your golf performance.',
		},
		{
			icon: '🌍',
			title: 'Play Iconic Courses',
			description: 'Experience world-famous golf courses from Pebble Beach to St. Andrews without leaving Riyadh.',
		},
		{
			icon: '👥',
			title: 'Join a Community',
			description: 'Connect with fellow golf enthusiasts, participate in tournaments, and build lasting friendships.',
		},
		{
			icon: '⚡',
			title: 'Convenience & Flexibility',
			description: 'Play golf year-round in a climate-controlled environment with flexible scheduling that fits your lifestyle.',
		},
		{
			icon: '🏆',
			title: 'Exclusive Benefits',
			description: 'Enjoy member-only events, priority access, discounts, and premium amenities not available to day guests.',
		},
		{
			icon: '💎',
			title: 'Premium Experience',
			description: 'State-of-the-art simulators, professional instruction, and luxury amenities create an unmatched golf experience.',
		},
	];

	return (
		<section className='py-20 bg-[#1a5f3e]'>
			<div className='max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10'>
				{/* Section Header */}
				<div className='text-center mb-16'>
					<h2 className='font-morganite font-[800] text-[clamp(48px,6vw,80px)] text-white leading-[0.9] mb-6'>
						WHY BECOME
						<br />
						A MEMBER?
					</h2>
					<p className='font-TVG-typography-default text-[20px] text-gray-200 max-w-3xl mx-auto'>
						Discover the exclusive advantages that make membership at The Virtual Greens the ultimate golf experience in Riyadh.
					</p>
				</div>

				{/* Reasons Grid */}
				<div className='member-benefits-grid mb-16'>
					{membershipReasons.map((reason, index) => (
						<div
							key={index}
							className='bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 rounded-xl p-8 text-center hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2'
						>
							<div className='text-6xl mb-4'>{reason.icon}</div>
							<h3 className='font-TVG-typography-h5 text-[24px] text-white mb-4'>
								{reason.title}
							</h3>
							<p className='font-TVG-typography-default text-[16px] text-gray-200 leading-relaxed'>
								{reason.description}
							</p>
						</div>
					))}
				</div>

				{/* Call to Action */}
				<div className='text-center bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-12 max-w-4xl mx-auto'>
					<h3 className='font-morganite font-[800] text-[40px] text-white mb-4'>
						READY TO TEE OFF?
					</h3>
					<p className='font-TVG-typography-default text-[20px] text-gray-200 mb-8 max-w-2xl mx-auto'>
						Join hundreds of satisfied members who have transformed their golf game and lifestyle. Start your journey today.
					</p>

					<div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-8'>
						<button className='bg-[#00a14a] hover:bg-[#008a3e] text-white font-TVG-typography-button px-12 py-4 rounded-lg transition-colors duration-300 text-[18px]'>
							BECOME A MEMBER
						</button>
						<button className='border-2 border-white hover:bg-white hover:text-[#1a5f3e] text-white font-TVG-typography-button px-12 py-4 rounded-lg transition-colors duration-300 text-[18px]'>
							SCHEDULE A VISIT
						</button>
					</div>

					{/* Contact Information */}
					<div className='border-t border-white border-opacity-20 pt-8'>
						<p className='font-TVG-typography-default text-[16px] text-gray-300 mb-4'>
							Have questions? Our membership team is here to help.
						</p>
						<div className='flex flex-col sm:flex-row gap-6 justify-center items-center text-white'>
							<a
								href='tel:+966123456789'
								className='flex items-center gap-2 font-TVG-typography-default text-[16px] hover:text-[#00a14a] transition-colors'
							>
								📞 +966 12 345 6789
							</a>
							<a
								href='mailto:membership@tvg.com'
								className='flex items-center gap-2 font-TVG-typography-default text-[16px] hover:text-[#00a14a] transition-colors'
							>
								✉️ membership@tvg.com
							</a>
						</div>
					</div>
				</div>

				{/* Membership Stats */}
				<div className='mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center'>
					<div>
						<div className='font-morganite text-[48px] font-[900] text-[#00a14a] mb-2'>
							98%
						</div>
						<p className='font-TVG-typography-default text-[16px] text-gray-200'>
							Member Satisfaction
						</p>
					</div>
					<div>
						<div className='font-morganite text-[48px] font-[900] text-[#00a14a] mb-2'>
							15
						</div>
						<p className='font-TVG-typography-default text-[16px] text-gray-200'>
							Stroke Average Improvement
						</p>
					</div>
					<div>
						<div className='font-morganite text-[48px] font-[900] text-[#00a14a] mb-2'>
							24/7
						</div>
						<p className='font-TVG-typography-default text-[16px] text-gray-200'>
							Access Available
						</p>
					</div>
					<div>
						<div className='font-morganite text-[48px] font-[900] text-[#00a14a] mb-2'>
							365
						</div>
						<p className='font-TVG-typography-default text-[16px] text-gray-200'>
							Days of Golf Year-Round
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};