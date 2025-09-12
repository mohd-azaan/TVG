import { ArrowRightIcon } from 'lucide-react';
import React from 'react';

export const TestimonialsSection = () => {
	return (
		<section className='relative w-full bg-[#102121] border-b-[70px] border-[#009444] overflow-hidden'>
			<header className='relative w-full h-16 sm:h-20 bg-[#0c1a1a]'>
				<div className='flex items-center justify-center h-full px-4 sm:px-6 lg:px-8'>
					<div className='flex items-center justify-between w-full max-w-7xl'>
						<h2 className='text-xl sm:text-2xl lg:text-[28px] font-bold text-white'>
							READY TO VISIT?
						</h2>
						<div className='flex items-center justify-center gap-3 px-6 sm:px-8 py-3 bg-[#009444] rounded-full overflow-hidden hover:bg-[#007a3a] transition-colors duration-200 cursor-pointer'>
							<span className='text-white text-sm sm:text-base lg:text-lg font-semibold tracking-wide whitespace-nowrap'>
								PLAN YOUR VISIT
							</span>
							<ArrowRightIcon className='w-5 h-5 text-white' />
						</div>
					</div>
				</div>
			</header>

			<div className='relative w-full py-16 sm:py-20 lg:py-24'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center'>
						{/* Image */}
						<figure className='order-2 lg:order-1 flex justify-center'>
							<img
								className='w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[400px] h-auto object-cover rounded-[20px] shadow-lg'
								alt='Customer testimonial'
								src='/chatgpt-image-aug-22--2025--09-37-50-pm-1-2.png'
							/>
						</figure>

						{/* Testimonial Content */}
						<div className='order-1 lg:order-2 relative'>
							<img
								className='absolute w-full max-w-[890px] h-auto top-0 left-0 opacity-30'
								alt='Background shape'
								src='/shape14-2-2.svg'
							/>

							<div className='relative z-10 space-y-6 sm:space-y-8'>
								<div className='relative'>
									<div className='absolute -top-4 -left-4 sm:-top-6 sm:-left-6 text-6xl sm:text-7xl lg:text-[120px] font-black text-white opacity-20'>
										"
									</div>

									<blockquote className='text-lg sm:text-xl lg:text-2xl xl:text-[26px] font-medium text-white leading-relaxed relative z-10 pl-8 sm:pl-12'>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Suspendisse tortor erat, pretium et mattis quis, ultrices
										eget velit. Vivamus sit amet egestas justo. Nam sagittis,
										justo vitae sagittis auctor, mi diam laoreet elit, aliquet
										dignissim orci turpis vitae eros. Nulla eget pretium diam,
										vel egestas dui. Ut arcu eros, fermentum sit amet dolor a,
										elementum vehicula purus.
									</blockquote>
								</div>

								<div className='text-base sm:text-lg lg:text-xl font-medium text-white pl-8 sm:pl-12'>
									Ambassador, John Doe
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
