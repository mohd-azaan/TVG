// File: src/screens/SimulatorPage/Sections/SpecSection.jsx
// Description: Specifications section component for the Simulators page with proper spacing and layout.
// Why: Displays feature comparison table as a standalone section with correct dimensions to avoid overlapping.
// RELEVANT FILES: src/screens/SimulatorPage/Sections/Simulator.jsx, src/App.jsx

import React from 'react';

const SpecSection = () => {
	return (
		<section className='w-full min-h-[800px] bg-white pt-0 pb-10 px-10'>
			<div className='w-full max-w-[1400px] mx-auto'>
				{/* SPEC Title */}
				<div className='text-center mb-6'>
					<h2 className='text-[64px] font-bold font-morganite uppercase tracking-normal leading-[1.1] text-black'>
						SPEC
					</h2>
				</div>

				{/* Table Container */}
				<div className='w-full max-w-[1200px] mx-auto bg-white'>
					{/* Table Header */}
					<div className='grid grid-cols-5 border-b-2 border-[#009444] pb-2 mb-3'>
						<div className='p-1'></div>
						<div className='p-1 text-center'>
							<h3 className='text-[18px] font-bold font-gilroy text-[#009444] uppercase tracking-wide'>
								TWOVISION NX
							</h3>
						</div>
						<div className='p-1 text-center'>
							<h3 className='text-[18px] font-bold font-gilroy text-[#009444] uppercase tracking-wide'>
								TWOVISION
							</h3>
						</div>
						<div className='p-1 text-center'>
							<h3 className='text-[18px] font-bold font-gilroy text-[#009444] uppercase tracking-wide'>
								VISION STANDARD
							</h3>
						</div>
						<div className='p-1 text-center'>
							<h3 className='text-[18px] font-bold font-gilroy text-[#009444] uppercase tracking-wide'>
								GDR PLUS
							</h3>
						</div>
					</div>{' '}
					{/* SENSOR Row */}
					<div className='grid grid-cols-5 border-b border-gray-200 py-2'>
						<div className='p-2 flex items-center'>
							<div className='text-[16px] font-bold font-gilroy text-black uppercase'>
								SENSOR
							</div>
						</div>
						<div className='p-2 text-center flex items-center justify-center'>
							<span className='text-[16px] font-medium font-gilroy text-black'>
								TwoVision Sensor
							</span>
						</div>
						<div className='p-2 text-center flex items-center justify-center'>
							<span className='text-[16px] font-medium font-gilroy text-black'>
								TwoVision Sensor
							</span>
						</div>
						<div className='p-2 text-center flex items-center justify-center'>
							<span className='text-[16px] font-medium font-gilroy text-black'>
								T2 Sensor
							</span>
						</div>
						<div className='p-2 text-center flex items-center justify-center'>
							<span className='text-[16px] font-medium font-gilroy text-black'>
								T2 Sensor
							</span>
						</div>
					</div>
					{/* BOTH HANDED Row */}
					<div className='grid grid-cols-5 border-b border-gray-200 py-2'>
						<div className='p-2 flex items-center'>
							<div className='text-[16px] font-bold font-gilroy text-black uppercase'>
								BOTH HANDED
							</div>
						</div>
						<div className='p-2 text-center flex items-center justify-center'>
							<span className='text-[16px] font-medium font-gilroy text-black'>
								Optional
							</span>
						</div>
						<div className='p-2 text-center flex items-center justify-center'>
							<span className='text-[16px] font-medium font-gilroy text-black'>
								Optional
							</span>
						</div>
						<div className='p-2 text-center flex items-center justify-center'>
							<span className='text-[16px] font-medium font-gilroy text-black'>
								Optional
							</span>
						</div>
						<div className='p-2 text-center flex items-center justify-center'>
							<span className='text-[16px] font-medium font-gilroy text-black'>
								Optional
							</span>
						</div>
					</div>
					{/* PLATES Section Container */}
					<div className='relative border-b border-gray-200'>
						{/* PLATES Vertical Label - positioned to span all 3 plate rows */}
						<div className='absolute left-4 top-0 flex items-center justify-center h-full'>
							<div className='flex flex-col items-center justify-center text-[16px] font-bold font-gilroy text-black uppercase tracking-wide'>
								<div>P</div>
								<div>L</div>
								<div>A</div>
								<div>T</div>
								<div>E</div>
								<div>S</div>
							</div>
						</div>

						{/* MOTION SWING PLATE Row */}
						<div className='grid grid-cols-5 border-b border-gray-200 py-2'>
							<div className='p-2 flex items-center pl-16'>
								<div className='text-[16px] font-bold font-gilroy text-black uppercase'>
									MOTION SWING PLATE
								</div>
							</div>
							<div className='p-2 text-center flex items-center justify-center'>
								<span className='text-[16px] font-medium font-gilroy text-black'>
									Optional
								</span>
							</div>
							<div className='p-2 text-center flex items-center justify-center'>
								<span className='text-[20px] font-medium font-gilroy text-gray-400'>
									×
								</span>
							</div>
							<div className='p-2 text-center flex items-center justify-center'>
								<span className='text-[20px] font-medium font-gilroy text-gray-400'>
									×
								</span>
							</div>
							<div className='p-2 text-center flex items-center justify-center'>
								<span className='text-[20px] font-medium font-gilroy text-gray-400'>
									×
								</span>
							</div>
						</div>

						{/* DUAL SWING PLATE Row */}
						<div className='grid grid-cols-5 border-b border-gray-200 py-2'>
							<div className='p-2 flex items-center pl-16'>
								<div className='text-[16px] font-bold font-gilroy text-black uppercase'>
									DUAL SWING PLATE
								</div>
							</div>
							<div className='p-4 text-center flex items-center justify-center'>
								<span className='text-[16px] font-medium font-gilroy text-black'>
									Optional
								</span>
							</div>
							<div className='p-4 text-center flex items-center justify-center'>
								<span className='text-[16px] font-medium font-gilroy text-black'>
									Optional
								</span>
							</div>
							<div className='p-2 text-center flex items-center justify-center'>
								<span className='text-[16px] font-medium font-gilroy text-black'>
									Optional
								</span>
							</div>
							<div className='p-2 text-center flex items-center justify-center'>
								<span className='text-[20px] font-medium font-gilroy text-gray-400'>
									×
								</span>
							</div>
						</div>

						{/* BASIC SWING PLATE Row */}
						<div className='grid grid-cols-5 py-2'>
							<div className='p-2 flex items-center pl-16'>
								<div className='text-[16px] font-bold font-gilroy text-black uppercase'>
									BASIC SWING PLATE
								</div>
							</div>
							<div className='p-2 text-center flex items-center justify-center'>
								<span className='text-[16px] font-medium font-gilroy text-black'>
									Optional
								</span>
							</div>
							<div className='p-2 text-center flex items-center justify-center'>
								<span className='text-[16px] font-medium font-gilroy text-black'>
									Optional
								</span>
							</div>
							<div className='p-2 text-center flex items-center justify-center'>
								<span className='text-[16px] font-medium font-gilroy text-black'>
									Optional
								</span>
							</div>
							<div className='p-2 text-center flex items-center justify-center'>
								<span className='text-[16px] font-medium font-gilroy text-black'>
									Optional
								</span>
							</div>
						</div>
					</div>
					{/* MULTI SURFACES MAT Row */}
					<div className='grid grid-cols-5 border-b border-gray-200 py-2'>
						<div className='p-2 flex items-center'>
							<div className='text-[16px] font-bold font-gilroy text-black uppercase'>
								MULTI SURFACES MAT
							</div>
						</div>
						<div className='p-2 text-center flex items-center justify-center'>
							<span className='text-[16px] font-medium font-gilroy text-black'>
								5-Surface Mat
							</span>
						</div>
						<div className='p-2 text-center flex items-center justify-center'>
							<span className='text-[16px] font-medium font-gilroy text-black'>
								5-Surface Mat
							</span>
						</div>
						<div className='p-2 text-center flex items-center justify-center'>
							<span className='text-[20px] font-medium font-gilroy text-gray-400'>
								×
							</span>
						</div>
						<div className='p-2 text-center flex items-center justify-center'>
							<span className='text-[20px] font-medium font-gilroy text-gray-400'>
								×
							</span>
						</div>
					</div>
					{/* SOFTWARE Row */}
					<div className='grid grid-cols-5 border-b border-gray-200 py-2'>
						<div className='p-2 flex items-center'>
							<div className='text-[16px] font-bold font-gilroy text-black uppercase'>
								SOFTWARE
							</div>
						</div>
						<div className='p-2 text-center flex items-center justify-center'>
							<span className='text-[16px] font-medium font-gilroy text-black'>
								TwoVision NX
							</span>
						</div>
						<div className='p-2 text-center flex items-center justify-center'>
							<span className='text-[16px] font-medium font-gilroy text-black'>
								TwoVision
							</span>
						</div>
						<div className='p-2 text-center flex items-center justify-center'>
							<span className='text-[16px] font-medium font-gilroy text-black'>
								Vision
							</span>
						</div>
						<div className='p-2 text-center flex items-center justify-center'>
							<span className='text-[16px] font-medium font-gilroy text-black'>
								GDR
							</span>
						</div>
					</div>
					{/* ARCADE Row */}
					<div className='grid grid-cols-5 py-2'>
						<div className='p-2 flex items-center'>
							<div className='text-[16px] font-bold font-gilroy text-black uppercase'>
								ARCADE
							</div>
						</div>
						<div className='p-2 text-center flex items-center justify-center'>
							<span className='text-[16px] font-medium font-gilroy text-black'>
								Optional
							</span>
						</div>
						<div className='p-2 text-center flex items-center justify-center'>
							<span className='text-[16px] font-medium font-gilroy text-black'>
								Optional
							</span>
						</div>
						<div className='p-2 text-center flex items-center justify-center'>
							<span className='text-[20px] font-medium font-gilroy text-gray-400'>
								×
							</span>
						</div>
						<div className='p-2 text-center flex items-center justify-center'>
							<span className='text-[20px] font-medium font-gilroy text-gray-400'>
								×
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SpecSection;
