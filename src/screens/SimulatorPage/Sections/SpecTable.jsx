// File: src/screens/SimulatorPage/Sections/SpecTable.jsx
// Description: Specifications comparison table component for the Simulators page.
// Why: Displays feature comparison across different simulator models in a structured table format.
// RELEVANT FILES: src/screens/SimulatorPage/Sections/Simulator.jsx, src/screens/SimulatorPage/Sections/SimulatorCard.jsx

import React from 'react';

const SpecTable = () => {
	return (
		<div className='w-full mt-20 px-10'>
			{/* Table Container */}
			<div className='w-full max-w-[1200px] mx-auto bg-white'>
				{/* Table Header */}
				<div className='grid grid-cols-5 border-b-2 border-[#009444] pb-4 mb-6'>
					<div className='p-4'></div>
					<div className='p-4 text-center'>
						<h3 className='text-[18px] font-bold font-gilroy text-[#009444] uppercase tracking-wide'>
							TWOVISION NX
						</h3>
					</div>
					<div className='p-4 text-center'>
						<h3 className='text-[18px] font-bold font-gilroy text-[#009444] uppercase tracking-wide'>
							TWOVISION
						</h3>
					</div>
					<div className='p-4 text-center'>
						<h3 className='text-[18px] font-bold font-gilroy text-[#009444] uppercase tracking-wide'>
							VISION STANDARD
						</h3>
					</div>
					<div className='p-4 text-center'>
						<h3 className='text-[18px] font-bold font-gilroy text-[#009444] uppercase tracking-wide'>
							GDR PLUS
						</h3>
					</div>
				</div>

				{/* SENSOR Row */}
				<div className='grid grid-cols-5 border-b border-gray-200 py-4'>
					<div className='p-4 flex items-center'>
						<div className='text-[16px] font-bold font-gilroy text-black uppercase'>
							SENSOR
						</div>
					</div>
					<div className='p-4 text-center flex items-center justify-center'>
						<span className='text-[16px] font-medium font-gilroy text-black'>
							TwoVision Sensor
						</span>
					</div>
					<div className='p-4 text-center flex items-center justify-center'>
						<span className='text-[16px] font-medium font-gilroy text-black'>
							TwoVision Sensor
						</span>
					</div>
					<div className='p-4 text-center flex items-center justify-center'>
						<span className='text-[16px] font-medium font-gilroy text-black'>
							T2 Sensor
						</span>
					</div>
					<div className='p-4 text-center flex items-center justify-center'>
						<span className='text-[16px] font-medium font-gilroy text-black'>
							T2 Sensor
						</span>
					</div>
				</div>

				{/* BOTH HANDED Row */}
				<div className='grid grid-cols-5 border-b border-gray-200 py-4'>
					<div className='p-4 flex items-center'>
						<div className='text-[16px] font-bold font-gilroy text-black uppercase'>
							BOTH HANDED
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
				</div>

				{/* PLATES Section */}
				<div className='grid grid-cols-5'>
					{/* PLATES Vertical Label */}
					<div className='flex items-center justify-start p-4 row-span-3'>
						<div className='flex items-center h-full'>
							<div className='text-[16px] font-bold font-gilroy text-black uppercase tracking-wide transform -rotate-90 origin-center mr-4'>
								P<br />L<br />A<br />T<br />E<br />S
							</div>
						</div>
					</div>
				</div>

				{/* MOTION SWING PLATE Row */}
				<div className='grid grid-cols-5 border-b border-gray-200 py-4'>
					<div className='p-4 flex items-center pl-16'>
						<div className='text-[16px] font-bold font-gilroy text-black uppercase'>
							MOTION SWING PLATE
						</div>
					</div>
					<div className='p-4 text-center flex items-center justify-center'>
						<span className='text-[16px] font-medium font-gilroy text-black'>
							Optional
						</span>
					</div>
					<div className='p-4 text-center flex items-center justify-center'>
						<span className='text-[20px] font-medium font-gilroy text-gray-400'>
							×
						</span>
					</div>
					<div className='p-4 text-center flex items-center justify-center'>
						<span className='text-[20px] font-medium font-gilroy text-gray-400'>
							×
						</span>
					</div>
					<div className='p-4 text-center flex items-center justify-center'>
						<span className='text-[20px] font-medium font-gilroy text-gray-400'>
							×
						</span>
					</div>
				</div>

				{/* DUAL SWING PLATE Row */}
				<div className='grid grid-cols-5 border-b border-gray-200 py-4'>
					<div className='p-4 flex items-center pl-16'>
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
					<div className='p-4 text-center flex items-center justify-center'>
						<span className='text-[16px] font-medium font-gilroy text-black'>
							Optional
						</span>
					</div>
					<div className='p-4 text-center flex items-center justify-center'>
						<span className='text-[20px] font-medium font-gilroy text-gray-400'>
							×
						</span>
					</div>
				</div>

				{/* BASIC SWING PLATE Row */}
				<div className='grid grid-cols-5 border-b border-gray-200 py-4'>
					<div className='p-4 flex items-center pl-16'>
						<div className='text-[16px] font-bold font-gilroy text-black uppercase'>
							BASIC SWING PLATE
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
				</div>

				{/* MULTI SURFACES MAT Row */}
				<div className='grid grid-cols-5 border-b border-gray-200 py-4'>
					<div className='p-4 flex items-center'>
						<div className='text-[16px] font-bold font-gilroy text-black uppercase'>
							MULTI SURFACES MAT
						</div>
					</div>
					<div className='p-4 text-center flex items-center justify-center'>
						<span className='text-[16px] font-medium font-gilroy text-black'>
							5-Surface Mat
						</span>
					</div>
					<div className='p-4 text-center flex items-center justify-center'>
						<span className='text-[16px] font-medium font-gilroy text-black'>
							5-Surface Mat
						</span>
					</div>
					<div className='p-4 text-center flex items-center justify-center'>
						<span className='text-[20px] font-medium font-gilroy text-gray-400'>
							×
						</span>
					</div>
					<div className='p-4 text-center flex items-center justify-center'>
						<span className='text-[20px] font-medium font-gilroy text-gray-400'>
							×
						</span>
					</div>
				</div>

				{/* SOFTWARE Row */}
				<div className='grid grid-cols-5 border-b border-gray-200 py-4'>
					<div className='p-4 flex items-center'>
						<div className='text-[16px] font-bold font-gilroy text-black uppercase'>
							SOFTWARE
						</div>
					</div>
					<div className='p-4 text-center flex items-center justify-center'>
						<span className='text-[16px] font-medium font-gilroy text-black'>
							TwoVision NX
						</span>
					</div>
					<div className='p-4 text-center flex items-center justify-center'>
						<span className='text-[16px] font-medium font-gilroy text-black'>
							TwoVision
						</span>
					</div>
					<div className='p-4 text-center flex items-center justify-center'>
						<span className='text-[16px] font-medium font-gilroy text-black'>
							Vision
						</span>
					</div>
					<div className='p-4 text-center flex items-center justify-center'>
						<span className='text-[16px] font-medium font-gilroy text-black'>
							GDR
						</span>
					</div>
				</div>

				{/* ARCADE Row */}
				<div className='grid grid-cols-5 py-4'>
					<div className='p-4 flex items-center'>
						<div className='text-[16px] font-bold font-gilroy text-black uppercase'>
							ARCADE
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
					<div className='p-4 text-center flex items-center justify-center'>
						<span className='text-[20px] font-medium font-gilroy text-gray-400'>
							×
						</span>
					</div>
					<div className='p-4 text-center flex items-center justify-center'>
						<span className='text-[20px] font-medium font-gilroy text-gray-400'>
							×
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SpecTable;
