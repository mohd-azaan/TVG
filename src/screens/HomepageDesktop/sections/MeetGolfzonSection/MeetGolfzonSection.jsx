import { ArrowRightIcon } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../../components/ui/button';
import { Card, CardContent } from '../../../../components/ui/card';

const features = [
	'Over 275+ real-world course simulations.',
	'Moving swing plates that mimic real terrain.',
	'Shot data and video feedback in real-time.',
	'Zero-latency results with every hit.',
	'Adjustable weather and course conditions.',
	'Left and right-handed support.',
];

export const MeetGolfzonSection = () => {
	return (
		<section className='w-full bg-white py-20 lg:py-32'>
			<div className='relative max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center lg:ml-[12vw] md:ml-[8vw] lg:mr-[12vw] md:mr-[8vw]'>
					<div className='order-2 lg:order-1'>
						<img
							className='w-full h-auto object-cover duration-300'
							alt='Indoor golf'
							src='/indoor-golf-1.png'
							loading='lazy'
							decoding='async'
							width='600'
							height='400'
						/>
					</div>

					<div className='order-1 lg:order-2 space-y-6 sm:space-y-8'>
						<div className='space-y-4 sm:space-y-2'>
							<div className='text-[18px] sm:text-[14px] lg:text-[18px] font-bold text-[#009444] leading-tight tracking-wide'>
								BUILT WITH THE BEST GOLF TECH IN THE WORLD
							</div>

							<h2 className='text-black font-morganite font-black text-[clamp(38px,5.2vw,78px)] leading-[0.92] tracking-[0.02em]'>
								MEET GOLFZON TWOVISIONNX
							</h2>
						</div>

						<div className='text-[16px] font-medium text-[#757575] leading-relaxed'>
							This is the world&apos;s most advanced golf simulator. Used by
							professional tours across Asia, our setup offers:
						</div>

						<div className='space-y-4 sm:space-y-1'>
							{features.map((feature, index) => (
								<div key={index} className='flex items-center gap-2'>
									<img
										className='w-7 h-7 flex-shrink-0'
										alt='Sports golf'
										src='/smash-it.svg'
										loading='lazy'
										decoding='async'
										width='30'
										height='30'
									/>
									<div className='text-[16px] font-medium text-[#757575] leading-relaxed'>
										{feature}
									</div>
								</div>
							))}
						</div>

						<Link to='/simulator' className='inline-block'>
							<Button className='inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#009444] hover:bg-[#007a3a] rounded-full h-auto text-sm font-semibold tracking-wide transition-colors duration-200'>
								<span className='text-white'>LEARN ABOUT OUR TECH</span>
								<ArrowRightIcon className='w-4 h-4 text-white' />
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};
