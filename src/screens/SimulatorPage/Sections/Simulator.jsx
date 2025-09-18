// File: src/screens/SimulatorPage/Sections/Simulator.jsx
// Description: Simulator section component for the Simulators page — contains the Spec table and model cards.
// Why: Implements the Figma-designed Simulator section used on the Simulator page.
// RELEVANT FILES: src/screens/SimulatorPage/Sections/Simulator.jsx, public/, src/App.jsx
import React, { useState } from 'react';

const Simulator = () => {
	const [active, setActive] = useState('TwoVision NX');

	const pills = [
		'TwoVision NX',
		'TwoVision',
		'Vision Standard',
		'GDR Plus',
		'Golfzon Wave',
	];

	return (
		<div className='w-full relative bg-white h-[900px] overflow-hidden text-center text-xl text-black font-gilroy-medium'>
			{/* pills moved below heading */}

			{/* Heading and subheading (kept) */}
			<div className='absolute top-[60px] left-1/2 -translate-x-1/2 w-[760px] text-center'>
				<div className='text-[64px] sm:text-[72px] tracking-[0.02em] leading-[76px] uppercase font-extrabold font-morganite'>
					Our Simulators
				</div>
				<div className='-mt-1 text-[18px] tracking-[0.02em] leading-[24px] uppercase font-gilroy-bold font-bold text-[#009444]'>
					Choose the Model That Fits You Best
				</div>
				<div className='mt-4 w-[620px] mx-auto text-[#757575] leading-6 text-base'>
					We carry a range of Golfzon simulators to match your needs, space, and
					skill level
				</div>
			</div>

			{/* Top-centered tab pills (moved below heading) */}
			<div className='absolute top-[260px] left-1/2 -translate-x-1/2 w-[1000px] text-[22px] text-[#009444] font-gilroy-bold'>
				<div className='bg-white w-full h-[80px] flex items-center justify-center'>
					<div className='flex items-center gap-6'>
						{pills.map((p) => {
							const isActive = active === p;
							return (
								<button
									key={p}
									onClick={() => setActive(p)}
									className={`rounded-full border-solid border-[1px] flex items-center justify-center py-2 px-6 text-sm transition ${
										isActive
											? 'bg-[#DFF4E6] border-[#DFF4E6] text-black shadow-sm'
											: 'bg-white border-[#D9D9D9] text-gray-600 hover:bg-[#F6FBF7] hover:border-[#CEECD6]'
									}`}
								>
									<div className='relative leading-6'>{p}</div>
								</button>
							);
						})}
					</div>
				</div>
			</div>

			{/* Conditional content: show TwoVision NX layout when active */}
			{active === 'TwoVision NX' && (
				<div className='absolute top-[360px] left-1/2 -translate-x-1/2 w-[1200px] h-[400px] flex items-center justify-between bg-[#F7F7F7] rounded-[20px] p-8'>
					<div className='w-[460px] bg-gainsboro-100 rounded-[20px] p-6'>
						<img
							className='w-full h-[320px] object-cover rounded-[16px]'
							alt='simulator'
							src='/public/advanced-simulators-1-1.png'
						/>
					</div>
					<div className='w-[640px] text-left'>
						<div className='text-[70px] font-bold mb-4 font-morganite'>
							TwoVision NX
						</div>
						<div className='text-gray-600 leading-6 text-sm'>
							Our most advanced simulator yet is our crown jewel. Unreal English
							5.x and the upgraded Motion Plate recreate real-world courses with
							jaw-dropping detail and precision. Shifting slopes, true-to-life
							ball reactions, and pure immersion all in one.
						</div>
					</div>
				</div>
			)}

			{/* Conditional content: show TwoVision layout when active */}
			{active === 'TwoVision' && (
				<div className='absolute top-[360px] left-1/2 -translate-x-1/2 w-[1200px] h-[400px] flex items-center justify-between bg-[#F7F7F7] rounded-[20px] p-8'>
					<div className='w-[460px] bg-gray-300 rounded-[20px] p-6 flex items-center justify-center'>
						<div className='w-full h-[320px] bg-gray-400 rounded-[16px] flex items-center justify-center'>
							<div className='text-gray-600 text-lg'>Image Placeholder</div>
						</div>
					</div>
					<div className='w-[640px] text-left'>
						<div className='text-[70px] font-bold mb-4 font-morganite'>
							TWOVISION
						</div>
						<div className='text-[#757575] leading-6 text-sm font-medium font-gilroy'>
							This is the simulator that changed indoor golf forever. By
							combining dual high-speed sensors with a full course experience,
							TwoVision gives realistic ball flight, instant feedback, and the
							feel of playing outdoors. And don't forget the 90-degree sensors
							that capture swing, ball, and club data in real time.
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Simulator;
