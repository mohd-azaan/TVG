import React from 'react';

export const HeroSection = () => {
	return (
		<section className='relative w-full h-screen overflow-x-hidden'>
			{/* Background image */}
			<div
				className='absolute inset-0 bg-cover bg-right-top bg-no-repeat transform-gpu scale-[1.02] lg:scale-[1.0]'
				style={{ backgroundImage: 'url(/hero.png)' }}
			/>

			{/* Dark gradient overlay to improve text contrast (left-heavy) */}
			<div className='absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.55)_30%,rgba(0,0,0,0.2)_60%,rgba(0,0,0,0)_100%)]' />

			{/* Main content wrapper */}
			<div className='relative max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10'>
				{/* spacer to account for nav overlap */}
				<div className='h-20' />

				{/* Left column: stacked headline + paragraph */}
				<div className='relative z-40 mt-[10vh] lg:ml-[12vw] md:ml-[8vw] max-w-[520px] lg:max-w-[560px]'>
					<p className="[font-family:'Morganite',Helvetica] font-bold text-[26px] sm:text-[34px] lg:text-[41px]  text-white">
						<span className='text-white tracking-[0.03em]'>WELCOME TO </span>
						<span className='text-[#00a14a] tracking-[0.03em]'>
							THE VIRTUAL GREENS
						</span>
					</p>
					<h1 className='mt-2 text-white font-morganite font-black text-[clamp(72px,8vw,112px)] leading-[0.90] tracking-[0.02em] lg:tracking-[0.03em]'>
						WHERE GOLF
						<br />
						JUST GOT AN
						<br />
						UPGRADE
					</h1>

					<p className='mt-2 text-[#d8d8d8] text-[19px] leading-6 lg:max-w-[405px] md:max-w-[320px] sm:max-w-[300px] font-TVG-typography-hero-text font-[number:var(--TVG-typography-hero-text-font-weight)]'>
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
