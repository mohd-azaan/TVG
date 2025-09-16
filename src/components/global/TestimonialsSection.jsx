// C:\Users\Syeds\Desktop\TVG\src\components\global\TestimonialsSection.jsx
// Global testimonials section component that displays customer testimonial with quote and ambassador image
// This section is used in the MainLayout and appears at the bottom of all pages
// RELEVANT FILES: MainLayout.jsx, App.jsx, HomepageDesktop.jsx, TestimonialsSection.jsx

import React from 'react';

export const TestimonialsSection = () => {
	return (
		<div className='bg-[#102121] relative w-full' data-name='Testimonials 2'>
			<div className='relative w-full h-[600px] sm:h-[680px] lg:h-[700px]'>
				{/* Complex layered background elements */}
				<div className='absolute h-[800px] left-[-500px] sm:left-[-700px] lg:left-[-1030px] overflow-hidden top-[80px] sm:top-[100px] lg:top-[127px] w-[1200px] sm:w-[1600px] lg:w-[1920px] opacity-30'>
					{/* Main background layer group */}
					<div className='absolute inset-[33.68%_-0.3%_13.63%_6.06%]'>
						{/* Layer 1 - Primary background with blend mode */}
						<div className='absolute inset-[33.68%_-0.3%_13.63%_6.06%] mix-blend-screen'>
							<div className='absolute inset-[33.68%_-0.3%_13.63%_6.06%] mix-blend-screen'>
								<img
									alt='Background layer'
									className='block max-w-none w-full h-full object-cover'
									src='/shape14-2-2.svg'
								/>
							</div>
						</div>

						{/* Rotated vector elements group */}
						<div className='absolute inset-[44.32%_32.92%_37.84%_31.87%]'>
							{/* First rotated vector - 272.33deg rotation */}
							<div className='absolute flex inset-[44.32%_32.92%_37.84%_31.87%] items-center justify-center mix-blend-screen'>
								<div className='flex-none h-[669.74px] w-[165.5px] rotate-[272.33deg]'>
									<div className='relative w-full h-full'>
										<img
											alt='Rotated vector 1'
											className='block max-w-none w-full h-full object-cover'
											src='/shape14-2.svg'
										/>
									</div>
								</div>
							</div>

							{/* Second rotated vector - 272.33deg rotation */}
							<div className='absolute flex inset-[46.84%_39.17%_40.37%_38.12%] items-center justify-center mix-blend-screen'>
								<div className='flex-none h-[431.6px] w-[120.66px] rotate-[272.33deg]'>
									<div className='relative w-full h-full'>
										<img
											alt='Rotated vector 2'
											className='block max-w-none w-full h-full object-cover'
											src='/shape14-3.svg'
										/>
									</div>
								</div>
							</div>
						</div>

						{/* Third background vector */}
						<div className='absolute inset-[41.71%_15.3%_20.41%_20.79%]'>
							<img
								alt='Background vector 3'
								className='block max-w-none w-full h-full object-cover'
								src='/shape14-2.svg'
							/>
						</div>
					</div>
				</div>

				{/* Quote section positioned absolutely */}
				<div className='absolute h-[314px] leading-[0] left-[20px] sm:left-[400px] lg:left-[614px] not-italic text-white top-[100px] sm:top-[130px] lg:top-[155px] w-[calc(100%-40px)] sm:w-[600px] lg:w-[780px] z-20'>
					{/* Attribution */}
					<div className='absolute font-medium left-[200px] sm:left-[400px] lg:left-[611px] text-[18px] sm:text-[19px] lg:text-[20px] text-nowrap top-[250px] sm:top-[270px] lg:top-[294px]' style={{ fontFamily: 'Gilroy-Medium, sans-serif' }}>
						<p className='leading-[28px] whitespace-pre'>Ambassador, John Doe</p>
					</div>

					{/* Main testimonial text */}
					<div className='absolute font-medium left-[20px] sm:left-[60px] lg:left-[75px] text-[20px] sm:text-[24px] lg:text-[26px] top-[30px] sm:top-[40px] lg:top-[43px] w-[calc(100%-40px)] sm:w-[600px] lg:w-[750px]' style={{ fontFamily: 'Gilroy-Medium, sans-serif' }}>
						<p className='leading-normal whitespace-pre-wrap'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tortor erat, pretium et mattis quis, ultrices eget velit. Vivamus sit amet egestas justo. Nam sagittis, justo vitae sagittis auctor, mi diam laoreet elit, aliquet dignissim orci turpis vitae eros. Nulla eget pretium diam, vel egestas dui. Ut arcu eros, fermentum sit amet dolor a, elementum vehicula purus.
						</p>
					</div>

					{/* Large quotation mark - Using Morganite font */}
					<div className='absolute font-black left-[-5px] sm:left-[-20px] lg:left-[-25px] text-[180px] sm:text-[220px] lg:text-[240px] text-nowrap top-[0px] sm:top-[8px] lg:top-[13px] tracking-[4.8px]' style={{ fontFamily: 'Morganite, sans-serif' }}>
						<p className='leading-normal whitespace-pre'>"</p>
					</div>
				</div>

				{/* Ambassador image positioned absolutely */}
				<div className='absolute box-border content-stretch flex flex-col gap-2.5 items-start justify-start left-[20px] sm:left-[150px] lg:left-[280px] px-1 py-0 top-[120px] sm:top-[140px] lg:top-[152px] z-20'>
					<div
						className='bg-center bg-cover bg-no-repeat h-[280px] sm:h-[350px] lg:h-[394px] w-[200px] sm:w-[230px] lg:w-[263px] rounded-[20px] shadow-xl'
						style={{ backgroundImage: "url('/chatgpt-image-aug-22--2025--09-37-50-pm-1-2.png')" }}
					/>
				</div>

				{/* Header bar - Ready to Visit */}
				<div className='absolute bg-[#0c1a1a] h-20 left-0 top-0 w-full z-10'>
					{/* CTA Button positioned absolutely */}
					<div className='absolute bg-[#009444] box-border content-stretch flex gap-2.5 items-center justify-center right-[20px] sm:right-[60px] lg:right-[200px] xl:right-[300px] overflow-hidden px-[30px] py-[7px] rounded-[50px] top-1/2 -translate-y-1/2 hover:bg-[#007a3a] transition-colors duration-200 cursor-pointer'>
						<div className='flex flex-col font-semibold justify-center leading-[0] not-italic relative text-[16px] sm:text-[18px] text-center text-nowrap text-white uppercase' style={{ fontFamily: 'Gilroy-SemiBold, sans-serif' }}>
							<p className='leading-[32px] sm:leading-[40px] whitespace-pre'>Plan Your Visit</p>
						</div>
						<div className='overflow-hidden relative w-5 h-5 sm:w-6 sm:h-6'>
							<img
								alt='Arrow right'
								className='block max-w-none w-full h-full'
								src='/arrow-right.svg'
							/>
						</div>
					</div>

					{/* Ready to Visit text positioned */}
					<div className='absolute font-bold leading-[0] left-[20px] sm:left-[200px] lg:left-[400px] xl:left-[724px] not-italic text-[24px] sm:text-[26px] lg:text-[28px] text-nowrap text-white uppercase top-[50%] -translate-y-1/2' style={{ fontFamily: 'Gilroy-Bold, sans-serif' }}>
						<p className='leading-normal whitespace-pre'>Ready to Visit?</p>
					</div>
				</div>
			</div>

			{/* Green bottom border */}
			<div aria-hidden='true' className='absolute border-[#009444] border-[0px_0px_70px] border-solid inset-0 pointer-events-none' />
		</div>
	);
};
