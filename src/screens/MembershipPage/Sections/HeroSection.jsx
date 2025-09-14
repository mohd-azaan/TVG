// src/screens/MembershipPage/Sections/HeroSection.jsx
// Hero section for membership page with dark background and product showcases
// This component displays the main hero section with "BECAUSE GOLF IS BETTER WHEN IT'S YOURS" and two product cards
// RELEVANT FILES: MembershipPage.jsx, MembershipPage.css, styleguide.css, HeroSection.css

import React from 'react';

export const HeroSection = () => {
	return (
		<section className='membership-hero relative w-full min-h-screen flex items-center'>
			{/* Background gradient */}
			<div className='absolute inset-0 bg-gradient-to-br from-[#1a5f3e] via-[#0f4930] to-[#0d3c2b]' />

			{/* Main content wrapper */}
			<div className='relative max-w-[1920px] mx-auto w-full px-4 sm:px-6 lg:px-10 py-20'>
				{/* Spacer for navbar */}
				<div className='h-20' />

				{/* Hero Title */}
				<div className='text-center mb-16'>
					<h1 className="font-morganite font-[900] text-white text-[clamp(48px,6vw,96px)] leading-[0.95] tracking-wide mb-8">
						BECAUSE GOLF
						<br />
						IS BETTER
						<br />
						<span className='text-[#00a14a]'>WHEN IT&apos;S YOURS</span>
					</h1>
				</div>

				{/* Product Showcases */}
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto'>
					{/* Product 1 - Premium Membership */}
					<div className='product-showcase p-8 text-center'>
						{/* Product Image/Placeholder */}
						<div className='w-full h-64 mb-6 bg-gradient-to-b from-[#00a14a] to-[#008a3e] rounded-lg flex items-center justify-center'>
							<div className='text-white text-6xl font-bold'>TVG</div>
						</div>

						{/* Product Details */}
						<div className='text-white'>
							<h3 className='font-TVG-typography-h4 text-[32px] mb-4 text-[#00a14a]'>
								PREMIUM MEMBERSHIP
							</h3>
							<p className='font-TVG-typography-default text-[18px] mb-6 text-gray-200'>
								Unlimited access to our premium simulators, exclusive events, and priority booking
							</p>
							<div className='mb-6'>
								<span className='font-morganite text-[48px] font-[900] text-white'>
									$299
								</span>
								<span className='font-TVG-typography-default text-[18px] text-gray-300 ml-2'>
									/month
								</span>
							</div>
							<button className='bg-[#00a14a] hover:bg-[#008a3e] text-white font-TVG-typography-button px-8 py-4 rounded-lg transition-colors duration-300 w-full'>
								JOIN NOW
							</button>
						</div>
					</div>

					{/* Product 2 - Standard Membership */}
					<div className='product-showcase p-8 text-center'>
						{/* Product Image/Placeholder */}
						<div className='w-full h-64 mb-6 bg-gradient-to-b from-gray-600 to-gray-800 rounded-lg flex items-center justify-center'>
							<div className='text-white text-6xl font-bold'>TVG</div>
						</div>

						{/* Product Details */}
						<div className='text-white'>
							<h3 className='font-TVG-typography-h4 text-[32px] mb-4 text-white'>
								STANDARD MEMBERSHIP
							</h3>
							<p className='font-TVG-typography-default text-[18px] mb-6 text-gray-200'>
								Access to standard simulators, monthly events, and flexible booking options
							</p>
							<div className='mb-6'>
								<span className='font-morganite text-[48px] font-[900] text-white'>
									$199
								</span>
								<span className='font-TVG-typography-default text-[18px] text-gray-300 ml-2'>
									/month
								</span>
							</div>
							<button className='bg-white hover:bg-gray-100 text-[#1a5f3e] font-TVG-typography-button px-8 py-4 rounded-lg transition-colors duration-300 w-full'>
								JOIN NOW
							</button>
						</div>
					</div>
				</div>

				{/* Additional CTA Text */}
				<div className='text-center mt-16'>
					<p className='font-TVG-typography-hero-text text-[20px] text-gray-200 max-w-2xl mx-auto'>
						Choose the membership that fits your lifestyle and start your journey to becoming a better golfer today.
					</p>
				</div>
			</div>
		</section>
	);
};