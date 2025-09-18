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
		<div className='absolute top-[320px] left-1/2 -translate-x-1/2 w-[1200px] h-[420px] flex items-center justify-between bg-[#F7F7F7] rounded-[20px] p-10'>
			<div className='w-[540px] flex items-center justify-center'>
				{imageSrc ? (
					<img
						className='w-full h-[340px] object-cover rounded-[16px]'
						alt={alt}
						src={imageSrc}
					/>
				) : (
					<div className='w-full h-[340px] bg-[#A8A8A8] rounded-[16px] flex items-center justify-center'>
						<div className='text-[#666666] text-lg font-medium'>
							Image Placeholder
						</div>
					</div>
				)}
			</div>

			<div className='w-[580px] text-left pl-8'>
				<div className='text-[72px] font-bold mb-6 font-morganite leading-[1.1] tracking-normal uppercase'>
					{title}
				</div>

				<div className='text-[#6B6B6B] leading-[1.6] text-base font-medium font-gilroy max-w-[450px]'>
					{description}
				</div>
			</div>
		</div>
	);
};

export default SimulatorCard;
