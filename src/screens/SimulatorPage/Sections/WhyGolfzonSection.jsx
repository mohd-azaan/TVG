// src/screens/SimulatorPage/Sections/WhyGolfzonSection.jsx
// Additional section for the Simulator page showing 'Why Golfzon' hero and features
// Provides a compact, responsive component using project fonts and Tailwind classes
// RELEVANT FILES: SimulatorPage.jsx, GolfzonAdvantagesSection.jsx, styleguide.css

import React from 'react';

export const WhyGolfzonSection = () => {
	return (
		<section className='w-full bg-white py-16 lg:py-28'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl'>
				<div className='text-center mb-8'>
					<h3 className='text-sm tracking-[0.12em] uppercase font-gilroy font-bold text-forestgreen'>
						The #1 golf simulator brand globally
					</h3>
					<h2 className='mt-3 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-black font-morganite leading-tight sm:leading-[0.9] lg:leading-[90px] tracking-wide uppercase'>
						Why Golfzon?
					</h2>
					<p className='mt-4 text-lg sm:text-xl lg:text-[22px] font-gilroy font-medium text-gray-600 max-w-3xl mx-auto leading-relaxed'>
						Trusted by pros and recreational players alike. Industry-leading
						sensors, realistic graphics, and intuitive software make Golfzon the
						top choice for simulators worldwide.
					</p>
				</div>

				<div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
					{/** Six feature cards matching the Figma layout with rounded images and captions */}
					<div className='rounded-2xl overflow-hidden bg-transparent'>
						<div className='p-4 bg-white rounded-2xl shadow-sm'>
							<img
								src={'/twovision-play-legends.png'}
								alt='Cutting-Edge Sensors'
								className='w-full h-44 object-cover rounded-[18px]'
							/>
							<div className='mt-3 bg-white rounded-b-xl py-3'>
								<div className='text-sm lg:text-[15px] font-gilroy font-medium uppercase text-black'>
									Cutting-Edge Sensors
								</div>
							</div>
						</div>
					</div>

					<div className='rounded-2xl overflow-hidden bg-transparent'>
						<div className='p-4 bg-white rounded-2xl shadow-sm'>
							<img
								src={'/advanced-simulators-1-2.png'}
								alt='Unreal Engine-5 Graphics'
								className='w-full h-44 object-cover rounded-[18px]'
							/>
							<div className='mt-3 bg-white rounded-b-xl py-3'>
								<div className='text-sm lg:text-[15px] font-gilroy font-medium uppercase text-black'>
									Unreal Engine-5 Graphics
								</div>
							</div>
						</div>
					</div>

					<div className='rounded-2xl overflow-hidden bg-transparent'>
						<div className='p-4 bg-white rounded-2xl shadow-sm'>
							<img
								src={'/twovision-zero-latency.png'}
								alt='Moving Swing Plates'
								className='w-full h-44 object-cover rounded-[18px]'
							/>
							<div className='mt-3 bg-white rounded-b-xl py-3'>
								<div className='text-sm lg:text-[15px] font-gilroy font-medium uppercase text-black'>
									Moving Swing Plates
								</div>
							</div>
						</div>
					</div>

					<div className='rounded-2xl overflow-hidden bg-transparent'>
						<div className='p-4 bg-white rounded-2xl shadow-sm'>
							<img
								src={'/golfzon-screenshot.png'}
								alt='User-Friendly Software'
								className='w-full h-44 object-cover rounded-[18px]'
							/>
							<div className='mt-3 bg-white rounded-b-xl py-3'>
								<div className='text-sm lg:text-[15px] font-gilroy font-medium uppercase text-black'>
									User-Friendly Software
								</div>
							</div>
						</div>
					</div>

					<div className='rounded-2xl overflow-hidden bg-transparent'>
						<div className='p-4 bg-white rounded-2xl shadow-sm'>
							<img
								src={'/play-swing-2-1-10.png'}
								alt='Auto Tee-Up'
								className='w-full h-44 object-cover rounded-[18px]'
							/>
							<div className='mt-3 bg-white rounded-b-xl py-3'>
								<div className='text-sm lg:text-[15px] font-gilroy font-medium uppercase text-black'>
									Auto Tee-Up
								</div>
							</div>
						</div>
					</div>

					<div className='rounded-2xl overflow-hidden bg-transparent'>
						<div className='p-4 bg-white rounded-2xl shadow-sm'>
							<img
								src={'/twovision-swing-plate.png'}
								alt='Zero Latency'
								className='w-full h-44 object-cover rounded-[18px]'
							/>
							<div className='mt-3 bg-white rounded-b-xl py-3'>
								<div className='text-sm lg:text-[15px] font-gilroy font-medium uppercase text-black'>
									Zero Latency
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* See it in action row */}
				<div className='mt-14 text-center'>
					<h3 className='text-3xl font-extrabold font-morganite tracking-wide'>
						SEE IT IN ACTION
					</h3>
					<div className='mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto'>
						{[
							'/advanced-simulators-1-1.png',
							'/twovision-dial-game.png',
							'/play-swing-2-1-3.png',
						].map((src, idx) => (
							<div
								key={idx}
								className='relative rounded-xl overflow-hidden shadow-md'
							>
								<img
									src={src}
									alt={`video-${idx}`}
									className='w-full h-44 object-cover'
								/>
								<div className='absolute inset-0 flex items-center justify-center'>
									<div className='w-14 h-14 bg-white bg-opacity-95 rounded-full flex items-center justify-center shadow-lg'>
										<svg
											width='22'
											height='22'
											viewBox='0 0 24 24'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path d='M8 5v14l11-7L8 5z' fill='#00A86B' />
										</svg>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhyGolfzonSection;
