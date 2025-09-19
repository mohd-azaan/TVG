import React from 'react';
import { Link } from 'react-router-dom';

const ArrowRight = () => (
	<img src='/arrow-right.svg' alt='arrow right' className='w-6 h-6' />
);

export const ReadyToOwnSection = () => {
	return (
		<section className='bg-[#102121] py-14 lg:py-24'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl'>
				<div className='flex flex-col lg:flex-row items-center justify-between'>
					<div className='lg:w-1/2 text-center lg:text-left'>
						<h2 className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[80px] font-morganite font-black tracking-wide leading-tight uppercase text-white'>
							Ready to Own or Rent <br />
							<span className='text-[#009444]'>a Golfzon Simulator?</span>
						</h2>
					</div>
					<div className='lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0'>
						<p className='text-lg text-gray-400 font-gilroy'>
							Let’s talk about your space, goals, and ideal setup. We’ll help
							you choose the right model and get you up and running.
						</p>
						<div className='flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start'>
							<button className='bg-[#009444] hover:bg-[#007f34] text-white font-gilroy-semibold py-3 px-6 rounded-full flex items-center justify-center gap-2 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-[#009444]/30'>
								<span>Request a Quote</span>
								<ArrowRight />
							</button>
							<Link
								to='/contact'
								className='inline-block border border-white text-white font-gilroy-semibold py-3 px-6 rounded-full transition-colors duration-200 hover:bg-[#9be0b7] hover:text-black focus:outline-none focus:ring-4 focus:ring-[#9be0b7]/40'
								aria-label='Speak to our team - contact page'
							>
								Speak to Our Team
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
