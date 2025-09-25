// File: src/screens/SimulatorPage/Sections/SimulatorCard.jsx
// Description: Reusable simulator card used by the Simulators page to render an image, title and description.
// Why: Keeps simulator display consistent across different tabs and allows swapping image/title/description via props.
// RELEVANT FILES: src/screens/SimulatorPage/Sections/Simulator.jsx, public/

import React from 'react';

const SimulatorCard = ({
	imageSrc,
	alt,
	title,
	condensed = false,
	description,
}) => {
	return (
		<div className='w-full bg-[#F7F7F7] rounded-[30px] p-6 lg:p-10'>
			<div className='flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12'>
				<div className='w-full lg:w-[540px] flex items-center justify-center order-2 lg:order-1'>
					{imageSrc ? (
						<img
							className='w-full h-[280px] lg:h-[340px] object-cover rounded-[20px]'
							alt={alt}
							src={imageSrc}
							fetchPriority='high'
							decoding='async'
						/>
					) : (
						<div className='w-full h-[280px] lg:h-[340px] bg-[#A8A8A8] rounded-[20px] flex items-center justify-center'>
							<div className='text-[#666666] text-lg font-gilroy font-medium'>
								Image Placeholder
							</div>
						</div>
					)}
				</div>

				<div className='w-full lg:w-[580px] text-center lg:text-left order-1 lg:order-2'>
					<h2 className='font-morganite font-black text-[clamp(48px,5vw,72px)] leading-[1.1] tracking-[0.02em] uppercase text-black mb-4 lg:mb-6'>
						{title}
					</h2>

					<p className='font-gilroy font-normal text-[16px] leading-[1.6] text-[#6B6B6B] max-w-[450px] mx-auto lg:mx-0'>
						{description}
					</p>
				</div>
			</div>
		</div>
	);
};

export default SimulatorCard;
