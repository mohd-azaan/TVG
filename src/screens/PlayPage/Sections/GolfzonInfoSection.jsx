// src/screens/PlayPage/Sections/GolfzonInfoSection.jsx
// Golfzon information section with concise messaging and real Golfzon interface screenshot
// Pixel-perfect recreation matching Figma design with side-by-side layout
// RELEVANT FILES: PlayPage.jsx, styleguide.css, tailwind.config.js, golfzon-screenshot.png

import React from 'react';

export const GolfzonInfoSection = () => {
	return (
		<section className='relative w-full min-h-[600px] bg-[#102121] overflow-hidden'>
<div className='hidden lg:block'>
                <div className="bg-[#102121] relative w-full h-[686px]">
                    <div className="absolute top-[159px] left-1/2 -translate-x-1/2 w-full max-w-[1360px] px-5">
                        <div className="flex justify-between items-start">
                            <div className="w-[655px]">
                                <h2 className="font-TVG-typography-h2 font-[800] text-[96px] leading-[90px] tracking-[1.92px] text-white uppercase">
                                    What is Golfzon?
                                </h2>
                                <p className="font-TVG-typography-tagline font-[700] text-[22px] leading-[26px] tracking-[0.44px] text-[#7ddb8a] uppercase mt-[10px]">
                                    The World’s #1 Golf Simulator For a Reason
                                </p>
                                <div className="font-TVG-typography-default font-[500] text-[20px] leading-[28px] text-[lightgrey] mt-[20px]">
                                    <p className="mb-0">The first time you try Golfzon, it’s hard to believe it’s not the real thing. The visuals are jaw-dropping. The feel is unbelievably accurate. And the gameplay is just addictive.</p>
                                    <p className="mb-0">&nbsp;</p>
                                    <p>One swing in, and you’ll wonder why you ever settled for less.</p>
                                </div>
                                <div className="mt-[40px]">
                                    <button className="bg-[#009444] rounded-[50px] px-[30px] py-[7px] flex items-center gap-[10px] font-TVG-typography-button font-[600] text-[18px] text-white uppercase leading-[40px]">
                                        Book a Bay
                                        <img src="/arrow-right.svg" alt="Arrow right" className="w-[24px] h-[24px]" />
                                    </button>
                                </div>
                            </div>
                            <div className="w-[655px] h-[368px] rounded-[30px] bg-cover bg-center" style={{ backgroundImage: "url('/golfzon-screenshot.png')" }} />
                        </div>
                    </div>
                </div>
			</div>

			{/* Mobile responsive layout */}
			<div className='block lg:hidden px-4 sm:px-6 py-16'>
				<div className='space-y-8 max-w-[600px] mx-auto text-center'>
					{/* Title */}
					<div>
						<h2 className='font-TVG-typography-h1 font-[800] text-[clamp(40px,10vw,72px)] leading-[1.1] tracking-[1.2px] text-white uppercase mb-4'>
							What is Golfzon?
						</h2>
						<p className='font-TVG-typography-tagline font-[number:var(--TVG-typography-tagline-font-weight)] text-[18px] leading-[22px] tracking-[0.3px] text-[#7ddb8a] uppercase'>
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
					<div className='space-y-4'>
						<p className='font-TVG-typography-default font-[number:var(--TVG-typography-default-font-weight)] text-[18px] leading-[26px] text-[lightgrey]'>
							The first time you try Golfzon, it's hard to believe it's not the real thing. The visuals are jaw-dropping. The feel is unbelievably accurate. And the gameplay is just addictive.
						</p>
						<p className='font-TVG-typography-default font-[number:var(--TVG-typography-default-font-weight)] text-[18px] leading-[26px] text-[lightgrey]'>
							One swing in, and you'll wonder why you ever settled for less.
						</p>
					</div>

					{/* Mobile CTA Button */}
					<div className='pt-4'>
						<button className='bg-[#009444] hover:bg-[#007a38] transition-colors rounded-[50px] px-[24px] py-[10px] flex items-center gap-2 mx-auto'>
							<span className='font-TVG-typography-button font-[number:var(--TVG-typography-button-font-weight)] text-[16px] leading-[20px] text-white uppercase'>
								Book a Bay
							</span>
							<div className='w-5 h-5'>
								<img
									src='/arrow-right-figma.svg'
									alt='Arrow right'
									className='w-full h-full object-contain'
								/>
							</div>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};