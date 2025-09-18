import React from 'react';

export const AwardsSection = () => {
	return (
		<section className='bg-[#f6f6f6] py-14 lg:py-24'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl'>
				<div className='flex flex-col lg:flex-row items-center'>
					<div className='lg:w-1/2 text-center lg:text-left'>
						<h2 className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[80px] font-morganite font-black tracking-wide leading-tight uppercase'>
							Golf Digest Awards
						</h2>
						<p className='mt-4 text-lg text-[#757575] font-gilroy'>
							GOLFZON has earned the prestigious Golf Digest Editor's choice
							award for the Best Golf Simulator the last 7 consecutive years
							(2017-2024)
						</p>
					</div>
					<div className='lg:w-1/2 mt-8 lg:mt-0'>
						<img src='batch.png' alt='Golf Digest Awards' className='mx-auto' />
					</div>
				</div>
			</div>
		</section>
	);
};
