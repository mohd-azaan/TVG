// src/screens/SimulatorPage/Sections/SpecificationsSection.jsx
// Specifications table showing equipment details and pricing information
// Displays detailed technical specifications in a structured table format
// RELEVANT FILES: SimulatorPage.jsx, styleguide.css, tailwind.config.js

import React from 'react';

export const SpecificationsSection = () => {
	const specifications = [
		{ feature: 'Screen Size', basic: '10ft x 8ft', premium: '12ft x 10ft', professional: '15ft x 12ft' },
		{ feature: 'Resolution', basic: 'Full HD', premium: '4K UHD', professional: '4K UHD+' },
		{ feature: 'Projection', basic: 'Single Projector', premium: 'Dual Projector', professional: 'Triple Projector' },
		{ feature: 'Tracking System', basic: 'Basic Camera', premium: 'Multi-Camera', professional: 'Radar + Camera' },
		{ feature: 'Course Library', basic: '50+ Courses', premium: '150+ Courses', professional: '300+ Courses' },
		{ feature: 'Installation', basic: 'Self-Install', premium: 'Professional', professional: 'White Glove' },
		{ feature: 'Support', basic: 'Email Only', premium: '24/7 Phone', professional: 'Dedicated Rep' },
		{ feature: 'Warranty', basic: '1 Year', premium: '3 Years', professional: '5 Years' }
	];

	return (
		<section className='w-full bg-white py-16 lg:py-24'>
			<div className='max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10'>
				{/* Section Header */}
				<div className='text-center mb-12 lg:mb-16'>
					<h2 className="font-['Morganite',Helvetica] font-bold text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.1] text-[#1a1a1a] tracking-[-1px]">
						SIMULATOR SPECIFICATIONS
					</h2>
					<p className='font-TVG-typography-default text-[18px] sm:text-[20px] leading-[1.6] text-[#666666] mt-4 max-w-3xl mx-auto'>
						Choose the perfect simulator package for your space and budget
					</p>
				</div>

				{/* Specifications Table */}
				<div className='overflow-x-auto'>
					<table className='w-full bg-white rounded-2xl shadow-lg overflow-hidden'>
						{/* Table Header */}
						<thead className='bg-[#009444]'>
							<tr>
								<th className='text-left py-6 px-6 font-TVG-typography-h4 font-bold text-[18px] text-white'>
									Features
								</th>
								<th className='text-center py-6 px-6 font-TVG-typography-h4 font-bold text-[18px] text-white'>
									Basic
								</th>
								<th className='text-center py-6 px-6 font-TVG-typography-h4 font-bold text-[18px] text-white relative'>
									Premium
									<span className='absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full'>POPULAR</span>
								</th>
								<th className='text-center py-6 px-6 font-TVG-typography-h4 font-bold text-[18px] text-white'>
									Professional
								</th>
							</tr>
						</thead>

						{/* Table Body */}
						<tbody>
							{specifications.map((spec, index) => (
								<tr key={index} className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100 transition-colors duration-200`}>
									<td className='py-4 px-6 font-TVG-typography-default font-semibold text-[16px] text-[#1a1a1a]'>
										{spec.feature}
									</td>
									<td className='py-4 px-6 text-center font-TVG-typography-default text-[16px] text-[#666666]'>
										{spec.basic}
									</td>
									<td className='py-4 px-6 text-center font-TVG-typography-default text-[16px] text-[#666666] relative'>
										{spec.premium}
									</td>
									<td className='py-4 px-6 text-center font-TVG-typography-default text-[16px] text-[#666666]'>
										{spec.professional}
									</td>
								</tr>
							))}
						</tbody>

						{/* Pricing Footer */}
						<tfoot className='bg-gray-100'>
							<tr>
								<td className='py-6 px-6 font-TVG-typography-h4 font-bold text-[18px] text-[#1a1a1a]'>
									Starting Price
								</td>
								<td className='py-6 px-6 text-center'>
									<div className='font-TVG-typography-h4 font-bold text-[24px] text-[#009444]'>$25,000</div>
								</td>
								<td className='py-6 px-6 text-center'>
									<div className='font-TVG-typography-h4 font-bold text-[24px] text-[#009444]'>$45,000</div>
								</td>
								<td className='py-6 px-6 text-center'>
									<div className='font-TVG-typography-h4 font-bold text-[24px] text-[#009444]'>$75,000</div>
								</td>
							</tr>
						</tfoot>
					</table>
				</div>

				{/* CTA Buttons */}
				<div className='text-center mt-12'>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<button className='bg-[#009444] text-white px-8 py-4 rounded-full font-semibold text-[16px] hover:bg-[#007a3a] transition-colors duration-200 font-TVG-typography-button'>
							GET CUSTOM QUOTE
						</button>
						<button className='border-2 border-[#009444] text-[#009444] px-8 py-4 rounded-full font-semibold text-[16px] hover:bg-[#009444] hover:text-white transition-colors duration-200 font-TVG-typography-button'>
							SCHEDULE CONSULTATION
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};