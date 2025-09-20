// src/screens/PlayPage/Sections/PricingSection.jsx
// Pricing section with tabbed interface and pricing cards
// Features weekday/weekend tabs and three bay type pricing with Saudi Riyal currency
// RELEVANT FILES: PlayPage.jsx, styleguide.css, tailwind.config.js

import React, { useState } from 'react';

export const PricingSection = () => {
	const [activeTab, setActiveTab] = useState('weekdays');

	const pricing = {
		weekdays: [
			{ type: 'Standard Bay', location: 'Mezzanine Floor', price: 180 },
			{ type: 'Semi-Private Bay', location: 'Ground Floor', price: 250 },
			{ type: 'VIP Bay', location: 'Ground Floor', price: 500 },
		],
		weekends: [
			{ type: 'Standard Bay', location: 'Mezzanine Floor', price: 220 },
			{ type: 'Semi-Private Bay', location: 'Ground Floor', price: 250 },
			{ type: 'VIP Bay', location: 'Ground Floor', price: 600 },
		],
	};

	return (
		<section className='relative w-full min-h-[1238px] bg-white'>
			{/* Container positioned according to Figma */}
			<div className='relative max-w-[1920px] mx-auto'>
				{/* Section title */}
				<div className='absolute top-[120px] left-1/2 transform -translate-x-1/2 text-center'>
					<h2 className='font-morganite font-black text-[96px] leading-[100px] tracking-[2px] text-black uppercase'>
						Pricing
					</h2>
				</div>

				{/* Description text */}
				<div className='absolute top-[200px] left-1/2 transform -translate-x-1/2 w-[655px] text-center'>
					<p className='font-gilroy font-medium text-[18px] leading-[28px] tracking-[0.1px] text-[#757575]'>
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
				<div className='absolute top-[390px] left-1/2 transform -translate-x-1/2 flex gap-[30px]'>
					{pricing[activeTab].map((bay, index) => (
						<div
							key={index}
							className='w-[398px] h-[450px] relative bg-white rounded-[30px] shadow-[0_4px_20px_rgba(0,0,0,0.1)] overflow-hidden'
						>
							{/* Header */}
							<div
								className={`${
									index === 1 ? 'bg-[#0b5b2f]' : 'bg-[#009444]'
								} w-full h-[120px] rounded-tl-[30px] rounded-tr-[30px] flex items-center justify-center px-[20px]`}
							>
								<div className='text-center text-white'>
									<h3 className='font-gilroy font-bold text-[28px] leading-[34px] tracking-[0.5px] uppercase mb-1'>
										{bay.type}
									</h3>
									<p className='font-gilroy font-normal text-[16px] leading-[20px] tracking-[0.2px] opacity-90'>
										({bay.location})
									</p>
								</div>
							</div>

							{/* Pricing content */}
							<div className='bg-[#f6f6f6] w-full h-[330px] rounded-bl-[30px] rounded-br-[30px] relative'>
								{/* Price display - centered, symbol left of number */}
								<div className='absolute top-[50px] left-1/2 transform -translate-x-1/2 flex items-baseline justify-center'>
									<div className='flex items-baseline gap-2'>
										<div className='w-[32px] h-[32px] mb-2'>
											<img
												src={'/saudi-riyal.svg'}
												alt='SAR'
												className='w-full h-full object-contain'
											/>
										</div>
										<div className='font-morganite font-black text-[120px] leading-[100px] tracking-[1.8px] text-black uppercase'>
											{bay.price}
										</div>
									</div>
								</div>

								{/* Per hour text */}
								<div className='absolute top-[180px] left-1/2 transform -translate-x-1/2 text-center'>
									<p className='font-gilroy font-medium text-[16px] leading-[24px] tracking-[0.2px] text-black whitespace-nowrap'>
										/hour/bay/person
									</p>
								</div>

								{/* CTA Button */}
								<div className='absolute top-[230px] left-1/2 transform -translate-x-1/2'>
									<a
										href='https://widget.servmeco.com/?oid=1662'
										target='_blank'
										rel='noopener noreferrer'
										className='bg-[#009444] hover:bg-[#007a38] transition-colors rounded-[50px] px-[28px] py-[10px] inline-flex items-center gap-2'
									>
										<span className='font-gilroy font-semibold text-[14px] leading-[18px] tracking-[0.8px] text-white uppercase text-center whitespace-nowrap'>
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
						</div>
					))}
				</div>

				{/* Registration fee note */}
				<div className='absolute top-[900px] left-1/2 transform -translate-x-1/2 bg-[#f6f6f6] rounded-[30px] w-[677px] h-[80px] flex items-center justify-center'>
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

				{/* VAT disclaimer */}
				<div className='absolute top-[1010px] left-1/2 transform -translate-x-1/2 text-center'>
					<div className='flex items-center gap-2'>
						<span className='font-gilroy font-bold text-[16px] leading-[20px] tracking-[0.5px] text-black uppercase'>
							NOTE
						</span>
						<span className='font-gilroy font-normal text-[16px] leading-[20px] tracking-[0.1px] text-[#757575]'>
							The prices are exclusive of 15% VAT + 3% transaction surcharge
						</span>
					</div>
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
							Prices are per hour, per bay, and per person. Each bay can
							accommodate a maximum of 6 players, and you can hit unlimited golf
							balls during your time with us.
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
										/hour/bay/person
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
						<p className='text-xs text-[#757575]'>
							<strong>NOTE:</strong> The prices are exclusive of 15% VAT + 3%
							transaction surcharge
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
