import React from 'react';

export const HeroSection = () => {
	return (
		<section className='relative w-full h-[100vh]'>
			{/* Background image */}
			<div
				className='absolute inset-0 bg-cover bg-center bg-no-repeat'
				style={{ backgroundImage: 'url(/hero.png)' }}
			/>

			{/* Dark gradient overlay to improve text contrast (left-heavy) */}
			<div className='absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.55)_30%,rgba(0,0,0,0.2)_60%,rgba(0,0,0,0)_100%)]' />

			{/* Main content wrapper */}
			<div className='relative max-w-[1920px] mx-auto h-full px-4 sm:px-6 lg:px-10'>
				{/* spacer to account for nav overlap */}
				<div className='h-20' />

				{/* Left column: stacked headline + paragraph */}
				<div className='relative z-40 mt-[15vh] lg:ml-[15vw] md:ml-[10vw] max-w-[560px]'>
					<p className="[font-family:'Morganite',Helvetica] font-bold text-[32px] sm:text-[42px] lg:text-[55px] tracking-[1.10px] leading-[1.1] text-white">
						<span className='text-white tracking-[0.61px]'>WELCOME TO </span>
						<span className='text-[#00a14a] tracking-[0.61px]'>
							THE VIRTUAL GREENS
						</span>
					</p>

					<h1 className="mt-6 text-white font-[900] text-[clamp(110px,12vw,160px)] leading-[0.95] [font-family:'Morganite',Helvetica]">
						WHERE GOLF
						<br />
						JUST GOT AN
						<br />
						UPGRADE
					</h1>

					<p className='mt-6 text-[#dedede] text-[18px] leading-7 lg:max-w-[535px] md:max-w-[500px] sm:max-w-[400px] font-TVG-typography-hero-text'>
						Riyadh&apos;s first indoor golf simulator lounge isn&apos;t just
						about perfecting your swing. It&apos;s your new go-to for play,
						practice, party, and everything in between. We&apos;ve blended
						pro-level tech with chill lounge vibes to give you the best of both
						worlds.
					</p>
				</div>
			</div>
		</section>
	);
};
