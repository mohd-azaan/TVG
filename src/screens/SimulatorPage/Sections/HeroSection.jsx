// src/screens/SimulatorPage/Sections/HeroSection.jsx
// Hero section for simulator page with green background and main heading
// This section displays the "BRING THE COURSE TO YOUR SPACE" messaging with simulator image
// RELEVANT FILES: SimulatorPage.jsx, styleguide.css, tailwind.config.js, HeroSection styles

import React from 'react';

export const HeroSection = () => {
	return (
		<section className='relative w-full bg-[#009444] overflow-hidden'>
			{/* Spacer to account for nav overlap */}
			<div className='h-20' />

			<div className='relative max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-24'>
				<div className='grid lg:grid-cols-2 gap-8 lg:gap-16 items-center'>
					{/* Left column: Text content */}
					<div className='text-white space-y-6 lg:space-y-8'>
						<h1 className="font-['Morganite',Helvetica] font-bold text-[48px] sm:text-[64px] lg:text-[80px] xl:text-[96px] leading-[0.9] tracking-[-2px]">
							BRING THE COURSE TO YOUR SPACE
						</h1>

						<p className='text-[18px] sm:text-[20px] leading-[1.6] text-white/90 max-w-[580px] font-TVG-typography-hero-text'>
							Experience the most advanced golf simulation technology in the comfort of your own space. Our premium simulators bring world-class golf courses directly to you.
						</p>

						<div className='flex flex-col sm:flex-row gap-4 pt-4'>
							<button className='bg-white text-[#009444] px-8 py-4 rounded-full font-semibold text-[16px] hover:bg-gray-100 transition-colors duration-200 font-TVG-typography-button'>
								GET STARTED
							</button>
							<button className='border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-[16px] hover:bg-white/10 transition-colors duration-200 font-TVG-typography-button'>
								LEARN MORE
							</button>
						</div>
					</div>

					{/* Right column: Simulator image */}
					<div className='relative'>
						<div className='aspect-[4/3] w-full max-w-[600px] mx-auto'>
							{/* Simulator setup image placeholder - will need actual image */}
							<div className='w-full h-full bg-white/10 rounded-2xl flex items-center justify-center'>
								<div className='text-white/60 text-center'>
									<div className='w-24 h-24 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center'>
										<svg className='w-12 h-12' fill='currentColor' viewBox='0 0 24 24'>
											<path d='M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7.5V9M15 10.5V19L13.5 17.5V10.5M10.5 12V19L9 17.5V12M4 9V7H2V9H4ZM6 7.5H2V9.5H6V7.5Z'/>
										</svg>
									</div>
									<p className='text-sm'>Simulator Setup Image</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};