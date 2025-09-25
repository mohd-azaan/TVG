// File: src/screens/SimulatorPage/Sections/SpecSection.jsx
// Description: Specifications section component for the Simulators page with design system layout.
// Why: Displays feature comparison table following design system standards with proper width matching other sections.
// RELEVANT FILES: src/screens/SimulatorPage/Sections/Simulator.jsx, src/App.jsx

import React from 'react';

const SpecSection = () => {
	return (
		<section className='relative w-full bg-white overflow-hidden'>
			<div className='relative max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-20'>
				<div className='lg:ml-[12vw] md:ml-[8vw] lg:mr-[12vw] md:mr-[8vw]'>
					<div className='max-w-[1200px] mx-auto'>
						{/* SPEC Title */}
						<div className='text-center mb-6'>
							<h2 className='text-[56px] font-bold font-morganite uppercase tracking-normal leading-[1.1] text-black'>
								SPEC
							</h2>
						</div>

						{/* Table Container */}
						<div className='w-full bg-white'>
							{/* Table Header */}
							<div className='grid grid-cols-5 border-b-2 border-[#009444] pb-3 mb-4'>
								<div className='p-3'></div>
								<div className='p-3 text-center'>
									<h3 className='text-[14px] font-bold font-gilroy text-[#009444] uppercase tracking-wide'>
										TWOVISION NX
									</h3>
								</div>
								<div className='p-3 text-center'>
									<h3 className='text-[14px] font-bold font-gilroy text-[#009444] uppercase tracking-wide'>
										TWOVISION
									</h3>
								</div>
								<div className='p-3 text-center'>
									<h3 className='text-[14px] font-bold font-gilroy text-[#009444] uppercase tracking-wide'>
										VISION STANDARD
									</h3>
								</div>
								<div className='p-3 text-center'>
									<h3 className='text-[14px] font-bold font-gilroy text-[#009444] uppercase tracking-wide'>
										GDR PLUS
									</h3>
								</div>
							</div>

							{/* SENSOR Row */}
							<div className='grid grid-cols-5 border-b border-gray-200 py-3'>
								<div className='p-3 flex items-center'>
									<div className='text-[14px] font-bold font-gilroy text-black uppercase'>
										SENSOR
									</div>
								</div>
								<div className='p-3 text-center flex items-center justify-center'>
									<span className='text-[14px] font-medium font-gilroy text-black'>
										TwoVision Sensor
									</span>
								</div>
								<div className='p-3 text-center flex items-center justify-center'>
									<span className='text-[14px] font-medium font-gilroy text-black'>
										TwoVision Sensor
									</span>
								</div>
								<div className='p-3 text-center flex items-center justify-center'>
									<span className='text-[14px] font-medium font-gilroy text-black'>
										T2 Sensor
									</span>
								</div>
								<div className='p-3 text-center flex items-center justify-center'>
									<span className='text-[14px] font-medium font-gilroy text-black'>
										T2 Sensor
									</span>
								</div>
							</div>

							{/* BOTH HANDED Row */}
							<div className='grid grid-cols-5 border-b border-gray-200 py-3'>
								<div className='p-3 flex items-center'>
									<div className='text-[14px] font-bold font-gilroy text-black uppercase'>
										BOTH HANDED
									</div>
								</div>
								<div className='p-3 text-center flex items-center justify-center'>
									<span className='text-[14px] font-medium font-gilroy text-black'>
										Optional
									</span>
								</div>
								<div className='p-3 text-center flex items-center justify-center'>
									<span className='text-[14px] font-medium font-gilroy text-black'>
										Optional
									</span>
								</div>
								<div className='p-3 text-center flex items-center justify-center'>
									<span className='text-[14px] font-medium font-gilroy text-black'>
										Optional
									</span>
								</div>
								<div className='p-3 text-center flex items-center justify-center'>
									<span className='text-[14px] font-medium font-gilroy text-black'>
										Optional
									</span>
								</div>
							</div>

							{/* PLATES Section Container */}
							<div className='relative border-b border-gray-200'>
								{/* PLATES Vertical Label */}
								<div className='absolute left-3 top-0 flex items-center justify-center h-full'>
									<div className='flex flex-col items-center justify-center text-[14px] font-bold font-gilroy text-black uppercase tracking-wide'>
										<div>P</div>
										<div>L</div>
										<div>A</div>
										<div>T</div>
										<div>E</div>
										<div>S</div>
									</div>
								</div>

								{/* MOTION SWING PLATE Row */}
								<div className='grid grid-cols-5 border-b border-gray-200 py-3'>
									<div className='p-3 flex items-center pl-12'>
										<div className='text-[14px] font-bold font-gilroy text-black uppercase'>
											MOTION SWING PLATE
										</div>
									</div>
									<div className='p-3 text-center flex items-center justify-center'>
										<span className='text-[14px] font-medium font-gilroy text-black'>
											Optional
										</span>
									</div>
									<div className='p-3 text-center flex items-center justify-center'>
										<span className='text-[18px] font-medium font-gilroy text-gray-400'>
											×
										</span>
									</div>
									<div className='p-3 text-center flex items-center justify-center'>
										<span className='text-[18px] font-medium font-gilroy text-gray-400'>
											×
										</span>
									</div>
									<div className='p-3 text-center flex items-center justify-center'>
										<span className='text-[18px] font-medium font-gilroy text-gray-400'>
											×
										</span>
									</div>
								</div>

								{/* DUAL SWING PLATE Row */}
								<div className='grid grid-cols-5 border-b border-gray-200 py-3'>
									<div className='p-3 flex items-center pl-12'>
										<div className='text-[14px] font-bold font-gilroy text-black uppercase'>
											DUAL SWING PLATE
										</div>
									</div>
									<div className='p-3 text-center flex items-center justify-center'>
										<span className='text-[14px] font-medium font-gilroy text-black'>
											Optional
										</span>
									</div>
									<div className='p-3 text-center flex items-center justify-center'>
										<span className='text-[14px] font-medium font-gilroy text-black'>
											Optional
										</span>
									</div>
									<div className='p-3 text-center flex items-center justify-center'>
										<span className='text-[14px] font-medium font-gilroy text-black'>
											Optional
										</span>
									</div>
									<div className='p-3 text-center flex items-center justify-center'>
										<span className='text-[18px] font-medium font-gilroy text-gray-400'>
											×
										</span>
									</div>
								</div>

								{/* BASIC SWING PLATE Row */}
								<div className='grid grid-cols-5 py-3'>
									<div className='p-3 flex items-center pl-12'>
										<div className='text-[14px] font-bold font-gilroy text-black uppercase'>
											BASIC SWING PLATE
										</div>
									</div>
									<div className='p-3 text-center flex items-center justify-center'>
										<span className='text-[14px] font-medium font-gilroy text-black'>
											Optional
										</span>
									</div>
									<div className='p-3 text-center flex items-center justify-center'>
										<span className='text-[14px] font-medium font-gilroy text-black'>
											Optional
										</span>
									</div>
									<div className='p-3 text-center flex items-center justify-center'>
										<span className='text-[14px] font-medium font-gilroy text-black'>
											Optional
										</span>
									</div>
									<div className='p-3 text-center flex items-center justify-center'>
										<span className='text-[14px] font-medium font-gilroy text-black'>
											Optional
										</span>
									</div>
								</div>
							</div>

							{/* MULTI SURFACES MAT Row */}
							<div className='grid grid-cols-5 border-b border-gray-200 py-3'>
								<div className='p-3 flex items-center'>
									<div className='text-[14px] font-bold font-gilroy text-black uppercase'>
										MULTI SURFACES MAT
									</div>
								</div>
								<div className='p-3 text-center flex items-center justify-center'>
									<span className='text-[14px] font-medium font-gilroy text-black'>
										5-Surface Mat
									</span>
								</div>
								<div className='p-3 text-center flex items-center justify-center'>
									<span className='text-[14px] font-medium font-gilroy text-black'>
										5-Surface Mat
									</span>
								</div>
								<div className='p-3 text-center flex items-center justify-center'>
									<span className='text-[18px] font-medium font-gilroy text-gray-400'>
										×
									</span>
								</div>
								<div className='p-3 text-center flex items-center justify-center'>
									<span className='text-[18px] font-medium font-gilroy text-gray-400'>
										×
									</span>
								</div>
							</div>

							{/* SOFTWARE Row */}
							<div className='grid grid-cols-5 border-b border-gray-200 py-3'>
								<div className='p-3 flex items-center'>
									<div className='text-[14px] font-bold font-gilroy text-black uppercase'>
										SOFTWARE
									</div>
								</div>
								<div className='p-3 text-center flex items-center justify-center'>
									<span className='text-[14px] font-medium font-gilroy text-black'>
										TwoVision NX
									</span>
								</div>
								<div className='p-3 text-center flex items-center justify-center'>
									<span className='text-[14px] font-medium font-gilroy text-black'>
										TwoVision
									</span>
								</div>
								<div className='p-3 text-center flex items-center justify-center'>
									<span className='text-[14px] font-medium font-gilroy text-black'>
										Vision
									</span>
								</div>
								<div className='p-3 text-center flex items-center justify-center'>
									<span className='text-[14px] font-medium font-gilroy text-black'>
										GDR
									</span>
								</div>
							</div>

							{/* ARCADE Row */}
							<div className='grid grid-cols-5 py-3'>
								<div className='p-3 flex items-center'>
									<div className='text-[14px] font-bold font-gilroy text-black uppercase'>
										ARCADE
									</div>
								</div>
								<div className='p-3 text-center flex items-center justify-center'>
									<span className='text-[14px] font-medium font-gilroy text-black'>
										Optional
									</span>
								</div>
								<div className='p-3 text-center flex items-center justify-center'>
									<span className='text-[14px] font-medium font-gilroy text-black'>
										Optional
									</span>
								</div>
								<div className='p-3 text-center flex items-center justify-center'>
									<span className='text-[18px] font-medium font-gilroy text-gray-400'>
										×
									</span>
								</div>
								<div className='p-3 text-center flex items-center justify-center'>
									<span className='text-[18px] font-medium font-gilroy text-gray-400'>
										×
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SpecSection;