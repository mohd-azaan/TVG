// src/screens/MembershipPage/Sections/ComparisonTableSection.jsx
// Pixel-perfect recreation of Figma design nodes 2439:2574 and 3003:3418
// Exact layout matching "WHICH TIER FITS YOU BEST?" comparison table with all 23 features
// RELEVANT FILES: MembershipPage.jsx, styleguide.css, tailwind.config.js

import React, { useState, useEffect } from 'react';

// Asset paths - using existing project assets
const ICON_CHECK = '/assets/check-small-24dp.svg';
const ICON_CLOSE = '/assets/close-small-24dp.svg';
const ICON_INFO = '/assets/info-icon.svg';
const SAUDI_RIYAL = '/saudi-riyal.svg';

export function ComparisonTableSection() {
	const [openTooltip, setOpenTooltip] = useState(null);

	useEffect(() => {
		function onKey(e) {
			if (e.key === 'Escape') setOpenTooltip(null);
		}
		window.addEventListener('keydown', onKey);
		return () => window.removeEventListener('keydown', onKey);
	}, []);

	function toggleTooltip(id) {
		setOpenTooltip((cur) => (cur === id ? null : id));
	}

	// Exact tier data structure from Figma design
	const tiers = [
		{ key: 'individual', label: 'INDIVIDUAL', isIndividual: true },
		{ key: 'standard', label: 'STANDARD', isCorporate: true },
		{ key: 'executive', label: 'EXECUTIVE', isCorporate: true },
		{ key: 'c-suite', label: 'C-SUITE', isCorporate: true },
	];

	// Complete 23-feature list in exact Figma order
	const features = [
		{
			id: 'priority-booking',
			label: 'Priority Booking',
			values: ['check', 'check', 'check', 'check'],
		},
		{
			id: 'concierge-service',
			label: 'Concierge Service',
			values: ['check', 'check', 'check', 'check'],
		},
		{
			id: 'open-private-bay',
			label: 'Open & Private Bay Access',
			values: ['check', 'check', 'check', 'check'],
		},
		{
			id: 'access-club-member',
			label: 'Access to Club Member Business Meetup & Events',
			values: ['check', 'check', 'check', 'check'],
		},
		{
			id: 'access-extended-partner',
			label: 'Access extended to partner',
			values: ['First year', 'close', 'close', 'close'],
			hasTooltip: true,
			tooltip:
				'+1 Partner (Spouse, Fiancee) for the first year only. To keep this benefit in year 2 and beyond, the member must renew within 1 month of expiry.',
		},
		{
			id: 'membership-freezing',
			label: 'Membership Freezing',
			values: ['1 Month', 'close', 'close', 'close'],
		},
		{
			id: 'membership-transferable',
			label: 'Membership Transferable',
			values: ['check', 'close', 'close', 'close'],
		},
		{
			id: 'dedicated-account-manager',
			label: 'Dedicated Account Manager',
			values: ['check', 'check', 'check', 'check'],
		},
		{
			id: '45-minute-swing',
			label: '45-minute Swing Evaluation',
			values: ['1x', '1x for all', '1x for all', '1x for all'],
		},
		{
			id: 'vip-parking',
			label: 'VIP Parking',
			values: ['1', '1', '2', '3'],
		},
		{
			id: 'vip-corporate-meeting',
			label: 'VIP for Corporate Meeting & Birthday Access',
			values: ['check', 'close', 'close', 'close'],
		},
		{
			id: 'club-member-alumni',
			label: 'Club Member Alumni & Community Access',
			values: ['check', 'close', 'check', 'check'],
		},
		{
			id: 'named-club-member',
			label: 'Named Club Member',
			values: ['close', '2', '4', '6'],
		},
		{
			id: 'monthly-rotational',
			label: 'Monthly Rotational Best-Performer Wildcard',
			values: ['close', '1', '2', '3'],
		},
		{
			id: 'discount-tvg-academy',
			label: 'Discounts for TVG Academy',
			values: ['check', 'check', 'check', 'check'],
		},
		{
			id: 'tvg-academy-priority',
			label: 'TVG Academy Priority Coach Availability',
			values: ['close', 'close', 'check', 'check'],
		},
		{
			id: 'credit-top-up',
			label: 'Credit Top-Up',
			values: ['2,000', '5,000', '10,000', '15,000'],
			hasTooltip: true,
			tooltip:
				'Optional credit top-up for Exclusive Benefits, Activities, and Access',
		},
		{
			id: 'team-building-venue',
			label: 'Team Building Venue Access',
			values: ['close', 'Annually', 'Semiannually', 'Quarterly'],
		},
		{
			id: 'advertisement-space',
			label: 'Advertisement Space',
			values: ['close', '1', '2', '3'],
		},
		{
			id: 'permanent-corporate-logo',
			label: 'Permanent Corporate Logo',
			values: ['close', 'close', 'close', 'check'],
			hasTooltip: true,
			tooltip:
				'Optional permanent corporate logo until membership duration for SAR 15,000 (two lockers)',
		},
		{
			id: 'simulator-access-corporate',
			label: 'Simulator Access for Corporate Events',
			values: ['close', 'check', 'check', 'check'],
		},
		{
			id: 'exclusive-high-profile',
			label: 'Exclusive High-Profile Annual Event',
			values: ['close', 'close', 'close', 'check'],
		},
		{
			id: 'exclusive-industry-partnership',
			label: 'Exclusive Industry Partnership Agreement',
			values: ['close', 'close', 'close', 'check'],
		},
	];

	// Exact pricing from Figma
	const prices = ['15,000', '30,000', '60,000', '90,000'];

	return (
		<section className='w-full bg-white py-16'>
			<div className='max-w-[1920px] mx-auto px-4'>
				{/* Main Title */}
				<div className='text-center mb-16'>
					<h1 className="font-['Morganite'] font-extrabold text-[96px] leading-[90px] tracking-[1.92px] text-black uppercase">
						WHICH TIER FITS YOU BEST?
					</h1>
				</div>

				{/* Comparison Table */}
				<div className='relative max-w-[1640px] mx-auto'>
					{/* Corporate Pill */}
					<div className='flex justify-end mb-4'>
						<div
							className="bg-[#004a22] text-white px-8 py-2 rounded-t-[30px] font-['Gilroy-Medium'] text-[18px] uppercase tracking-[0.36px] relative z-10"
							style={{ width: '780px', textAlign: 'center' }}
						>
							CORPORATE
						</div>
					</div>

					{/* Table */}
					<div className='bg-white overflow-hidden'>
						<table className='w-full'>
							{/* Header */}
							<thead className='sticky top-0 bg-white z-20'>
								<tr>
									<th className='text-left py-6 px-6 font-gilroy font-bold text-[22px] text-black uppercase tracking-[0.44px] w-[320px] border-b-2 border-[#009444]'>
										MEMBERSHIP
									</th>
									{tiers.map((tier) => (
										<th
											key={tier.key}
											className={`text-center py-6 px-4 font-gilroy font-bold text-[22px] uppercase tracking-[0.44px] w-[260px] border-b-2 border-[#009444] ${
												tier.isIndividual ? 'text-[#009444]' : 'text-[#004a22]'
											}`}
										>
											{tier.label}
										</th>
									))}
								</tr>
							</thead>

							{/* Feature Rows */}
							<tbody>
								{features.map((feature, idx) => (
									<tr
										key={feature.id}
										className='hover:bg-[#fafafa] transition-colors'
									>
										<td className='py-4 px-6 border-b border-[lightgrey]'>
											<div className='flex items-center gap-2'>
												<span className="font-['Gilroy-Medium'] text-[20px] text-black leading-[28px]">
													{feature.label}
												</span>
												{feature.hasTooltip && (
													<div className='relative'>
														<button
															onClick={() => toggleTooltip(feature.id)}
															onMouseEnter={() => setOpenTooltip(feature.id)}
															onMouseLeave={() => setOpenTooltip(null)}
															className='relative'
														>
															<img
																src={ICON_INFO}
																alt='info'
																className='w-6 h-6'
															/>
														</button>
														{feature.hasTooltip &&
															openTooltip === feature.id && (
																<div className='absolute left-[52px] top-[-26px] bg-[#f6f6f6] border border-[lightgrey] p-5 rounded-[30px] shadow-[2px_2px_3px_0px_rgba(0,0,0,0.1)] z-30 w-[400px]'>
																	<p className="font-['Gilroy-Medium'] text-[20px] text-black leading-[28px]">
																		{feature.tooltip}
																	</p>
																</div>
															)}
													</div>
												)}
											</div>
										</td>

										{feature.values.map((value, i) => (
											<td
												key={i}
												className='py-6 px-4 text-center border-b border-[lightgrey]'
											>
												{value === 'check' ? (
													<img
														src={ICON_CHECK}
														alt='✓'
														className='w-[30px] h-[30px] mx-auto check-icon'
													/>
												) : value === 'close' ? (
													<img
														src={ICON_CLOSE}
														alt='✗'
														className='w-[28px] h-[28px] mx-auto'
													/>
												) : (
													<span className="font-['Gilroy-Medium'] text-[20px] text-black leading-[28px]">
														{value}
													</span>
												)}
											</td>
										))}
									</tr>
								))}

								{/* Price Row */}
								<tr className='bg-white border-t-2 border-b-2 border-[#009444]'>
									<td className="py-8 px-6 font-['Gilroy-Medium'] text-[20px] text-black text-nowrap">
										12-Month Membership
									</td>
									{prices.map((price, i) => (
										<td key={i} className='py-6 px-4 text-center'>
											<div className='flex items-center justify-center gap-1'>
												{/* Inline Riyal SVG (uses currentColor) */}
												<svg
													className='w-[19px] h-[21px] text-black'
													viewBox='0 0 1125 1257'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'
												>
													<g clipPath='url(#clip0_247_42)'>
														<path
															d='M699.96 1113.56C679.89 1158.06 666.623 1206.36 661.541 1257L1086.26 1166.72C1106.33 1122.22 1119.58 1073.92 1124.68 1023.28L699.96 1113.56Z'
															fill='currentColor'
														/>
														<path
															d='M1086.26 896.235C1106.33 851.743 1119.59 803.44 1124.68 752.795L793.835 823.159V687.894L1086.25 625.754C1106.32 581.262 1119.58 532.959 1124.67 482.314L793.825 552.618V66.1621C743.131 94.6259 698.109 132.514 661.511 177.206V580.752L529.197 608.875V0C478.502 28.4538 433.48 66.3522 396.883 111.044V636.989L100.829 699.9C80.7592 744.391 67.4827 792.695 62.3903 843.339L396.883 772.255V942.597L38.4086 1018.77C18.3389 1063.27 5.07245 1111.57 -0.0100146 1162.21L375.212 1082.48C405.757 1076.12 432.01 1058.06 449.078 1033.21L517.891 931.192V931.172C525.035 920.617 529.197 907.89 529.197 894.184V744.131L661.511 716.007V986.539L1086.25 896.215L1086.26 896.235Z'
															fill='currentColor'
														/>
													</g>
													<defs>
														<clipPath id='clip0_247_42'>
															<rect
																width='1124.14'
																height='1256.39'
																fill='white'
																transform='scale(1.00049)'
															/>
														</clipPath>
													</defs>
												</svg>
												<span className='font-gilroy font-bold text-[30px] text-[#009444] leading-normal tracking-[0.6px] uppercase'>
													{price}
												</span>
											</div>
										</td>
									))}
								</tr>
							</tbody>
						</table>
					</div>
				</div>

				{/* Additional Info Sections */}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-[1360px] mx-auto'>
					{/* 96 Members Section */}
					<div className='w-full relative rounded-[30px] bg-[#f6f6f6] h-[195px] text-left text-[28px] text-[#009444] font-gilroy-bold'>
						<div className='absolute top-[129px] left-[calc(50%_-_258.5px)] uppercase font-bold'>
							Members
						</div>
						<div className='absolute top-[40px] left-[102px] text-[100px] tracking-[0.02em] uppercase font-black font-morganite text-center'>
							96
						</div>
						<div className='absolute top-[94px] left-[253px] leading-7 text-black text-xl font-gilroy'>
							<p className='m-0'>Individual memberships are capped</p>
							<p className='m-0'>
								<span>{`at `}</span>
								<span className='text-2xl font-gilroy font-bold'>96</span>
								<span className='text-xl font-inter'> per year.</span>
							</p>
						</div>
						<div className='absolute font-bold top-[40px] left-[calc(50%_-_74.5px)] uppercase text-black'>
							96 Members per year
						</div>
					</div>

					{/* Discounted Membership Section */}
					<div className='bg-[#f6f6f6] rounded-[30px] p-8 h-[314px] relative'>
						<div className='absolute top-[40px] left-[46px]'>
							<div className='font-gilroy font-bold text-[28px] text-black uppercase text-left whitespace-nowrap'>
								DISCOUNTED MEMBERSHIP
							</div>
						</div>
						<div className='absolute top-[94px] left-[46px]'>
							<p className='font-gilroy font-normal text-[20px] text-black leading-[28px] w-[567px]'>
								Additional family members enjoy discounted membership rates:
							</p>
						</div>
						<div className='absolute top-[174px] left-[46px] space-y-4'>
							<div className='flex items-center gap-4'>
								<img src='/Circle.svg' alt='bullet' className='w-5 h-5' />
								<span className='font-gilroy font-medium text-[20px] text-black'>
									Spouse (1st Year - continues){' '}
									<span className='font-gilroy font-bold text-[24px]'>
										No fees
									</span>
								</span>
							</div>
							<div className='flex items-center gap-4'>
								<img src='/Circle.svg' alt='bullet' className='w-5 h-5' />
								<div className='flex items-center gap-1'>
									<span className='font-gilroy font-medium text-[20px] text-black'>
										2nd family member
									</span>
									<img
										src={SAUDI_RIYAL}
										alt='SAR'
										className='w-[16px] h-[18px] ml-2'
									/>
									<span className='font-gilroy font-bold text-[24px] text-black'>
										10,000
									</span>
								</div>
							</div>
							<div className='flex items-center gap-4'>
								<img src='/Circle.svg' alt='bullet' className='w-5 h-5' />
								<div className='flex items-center gap-1'>
									<span className='font-gilroy font-medium text-[20px] text-black'>
										3rd family member onwards
									</span>
									<img
										src={SAUDI_RIYAL}
										alt='SAR'
										className='w-[16px] h-[18px] ml-2'
									/>
									<span className='font-gilroy font-bold text-[24px] text-black'>
										5,000
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* CTA Section */}
				<div className='bg-[#f6f6f6] rounded-[30px] mt-12 max-w-[1360px] mx-auto px-8 py-12'>
					<div className='flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8'>
						{/* Left side - Question */}
						<div className='lg:flex-shrink-0'>
							<h3 className='font-gilroy font-bold text-[28px] text-black uppercase leading-tight max-w-[335px]'>
								NOT SURE WHICH IS RIGHT FOR YOU?
							</h3>
						</div>

						{/* Right side - Content and Button */}
						<div className='flex flex-col gap-4 lg:max-w-[655px]'>
							<p className='font-gilroy font-medium text-[20px] text-black leading-[28px]'>
								Talk to our team — we'll match your membership to your play
								style.
							</p>
							<div>
								<button className='bg-[#009444] text-white px-[30px] py-[12px] rounded-[50px] font-gilroy font-medium text-[18px] uppercase hover:bg-[#007a37] transition-colors flex items-center gap-[10px]'>
									TALK TO OUR TEAM
									<div className='w-6 h-6 overflow-hidden'>
										<img
											src='/arrow-right.svg'
											alt='arrow'
											className='w-6 h-6'
										/>
									</div>
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* VAT Note - aligned with CTA section */}
				<div className='max-w-[1360px] mx-auto px-8 mt-6'>
					<div className='flex items-start gap-[10px] leading-[28px] text-[20px]'>
						<span className='font-gilroy font-bold text-black'>NOTE</span>
						<span className='font-gilroy font-medium text-[#757575]'>
							All prices are exclusive of 15% VAT
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ComparisonTableSection;
