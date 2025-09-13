import React from 'react';
import { Button } from '../../../../components/ui/button';
import { Card, CardContent } from '../../../../components/ui/card';

const steps = [
	{
		number: '01',
		title: 'GATHER YOUR CREW',
		description:
			"Big crew? Solo mission? You can book your bay online in seconds, or just walk in and we'll slot you right in. Either way, you're one swing closer to a good time.",
		icon: '/crew.svg',
		bgClass: 'bg-[#0c1a1a]',
		textClass: 'text-white',
		descriptionClass: 'text-[#d1d3d4d9]',
	},
	{
		number: '02',
		title: 'CHECK IN & CHILL',
		description:
			'Head to the front desk, where our team will match you with the right bay for your vibe. Then? Grab a drink, scan the menu, and settle in.',
		icon: '/check-in.svg',
		bgClass: 'bg-gradient-to-br from-[#7ddb8a] to-[#24cebd]',
		textClass: 'text-black',
		descriptionClass: 'text-black',
	},
	{
		number: '03',
		title: 'PICK YOUR GAME',
		description:
			"Once you're in, your bay host will set you up with player profiles and a quick tech walkthrough. Choose a world-famous course, a short practice session, a wild mini game, or all three. No rules here!",
		icon: '/game.svg',
		bgClass: 'bg-[#0c1a1a]',
		textClass: 'text-white',
		descriptionClass: 'text-[#d1d3d4d9]',
	},
	{
		number: '04',
		title: 'SMASH IT',
		description:
			'Use your own clubs or ours. The balls self-tee, self-feed, and self-track! The system tracks speed, angle, distance, and all the works. Oh, and you can order food and drinks straight from your bay.',
		icon: '/smash-it.svg',
		bgClass: 'bg-[#0c1a1a]',
		textClass: 'text-white',
		descriptionClass: 'text-[#d1d3d4d9]',
	},
];

export const HowItWorksSection = () => {
	return (
		<section className='w-full bg-[#102121] py-16 sm:py-20 lg:py-24 relative overflow-hidden'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative'>
				{/* Background Shape - positioned bottom right (smaller, behind content) */}
				<img
					className='absolute pointer-events-none right-[-200px] md:right-[-300px] lg:right-[-400px] xl:right-[-400px] bottom-[-300px] md:bottom-[-400px] lg:bottom-[-500px] z-0 opacity-100 w-[300px] sm:w-[420px] md:w-[560px] lg:w-[800px] xl:w-[1080px] translate-x-3 md:translate-x-6 translate-y-4 md:translate-y-8'
					alt='Background shape'
					src='/shape14-3.svg'
					aria-hidden='true'
				/>

				<div className='relative z-10'>
					{/* Header (two-column on large screens) */}
					<header className='mb-12 sm:mb-16 lg:mb-20'>
						<div className='grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-8 xl:gap-6 items-start'>
							{/* Left column: heading, CTA, copy */}
							<div className='xl:col-span-6'>
								<div className='max-w-4xl xl:max-w-none mx-auto xl:mx-0 text-center xl:text-left'>
									<div className='text-lg sm:text-xl lg:text-[22px] font-bold text-[#7ddb8a] leading-relaxed tracking-wide mb-4 sm:mb-6'>
										NEW TO INDOOR GOLF?
									</div>

									<h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[70px] 2xl:text-[80px] font-black text-white leading-tight sm:leading-[0.9] lg:leading-[90px] tracking-wide mb-6 sm:mb-8'>
										HERE'S HOW IT WORKS
									</h2>
								</div>

								<div className='flex justify-center xl:justify-start mb-6 sm:mb-8'>
									<Button className='inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#009444] rounded-full h-auto hover:bg-[#007a3a] transition-colors duration-200 text-lg font-semibold tracking-wide'>
										<span className='text-white'>BOOK A BAY</span>
										<img
											className='w-5 h-5'
											alt='Arrow right'
											src='/arrow-right.svg'
										/>
									</Button>
								</div>

								<div className='max-w-4xl xl:max-w-none mx-auto xl:mx-0 text-center xl:text-left'>
									<p className='text-base sm:text-lg lg:text-xl font-medium text-[#d3d3d3] leading-relaxed'>
										We're here to make indoor golf your new favorite thing. No
										gear? No clue? No problem. We're beginner-friendly and
										tech-savvy, so that anyone can jump right in.
										<br />
										<br />
										Ready to roll? Here's the game plan:
									</p>
								</div>
							</div>

							{/* Right column: video/illustration placeholder */}
							<div className='xl:col-span-6 flex justify-center xl:justify-end mt-8 xl:mt-0'>
								<div className='w-full max-w-[520px] h-[220px] sm:h-[260px] md:h-[300px] lg:h-[320px] xl:h-[280px] 2xl:h-[320px] bg-[#081313] rounded-[20px] shadow-inner border border-transparent flex items-center justify-center'>
									{/* Placeholder box - can be replaced with video or image */}
									<div className='w-[92%] h-[84%] bg-[#071212] rounded-[16px] border border-[#071f1e]'></div>
								</div>
							</div>
						</div>
					</header>

					{/* Steps Grid */}
					<div className='grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 2xl:gap-28 max-w-7xl mx-auto relative'>
						{steps.map((step, index) => (
							<div key={step.number} className='relative'>
								{/* Large step number placed to the left, behind the top of the card */}
								<div
									className={`absolute font-black left-[-40px] sm:left-[-60px] md:left-[-50px] lg:left-[-20px] xl:left-[10px] text-[60px] sm:text-[72px] md:text-[70px] lg:text-[75px] xl:text-[80px] 2xl:text-[80px] tracking-wide leading-tight whitespace-nowrap pointer-events-none select-none z-0 -top-[20px] sm:-top-[28px] md:-top-[25px] lg:-top-[50px] xl:-top-[70px]`}
									style={{
										fontFamily: 'Inter, Helvetica, sans-serif',
										color: 'rgba(255,255,255,0.08)',
									}}
									aria-hidden='true'
								>
									{step.number}
								</div>

								<Card
									className={`${step.bgClass} rounded-[24px] border-0 min-h-[160px] sm:min-h-[180px] md:min-h-[200px] lg:min-h-[220px] xl:min-h-[240px] relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 z-10`}
								>
									<CardContent className='p-0 h-full relative z-20'>
										<div className='absolute top-8 sm:top-10 md:top-12 left-6 sm:left-8 max-w-[280px] sm:max-w-[320px] md:max-w-[300px] lg:max-w-[380px] xl:max-w-[440px] pr-8 sm:pr-10 md:pr-12 lg:pr-14 xl:pr-16'>
											<h3
												className={`font-bold ${step.textClass} text-base sm:text-lg md:text-xl lg:text-[22px] xl:text-[24px] leading-tight mb-2 sm:mb-3 md:mb-4`}
												style={{ fontFamily: 'Inter, Helvetica, sans-serif' }}
											>
												{step.title}
											</h3>

											<p
												className={`text-xs sm:text-sm md:text-base lg:text-base font-medium ${step.descriptionClass} leading-relaxed`}
											>
												{step.description}
											</p>
										</div>

										<img
											className='absolute w-10 sm:w-12 md:w-14 lg:w-16 h-10 sm:h-12 md:h-14 lg:h-16 top-12 sm:top-14 md:top-16 right-6 sm:right-8 group-hover:scale-110 transition-transform duration-300'
											alt={step.title}
											src={step.icon}
										/>
									</CardContent>
								</Card>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
