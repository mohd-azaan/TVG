import React from 'react';
import freepikBackground817021 from 'img395.jpg';
import shape142 from './shape14-2.svg';

export const Hero = () => {
	return (
		<section className='w-[1920px] h-[1024px] bg-[linear-gradient(0deg,rgba(16,33,33,1)_0%,rgba(16,33,33,1)_100%),linear-gradient(0deg,rgba(39,39,39,1)_0%,rgba(39,39,39,1)_100%)]'>
			<div className='relative h-[718px] top-[306px]'>
				<div className='absolute w-[1920px] h-[435px] top-[283px] left-0 bg-[#006f33]' />

				<img
					className='absolute w-[1578px] h-[592px] top-[126px] left-[342px]'
					alt='Decorative shape element'
					src={shape142}
				/>

				<div
					className='inline-flex items-center gap-2.5 absolute top-[313px] left-[280px] w-[655px] h-[351px] mt-[-4.00px] font-TVG-typography-hero-text font-[number:var(--TVG-typography-hero-text-font-weight)] text-[#dedede] text-[length:var(--TVG-typography-hero-text-font-size)] tracking-[var(--TVG-typography-hero-text-letter-spacing)] leading-[var(--TVG-typography-hero-text-line-height)] [font-style:var(--TVG-typography-hero-text-font-style)] p-0'
					role='text'
					aria-label='Hero description text'
				>
					Step into a place built for people who live the game, not just play
					it. Our advanced simulator technology recreates the world's greatest
					courses in precise detail. You'll get the analytics you need, the
					challenges you crave, and a community that speaks your language.
					<br />
					<br />
					Improve your swing, hang with friends, or host a private event in The
					Virtual Greens. We're building a community of modern golfers, casual
					players, and anyone looking for a better way to spend their time in
					Riyadh.
				</div>

				<h1 className='absolute w-[655px] top-0 left-[280px] font-TVG-typography-hero-title font-[number:var(--TVG-typography-hero-title-font-weight)] text-white text-[length:var(--TVG-typography-hero-title-font-size)] tracking-[var(--TVG-typography-hero-title-letter-spacing)] leading-[var(--TVG-typography-hero-title-line-height)] [font-style:var(--TVG-typography-hero-title-font-style)]'>
					WHERE GOLF PEOPLE BELONG
				</h1>

				<img
					className='absolute w-[650px] h-[503px] top-px left-[990px] aspect-[1.29] object-cover'
					alt='Golf players in virtual greens environment'
					src={freepikBackground817021}
				/>
			</div>
		</section>
	);
};
