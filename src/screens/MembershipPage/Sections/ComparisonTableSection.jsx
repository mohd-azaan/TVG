// src/screens/MembershipPage/Sections/ComparisonTableSection.jsx
// Pixel-perfect recreation of Figma design nodes 2439:2574 and 3003:3418
// Exact layout matching "WHICH TIER FITS YOU BEST?" comparison table with all 23 features
// RELEVANT FILES: MembershipPage.jsx, styleguide.css, tailwind.config.js

import React, { useState, useEffect } from 'react';

// Asset paths - using existing project assets
const ICON_CHECK = '/assets/check-small-24dp.svg';
const ICON_CLOSE = '/assets/close-small-24dp.svg';
const ICON_INFO = '/assets/info-icon.svg';
const SAUDI_RIYAL = '/assets/saudi-riyal-24.svg';

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
			values: ['check', 'check', 'check', 'check']
		},
		{
			id: 'concierge-service',
			label: 'Concierge Service',
			values: ['check', 'check', 'check', 'check']
		},
		{
			id: 'open-private-bay',
			label: 'Open & Private Bay Access',
			values: ['check', 'check', 'check', 'check']
		},
		{
			id: 'access-club-member',
			label: 'Access to Club Member Business Meetup & Events',
			values: ['check', 'check', 'check', 'check']
		},
		{
			id: 'access-extended-partner',
			label: 'Access extended to partner',
			values: ['First year', 'close', 'close', 'close'],
			hasTooltip: true,
			tooltip: '+1 Partner (Spouse, Fiancee) for the first year only. To keep this benefit in year 2 and beyond, the member must renew within 1 month of expiry.'
		},
		{
			id: 'membership-freezing',
			label: 'Membership Freezing',
			values: ['1 Month', 'close', 'close', 'close']
		},
		{
			id: 'membership-transferable',
			label: 'Membership Transferable',
			values: ['check', 'close', 'close', 'close']
		},
		{
			id: 'dedicated-account-manager',
			label: 'Dedicated Account Manager',
			values: ['check', 'check', 'check', 'check']
		},
		{
			id: '45-minute-swing',
			label: '45-minute Swing Evaluation',
			values: ['1x', '1x for all', '1x for all', '1x for all']
		},
		{
			id: 'vip-parking',
			label: 'VIP Parking',
			values: ['1', '1', '2', '3']
		},
		{
			id: 'vip-corporate-meeting',
			label: 'VIP for Corporate Meeting & Birthday Access',
			values: ['check', 'close', 'close', 'close']
		},
		{
			id: 'club-member-alumni',
			label: 'Club Member Alumni & Community Access',
			values: ['check', 'close', 'check', 'check']
		},
		{
			id: 'named-club-member',
			label: 'Named Club Member',
			values: ['close', '2', '4', '6']
		},
		{
			id: 'monthly-rotational',
			label: 'Monthly Rotational Best-Performer Wildcard',
			values: ['close', '1', '2', '3']
		},
		{
			id: 'discount-tvg-academy',
			label: 'Discounts for TVG Academy',
			values: ['check', 'check', 'check', 'check']
		},
		{
			id: 'tvg-academy-priority',
			label: 'TVG Academy Priority Coach Availability',
			values: ['close', 'close', 'check', 'check']
		},
		{
			id: 'credit-top-up',
			label: 'Credit Top-Up',
			values: ['2,000', '5,000', '10,000', '15,000'],
			hasTooltip: true,
			tooltip: 'Optional credit top-up for Exclusive Benefits, Activities, and Access'
		},
		{
			id: 'team-building-venue',
			label: 'Team Building Venue Access',
			values: ['close', 'Annually', 'Semiannually', 'Quarterly']
		},
		{
			id: 'advertisement-space',
			label: 'Advertisement Space',
			values: ['close', '1', '2', '3']
		},
		{
			id: 'permanent-corporate-logo',
			label: 'Permanent Corporate Logo',
			values: ['close', 'close', 'close', 'check'],
			hasTooltip: true,
			tooltip: 'Optional permanent corporate logo until membership duration for SAR 15,000 (two lockers)'
		},
		{
			id: 'simulator-access-corporate',
			label: 'Simulator Access for Corporate Events',
			values: ['close', 'check', 'check', 'check']
		},
		{
			id: 'exclusive-high-profile',
			label: 'Exclusive High-Profile Annual Event',
			values: ['close', 'close', 'close', 'check']
		},
		{
			id: 'exclusive-industry-partnership',
			label: 'Exclusive Industry Partnership Agreement',
			values: ['close', 'close', 'close', 'check']
		},
	];

	// Exact pricing from Figma
	const prices = ['15,000', '30,000', '60,000', '90,000'];

	return (
		<section className="w-full bg-white py-16">
			<div className="max-w-[1920px] mx-auto px-4">
				{/* Main Title */}
				<div className="text-center mb-16">
					<h1 className="font-['Morganite'] font-extrabold text-[96px] leading-[90px] tracking-[1.92px] text-black uppercase">
						WHICH TIER FITS YOU BEST?
					</h1>
				</div>

				{/* Comparison Table */}
				<div className="relative max-w-[1640px] mx-auto">
					{/* Corporate Pill */}
					<div className="flex justify-end mb-4">
						<div className="bg-[#004a22] text-white px-8 py-2 rounded-t-[30px] font-['Gilroy-SemiBold'] text-[18px] uppercase tracking-[0.36px] relative z-10" style={{ width: '780px', textAlign: 'center' }}>
							CORPORATE
						</div>
					</div>

					{/* Table */}
					<div className="bg-white overflow-hidden">
						<table className="w-full">
							{/* Header */}
							<thead className="sticky top-0 bg-white z-20">
								<tr>
									<th className="text-left py-4 px-6 font-['Gilroy-Bold'] text-[22px] text-black uppercase tracking-[0.44px] w-[320px] border-b-2 border-[#009444]">
										MEMBERSHIP
									</th>
									{tiers.map((tier) => (
										<th key={tier.key} className={`text-center py-4 px-4 font-['Gilroy-Bold'] text-[22px] uppercase tracking-[0.44px] w-[260px] border-b-2 border-[#009444] ${
											tier.isIndividual ? 'text-[#009444]' : 'text-[#004a22]'
										}`}>
											{tier.label}
										</th>
									))}
								</tr>
							</thead>

							{/* Feature Rows */}
							<tbody>
								{features.map((feature, idx) => (
									<tr key={feature.id} className="hover:bg-[#fafafa] transition-colors">
										<td className="py-4 px-6 border-b border-[lightgrey]">
											<div className="flex items-center gap-2">
												<span className="font-['Gilroy-Medium'] text-[20px] text-black leading-[28px]">
													{feature.label}
												</span>
												{feature.hasTooltip && (
													<div className="relative">
														<button
															onClick={() => toggleTooltip(feature.id)}
															onMouseEnter={() => setOpenTooltip(feature.id)}
															onMouseLeave={() => setOpenTooltip(null)}
															className="relative"
														>
															<img src={ICON_INFO} alt="info" className="w-6 h-6" />
														</button>
														{feature.hasTooltip && openTooltip === feature.id && (
															<div className="absolute left-[52px] top-[-26px] bg-[#f6f6f6] border border-[lightgrey] p-5 rounded-[30px] shadow-[2px_2px_3px_0px_rgba(0,0,0,0.1)] z-30 w-[400px]">
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
											<td key={i} className="py-4 px-4 text-center border-b border-[lightgrey]">
												{value === 'check' ? (
													<img src={ICON_CHECK} alt="✓" className="w-[30px] h-[30px] mx-auto" />
												) : value === 'close' ? (
													<img src={ICON_CLOSE} alt="✗" className="w-[28px] h-[28px] mx-auto" />
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
								<tr className="bg-white border-t-2 border-[#009444]">
									<td className="py-6 px-6 font-['Gilroy-Medium'] text-[20px] text-black text-nowrap">
										12-Month Membership
									</td>
									{prices.map((price, i) => (
										<td key={i} className="py-6 px-4 text-center">
											<div className="flex items-center justify-center gap-1">
												<img src={SAUDI_RIYAL} alt="SAR" className="w-[19px] h-[21px]" />
												<span className="font-['Gilroy-Bold'] text-[30px] text-[#009444] leading-normal tracking-[0.6px] uppercase">
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
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-[1360px] mx-auto">
					{/* 96 Members Section */}
					<div className="bg-[#f6f6f6] rounded-[30px] p-8 h-[195px] relative">
						<div className="absolute left-[128.5px] top-[50%] transform -translate-x-1/2 -translate-y-1/2">
							<div className="font-['Morganite'] text-[100px] font-black text-[#009444] leading-normal tracking-[2px] text-center uppercase">
								96
							</div>
						</div>
						<div className="absolute top-[129px] left-1/2 transform -translate-x-1/2">
							<div className="font-['Gilroy-Bold'] text-[28px] text-[#009444] uppercase text-center">
								MEMBERS
							</div>
						</div>
						<div className="absolute top-[40px] left-1/2 transform -translate-x-1/2">
							<div className="font-['Gilroy-Bold'] text-[28px] text-black uppercase text-center">
								96 MEMBERS PER YEAR
							</div>
						</div>
						<div className="absolute top-[94px] left-[253px]">
							<p className="font-['Inter'] font-normal text-[20px] text-black leading-[28px]">
								Individual memberships are capped<br/>
								at <span className="font-['Gilroy-Bold'] text-[24px]">96</span> per year.
							</p>
						</div>
					</div>

					{/* Discounted Membership Section */}
					<div className="bg-[#f6f6f6] rounded-[30px] p-8 h-[314px] relative">
						<div className="absolute top-[40px] left-1/2 transform -translate-x-1/2">
							<div className="font-['Gilroy-Bold'] text-[28px] text-black uppercase text-center">
								DISCOUNTED MEMBERSHIP
							</div>
						</div>
						<div className="absolute top-[94px] left-[46px]">
							<p className="font-['Inter'] font-normal text-[20px] text-black leading-[28px] w-[567px]">
								Additional family members enjoy discounted membership rates:
							</p>
						</div>
						<div className="absolute top-[174px] left-[46px] space-y-4">
							<div className="flex items-center gap-8">
								<div className="w-5 h-5 bg-[#009444] rounded-full flex items-center justify-center overflow-hidden">
									<div className="w-2 h-2 bg-white rounded-full"></div>
								</div>
								<span className="font-['Gilroy-Medium'] text-[20px] text-black">
									Spouse (1st Year - continues) <span className="font-['Gilroy-Bold'] text-[24px]">No fees</span>
								</span>
							</div>
							<div className="flex items-center gap-8">
								<div className="w-5 h-5 bg-[#009444] rounded-full flex items-center justify-center overflow-hidden">
									<div className="w-2 h-2 bg-white rounded-full"></div>
								</div>
								<div className="flex items-center gap-1">
									<span className="font-['Gilroy-Medium'] text-[20px] text-black">2nd family member</span>
									<img src={SAUDI_RIYAL} alt="SAR" className="w-[16px] h-[18px] ml-2" />
									<span className="font-['Gilroy-Bold'] text-[24px] text-black">10,000</span>
								</div>
							</div>
							<div className="flex items-center gap-8">
								<div className="w-5 h-5 bg-[#009444] rounded-full flex items-center justify-center overflow-hidden">
									<div className="w-2 h-2 bg-white rounded-full"></div>
								</div>
								<div className="flex items-center gap-1">
									<span className="font-['Gilroy-Medium'] text-[20px] text-black">3rd family member onwards</span>
									<img src={SAUDI_RIYAL} alt="SAR" className="w-[16px] h-[18px] ml-2" />
									<span className="font-['Gilroy-Bold'] text-[24px] text-black">5,000</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* CTA Section */}
				<div className="bg-[#f6f6f6] rounded-[30px] mt-12 max-w-[1360px] mx-auto h-[208px] relative">
					<div className="absolute top-[55px] left-1/2 transform -translate-x-1/2">
						<div className="font-['Gilroy-Bold'] text-[28px] text-black uppercase text-center w-[335px]">
							NOT SURE WHICH IS RIGHT FOR YOU?
						</div>
					</div>
					<div className="absolute top-[55px] left-[406px]">
						<p className="font-['Gilroy-Medium'] text-[20px] text-black leading-[28px] w-[655px]">
							Talk to our team — we'll match your membership to your play style.
						</p>
					</div>
					<div className="absolute top-[99px] left-[406px]">
						<button className="bg-[#009444] text-white px-[30px] py-[7px] rounded-[50px] font-['Gilroy-SemiBold'] text-[18px] uppercase leading-[40px] hover:bg-[#007a37] transition-colors flex items-center gap-[10px]">
							TALK TO OUR TEAM
							<div className="w-6 h-6 overflow-hidden">
								<img src="/arrow-right.svg" alt="arrow" className="w-6 h-6" />
							</div>
						</button>
					</div>
				</div>

				{/* VAT Note */}
				<div className="text-center mt-6">
					<div className="flex items-start justify-center gap-[10px] leading-[28px] text-[20px]">
						<span className="font-['Gilroy-Bold'] text-black">NOTE</span>
						<span className="font-['Gilroy-Medium'] text-[#757575]">All prices are exclusive of 15% VAT</span>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ComparisonTableSection;