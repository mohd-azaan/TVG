// src/screens/EventsPage/sections/WhatsIncludedSection.jsx
// What's Included section with dark background and feature grid layout
// RELEVANT FILES: EventsPage.jsx, styleguide.css, tailwind.config.js

import React from 'react';


export const WhatsIncludedSection = () => {
	return (
		<section className='relative w-full bg-[#102121] text-white py-16 lg:py-20 overflow-hidden'>
			<div className='relative z-10 max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10'>
				<div className='lg:ml-[12vw] md:ml-[8vw] lg:mr-[12vw] md:mr-[8vw]'>
					<div className='max-w-[1200px] mx-auto'>
						{/* Header */}
						<div className='text-center mb-16'>
							<h2 className='font-morganite font-black text-[clamp(48px,5vw,64px)] leading-[0.95] tracking-[0.02em] text-white uppercase mb-4'>
								WHAT'S INCLUDED?
							</h2>
							<p className='font-gilroy font-bold text-[18px] text-[#7ddb8a] uppercase tracking-wide'>
								WE HANDLE THE DETAILS SO YOU CAN ENJOY THE MOMENT
							</p>
						</div>

						{/* Features Grid - 3 rows to match exact layout */}
						<div className='space-y-16'>
							{/* First Row - 3 features */}
							<div className='grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16'>
								<div className='flex items-start gap-4'>
									<div className='flex-shrink-0 w-6 h-6 text-[#7ddb8a] mt-1'>
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
											stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
										</svg>
									</div>
									<p className='font-gilroy font-normal text-[16px] leading-[1.5] text-white'>
										Event planning support
									</p>
								</div>
								<div className='flex items-start gap-4'>
									<div className='flex-shrink-0 w-6 h-6 text-[#7ddb8a] mt-1'>
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
											stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
											<path d="M2 12.8799V11.1201C2 10.0801 2.85 9.22006 3.9 9.22006C5.71 9.22006 6.45 7.94006 5.54 6.37006C5.02 5.47006 5.33 4.30006 6.24 3.78006L7.97 2.79006C8.76 2.32006 9.78 2.60006 10.25 3.39006L10.36 3.58006C11.26 5.15006 12.74 5.15006 13.65 3.58006L13.76 3.39006C14.23 2.60006 15.25 2.32006 16.04 2.79006L17.77 3.78006C18.68 4.30006 18.99 5.47006 18.47 6.37006C17.56 7.94006 18.3 9.22006 20.11 9.22006C21.15 9.22006 22.01 10.0701 22.01 11.1201V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.7099 17.77 20.2299L16.04 21.2199C15.25 21.6899 14.23 21.4099 13.76 20.6199L13.65 20.4299C12.75 18.8599 11.27 18.8599 10.36 20.4299L10.25 20.6199C9.78 21.4099 8.76 21.6899 7.97 21.2199L6.24 20.2299C5.33 19.7099 5.02 18.5399 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z"
											stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
										</svg>
									</div>
									<p className='font-gilroy font-normal text-[16px] leading-[1.5] text-white'>
										On-site staff to help guests
									</p>
								</div>
								<div className='flex items-start gap-4'>
									<div className='flex-shrink-0 w-6 h-6 text-[#7ddb8a] mt-1'>
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M12 2L3 7L12 12L21 7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
											<path d="M3 17L12 22L21 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
											<path d="M3 12L12 17L21 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
										</svg>
									</div>
									<p className='font-gilroy font-normal text-[16px] leading-[1.5] text-white'>
										Custom add-ons (tournaments, décor, merch, and more)
									</p>
								</div>
							</div>

							{/* Second Row - 3 features */}
							<div className='grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16'>
								<div className='flex items-start gap-4'>
									<div className='flex-shrink-0 w-6 h-6 text-[#7ddb8a] mt-1'>
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21"
											stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
											<path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
											stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
											<path d="M23 21V19C22.9993 17.1137 21.9284 15.4026 20.22 14.6"
											stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
											<path d="M16 3.13C17.7699 3.87 18.8638 5.61337 18.8638 7.56C18.8638 9.50663 17.7699 11.25 16 11.99"
											stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
										</svg>
									</div>
									<p className='font-gilroy font-normal text-[16px] leading-[1.5] text-white'>
										Food & beverage service
									</p>
								</div>
								<div className='flex items-start gap-4'>
									<div className='flex-shrink-0 w-6 h-6 text-[#7ddb8a] mt-1'>
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
											stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
											<path d="M5 3V7M3 5H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
											<path d="M19 17V21M17 19H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
										</svg>
									</div>
									<p className='font-gilroy font-normal text-[16px] leading-[1.5] text-white'>
										Fun, inclusive setup for all skill levels
									</p>
								</div>
								<div className='flex items-start gap-4'>
									<div className='flex-shrink-0 w-6 h-6 text-[#7ddb8a] mt-1'>
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M19 7H5C3.89543 7 3 7.89543 3 9V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V9C21 7.89543 20.1046 7 19 7Z"
											stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
											<path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
											stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
											<path d="M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7"
											stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
										</svg>
									</div>
									<p className='font-gilroy font-normal text-[16px] leading-[1.5] text-white'>
										Golf bays with full access
									</p>
								</div>
							</div>

							{/* Third Row - 1 feature centered */}
							<div className='flex justify-center'>
								<div className='flex items-start gap-4 max-w-sm'>
									<div className='flex-shrink-0 w-6 h-6 text-[#7ddb8a] mt-1'>
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
											stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
											<path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
										</svg>
									</div>
									<p className='font-gilroy font-normal text-[16px] leading-[1.5] text-white'>
										Private or semi-private spaces
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Decorative Background Lines */}
			<div className='absolute bottom-0 right-0 w-full h-full opacity-30 overflow-hidden pointer-events-none'>
				<svg
					width='100%'
					height='100%'
					viewBox='0 0 1400 600'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className='absolute bottom-0 right-0'
				>
					<g opacity='0.3'>
						<path d='M1200 500L1400 450' stroke='#7ddb8a' strokeWidth='1'/>
						<path d='M1150 520L1400 460' stroke='#7ddb8a' strokeWidth='1'/>
						<path d='M1100 540L1400 470' stroke='#7ddb8a' strokeWidth='1'/>
						<path d='M1050 560L1400 480' stroke='#7ddb8a' strokeWidth='1'/>
						<path d='M1000 580L1400 490' stroke='#7ddb8a' strokeWidth='1'/>
						<path d='M950 600L1400 500' stroke='#7ddb8a' strokeWidth='1'/>
						<path d='M900 620L1400 510' stroke='#7ddb8a' strokeWidth='1'/>
						<path d='M850 640L1400 520' stroke='#7ddb8a' strokeWidth='1'/>
						<path d='M800 660L1400 530' stroke='#7ddb8a' strokeWidth='1'/>
						<path d='M750 680L1400 540' stroke='#7ddb8a' strokeWidth='1'/>
					</g>
				</svg>
			</div>
		</section>
	);
};

export default WhatsIncludedSection;