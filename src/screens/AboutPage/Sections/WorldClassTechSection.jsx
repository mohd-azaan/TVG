import React from 'react';

// Rewritten to use a single, responsive grid layout that prevents content overlap on all screen sizes and zoom levels.

export const WorldClassTechSection = () => {
	return (
		<section className='relative w-full bg-[#102121] py-16 lg:py-24'>
			<div className='relative max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 lg:ml-[12vw] md:ml-[8vw] lg:mr-[12vw] md:mr-[8vw]'>
				{/* Responsive Grid Container */}
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
					{/* Left Column: Text Content (centered on all viewports) */}
					<div className='text-left'>
						<h3 className='font-gilroy font-bold text-[18px] text-[#7ddb8a] uppercase tracking-wide'>
							Powered by
						</h3>
						<h2 className='font-morganite font-black text-white text-[clamp(48px,6vw,64px)] uppercase tracking-wider mt-2 mb-4'>
							World-Class Tech
						</h2>
						<div className='font-gilroy font-medium text-[16px] text-gray-300 space-y-3 max-w-lg leading-normal'>
							<p>
								We use the most advanced system on the market to replicate the
								real-world feel of over 250 legendary courses. It's precise,
								fast, and immersive down to every slope, bounce, and swing. From
								auto-tee to instant shot feedback, it's the closest thing to
								stepping onto a real course. (Minus the sunburn).
							</p>
						</div>
						<div className='mt-6 flex justify-start'>
							<a href='/simulator' className='bg-[#009444] hover:bg-[#7ddb8a] transition-colors rounded-full px-6 py-2.5 flex items-center gap-3 group'>
								<span className='font-gilroy font-medium text-[14px] text-white group-hover:text-black uppercase'>
									Learn About Our Tech
								</span>
								<img
									src='/arrow-right-figma.svg'
									alt='Arrow right'
									className='w-5 h-5 filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0'
								/>
							</a>
						</div>
					</div>

					{/* Right Column: Image */}
					<div className='flex items-center justify-center'>
						<img
							className='w-full max-w-xl h-auto object-cover'
							alt='Indoor golf simulator technology setup'
							src='/indoor-golf-1.png'
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
