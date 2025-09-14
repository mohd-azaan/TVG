// src/screens/MembershipPage/Sections/ComparisonTableSection.jsx
// Comparison table section showing membership tiers and feature comparison
// This component displays a comprehensive comparison table with different membership options
// RELEVANT FILES: MembershipPage.jsx, MembershipPage.css, styleguide.css, ComparisonTableSection.css

import React from 'react';

export const ComparisonTableSection = () => {
	// Membership tiers data
	const membershipTiers = [
		{
			name: 'PLATINUM',
			highlight: true,
			features: {
				'Simulator Access': 'Unlimited',
				'Peak Time Access': '✓',
				'Guest Privileges': '4 guests',
				'Events Access': 'All events',
				'Personal Coach': '✓',
				'Equipment Storage': '✓',
				'Food & Beverages': '20% off',
				'Merchandise Discount': '25% off',
				'Priority Booking': '✓',
				'Club Fitting': '✓',
				'Private Events': '✓',
				'Tournament Access': 'All tournaments',
				'Lounge Access': 'VIP lounge',
			},
			price: '$399',
		},
		{
			name: 'PREMIUM',
			highlight: false,
			features: {
				'Simulator Access': '100 hours',
				'Peak Time Access': '✓',
				'Guest Privileges': '2 guests',
				'Events Access': 'Most events',
				'Personal Coach': 'Discounted',
				'Equipment Storage': '✓',
				'Food & Beverages': '15% off',
				'Merchandise Discount': '20% off',
				'Priority Booking': '✓',
				'Club Fitting': 'Discounted',
				'Private Events': 'Limited',
				'Tournament Access': 'Selected',
				'Lounge Access': 'Standard',
			},
			price: '$299',
		},
		{
			name: 'STANDARD',
			highlight: false,
			features: {
				'Simulator Access': '50 hours',
				'Peak Time Access': 'Limited',
				'Guest Privileges': '1 guest',
				'Events Access': 'Some events',
				'Personal Coach': '✗',
				'Equipment Storage': '✗',
				'Food & Beverages': '10% off',
				'Merchandise Discount': '15% off',
				'Priority Booking': '✗',
				'Club Fitting': 'Full price',
				'Private Events': '✗',
				'Tournament Access': 'Basic',
				'Lounge Access': 'Standard',
			},
			price: '$199',
		},
		{
			name: 'BASIC',
			highlight: false,
			features: {
				'Simulator Access': '20 hours',
				'Peak Time Access': '✗',
				'Guest Privileges': '✗',
				'Events Access': 'Open events',
				'Personal Coach': '✗',
				'Equipment Storage': '✗',
				'Food & Beverages': '5% off',
				'Merchandise Discount': '10% off',
				'Priority Booking': '✗',
				'Club Fitting': 'Full price',
				'Private Events': '✗',
				'Tournament Access': '✗',
				'Lounge Access': 'Standard',
			},
			price: '$99',
		},
	];

	const features = Object.keys(membershipTiers[0].features);

	return (
		<section className='py-20 bg-white'>
			<div className='max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10'>
				{/* Section Header */}
				<div className='text-center mb-16'>
					<h2 className='font-morganite font-[800] text-[64px] text-[#1a5f3e] leading-[60px] mb-4'>
						WHICH ONE FITS
						<br />
						YOU BEST?
					</h2>
					<p className='font-TVG-typography-default text-[20px] text-gray-600 max-w-2xl mx-auto'>
						Compare our membership options and choose the one that matches your golf goals and lifestyle.
					</p>
				</div>

				{/* Comparison Table */}
				<div className='overflow-x-auto'>
					<div className='comparison-table min-w-[1000px]'>
						<table className='w-full border-collapse'>
							{/* Header Row */}
							<thead>
								<tr>
									<th className='text-left p-6 border-b-2 border-white bg-gray-100 font-TVG-typography-h5 text-[#1a5f3e]'>
										FEATURES
									</th>
									{membershipTiers.map((tier, index) => (
										<th
											key={index}
											className={`text-center p-6 border-b-2 border-white font-TVG-typography-h5 text-white ${
												tier.highlight ? 'bg-[#00a14a]' : 'bg-[#1a5f3e]'
											}`}
										>
											{tier.name}
											{tier.highlight && (
												<div className='text-sm font-normal mt-1'>POPULAR</div>
											)}
										</th>
									))}
								</tr>
							</thead>

							{/* Features Rows */}
							<tbody>
								{features.map((feature, featureIndex) => (
									<tr
										key={featureIndex}
										className={featureIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
									>
										<td className='p-4 font-TVG-typography-default text-[16px] text-[#1a5f3e] font-semibold border-b border-gray-200'>
											{feature}
										</td>
										{membershipTiers.map((tier, tierIndex) => (
											<td
												key={tierIndex}
												className='p-4 text-center font-TVG-typography-default text-[16px] text-gray-800 border-b border-gray-200'
											>
												<span
													className={
														tier.features[feature] === '✓'
															? 'text-[#00a14a] text-xl font-bold'
															: tier.features[feature] === '✗'
															? 'text-red-500 text-xl font-bold'
															: ''
													}
												>
													{tier.features[feature]}
												</span>
											</td>
										))}
									</tr>
								))}

								{/* Pricing Row */}
								<tr className='bg-[#1a5f3e]'>
									<td className='p-6 font-TVG-typography-h5 text-white text-[20px] font-bold'>
										Monthly Price
									</td>
									{membershipTiers.map((tier, tierIndex) => (
										<td key={tierIndex} className='p-6 text-center'>
											<div className='text-white'>
												<span className='font-morganite text-[40px] font-[900]'>
													{tier.price}
												</span>
												<span className='font-TVG-typography-default text-[16px] ml-2'>
													/month
												</span>
											</div>
										</td>
									))}
								</tr>

								{/* CTA Row */}
								<tr className='bg-white'>
									<td className='p-6'></td>
									{membershipTiers.map((tier, tierIndex) => (
										<td key={tierIndex} className='p-6 text-center'>
											<button
												className={`w-full px-6 py-3 rounded-lg font-TVG-typography-button transition-colors duration-300 ${
													tier.highlight
														? 'bg-[#00a14a] hover:bg-[#008a3e] text-white'
														: 'bg-[#1a5f3e] hover:bg-[#0f4930] text-white'
												}`}
											>
												CHOOSE PLAN
											</button>
										</td>
									))}
								</tr>
							</tbody>
						</table>
					</div>
				</div>

				{/* Additional Information */}
				<div className='mt-12 text-center'>
					<p className='font-TVG-typography-default text-[16px] text-gray-600'>
						All memberships include access to our club facilities and basic amenities.
						<br />
						Contact us for custom enterprise packages and group memberships.
					</p>
				</div>
			</div>
		</section>
	);
};