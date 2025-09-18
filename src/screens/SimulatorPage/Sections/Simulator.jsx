// File: src/screens/SimulatorPage/Sections/Simulator.jsx
// Description: Simulator section component for the Simulators page — contains the Spec table and model cards.
// Why: Implements the Figma-designed Simulator section used on the Simulator page.
// RELEVANT FILES: src/screens/SimulatorPage/Sections/Simulator.jsx, public/, src/App.jsx
import React, { useState } from 'react';
import SimulatorCard from './SimulatorCard';

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
		<div className='w-full relative bg-white h-[750px] overflow-hidden text-center text-xl text-black font-gilroy-medium'>
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
			<div className='absolute top-[260px] left-1/2 -translate-x-1/2 w-[1000px] font-medium text-[22px] text-[#009444] font-gilroy-bold'>
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
				<SimulatorCard
					imageSrc='/public/advanced-simulators-1-1.png'
					alt='TwoVision NX'
					title='TwoVision NX'
					description={`Our most advanced simulator yet is our crown jewel. Unreal English 5.x and the upgraded Motion Plate recreate real-world courses with jaw-dropping detail and precision. Shifting slopes, true-to-life ball reactions, and pure immersion all in one.`}
				/>
			)}

			{/* Conditional content: show TwoVision layout when active */}
			{active === 'TwoVision' && (
				<SimulatorCard
					imageSrc={null}
					alt='TwoVision'
					title='TWOVISION'
					description={`This is the simulator that changed indoor golf forever. By combining dual high-speed sensors with a full course experience, TwoVision gives realistic ball flight, instant feedback, and the feel of playing outdoors. And don't forget the 90-degree sensors that capture swing, ball, and club data in real time.`}
				/>
			)}

			{/* Conditional content: show Vision Standard layout when active */}
			{active === 'Vision Standard' && (
				<SimulatorCard
					imageSrc={null}
					alt='Vision Standard'
					title='VISION STANDARD'
					description={`Don't let the name fool you, as this version is anything but basic or standard. It's the most accessible way to play full-course golf on a premium simulator. Sleek design, accurate tracking, and a smooth user experience make it ideal for casual players, commercial spaces, or anyone who wants the real feel without the premium price tag.`}
				/>
			)}

			{/* Conditional content: show GDR Plus layout when active */}
			{active === 'GDR Plus' && (
				<SimulatorCard
					imageSrc={null}
					alt='GDR Plus'
					title='GDR PLUS'
					description={`GDR Plus is built for focused practice and performance. Designed with advanced features and improved shot analysis, it takes your range work to the next level. With this model, you can focus on distance control, launch angles, or swing speed. It delivers data in a clean, intuitive format. It's a coach's and a player's dream.`}
				/>
			)}

			{/* Conditional content: show Golfzon Wave layout when active */}
			{active === 'Golfzon Wave' && (
				<SimulatorCard
					imageSrc={null}
					alt='Golfzon Wave'
					title='GOLFZON WAVE'
					description={`Golfzon Wave is the first dual-device launch monitor system built to capture every shot with pinpoint accuracy. Developed by the creators of the world's most advanced simulators, it brings pro-level tracking to a compact, portable format.`}
				/>
			)}
		</div>
	);
};

export default Simulator;
