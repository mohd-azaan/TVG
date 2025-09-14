// src/screens/SimulatorPage/Sections/CoursesSection.jsx
// Courses section showcasing featured golf courses available in simulator
// Displays "WHO CHOSE OUR COURSES" with grid of course images and names
// RELEVANT FILES: SimulatorPage.jsx, styleguide.css, tailwind.config.js

import React from 'react';

export const CoursesSection = () => {
	const courses = [
		{ name: 'Pebble Beach', location: 'California, USA' },
		{ name: 'St. Andrews', location: 'Scotland, UK' },
		{ name: 'Augusta National', location: 'Georgia, USA' },
		{ name: 'Pinehurst No. 2', location: 'North Carolina, USA' },
		{ name: 'Royal Melbourne', location: 'Melbourne, Australia' },
		{ name: 'Shinnecock Hills', location: 'New York, USA' }
	];

	return (
		<section className='w-full bg-[#1a1a1a] py-16 lg:py-24'>
			<div className='max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10'>
				{/* Section Header */}
				<div className='text-center mb-12 lg:mb-16'>
					<h2 className="font-['Morganite',Helvetica] font-bold text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.1] text-white tracking-[-1px]">
						WHO CHOSE OUR COURSES
					</h2>
					<p className='font-TVG-typography-default text-[18px] sm:text-[20px] leading-[1.6] text-gray-300 mt-4 max-w-3xl mx-auto'>
						Play the world's most prestigious golf courses from the comfort of your own space
					</p>
				</div>

				{/* Courses Grid */}
				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{courses.map((course, index) => (
						<div key={index} className='group cursor-pointer'>
							{/* Course Image Container */}
							<div className='relative aspect-[16/10] rounded-2xl overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-300'>
								{/* Course image placeholder */}
								<div className='w-full h-full bg-gradient-to-br from-green-800 via-green-600 to-green-400 flex items-center justify-center'>
									<div className='text-white/80 text-center'>
										<div className='w-16 h-16 mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center'>
											<svg className='w-8 h-8' fill='currentColor' viewBox='0 0 24 24'>
												<path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'/>
											</svg>
										</div>
										<p className='text-sm font-medium'>{course.name}</p>
									</div>
								</div>

								{/* Hover overlay */}
								<div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
									<button className='bg-white/90 text-[#1a1a1a] px-6 py-2 rounded-full font-semibold text-sm hover:bg-white transition-colors duration-200'>
										PLAY NOW
									</button>
								</div>
							</div>

							{/* Course Information */}
							<div className='text-white'>
								<h3 className='font-TVG-typography-h4 font-bold text-[20px] sm:text-[24px] mb-1'>
									{course.name}
								</h3>
								<p className='font-TVG-typography-default text-[14px] sm:text-[16px] text-gray-400'>
									{course.location}
								</p>
							</div>
						</div>
					))}
				</div>

				{/* Additional Info */}
				<div className='text-center mt-12 lg:mt-16'>
					<p className='font-TVG-typography-default text-[16px] sm:text-[18px] text-gray-400 mb-6'>
						Access to 300+ world-class golf courses with premium packages
					</p>
					<button className='bg-[#009444] text-white px-8 py-4 rounded-full font-semibold text-[16px] hover:bg-[#007a3a] transition-colors duration-200 font-TVG-typography-button'>
						VIEW ALL COURSES
					</button>
				</div>
			</div>
		</section>
	);
};