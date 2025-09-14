// src/screens/SimulatorPage/Sections/EquipmentSection.jsx
// Equipment section showcasing simulator technology and features
// Displays "MAKE YOUR FIRST ROUND COUNT" with detailed equipment information
// RELEVANT FILES: SimulatorPage.jsx, styleguide.css, tailwind.config.js

import React from 'react';

export const EquipmentSection = () => {
	return (
		<section className='w-full bg-gray-50 py-16 lg:py-24'>
			<div className='max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10'>
				<div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
					{/* Left column: Content */}
					<div className='space-y-6 lg:space-y-8'>
						{/* Main heading */}
						<h2 className="font-['Morganite',Helvetica] font-bold text-[40px] sm:text-[48px] lg:text-[56px] xl:text-[64px] leading-[1.1] text-[#1a1a1a] tracking-[-1px]">
							MAKE YOUR FIRST ROUND COUNT
						</h2>

						{/* Description */}
						<p className='font-TVG-typography-default text-[18px] sm:text-[20px] leading-[1.6] text-[#666666]'>
							Our cutting-edge golf simulators feature the latest in golf technology, providing accurate ball tracking, realistic course environments, and comprehensive swing analysis to elevate your game.
						</p>

						{/* Key features list */}
						<div className='space-y-4'>
							<div className='flex items-start space-x-3'>
								<div className='flex-shrink-0 w-6 h-6 bg-[#009444] rounded-full flex items-center justify-center mt-1'>
									<svg className='w-3 h-3 text-white' fill='currentColor' viewBox='0 0 20 20'>
										<path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
									</svg>
								</div>
								<p className='font-TVG-typography-default text-[16px] sm:text-[18px] text-[#1a1a1a] leading-[1.5]'>
									High-definition projection with 4K resolution
								</p>
							</div>

							<div className='flex items-start space-x-3'>
								<div className='flex-shrink-0 w-6 h-6 bg-[#009444] rounded-full flex items-center justify-center mt-1'>
									<svg className='w-3 h-3 text-white' fill='currentColor' viewBox='0 0 20 20'>
										<path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
									</svg>
								</div>
								<p className='font-TVG-typography-default text-[16px] sm:text-[18px] text-[#1a1a1a] leading-[1.5]'>
									Advanced ball tracking and swing analysis
								</p>
							</div>

							<div className='flex items-start space-x-3'>
								<div className='flex-shrink-0 w-6 h-6 bg-[#009444] rounded-full flex items-center justify-center mt-1'>
									<svg className='w-3 h-3 text-white' fill='currentColor' viewBox='0 0 20 20'>
										<path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
									</svg>
								</div>
								<p className='font-TVG-typography-default text-[16px] sm:text-[18px] text-[#1a1a1a] leading-[1.5]'>
									Over 200+ world-renowned golf courses
								</p>
							</div>

							<div className='flex items-start space-x-3'>
								<div className='flex-shrink-0 w-6 h-6 bg-[#009444] rounded-full flex items-center justify-center mt-1'>
									<svg className='w-3 h-3 text-white' fill='currentColor' viewBox='0 0 20 20'>
										<path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
									</svg>
								</div>
								<p className='font-TVG-typography-default text-[16px] sm:text-[18px] text-[#1a1a1a] leading-[1.5]'>
									Professional installation and support
								</p>
							</div>
						</div>

						{/* CTA Button */}
						<div className='pt-4'>
							<button className='bg-[#009444] text-white px-8 py-4 rounded-full font-semibold text-[16px] hover:bg-[#007a3a] transition-colors duration-200 font-TVG-typography-button'>
								VIEW SPECIFICATIONS
							</button>
						</div>
					</div>

					{/* Right column: Equipment image */}
					<div className='relative'>
						<div className='aspect-[4/3] w-full max-w-[600px] mx-auto'>
							{/* Equipment image placeholder */}
							<div className='w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center shadow-lg'>
								<div className='text-gray-500 text-center'>
									<div className='w-24 h-24 mx-auto mb-4 bg-gray-300 rounded-full flex items-center justify-center'>
										<svg className='w-12 h-12' fill='currentColor' viewBox='0 0 24 24'>
											<path d='M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3Z' />
										</svg>
									</div>
									<p className='text-sm'>Equipment Specification Image</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};