// src/screens/MembershipPage/Sections/ComparisonTableSection.jsx
// Pixel-perfect recreation of Figma design node 3003:3418
// Exact layout matching "WHICH TIER FITS YOU BEST?" comparison table
// RELEVANT FILES: MembershipPage.jsx, styleguide.css, tailwind.config.js

import React, { useState, useEffect } from 'react';

// Asset paths (to be replaced with exact Figma exports)
const ICON_CHECK = '/assets/check-small-24dp.svg';
const ICON_CLOSE = '/assets/close-small-24dp.svg';
const ICON_INFO = '/assets/info-icon.svg';

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

	// Exact data structure from Figma design
	const tiers = [
		{ key: 'individual', label: 'INDIVIDUAL', isIndividual: true },
		{ key: 'standard', label: 'STANDARD', isCorporate: true },
		{ key: 'executive', label: 'EXECUTIVE', isCorporate: true },
		{ key: 'c-suite', label: 'C-SUITE', isCorporate: true },
	];

	const features = [
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
			tooltip: 'Partner access included for first year of Individual membership'
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
			id: 'vip-parking', 
			label: 'VIP Parking', 
			values: ['1', '1', '2', '3'] 
		},
		{ 
			id: '45-minute-swing', 
			label: '45-minute Swing Evaluation', 
			values: ['1x', '1x for all', '1x for all', '1x for all'] 
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
			values: ['2', '4', '6'] 
		},
		{ 
			id: 'monthly-statement', 
			label: 'Monthly Statement Best Performers- Members', 
			values: ['1', '2', '3'] 
		},
		{ 
			id: 'discount-tvg-academy', 
			label: 'Discount for TVG Academy', 
			values: ['check', 'check', 'check'] 
		},
		{ 
			id: 'tvg-academy-priority', 
			label: 'TVG Academy Priority Coach Availability', 
			values: ['close', 'check', 'check'] 
		},
		{ 
			id: 'guest-top-up', 
			label: 'Guest Top Up',
			values: ['2,000', '5,000', '10,000', '15,000'],
			hasTooltip: true,
			tooltip: 'Additional guest access fee per visit'
		},
		{ 
			id: 'team-building-venue', 
			label: 'Team Building Venue Access', 
			values: ['Annually', 'Semiannually', 'Quarterly'] 
		},
		{ 
			id: 'advertisement-space', 
			label: 'Advertisement Space', 
			values: ['1', '2', '3'] 
		},
		{ 
			id: 'permanent-corporate-logo', 
			label: 'Permanent Corporate Logo',
			values: ['check', 'check', 'check'],
			hasTooltip: true,
			tooltip: 'Permanent corporate logo until membership duration for SAR 15,000 (two lockers)'
		},
		{ 
			id: 'simulator-access-corporate', 
			label: 'Simulator Access to Corporate Events', 
			values: ['check', 'check', 'check'] 
		},
		{ 
			id: 'exclusive-high-profile', 
			label: 'Exclusive High-Profile Annual Event', 
			values: ['close', 'close', 'check'] 
		},
		{ 
			id: 'exclusive-industry-partnership', 
			label: 'Exclusive Industry Partnership Agreement', 
			values: ['close', 'close', 'check'] 
		},
	];

	const prices = ['SAR 15,000', 'SAR 30,000', 'SAR 60,000', 'SAR 90,000'];

	return (
		<section className="w-full bg-white py-16">
			<div className="max-w-[1400px] mx-auto px-6">
				{/* Main Title */}
				<div className="text-center mb-12">
					<h1 className="font-['Morganite'] font-black text-[64px] leading-[60px] tracking-[1.28px] text-black uppercase mb-8">
						WHICH TIER FITS YOU BEST?
					</h1>
				</div>

				{/* Comparison Table */}
				<div className="relative">
					{/* Corporate Pill */}
					<div className="flex justify-end mb-4">
						<div className="bg-[#009444] text-white px-8 py-2 rounded-full font-['Gilroy-Bold'] text-sm uppercase tracking-wider relative z-10" style={{ marginRight: '120px' }}>
							CORPORATE
						</div>
					</div>

					{/* Table */}
					<div className="bg-white rounded-lg shadow-lg overflow-hidden">
						<table className="w-full">
							{/* Header */}
							<thead>
								<tr className="bg-[#f6f6f6]">
									<th className="text-left py-4 px-6 font-['Gilroy-Bold'] text-[18px] text-black uppercase tracking-[0.36px] w-[40%]">
										MEMBERSHIP
									</th>
									{tiers.map((tier) => (
										<th key={tier.key} className={`text-center py-4 px-4 font-['Gilroy-Bold'] text-[18px] uppercase tracking-[0.36px] ${
											tier.isIndividual ? 'text-[#009444]' : 'text-black'
										}`}>
											{tier.label}
										</th>
									))}
								</tr>
							</thead>

							{/* Feature Rows */}
							<tbody>
								{features.map((feature, idx) => (
									<tr key={feature.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#fafafa]'}>
										<td className="py-4 px-6 border-b border-[#e5e5e5]">
											<div className="flex items-center gap-2">
												<span className="font-['Gilroy-Medium'] text-[16px] text-black leading-[24px]">
													{feature.label}
												</span>
												{feature.hasTooltip && (
													<button
														onClick={() => toggleTooltip(feature.id)}
														onMouseEnter={() => setOpenTooltip(feature.id)}
														onMouseLeave={() => setOpenTooltip(null)}
														className="relative"
													>
														<img src={ICON_INFO} alt="info" className="w-4 h-4" />
													</button>
												)}
											</div>
											{feature.hasTooltip && openTooltip === feature.id && (
												<div className="mt-2 p-3 bg-[#f6f6f6] rounded-md text-sm text-gray-700 shadow-md">
													{feature.tooltip}
												</div>
											)}
										</td>

										{feature.values.map((value, i) => (
											<td key={i} className="py-4 px-4 text-center border-b border-[#e5e5e5]">
												{value === 'check' ? (
													<img src={ICON_CHECK} alt="✓" className="w-6 h-6 mx-auto" />
												) : value === 'close' ? (
													<img src={ICON_CLOSE} alt="✗" className="w-6 h-6 mx-auto" />
												) : (
													<span className="font-['Gilroy-Medium'] text-[16px] text-black">
														{value}
													</span>
												)}
											</td>
										))}
									</tr>
								))}

								{/* Price Row */}
								<tr className="bg-white border-t-2 border-[#009444]">
									<td className="py-6 px-6 font-['Gilroy-Bold'] text-[20px] text-black">
										12-Month Membership
									</td>
									{prices.map((price, i) => (
										<td key={i} className="py-6 px-4 text-center">
											<div className="font-['Gilroy-Bold'] text-[24px] text-[#009444]">
												{price}
											</div>
										</td>
									))}
								</tr>
							</tbody>
						</table>
					</div>
				</div>

				{/* Additional Info Sections */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
					{/* 96 Members Section */}
					<div className="bg-[#f6f6f6] rounded-[30px] p-8 text-center">
						<div className="font-['Morganite'] text-[100px] font-black text-[#009444] leading-none tracking-[2px]">
							96
						</div>
						<div className="font-['Gilroy-Bold'] text-[28px] text-[#009444] uppercase mt-4 mb-4">
							MEMBERS
						</div>
						<div className="font-['Gilroy-Bold'] text-[28px] text-black uppercase mb-4">
							96 MEMBERS PER YEAR
						</div>
						<p className="font-['Inter'] text-[20px] text-black leading-[28px]">
							Individual memberships are capped at <span className="font-['Gilroy-Bold'] text-[24px]">96</span> per year.
						</p>
					</div>

					{/* Discounted Membership Section */}
					<div className="bg-[#f6f6f6] rounded-[30px] p-8">
						<div className="font-['Gilroy-Bold'] text-[28px] text-black uppercase mb-6 text-center">
							DISCOUNTED MEMBERSHIP
						</div>
						<p className="font-['Inter'] text-[20px] text-black leading-[28px] mb-6">
							Additional family members enjoy discounted membership rates:
						</p>
						<div className="space-y-4">
							<div className="flex items-center gap-3">
								<div className="w-5 h-5 bg-[#009444] rounded-full flex items-center justify-center">
									<div className="w-2 h-2 bg-white rounded-full"></div>
								</div>
								<span className="font-['Gilroy-Medium'] text-[20px] text-black">
									Spouse (1st Year - continues) <span className="font-['Gilroy-Bold'] text-[24px]">No fees</span>
								</span>
							</div>
							<div className="flex items-center gap-3">
								<div className="w-5 h-5 bg-[#009444] rounded-full flex items-center justify-center">
									<div className="w-2 h-2 bg-white rounded-full"></div>
								</div>
								<span className="font-['Gilroy-Medium'] text-[20px] text-black">
									2nd family member <span className="font-['Gilroy-Bold'] text-[24px]">SAR 10,000</span>
								</span>
							</div>
							<div className="flex items-center gap-3">
								<div className="w-5 h-5 bg-[#009444] rounded-full flex items-center justify-center">
									<div className="w-2 h-2 bg-white rounded-full"></div>
								</div>
								<span className="font-['Gilroy-Medium'] text-[20px] text-black">
									3rd family member onwards <span className="font-['Gilroy-Bold'] text-[24px]">SAR 5,000</span>
								</span>
							</div>
						</div>
					</div>
				</div>

				{/* CTA Section */}
				<div className="bg-[#f6f6f6] rounded-[30px] p-8 text-center mt-12">
					<div className="font-['Gilroy-Bold'] text-[28px] text-black uppercase mb-4">
						NOT SURE WHICH IS RIGHT FOR YOU?
					</div>
					<p className="font-['Gilroy-Medium'] text-[20px] text-black mb-6">
						Talk to our team — we'll match your membership to your play style.
					</p>
					<button className="bg-[#009444] text-white px-8 py-3 rounded-full font-['Gilroy-SemiBold'] text-[18px] uppercase tracking-wider hover:bg-[#007a37] transition-colors">
						TALK TO OUR TEAM
					</button>
				</div>

				{/* VAT Note */}
				<div className="text-center mt-6">
					<p className="font-['Gilroy-Medium'] text-[20px] text-[#757575]">
						<span className="font-['Gilroy-Bold'] text-black">NOTE</span> All prices are exclusive of 15% VAT
					</p>
				</div>
			</div>
		</section>
	);
}

export default ComparisonTableSection;