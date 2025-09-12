import React from 'react';

export const HeroSection = () => {
	return (
		<section className='relative w-full h-screen min-h-[600px] sm:min-h-[700px] lg:min-h-[900px] bg-gradient-to-r from-transparent via-black/40 to-black/85 overflow-hidden'>
			{/* Background Image */}
			<div
				className='absolute inset-0 bg-cover bg-center bg-no-repeat'
				style={{ backgroundImage: 'url(/hero.png)' }}
			/>

			{/* Gradient Overlay */}
			<div className='absolute inset-0 bg-gradient-to-r from-transparent via-black/40 to-black/85' />

			{/* Content */}
			<div className='relative z-10 flex flex-col justify-center h-full px-4 sm:px-6 lg:px-8 xl:pl-[280px] pt-32 sm:pt-36 lg:pt-40'>
				<div className='max-w-4xl'>
					{/* Welcome Text */}
					<div className='mb-4 sm:mb-6 lg:mb-8'>
						<h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[55px] font-medium text-white leading-tight sm:leading-[1.2] lg:leading-[60px] tracking-wide'>
							<span className='text-white'>WELCOME TO </span>
							<span className='text-[#009444]'>THE VIRTUAL GREENS</span>
						</h1>
					</div>

					{/* Main Hero Title */}
					<div className='mb-6 sm:mb-8 lg:mb-12'>
						<h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[148px] font-black text-white leading-tight sm:leading-[0.9] lg:leading-[130px] tracking-[2.96px]'>
							WHERE GOLF
							<br />
							JUST GOT AN
							<br />
							UPGRADE
						</h2>
					</div>

					{/* Description */}
					<div className='max-w-xl lg:max-w-[535px] mb-8 sm:mb-10 lg:mb-12'>
						<p className='text-base sm:text-lg lg:text-xl xl:text-[24px] font-medium text-[#dedede] leading-relaxed sm:leading-[1.4] lg:leading-[1.5]'>
							Riyadh's first indoor golf simulator lounge isn't just about
							perfecting your swing. It's your new go-to for play, practice,
							party, and everything in between. We've blended pro-level tech
							with chill lounge vibes to give you the best of both worlds.
						</p>
					</div>

					{/* CTA Buttons */}
					<div className='flex flex-col sm:flex-row gap-4 sm:gap-6'>
						<button className='px-8 py-4 bg-[#009444] text-white rounded-full font-semibold text-lg hover:bg-[#007a3a] transition-colors duration-200 shadow-lg'>
							BOOK A BAY
						</button>
						<button className='px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-200'>
							PLAN YOUR VISIT
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};
