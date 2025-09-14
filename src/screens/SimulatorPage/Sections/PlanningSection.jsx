// src/screens/SimulatorPage/Sections/PlanningSection.jsx
// Planning section with call-to-action for game planning and consultation
// Displays "PLAN YOUR GAME" with contact information and booking options
// RELEVANT FILES: SimulatorPage.jsx, styleguide.css, tailwind.config.js

import React from 'react';

export const PlanningSection = () => {
	const planningSteps = [
		{
			step: '01',
			title: 'Consultation',
			description: 'Schedule a free consultation to assess your space and requirements'
		},
		{
			step: '02',
			title: 'Design',
			description: 'Our experts create a custom simulator layout for your space'
		},
		{
			step: '03',
			title: 'Installation',
			description: 'Professional installation and setup by certified technicians'
		},
		{
			step: '04',
			title: 'Training',
			description: 'Comprehensive training on your new simulator system'
		}
	];

	return (
		<section className='w-full bg-[#009444] py-16 lg:py-24'>
			<div className='max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10'>
				{/* Section Header */}
				<div className='text-center mb-12 lg:mb-16'>
					<h2 className="font-['Morganite',Helvetica] font-bold text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.1] text-white tracking-[-1px]">
						PLAN YOUR GAME
					</h2>
					<p className='font-TVG-typography-default text-[18px] sm:text-[20px] leading-[1.6] text-white/90 mt-4 max-w-3xl mx-auto'>
						From consultation to installation, we make bringing golf to your space simple
					</p>
				</div>

				{/* Planning Steps */}
				<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
					{planningSteps.map((item, index) => (
						<div key={index} className='text-center text-white'>
							{/* Step Number */}
							<div className='relative mb-6'>
								<div className='w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center border-2 border-white/30'>
									<span className='font-TVG-typography-h3 font-bold text-[20px] text-white'>
										{item.step}
									</span>
								</div>
								{/* Connecting line (except for last item) */}
								{index < planningSteps.length - 1 && (
									<div className='hidden lg:block absolute top-8 left-[calc(50%+32px)] w-full h-0.5 bg-white/30' />
								)}
							</div>

							{/* Step Content */}
							<h3 className='font-TVG-typography-h4 font-bold text-[20px] sm:text-[24px] mb-3'>
								{item.title}
							</h3>
							<p className='font-TVG-typography-default text-[14px] sm:text-[16px] leading-[1.5] text-white/80'>
								{item.description}
							</p>
						</div>
					))}
				</div>

				{/* Contact Information */}
				<div className='bg-white/10 rounded-3xl p-8 lg:p-12 backdrop-blur-sm'>
					<div className='grid lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
						{/* Left: Contact Details */}
						<div className='text-white space-y-6'>
							<h3 className='font-TVG-typography-h3 font-bold text-[24px] sm:text-[28px] lg:text-[32px]'>
								Ready to Get Started?
							</h3>

							<div className='space-y-4'>
								<div className='flex items-center space-x-3'>
									<div className='flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center'>
										<svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
											<path d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z'/>
										</svg>
									</div>
									<div>
										<p className='font-TVG-typography-default text-[16px] sm:text-[18px]'>
											simulator@tvg.com
										</p>
									</div>
								</div>

								<div className='flex items-center space-x-3'>
									<div className='flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center'>
										<svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
											<path d='M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z'/>
										</svg>
									</div>
									<div>
										<p className='font-TVG-typography-default text-[16px] sm:text-[18px]'>
											+966 11 123 4567
										</p>
									</div>
								</div>

								<div className='flex items-start space-x-3'>
									<div className='flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mt-1'>
										<svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
											<path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z'/>
										</svg>
									</div>
									<div>
										<p className='font-TVG-typography-default text-[16px] sm:text-[18px] leading-[1.5]'>
											The Virtual Greens<br />
											Riyadh, Saudi Arabia
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Right: CTA Buttons */}
						<div className='text-center lg:text-right space-y-4'>
							<button className='w-full sm:w-auto bg-white text-[#009444] px-8 py-4 rounded-full font-semibold text-[16px] hover:bg-gray-100 transition-colors duration-200 font-TVG-typography-button'>
								SCHEDULE CONSULTATION
							</button>
							<br />
							<button className='w-full sm:w-auto border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-[16px] hover:bg-white/10 transition-colors duration-200 font-TVG-typography-button'>
								GET CUSTOM QUOTE
							</button>
						</div>
					</div>
				</div>

				{/* Bottom Note */}
				<div className='text-center mt-12'>
					<p className='font-TVG-typography-default text-[14px] sm:text-[16px] text-white/70'>
						Professional installation available across Saudi Arabia • Financing options available
					</p>
				</div>
			</div>
		</section>
	);
};