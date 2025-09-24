// src/screens/PlayPage/Sections/PricingSection.jsx
// Pricing section with tabbed interface and pricing cards
// Features weekday/weekend tabs and three bay type pricing with Saudi Riyal currency
// RELEVANT FILES: PlayPage.jsx, styleguide.css, tailwind.config.js

import React, { useState } from 'react';

export const PricingSection = () => {
	const [activeTab, setActiveTab] = useState('weekdays');

	const pricing = {
		weekdays: [
			{ type: 'Standard Bay', location: 'Mezzanine Floor', price: 199 },
			{ type: 'Semi-Private Bay', location: 'Ground Floor', price: 299 },
			{ type: 'VIP Bay', location: 'Ground Floor', price: 599 },
		],
		weekends: [
			{ type: 'Standard Bay', location: 'Mezzanine Floor', price: 299 },
			{ type: 'Semi-Private Bay', location: 'Ground Floor', price: 399 },
			{ type: 'VIP Bay', location: 'Ground Floor', price: 799 },
		],
	};

	return (
		<section className='relative w-full min-h-[1010px] bg-white'>
			{/* Container positioned according to Figma */}
			<div className='relative max-w-[1920px] mx-auto'>
				{/* Section title */}
				<div className='absolute top-[100px] left-1/2 transform -translate-x-1/2 text-center'>
					<h2 className='font-morganite font-black text-[clamp(48px,6vw,72px)] leading-[0.95] tracking-[0.02em] text-black uppercase'>
						Pricing
					</h2>
				</div>

				{/* Description text */}
				<div className='absolute top-[190px] left-1/2 transform -translate-x-1/2 w-[550px] text-center'>
					<p className='font-gilroy font-normal text-[17px] leading-[26px] tracking-[0.1px] text-[#757575]'>
						Prices are per hour, per bay, and per person. Each bay can
						accommodate a maximum of 6 players, and you can hit unlimited golf
						balls during your time with us.
					</p>
				</div>

				{/* Tab system */}
				<div className='absolute top-[310px] left-1/2 transform -translate-x-1/2 flex gap-6'>
					<button
						onClick={() => setActiveTab('weekdays')}
						className={`px-[24px] py-[8px] rounded-[25px] border border-solid transition-colors ${
							activeTab === 'weekdays'
								? 'bg-[#cceada] border-[#cceada] text-black'
								: 'bg-transparent border-[#d1d1d1] text-[#757575] hover:bg-gray-50'
						}`}
					>
						<span className='font-gilroy font-medium text-[16px] leading-[20px] tracking-[0.3px] text-center whitespace-nowrap'>
							WEEK DAYS, Sun – Thu (until 4pm)
						</span>
					</button>
					<button
						onClick={() => setActiveTab('weekends')}
						className={`px-[24px] py-[8px] rounded-[25px] border border-solid transition-colors ${
							activeTab === 'weekends'
								? 'bg-[#cceada] border-[#cceada] text-black'
								: 'bg-transparent border-[#d1d1d1] text-[#757575] hover:bg-gray-50'
						}`}
					>
						<span className='font-gilroy font-medium text-[16px] leading-[20px] tracking-[0.3px] text-center whitespace-nowrap'>
							WEEKEND, Thu (after 4pm) - Sat
						</span>
					</button>
				</div>

				{/* Pricing cards */}
				<div className='absolute top-[390px] left-1/2 transform -translate-x-1/2 flex gap-[25px]'>
					{pricing[activeTab].map((bay, index) => (
						<div
							key={index}
							className='w-[340px] h-[330px] relative bg-white rounded-[30px] shadow-[0_4px_20px_rgba(0,0,0,0.1)] overflow-hidden'
						>
							{/* Header */}
							<div
								className={`${
									index === 1 ? 'bg-[#0b5b2f]' : 'bg-[#009444]'
								} w-full h-[100px] rounded-tl-[30px] rounded-tr-[30px] flex items-center justify-center px-[20px]`}
							>
								<div className='text-center text-white'>
									<h3 className='font-gilroy font-bold text-[24px] leading-[28px] tracking-wide uppercase mb-1'>
										{bay.type}
									</h3>
									<p className='font-gilroy font-normal text-[14px] leading-[18px] tracking-wide opacity-90'>
										({bay.location})
									</p>
								</div>
							</div>

							{/* Pricing content */}
							<div className='bg-[#f6f6f6] w-full h-[260px] rounded-bl-[30px] rounded-br-[30px] flex flex-col items-center justify-center'>
								{/* Price display - centered, symbol left of number */}
								<div className='flex items-end justify-center gap-2 mb-3 mr-[40px]'>
									<div className='w-[35px] h-[35px]'>
										<img
											src={'/saudi-riyal.svg'}
											alt='SAR'
											className='w-full h-full object-contain'
										/>
									</div>
									<div className='font-morganite font-black text-[100px] leading-[70px] tracking-[1.3px] text-black uppercase'>
										{bay.price}
									</div>
								</div>

								{/* Per hour text */}
								<p className='font-gilroy font-medium text-[14px] leading-[20px] tracking-[0.2px] text-black whitespace-nowrap mb-4'>
									/bay/hour
								</p>

								{/* CTA Button */}
								<a
									href='https://widget.servmeco.com/?oid=1662'
									target='_blank'
									rel='noopener noreferrer'
									className='bg-[#009444] hover:bg-[#007a38] transition-colors rounded-[50px] px-[24px] py-[8px] inline-flex items-center gap-2'
								>
									<span className='font-gilroy font-semibold text-[12px] leading-[16px] tracking-[0.8px] text-white uppercase text-center whitespace-nowrap'>
										Book a Bay
									</span>
									<div className='w-5 h-5'>
										<svg
											className='w-full h-full'
											viewBox='0 0 24 24'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												d='M5 12H19M19 12L12 5M19 12L12 19'
												stroke='white'
												strokeWidth='2'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>
									</div>
								</a>
							</div>
						</div>
					))}
				</div>

				{/* Registration fee note */}
				<div className='absolute top-[750px] left-1/2 transform -translate-x-1/2 bg-[#f6f6f6] rounded-[30px] w-[677px] h-[80px] flex items-center justify-center'>
					<div className='flex items-center gap-5'>
						{/* Plus icon */}
						<div className='bg-[#009444] w-12 h-12 rounded-full flex items-center justify-center'>
							<span className='font-bold text-[28px] leading-none text-white'>
								+
							</span>
						</div>

						{/* Price */}
						<div className='flex items-center gap-1'>
							<div className='w-6 h-7'>
								<img
									src={'/saudi-riyal.svg'}
									alt='SAR'
									className='w-full h-full object-contain'
								/>
							</div>
							<span className='font-gilroy font-bold text-[42px] leading-[48px] tracking-[0.5px] text-black uppercase'>
								25
							</span>
						</div>

						{/* Text */}
						<p className='font-gilroy font-normal text-[16px] leading-[24px] tracking-[0.1px] text-[#757575]'>
							One-time registration fee for first-time players
						</p>
					</div>
				</div>

				{/* Pricing notes */}
				<div className='absolute top-[860px] left-1/2 transform -translate-x-1/2 text-center max-w-[900px] px-4'>
					<p className='font-gilroy font-normal text-[16px] leading-[24px] tracking-[0.1px] text-[#757575]'>
						<span className='font-bold text-black'>NOTE:</span> Prices are inclusive of 15% VAT. Bay rental covers 1 player; extra players SAR 100 each (max 6 per simulator). Rental club set: SAR 30/set/hour. VIP parking: SAR 30/spot/hour. Club rentals and VIP parking are complimentary for members.
					</p>
				</div>
			</div>

			{/* Mobile responsive layout */}
			<div className='block lg:hidden px-4 sm:px-6 py-16'>
				<div className='space-y-12 max-w-[600px] mx-auto'>
					<div className='text-center space-y-6'>
						<h2 className='font-morganite font-black text-[clamp(32px,8vw,96px)] leading-[1.1] tracking-[2px] text-black uppercase'>
							Pricing
						</h2>
						<p className='font-gilroy font-medium text-[18px] leading-[28px] tracking-[0.1px] text-[#757575]'>
							Bay rental covers 1 player; extra players SAR 100 each (max 6 per
							simulator). Rental club set: SAR 30/set/hour. VIP parking: SAR
							30/spot/hour.
						</p>
					</div>

					{/* Mobile tabs */}
					<div className='flex flex-col gap-4'>
						<button
							onClick={() => setActiveTab('weekdays')}
							className={`px-6 py-3 rounded-[50px] border border-solid transition-colors ${
								activeTab === 'weekdays'
									? 'bg-[#cceada] border-[#cceada] text-black'
									: 'bg-transparent border-[lightgrey] text-[#757575]'
							}`}
						>
							<span className='font-gilroy font-medium text-[16px] leading-[24px] tracking-[0.1px] text-center'>
								WEEK DAYS, Sun – Thu (until 4pm)
							</span>
						</button>
						<button
							onClick={() => setActiveTab('weekends')}
							className={`px-6 py-3 rounded-[50px] border border-solid transition-colors ${
								activeTab === 'weekends'
									? 'bg-[#cceada] border-[#cceada] text-black'
									: 'bg-transparent border-[lightgrey] text-[#757575]'
							}`}
						>
							<span className='font-gilroy font-medium text-[16px] leading-[24px] tracking-[0.1px] text-center'>
								WEEKEND, Thu (after 4pm) - Sat
							</span>
						</button>
					</div>

					{/* Mobile pricing cards */}
					<div className='space-y-6'>
						{pricing[activeTab].map((bay, index) => (
							<div
								key={index}
								className='bg-white rounded-[20px] shadow-lg overflow-hidden'
							>
								{/* Header */}
								<div
									className={`${
										index === 1 ? 'bg-[#0b5b2f]' : 'bg-[#009444]'
									} p-6 text-center text-white`}
								>
									<h3 className='font-gilroy font-bold text-[24px] leading-normal tracking-[0.5px] uppercase'>
										{bay.type}
									</h3>
									<p className='font-gilroy font-normal text-[16px] leading-[24px] tracking-[0.2px] capitalize opacity-90'>
										({bay.location})
									</p>
								</div>

								{/* Content */}
								<div className='bg-[#f6f6f6] p-6 text-center space-y-4'>
									{/* Price */}
									<div className='flex items-baseline justify-center gap-1 relative'>
										<div className='w-[28px] h-[28px] mb-1'>
											<img
												src={'/saudi-riyal.svg'}
												alt='SAR'
												className='w-full h-full object-contain'
											/>
										</div>
										<span className='font-morganite font-black text-[clamp(48px,12vw,96px)] leading-[1] tracking-[2.4px] text-black uppercase'>
											{bay.price}
										</span>
									</div>

									<p className='font-gilroy font-medium text-[18px] leading-[28px] tracking-[0.1px] text-black'>
										/bay/hour
									</p>

									<a
										href='https://widget.servmeco.com/?oid=1662'
										target='_blank'
										rel='noopener noreferrer'
										className='bg-[#009444] hover:bg-[#007a38] transition-colors rounded-[50px] px-6 py-2 inline-flex items-center gap-2 mx-auto'
									>
										<span className='font-gilroy font-semibold text-[16px] leading-[24px] tracking-[0.8px] text-white uppercase'>
											Book a Bay
										</span>
										<div className='w-5 h-5'>
											<svg
												className='w-full h-full'
												viewBox='0 0 24 24'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
											>
												<path
													d='M5 12H19M19 12L12 5M19 12L12 19'
													stroke='white'
													strokeWidth='2'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
											</svg>
										</div>
									</a>
								</div>
							</div>
						))}
					</div>

					{/* Mobile notes */}
					<div className='space-y-4 text-center'>
						<div className='bg-[#f6f6f6] rounded-[20px] p-4 flex items-center justify-center gap-4'>
							<div className='bg-[#009444] w-10 h-10 rounded-full flex items-center justify-center'>
								<span className='text-white text-xl font-bold'>+</span>
							</div>
							<div className='flex items-center gap-2'>
								<div className='w-5 h-6'>
									<img
										src={'/saudi-riyal.svg'}
										alt='SAR'
										className='w-full h-full object-contain'
									/>
								</div>
								<span className='text-2xl font-bold text-black'>25</span>
							</div>
						</div>
						<p className='text-sm text-[#757575]'>
							One-time registration fee for first-time players
						</p>
						<p className='font-gilroy font-normal text-[16px] leading-[24px] tracking-[0.1px] text-[#757575] text-center px-4'>
							<span className='font-bold text-black'>NOTE:</span> Prices are inclusive of 15% VAT. Bay rental covers 1 player; extra players SAR 100 each (max 6 per simulator). Rental club set: SAR 30/set/hour. VIP parking: SAR 30/spot/hour. Club rentals and VIP parking are complimentary for members.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
