// src/screens/PlayPage/Sections/GolfzonInfoSection.jsx
// Golfzon information section with concise messaging and real Golfzon interface screenshot
// Pixel-perfect recreation matching Figma design with side-by-side layout
// RELEVANT FILES: PlayPage.jsx, styleguide.css, tailwind.config.js, golfzon-screenshot.png

import React from 'react';

export const GolfzonInfoSection = () => {
	return (
		<section className='relative w-full min-h-[540px] bg-[#102121] overflow-hidden'>
			<div className='hidden lg:block'>
				<div className='bg-[#102121] relative w-full h-[600px]'>
					<div className='absolute top-[159px] left-1/2 -translate-x-1/2 w-full max-w-[1200px] px-12'>
						<div className='flex justify-between items-start'>
							<div className='w-[580px]'>
								<h2 className='font-morganite font-black text-[clamp(64px,6vw,80px)] leading-[0.95] tracking-[0.02em] text-white uppercase'>
									What is Golfzon?
								</h2>
								<p className='font-gilroy font-bold text-[18px] leading-[22px] tracking-[0.3px] text-[#7ddb8a] uppercase mt-[8px]'>
									The World’s #1 Golf Simulator For a Reason
								</p>
								<div className='font-gilroy font-normal text-[16px] leading-[24px] tracking-[0.1px] text-[lightgrey] mt-[20px] space-y-4'>
									<p>
										The first time you try Golfzon, it's hard to believe it's
										not the real thing. The visuals are jaw-dropping. The feel
										is unbelievably accurate. And the gameplay is just
										addictive.
									</p>
									<p>
										One swing in, and you'll wonder why you ever settled for
										less.
									</p>
								</div>
								<div className='mt-[24px]'>
									<a
										href='https://widget.servmeco.com/?oid=1662'
										target='_blank'
										rel='noopener noreferrer'
										className='bg-[#009444] hover:bg-[#007a38] transition-colors rounded-[50px] px-[24px] py-[8px] inline-flex items-center gap-2 font-gilroy font-semibold text-[14px] text-white uppercase'
									>
										Book a Bay
										<img
											src='/arrow-right.svg'
											alt='Arrow right'
											className='w-[24px] h-[24px]'
										/>
									</a>
								</div>
							</div>
							<div
								className='w-[550px] h-[300px] rounded-[30px] bg-cover bg-center'
								style={{ backgroundImage: "url('/golfzon-screenshot.png')" }}
							/>
						</div>
					</div>
				</div>
			</div>

			{/* Mobile responsive layout */}
			<div className='block lg:hidden px-4 sm:px-6 py-16'>
				<div className='space-y-8 max-w-[700px] mx-auto text-center'>
					{/* Title */}
					<div>
						<h2 className='font-morganite font-black text-[clamp(32px,8vw,56px)] leading-[1.1] tracking-[0.02em] text-white uppercase mb-3'>
							What is Golfzon?
						</h2>
						<p className='font-gilroy font-bold text-[16px] leading-[20px] tracking-[0.3px] text-[#7ddb8a] uppercase'>
							The World's #1 Golf Simulator For a Reason
						</p>
					</div>

					{/* Mobile image */}
					<div className='w-full'>
						<img
							src='/golfzon-screenshot.png'
							alt='Golfzon Interface Screenshot'
							className='w-full aspect-[16/9] object-cover rounded-[20px] shadow-xl'
						/>
					</div>

					{/* Mobile description */}
					<div className='space-y-4 px-4'>
						<p className='font-gilroy font-normal text-[14px] leading-[22px] tracking-[0.1px] text-[lightgrey]'>
							The first time you try Golfzon, it's hard to believe it's not the
							real thing. The visuals are jaw-dropping. The feel is unbelievably
							accurate. And the gameplay is just addictive.
						</p>
						<p className='font-gilroy font-normal text-[14px] leading-[22px] tracking-[0.1px] text-[lightgrey]'>
							One swing in, and you'll wonder why you ever settled for less.
						</p>
					</div>

					{/* Mobile CTA Button */}
					<div className='pt-4'>
						<a
							href='https://widget.servmeco.com/?oid=1662'
							target='_blank'
							rel='noopener noreferrer'
							className='bg-[#009444] hover:bg-[#007a38] transition-colors rounded-[50px] px-[24px] py-[8px] inline-flex items-center gap-2 mx-auto'
						>
							<span className='font-gilroy font-semibold text-[14px] leading-[16px] tracking-[0.5px] text-white uppercase'>
								Book a Bay
							</span>
							<div className='w-5 h-5'>
								<img
									src='/arrow-right-figma.svg'
									alt='Arrow right'
									className='w-full h-full object-contain'
								/>
							</div>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};
