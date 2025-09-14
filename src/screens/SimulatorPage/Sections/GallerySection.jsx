// src/screens/SimulatorPage/Sections/GallerySection.jsx
// Gallery section showcasing course selection and simulator gameplay previews
// Displays "SEE OUR SELECTION" with grid of course preview images
// RELEVANT FILES: SimulatorPage.jsx, styleguide.css, tailwind.config.js

import React, { useState } from 'react';

export const GallerySection = () => {
	const [selectedCategory, setSelectedCategory] = useState('all');

	const galleryItems = [
		{ id: 1, name: 'Pebble Beach - Hole 7', category: 'scenic', type: 'course' },
		{ id: 2, name: 'Augusta National - Hole 12', category: 'championship', type: 'course' },
		{ id: 3, name: 'St. Andrews - Hole 18', category: 'historic', type: 'course' },
		{ id: 4, name: 'Pinehurst No. 2 - Hole 15', category: 'championship', type: 'course' },
		{ id: 5, name: 'Royal Melbourne - Hole 6', category: 'scenic', type: 'course' },
		{ id: 6, name: 'Shinnecock Hills - Hole 14', category: 'championship', type: 'course' },
		{ id: 7, name: 'Whistling Straits - Hole 17', category: 'scenic', type: 'course' },
		{ id: 8, name: 'Bethpage Black - Hole 4', category: 'historic', type: 'course' },
		{ id: 9, name: 'TPC Sawgrass - Hole 17', category: 'championship', type: 'course' }
	];

	const categories = [
		{ id: 'all', name: 'All Courses' },
		{ id: 'championship', name: 'Championship' },
		{ id: 'scenic', name: 'Scenic Views' },
		{ id: 'historic', name: 'Historic' }
	];

	const filteredItems = selectedCategory === 'all'
		? galleryItems
		: galleryItems.filter(item => item.category === selectedCategory);

	return (
		<section className='w-full bg-white py-16 lg:py-24'>
			<div className='max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10'>
				{/* Section Header */}
				<div className='text-center mb-12 lg:mb-16'>
					<h2 className="font-['Morganite',Helvetica] font-bold text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.1] text-[#1a1a1a] tracking-[-1px]">
						SEE OUR SELECTION
					</h2>
					<p className='font-TVG-typography-default text-[18px] sm:text-[20px] leading-[1.6] text-[#666666] mt-4 max-w-3xl mx-auto'>
						Preview some of the stunning courses available in our simulator library
					</p>
				</div>

				{/* Category Filters */}
				<div className='flex flex-wrap justify-center gap-4 mb-12'>
					{categories.map((category) => (
						<button
							key={category.id}
							onClick={() => setSelectedCategory(category.id)}
							className={`px-6 py-3 rounded-full font-semibold text-[14px] transition-all duration-300 font-TVG-typography-button ${
								selectedCategory === category.id
									? 'bg-[#009444] text-white shadow-lg'
									: 'bg-gray-100 text-[#666666] hover:bg-gray-200'
							}`}
						>
							{category.name}
						</button>
					))}
				</div>

				{/* Gallery Grid */}
				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
					{filteredItems.map((item) => (
						<div key={item.id} className='group cursor-pointer'>
							{/* Gallery Item */}
							<div className='relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300'>
								{/* Course preview image placeholder */}
								<div className='w-full h-full bg-gradient-to-br from-green-700 via-green-500 to-emerald-400 flex items-center justify-center relative'>
									{/* Background pattern */}
									<div className='absolute inset-0 opacity-20'>
										<div className='w-full h-full' style={{
											backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
										}} />
									</div>

									{/* Content */}
									<div className='text-white text-center z-10'>
										<div className='w-16 h-16 mx-auto mb-3 bg-white/20 rounded-full flex items-center justify-center'>
											<svg className='w-8 h-8' fill='currentColor' viewBox='0 0 24 24'>
												<path d='M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z'/>
											</svg>
										</div>
										<p className='text-sm font-medium opacity-90'>{item.name}</p>
									</div>
								</div>

								{/* Hover overlay */}
								<div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
									<div className='text-center'>
										<button className='bg-white text-[#1a1a1a] px-6 py-3 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors duration-200 mb-3'>
											PREVIEW COURSE
										</button>
										<p className='text-white text-sm opacity-90'>{item.name}</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Bottom CTA */}
				<div className='text-center mt-12 lg:mt-16'>
					<p className='font-TVG-typography-default text-[16px] sm:text-[18px] text-[#666666] mb-6'>
						Explore all 300+ courses with your simulator package
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<button className='bg-[#009444] text-white px-8 py-4 rounded-full font-semibold text-[16px] hover:bg-[#007a3a] transition-colors duration-200 font-TVG-typography-button'>
							EXPLORE ALL COURSES
						</button>
						<button className='border-2 border-[#009444] text-[#009444] px-8 py-4 rounded-full font-semibold text-[16px] hover:bg-[#009444] hover:text-white transition-colors duration-200 font-TVG-typography-button'>
							REQUEST DEMO
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};