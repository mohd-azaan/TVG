// src/screens/MembershipPage/Sections/ComparisonTableSection.jsx
// Pixel-perfect recreation of Figma design nodes 2439:2574 and 3003:3418
// Exact layout matching "WHICH TIER FITS YOU BEST?" comparison table with all 24 features
// RELEVANT FILES: MembershipPage.jsx, styleguide.css, tailwind.config.js

import { useState, useRef, useEffect } from 'react';

const ICON_CLOSE = '/assets/close-small-24dp.svg';
const ICON_INFO = '/assets/info-icon.svg';
const SAUDI_RIYAL = '/saudi-riyal.svg';

const CheckIcon = ({ className }) => (
	<svg
		className={className}
		xmlns='http://www.w3.org/2000/svg'
		width='24'
		height='24'
		viewBox='0 0 24 24'
		fill='none'
	>
		<path
			d='M20 6L9 17l-5-5'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);

const tiers = [
	{ key: 'individual', label: 'INDIVIDUAL', type: 'individual' },
	{ key: 'standard', label: 'STANDARD', type: 'corporate' },
	{ key: 'executive', label: 'EXECUTIVE', type: 'corporate' },
	{ key: 'c-suite', label: 'C-SUITE', type: 'corporate' },
];

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
	{ id: 'vip-parking', label: 'VIP Parking', values: ['1', '1', '2', '3'] },
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
		values: ['close', 'check', 'check', 'check'],
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
		values: ['close', 'check', 'check', 'check'],
		hasTooltip: true,
		tooltip:
			'Optional permanent corporate logo until membership duration for SAR 15,000 (two lockers)',
	},
	{
		id: 'simulator-access-corporate',
		label: 'Simulator Access for Corporate Events',
		values: ['close', 'close', 'check', 'check'],
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

const prices = ['15,000', '30,000', '60,000', '90,000'];

const Tooltip = ({ content, show }) => (
	<div
		className={`absolute left-full ml-4 w-80 bg-white border border-gray-200 p-4 rounded-lg shadow-lg z-20 transition-opacity duration-300 ${
			show ? 'opacity-100' : 'opacity-0 pointer-events-none'
		}`}
	>
		{content}
	</div>
);

export const ComparisonTableSection = () => {
	const [hoveredRow, setHoveredRow] = useState(null);
	const [activeTooltip, setActiveTooltip] = useState(null);
	const [isHeaderSticky, setIsHeaderSticky] = useState(true);

	const lastRowRef = useRef(null);

	useEffect(() => {
		const lastRowElement = lastRowRef.current;
		if (!lastRowElement) return;

		// Observer to detect when the last row reaches the top (header should unstick)
		const lastRowObserver = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && entry.boundingClientRect.top <= 60) {
					setIsHeaderSticky(false);
				} else {
					setIsHeaderSticky(true);
				}
			},
			{
				threshold: 0,
				rootMargin: '-60px 0px 0px 0px', // Account for header height
			}
		);

		lastRowObserver.observe(lastRowElement);

		return () => {
			lastRowObserver.disconnect();
		};
	}, []);

	return (
		<section className='relative w-full bg-white overflow-hidden'>
			<div className='relative max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-26'>
				<div className='lg:ml-[12vw] md:ml-[8vw] lg:mr-[12vw] md:mr-[8vw]'>
					<div className='max-w-[1200px] mx-auto'>
						<h2 className='font-morganite font-black text-[clamp(64px,6vw,80px)] leading-[0.95] tracking-[0.02em] text-black uppercase text-center mb-10'>
							Which Tier Fits You Best?
						</h2>

						<div className='relative'>
							<div className='flex justify-end mb-[-2px]'>
								<div className='bg-[#004a22] text-white font-gilroy font-semibold text-[14px] uppercase tracking-wide px-6 py-1.5 rounded-t-3xl w-[600px] text-center'>
									Corporate
								</div>
							</div>

							{/* Separate header div - independent of table */}
							<div
								className={`${
									isHeaderSticky ? 'sticky top-0' : 'relative'
								} bg-white z-20 border-b-2 border-green-700`}
							>
								<div className='overflow-x-auto'>
									<table className='w-full text-left border-collapse'>
										<thead>
											<tr>
												<th className='font-gilroy font-bold text-[16px] leading-[20px] tracking-[0.3px] text-black uppercase p-4 w-[320px]'>
													Membership
												</th>
												{tiers.map((tier) => (
													<th
														key={tier.key}
														className={`font-gilroy font-bold text-[16px] leading-[20px] tracking-[0.3px] uppercase p-4 w-[260px] text-center ${
															tier.type === 'individual'
																? 'text-[#009444]'
																: 'text-[#004a22]'
														}`}
													>
														{tier.label}
													</th>
												))}
											</tr>
										</thead>
									</table>
								</div>
							</div>

							<div className='overflow-x-auto'>
								<table className='w-full text-left border-collapse'>
									<tbody>
										{features.map((feature, index) => (
											<tr
												key={feature.id}
												onMouseEnter={() => setHoveredRow(index)}
												onMouseLeave={() => setHoveredRow(null)}
												className={`${
													hoveredRow === index ? 'bg-gray-50' : ''
												}`}
											>
												<td className='font-gilroy font-medium text-[14px] leading-[20px] tracking-[0.1px] text-black p-4 border-b border-gray-200 w-[320px] min-h-[60px] align-top'>
													<div className='flex items-start'>
														<span className='break-words'>{feature.label}</span>
														{feature.hasTooltip && (
															<div className='relative ml-2 flex-shrink-0'>
																<img
																	src={ICON_INFO}
																	alt='info'
																	className='w-5 h-5 cursor-pointer'
																	onClick={() =>
																		setActiveTooltip(
																			activeTooltip === feature.id
																				? null
																				: feature.id
																		)
																	}
																/>
																<Tooltip
																	content={feature.tooltip}
																	show={activeTooltip === feature.id}
																/>
															</div>
														)}
													</div>
												</td>
												{feature.values.map((value, i) => (
													<td
														key={i}
														className='font-gilroy font-medium text-[14px] leading-[20px] tracking-[0.1px] text-black p-4 border-b border-gray-200 text-center w-[260px] align-middle'
													>
														<div className='flex items-center justify-center min-h-[40px]'>
															{value === 'check' ? (
																<CheckIcon className='w-4 h-4 text-black' />
															) : value === 'close' ? (
																<img
																	src={ICON_CLOSE}
																	alt='close'
																	className='w-4 h-4'
																/>
															) : (
																<span className='text-center'>{value}</span>
															)}
														</div>
													</td>
												))}
											</tr>
										))}
										<tr ref={lastRowRef} className='bg-white'>
											<td className='font-gilroy font-bold text-[16px] leading-[20px] tracking-[0.3px] text-black p-4 border-t-2 border-green-700 border-b-2 border-b-green-700'>
												12-Month Membership
											</td>
											{prices.map((price, i) => (
												<td
													key={i}
													className='font-gilroy font-bold text-[20px] leading-[24px] text-[#009444] p-4 border-t-2 border-green-700 border-b-2 border-b-green-700 text-center'
												>
													<div className='flex items-center justify-center'>
														<img
															src={SAUDI_RIYAL}
															alt='SAR'
															className='w-5 h-5 mr-1'
														/>
														{price}
													</div>
												</td>
											))}
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<div className='flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mt-12 mb-8'>
							{/* Note */}
							<div className='flex-1'>
								<p className='font-gilroy font-normal text-[14px] leading-[20px] tracking-[0.1px] text-black'>
									<span className='font-bold'>NOTE:</span> The finalized
									Membership benefits will be shared to populate in this table.
								</p>
							</div>

							{/* CTA Button */}
							<div className='flex-shrink-0'>
								<a
									href='/registration'
									className='bg-[#009444] hover:bg-[#007a3a] rounded-[50px] px-6 py-3 font-gilroy font-semibold text-[14px] text-white uppercase inline-flex items-center gap-2 transition-colors'
								>
									JOIN MEMBERSHIP
									<img
										src='/arrow-right.svg'
										alt='arrow'
										className='w-[20px] h-[20px]'
									/>
								</a>
							</div>
						</div>

						<div className='grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 items-stretch'>
							<div className='w-full rounded-[30px] bg-[#f6f6f6] p-8 flex items-center min-h-[150px]'>
								<div className='text-center w-1/4'>
									<p className='font-morganite font-black text-[clamp(48px,4.5vw,96px)] leading-[0.9] text-[#009444] mb-0'>
										96
									</p>
									<p className='font-gilroy font-bold text-[14px] text-[#009444] uppercase tracking-wide mt-2'>
										Members
									</p>
								</div>
								<div className='w-3/4 pl-8'>
									<p className='font-gilroy font-bold text-[18px] leading-[1.2] text-black uppercase mb-2'>
										96 Members per year
									</p>
									<p className='font-gilroy font-medium text-[15px] leading-[24px] tracking-[0.1px] text-[#757575]'>
										Individual memberships are capped at{' '}
										<span className='font-bold text-black'>96</span> per year.
									</p>
								</div>
							</div>

							<div className='w-full rounded-[30px] bg-[#f6f6f6] p-8 flex flex-col min-h-[150px]'>
								<div className='flex items-start justify-between'>
									<h3 className='font-gilroy font-bold text-[clamp(18px,2.5vw,22px)] text-black uppercase mb-0'>
										Discounted Membership
									</h3>
								</div>
								<p className='font-gilroy font-medium text-[15px] leading-[24px] tracking-[0.1px] text-[#757575] mt-4 mb-4'>
									Additional family members enjoy discounted membership rates:
								</p>
								<ul className='space-y-3 mt-auto'>
									<li className='flex items-center justify-between font-gilroy font-medium text-[15px] leading-[24px] tracking-[0.1px] text-[#757575]'>
										<div className='flex items-center'>
											<span className='text-[#009444] mr-3'>●</span>
											<span>Spouse (1st Year - continues)</span>
										</div>
										<span className='font-bold text-black'>No fees</span>
									</li>
									<li className='flex items-center justify-between font-gilroy font-medium text-[15px] leading-[24px] tracking-[0.1px] text-[#757575]'>
										<div className='flex items-center'>
											<span className='text-[#009444] mr-3'>●</span>
											<span>2nd family member</span>
										</div>
										<div className='flex items-center'>
											<img
												src={SAUDI_RIYAL}
												alt='SAR'
												className='w-4 h-4 mr-2'
											/>
											<span className='font-bold text-black'>10,000</span>
										</div>
									</li>
									<li className='flex items-center justify-between font-gilroy font-medium text-[15px] leading-[24px] tracking-[0.1px] text-[#757575]'>
										<div className='flex items-center'>
											<span className='text-[#009444] mr-3'>●</span>
											<span>3rd family member onwards</span>
										</div>
										<div className='flex items-center'>
											<img
												src={SAUDI_RIYAL}
												alt='SAR'
												className='w-4 h-4 mr-2'
											/>
											<span className='font-bold text-black'>5,000</span>
										</div>
									</li>
								</ul>
							</div>
						</div>

						<div className='w-full max-w-[700px] rounded-[30px] bg-[#f6f6f6] p-8 flex flex-col lg:flex-row items-center justify-between gap-6 mt-8 mx-auto'>
							<div className='flex-1'>
								<h3 className='font-gilroy font-bold text-[clamp(18px,2.5vw,22px)] leading-[1.2] text-black uppercase'>
									Not sure which is right for you?
								</h3>
								<p className='font-gilroy font-medium text-[14px] leading-[20px] tracking-[0.1px] text-[#757575] mt-2'>
									Talk to our team — we'll match your membership to your play
									style.
								</p>
							</div>
							<a
								href='/contact'
								className='bg-[#009444] hover:bg-[#007a3a] rounded-[50px] px-5 py-2.5 font-gilroy font-semibold text-[14px] text-white uppercase inline-flex items-center gap-2 transition-colors flex-shrink-0'
							>
								Talk to our team
								<img
									src='/arrow-right.svg'
									alt='arrow'
									className='w-[20px] h-[20px]'
								/>
							</a>
						</div>

						{/* Membership Benefits Note and CTA */}

						<div className='mt-8 text-center'>
							<p className='font-gilroy font-normal text-[14px] leading-[20px] tracking-[0.1px] text-[#757575]'>
								<span className='font-bold text-black'>NOTE:</span> All prices
								are exclusive of 15% VAT
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ComparisonTableSection;
