// src/screens/MembershipPage/Sections/MembershipBenefitsSection.jsx
// Membership benefits section with green card design and membership details
// This component displays membership benefits in a visually appealing green card format
// RELEVANT FILES: MembershipPage.jsx, MembershipPage.css, styleguide.css, MembershipBenefitsSection.css

import React from 'react';

export const MembershipBenefitsSection = () => {
	return (
		<section className='py-20 bg-gray-50'>
			<div className='max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10'>
				{/* Main Benefits Card */}
				<div className='benefits-card max-w-5xl mx-auto p-12 text-center'>
					{/* Card Header */}
					<div className='mb-8'>
						<h2 className='font-morganite font-[800] text-[48px] text-white leading-[44px] mb-4'>
							MEMBERSHIP BENEFITS
						</h2>
						<p className='font-TVG-typography-default text-[20px] text-gray-200'>
							Experience golf like never before with exclusive member privileges
						</p>
					</div>

					{/* Benefits Grid */}
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
						{/* Benefit 1 */}
						<div className='text-center'>
							<div className='w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center'>
								<span className='text-white text-2xl'>🏌️</span>
							</div>
							<h3 className='font-TVG-typography-h5 text-white text-[20px] mb-2'>
								Unlimited Simulator Access
							</h3>
							<p className='font-TVG-typography-default text-[16px] text-gray-200'>
								Practice and play on world-renowned courses anytime
							</p>
						</div>

						{/* Benefit 2 */}
						<div className='text-center'>
							<div className='w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center'>
								<span className='text-white text-2xl'>🎯</span>
							</div>
							<h3 className='font-TVG-typography-h5 text-white text-[20px] mb-2'>
								Priority Booking
							</h3>
							<p className='font-TVG-typography-default text-[16px] text-gray-200'>
								Reserve your preferred time slots ahead of others
							</p>
						</div>

						{/* Benefit 3 */}
						<div className='text-center'>
							<div className='w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center'>
								<span className='text-white text-2xl'>👥</span>
							</div>
							<h3 className='font-TVG-typography-h5 text-white text-[20px] mb-2'>
								Guest Privileges
							</h3>
							<p className='font-TVG-typography-default text-[16px] text-gray-200'>
								Bring friends and family to enjoy the experience
							</p>
						</div>

						{/* Benefit 4 */}
						<div className='text-center'>
							<div className='w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center'>
								<span className='text-white text-2xl'>🏆</span>
							</div>
							<h3 className='font-TVG-typography-h5 text-white text-[20px] mb-2'>
								Exclusive Events
							</h3>
							<p className='font-TVG-typography-default text-[16px] text-gray-200'>
								Access to member-only tournaments and social events
							</p>
						</div>

						{/* Benefit 5 */}
						<div className='text-center'>
							<div className='w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center'>
								<span className='text-white text-2xl'>📊</span>
							</div>
							<h3 className='font-TVG-typography-h5 text-white text-[20px] mb-2'>
								Performance Analytics
							</h3>
							<p className='font-TVG-typography-default text-[16px] text-gray-200'>
								Track your progress with detailed swing analysis
							</p>
						</div>

						{/* Benefit 6 */}
						<div className='text-center'>
							<div className='w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center'>
								<span className='text-white text-2xl'>💰</span>
							</div>
							<h3 className='font-TVG-typography-h5 text-white text-[20px] mb-2'>
								Exclusive Discounts
							</h3>
							<p className='font-TVG-typography-default text-[16px] text-gray-200'>
								Save on food, beverages, and pro shop merchandise
							</p>
						</div>
					</div>

					{/* Membership Numbers */}
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 border-t border-white border-opacity-20 pt-12'>
						<div className='text-center'>
							<div className='font-morganite text-[48px] font-[900] text-white mb-2'>
								500+
							</div>
							<p className='font-TVG-typography-default text-[18px] text-gray-200'>
								Happy Members
							</p>
						</div>
						<div className='text-center'>
							<div className='font-morganite text-[48px] font-[900] text-white mb-2'>
								15
							</div>
							<p className='font-TVG-typography-default text-[18px] text-gray-200'>
								Premium Simulators
							</p>
						</div>
						<div className='text-center'>
							<div className='font-morganite text-[48px] font-[900] text-white mb-2'>
								100+
							</div>
							<p className='font-TVG-typography-default text-[18px] text-gray-200'>
								World-Class Courses
							</p>
						</div>
					</div>

					{/* CTA Section */}
					<div className='border-t border-white border-opacity-20 pt-8'>
						<h3 className='font-TVG-typography-h4 text-[24px] text-white mb-4'>
							Ready to Join The Virtual Greens Family?
						</h3>
						<p className='font-TVG-typography-default text-[18px] text-gray-200 mb-8'>
							Start your membership today and experience golf like never before
						</p>
						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							<button className='bg-white hover:bg-gray-100 text-[#00a14a] font-TVG-typography-button px-8 py-4 rounded-lg transition-colors duration-300'>
								START MEMBERSHIP
							</button>
							<button className='border-2 border-white hover:bg-white hover:text-[#00a14a] text-white font-TVG-typography-button px-8 py-4 rounded-lg transition-colors duration-300'>
								BOOK A TOUR
							</button>
						</div>
					</div>
				</div>

				{/* Additional Information */}
				<div className='mt-16 text-center max-w-3xl mx-auto'>
					<div className='bg-white p-8 rounded-lg shadow-sm'>
						<h3 className='font-TVG-typography-h5 text-[24px] text-[#1a5f3e] mb-4'>
							NEW MEMBER BONUS
						</h3>
						<p className='font-TVG-typography-default text-[18px] text-gray-600 mb-6'>
							Join this month and get your first lesson with our PGA professional absolutely free, plus a complimentary equipment fitting session.
						</p>
						<div className='flex items-center justify-center space-x-2 text-[#00a14a] font-TVG-typography-button'>
							<span>🎁</span>
							<span>Value: $200</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};