import { ArrowRightIcon } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

export const TestimonialsSection = () => {
	return (
		<section className='relative w-full bg-[#102121] border-b-[70px] border-[#009444] overflow-hidden'>
			{/* Header Bar */}
			<header className='relative w-full h-20 bg-[#0c1a1a]'>
				<div className='flex items-center justify-between h-full px-8 max-w-7xl mx-auto'>
					<h2 className='text-xl font-bold text-white tracking-wide leading-tight'>
						READY TO VISIT?
					</h2>
					<Link
						to='/contact'
						aria-label='Plan your visit - Contact page'
						className='gap-3 px-6 py-3 bg-[#009444] hover:bg-[#007a3a] rounded-full text-white inline-flex items-center'
					>
						<span className='text-base font-semibold tracking-wide leading-tight whitespace-nowrap'>
							PLAN YOUR VISIT
						</span>
						<ArrowRightIcon className='w-5 h-5' />
					</Link>
				</div>
			</header>

			{/* Main Content */}
			<div className='relative w-full py-24'>
				<div className='container mx-auto px-8 max-w-7xl'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
						{/* Customer Image */}
						<figure className='order-2 lg:order-1 flex justify-center'>
							<img
								className='w-full max-w-[400px] h-auto object-cover rounded-[20px] shadow-xl'
								alt='Customer testimonial'
								src='/chatgpt-image-aug-22--2025--09-37-50-pm-1-2.png'
							/>
						</figure>

						{/* Testimonial Content */}
						<div className='order-1 lg:order-2 relative'>
							{/* Background Shape */}
							<img
								className='absolute w-full max-w-[890px] h-auto top-0 left-0 opacity-30 z-0'
								alt='Background shape'
								src='/shape14-2-2.svg'
							/>

							<div className='relative z-10 space-y-8'>
								{/* Quote */}
								<div className='relative'>
									<div className='absolute -top-6 -left-6 text-[120px] font-black text-white opacity-20 leading-none'>
										"
									</div>

									<blockquote className='font-TVG-typography-default font-[number:var(--TVG-typography-default-font-weight)] text-white text-[length:var(--TVG-typography-default-font-size)] tracking-[var(--TVG-typography-default-letter-spacing)] leading-[var(--TVG-typography-default-line-height)] [font-style:var(--TVG-typography-default-font-style)] relative z-10 pl-12'>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Suspendisse tortor erat, pretium et mattis quis, ultrices
										eget velit. Vivamus sit amet egestas justo. Nam sagittis,
										justo vitae sagittis auctor, mi diam laoreet elit, aliquet
										dignissim orci turpis vitae eros. Nulla eget pretium diam,
										vel egestas dui. Ut arcu eros, fermentum sit amet dolor a,
										elementum vehicula purus.
									</blockquote>
								</div>

								{/* Attribution */}
								<div className='font-TVG-typography-tagline font-[number:var(--TVG-typography-tagline-font-weight)] text-[#7ddb8a] text-[length:var(--TVG-typography-tagline-font-size)] tracking-[var(--TVG-typography-tagline-letter-spacing)] leading-[var(--TVG-typography-tagline-line-height)] [font-style:var(--TVG-typography-tagline-font-style)] pl-12'>
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
