// C:\Users\Syeds\Desktop\TVG\src\components\global\TestimonialsSection.jsx
// Global testimonials section component that displays customer testimonial with quote and ambassador image
// This section is used in the MainLayout and appears at the bottom of all pages
// RELEVANT FILES: MainLayout.jsx, App.jsx, HomepageDesktop.jsx, TestimonialsSection.jsx

import React from 'react';

// Define image constants - these will be replaced with actual Figma assets
const ambassadorImage = '/chatgpt-image-aug-22--2025--09-37-50-pm-1-2.png';

// Figma background asset constants (temporary placeholders)
const arrowRightWhite = '/arrow-right-white.svg';  // White arrow SVG
const backgroundLayer1 = '/shape14-layer1.svg';     // Main background layer
const backgroundVector1 = '/shape14-vector1.svg';   // First rotated vector
const backgroundVector2 = '/shape14-vector2.svg';   // Second rotated vector
const backgroundVector3 = '/shape14-vector3.svg';   // Third background vector

export const TestimonialsSection = () => {
	return (
		<div className='bg-[#102121] relative w-full h-auto' data-name='Testimonials 2'>
			{/* Main container with fixed dimensions for desktop, responsive for mobile */}
			<div className='relative w-full min-h-[600px] lg:min-h-[700px] xl:min-h-[800px]'>
				{/* Complex layered background elements matching Figma exactly */}
				<div className='absolute h-[1080px] left-[-1030px] lg:left-[-600px] xl:left-[-1030px] overflow-hidden top-[127px] w-[1920px]' data-name='Shape14 2'>
					{/* Main background layer group */}
					<div className='absolute inset-[33.68%_-0.3%_13.63%_6.06%]' data-name='Background Group'>
						{/* Layer 1 - Primary background with blend mode */}
						<div className='absolute inset-[33.68%_-0.3%_13.63%_6.06%] mix-blend-screen' data-name='Layer 1'>
							<div className='absolute inset-[33.68%_-0.3%_13.63%_6.06%] mix-blend-screen'>
								<img
									alt='Background layer 1'
									className='block max-w-none w-full h-full object-cover'
									src={backgroundLayer1}
								/>
							</div>
						</div>

						{/* Rotated vector elements group */}
						<div className='absolute inset-[44.32%_32.92%_37.84%_31.87%]' data-name='Rotated Vectors Group'>
							{/* First rotated vector - 272.33deg rotation */}
							<div className='absolute flex inset-[44.32%_32.92%_37.84%_31.87%] items-center justify-center mix-blend-screen'>
								<div className='flex-none h-[669.74px] w-[165.5px]' style={{ transform: 'rotate(272.33deg)' }}>
									<div className='relative w-full h-full'>
										<img
											alt='Rotated vector 1'
											className='block max-w-none w-full h-full object-cover'
											src={backgroundVector1}
										/>
									</div>
								</div>
							</div>

							{/* Second rotated vector - 272.33deg rotation */}
							<div className='absolute flex inset-[46.84%_39.17%_40.37%_38.12%] items-center justify-center mix-blend-screen'>
								<div className='flex-none h-[431.6px] w-[120.66px]' style={{ transform: 'rotate(272.33deg)' }}>
									<div className='relative w-full h-full'>
										<img
											alt='Rotated vector 2'
											className='block max-w-none w-full h-full object-cover'
											src={backgroundVector2}
										/>
									</div>
								</div>
							</div>
						</div>

						{/* Third background vector */}
						<div className='absolute inset-[41.71%_15.3%_20.41%_20.79%]' data-name='Vector 3'>
							<img
								alt='Background vector 3'
								className='block max-w-none w-full h-full object-cover'
								src={backgroundVector3}
							/>
						</div>
					</div>
				</div>

				{/* Quote section positioned absolutely */}
				<div className='absolute h-[314px] leading-[0] left-[50px] sm:left-[200px] lg:left-[400px] xl:left-[614px] not-italic text-white top-[100px] sm:top-[120px] lg:top-[135px] xl:top-[155px] w-[calc(100%-100px)] sm:w-[600px] lg:w-[700px] xl:w-[780px]'>
					{/* Attribution */}
					<div className='absolute font-TVG-typography-default font-[number:var(--TVG-typography-default-font-weight)] left-[200px] sm:left-[400px] lg:left-[500px] xl:left-[611px] text-[18px] sm:text-[length:var(--TVG-typography-default-font-size)] text-nowrap top-[250px] sm:top-[270px] lg:top-[284px] xl:top-[294px] [font-style:var(--TVG-typography-default-font-style)]'>
						<p className='leading-[28px] whitespace-pre'>Ambassador, John Doe</p>
					</div>

					{/* Main testimonial text */}
					<div className='absolute font-TVG-typography-default font-[number:var(--TVG-typography-default-font-weight)] left-[20px] sm:left-[40px] lg:left-[60px] xl:left-[75px] text-[20px] sm:text-[22px] lg:text-[24px] xl:text-[26px] top-[30px] sm:top-[35px] lg:top-[40px] xl:top-[43px] w-[calc(100%-40px)] sm:w-[500px] lg:w-[650px] xl:w-[750px] [font-style:var(--TVG-typography-default-font-style)]'>
						<p className='leading-normal whitespace-pre-wrap'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tortor erat, pretium et mattis quis, ultrices eget velit. Vivamus sit amet egestas justo. Nam sagittis, justo vitae sagittis auctor, mi diam laoreet elit, aliquet dignissim orci turpis vitae eros. Nulla eget pretium diam, vel egestas dui. Ut arcu eros, fermentum sit amet dolor a, elementum vehicula purus.
						</p>
					</div>

					{/* Large quotation mark - Using Morganite font */}
					<div className='absolute font-morganite left-[-15px] sm:left-[-20px] lg:left-[-25px] text-[180px] sm:text-[200px] lg:text-[220px] xl:text-[240px] text-nowrap top-[3px] sm:top-[8px] lg:top-[10px] xl:top-[13px] tracking-[4.8px] font-black'>
						<p className='leading-normal whitespace-pre'>"</p>
					</div>
				</div>

				{/* Ambassador image positioned absolutely */}
				<div className='absolute box-border content-stretch flex flex-col gap-2.5 items-start justify-start left-[20px] sm:left-[80px] lg:left-[180px] xl:left-[280px] px-1 py-0 top-[120px] sm:top-[130px] lg:top-[140px] xl:top-[152px]'>
					<div className='bg-center bg-cover bg-no-repeat h-[280px] sm:h-[320px] lg:h-[360px] xl:h-[394px] w-[200px] sm:w-[220px] lg:w-[240px] xl:w-[263px] rounded-[20px] shadow-xl'
					     style={{ backgroundImage: `url('${ambassadorImage}')` }}
					/>
				</div>

				{/* Header bar - Ready to Visit */}
				<div className='absolute bg-[#0c1a1a] h-20 left-0 top-0 w-full'>
					{/* CTA Button positioned absolutely */}
					<div className='absolute bg-[#009444] box-border content-stretch flex gap-2.5 items-center justify-center left-[50%] sm:left-[60%] lg:left-[70%] xl:left-[980px] overflow-hidden px-[30px] py-[7px] rounded-[50px] top-1/2 translate-y-[-50%] translate-x-[-50%] xl:translate-x-0 hover:bg-[#007a3a] transition-colors duration-200 cursor-pointer'>
						<div className='flex flex-col font-TVG-typography-button font-[number:var(--TVG-typography-button-font-weight)] justify-center leading-[0] not-italic relative text-[16px] sm:text-[length:var(--TVG-typography-button-font-size)] text-center text-nowrap text-white uppercase [font-style:var(--TVG-typography-button-font-style)]'>
							<p className='leading-[32px] sm:leading-[var(--TVG-typography-button-line-height)] whitespace-pre'>PLAN YOUR VISIT</p>
						</div>
						<div className='overflow-hidden relative w-5 h-5 sm:w-6 sm:h-6'>
							<div className='absolute inset-[20.833%]' data-name='Arrow Icon'>
								<div className='absolute inset-[-8.929%]'>
									<img
										alt='Arrow right'
										className='block max-w-none w-full h-full'
										src={arrowRightWhite}
									/>
								</div>
							</div>
						</div>
					</div>

					{/* Ready to Visit text centered */}
					<div className='absolute font-TVG-typography-h5 font-[number:var(--TVG-typography-h5-font-weight)] leading-[0] left-[50%] translate-x-[-50%] not-italic text-[24px] sm:text-[26px] lg:text-[28px] text-nowrap text-white uppercase top-[50%] translate-y-[-50%] [font-style:var(--TVG-typography-h5-font-style)]'>
						<p className='leading-normal whitespace-pre'>READY TO VISIT?</p>
					</div>
				</div>
			</div>

			{/* Green bottom border */}
			<div aria-hidden='true' className='absolute border-[#009444] border-[0px_0px_70px] border-solid inset-0 pointer-events-none' />
		</div>
	);
};
