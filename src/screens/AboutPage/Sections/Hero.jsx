import React from 'react';

export const Hero = () => {
	return (
		<section className='relative w-full h-[100vh] overflow-hidden'>
			{/* Background Gradient */}
			<div className='absolute inset-0 bg-[linear-gradient(180deg,#006B4F_0%,#004A37_100%)]' />

			{/* Background Shape */}
			<img
				className='absolute w-full max-w-[1578px] h-auto top-[20%] left-[18%] opacity-50 z-0'
				alt='Decorative shape element'
				src='/shape14-2.svg'
			/>

			{/* Main Content Container */}
			<div className='relative max-w-[1920px] mx-auto h-full px-4 sm:px-6 lg:px-10 z-10'>
				{/* Navigation Spacer */}
				<div className='h-20' />

				{/* Content Grid */}
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center h-[calc(100vh-80px)]'>
					{/* Left Content */}
					<div className='space-y-8 lg:ml-[15vw] max-w-[655px]'>
						{/* Main Title */}
						<h1 className='font-TVG-typography-hero-title font-[number:var(--TVG-typography-hero-title-font-weight)] text-white text-[length:var(--TVG-typography-hero-title-font-size)] tracking-[var(--TVG-typography-hero-title-letter-spacing)] leading-[var(--TVG-typography-hero-title-line-height)] [font-style:var(--TVG-typography-hero-title-font-style)]'>
							WHERE GOLF PEOPLE BELONG
						</h1>

						{/* Description Text */}
						<div className='font-TVG-typography-hero-text font-[number:var(--TVG-typography-hero-text-font-weight)] text-[#dedede] text-[length:var(--TVG-typography-hero-text-font-size)] tracking-[var(--TVG-typography-hero-text-letter-spacing)] leading-[var(--TVG-typography-hero-text-line-height)] [font-style:var(--TVG-typography-hero-text-font-style)] space-y-6'>
							<p>
								Step into a place built for people who live the game, not just play it. Our advanced simulator technology recreates the world's greatest courses in precise detail. You'll get the analytics you need, the challenges you crave, and a community that speaks your language.
							</p>
							<p>
								Improve your swing, hang with friends, or host a private event in The Virtual Greens. We're building a community of modern golfers, casual players, and anyone looking for a better way to spend their time in Riyadh.
							</p>
						</div>
					</div>

					{/* Right Image */}
					<div className='flex justify-center lg:justify-end'>
						<img
							className='w-full max-w-[650px] h-auto object-cover rounded-[20px] shadow-xl'
							alt='Golf players in virtual greens environment'
							src='/freepik__background__81702 1.png'
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
