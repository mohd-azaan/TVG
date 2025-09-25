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
		<section className='relative w-full bg-white overflow-hidden'>
			<div className='relative max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-20'>
				<div className='lg:ml-[12vw] md:ml-[8vw] lg:mr-[12vw] md:mr-[8vw]'>
					{/* Heading Section */}
					<div className='text-center mb-12 lg:mb-16'>
						<h1 className='font-morganite font-black text-[clamp(64px,6vw,80px)] leading-[0.95] tracking-[0.02em] text-black uppercase mb-4'>
							Our Simulators
						</h1>
						<p className='font-gilroy font-bold text-[18px] leading-[24px] tracking-[0.02em] uppercase text-[#009444] mb-6'>
							Choose the Model That Fits You Best
						</p>
						<p className='font-gilroy font-normal text-[16px] leading-6 text-[#757575] max-w-[620px] mx-auto'>
							We carry a range of Golfzon simulators to match your needs, space, and skill level
						</p>
					</div>

					{/* Navigation Pills */}
					<div className='flex justify-center mb-12 lg:mb-16'>
						<div className='flex flex-wrap items-center justify-center gap-3 lg:gap-4'>
							{pills.map((p) => {
								const isActive = active === p;
								return (
									<button
										key={p}
										onClick={() => setActive(p)}
										className={`rounded-full border border-solid flex items-center justify-center py-3 px-6 text-[14px] font-gilroy font-semibold tracking-wide uppercase transition-all duration-300 ${
											isActive
												? 'bg-[#009444] border-[#009444] text-white shadow-lg transform scale-105'
												: 'bg-white border-[#D9D9D9] text-[#757575] hover:bg-[#F6FBF7] hover:border-[#009444] hover:text-[#009444] hover:shadow-md'
										}`}
									>
										{p}
									</button>
								);
							})}
						</div>
					</div>

					{/* Simulator Cards */}
					<div className='relative'>
						{active === 'TwoVision NX' && (
							<SimulatorCard
								imageSrc='/advanced-simulators-1-1.png'
								alt='TwoVision NX'
								title='TwoVision NX'
								description={`Our most advanced simulator yet is our crown jewel. Unreal English 5.x and the upgraded Motion Plate recreate real-world courses with jaw-dropping detail and precision. Shifting slopes, true-to-life ball reactions, and pure immersion all in one.`}
							/>
						)}

						{active === 'TwoVision' && (
							<SimulatorCard
								imageSrc={null}
								alt='TwoVision'
								title='TWOVISION'
								description={`This is the simulator that changed indoor golf forever. By combining dual high-speed sensors with a full course experience, TwoVision gives realistic ball flight, instant feedback, and the feel of playing outdoors. And don't forget the 90-degree sensors that capture swing, ball, and club data in real time.`}
							/>
						)}

						{active === 'Vision Standard' && (
							<SimulatorCard
								imageSrc={null}
								alt='Vision Standard'
								title='VISION STANDARD'
								description={`Don't let the name fool you, as this version is anything but basic or standard. It's the most accessible way to play full-course golf on a premium simulator. Sleek design, accurate tracking, and a smooth user experience make it ideal for casual players, commercial spaces, or anyone who wants the real feel without the premium price tag.`}
							/>
						)}

						{active === 'GDR Plus' && (
							<SimulatorCard
								imageSrc={null}
								alt='GDR Plus'
								title='GDR PLUS'
								description={`GDR Plus is built for focused practice and performance. Designed with advanced features and improved shot analysis, it takes your range work to the next level. With this model, you can focus on distance control, launch angles, or swing speed. It delivers data in a clean, intuitive format. It's a coach's and a player's dream.`}
							/>
						)}

						{active === 'Golfzon Wave' && (
							<SimulatorCard
								imageSrc={null}
								alt='Golfzon Wave'
								title='GOLFZON WAVE'
								description={`Golfzon Wave is the first dual-device launch monitor system built to capture every shot with pinpoint accuracy. Developed by the creators of the world's most advanced simulators, it brings pro-level tracking to a compact, portable format.`}
							/>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Simulator;
