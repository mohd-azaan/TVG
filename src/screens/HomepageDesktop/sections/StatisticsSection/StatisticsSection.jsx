import React from 'react';

export const StatisticsSection = () => {
	const statisticsData = [
		{
			number: '98',
			text: 'Active Members',
			hasPlus: false,
		},
		{
			number: '200',
			text: 'Clients Served',
			hasPlus: true,
		},
		{
			number: '800',
			text: 'Rounds Played',
			hasPlus: true,
		},
		{
			number: '3500',
			text: 'Simulator Hours Logged',
			hasPlus: true,
		},
		{
			number: '27',
			text: 'Tournaments Hosted',
			hasPlus: false,
		},
		{
			number: '150',
			text: 'In Prizes Distributed',
			hasPlus: false,
			hasSuffix: 'K',
		},
	];

	return (
		<section className='w-full bg-[#102121] py-20 lg:py-32 relative overflow-hidden'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative'>
				{/* Background Shape */}
				<img
					className='absolute w-full  h-[426px] top-60 left-[-860px] opacity-100 z-0'
					alt='Background shape'
					src='/shape14-2.svg'
					loading='lazy'
					decoding='async'
				/>

				{/* Header */}
				<div className='relative z-10 text-center mb-20'>
					<h2 className='font-TVG-typography-h2 font-[number:var(--TVG-typography-h2-font-weight)] text-white text-[length:var(--TVG-typography-h2-font-size)] tracking-[var(--TVG-typography-h2-letter-spacing)] leading-[var(--TVG-typography-h2-line-height)] [font-style:var(--TVG-typography-h2-font-style)] mb-6'>
						BY THE NUMBERS
					</h2>
					<p className='font-TVG-typography-tagline font-[number:var(--TVG-typography-tagline-font-weight)] text-[#7ddb8a] text-[length:var(--TVG-typography-tagline-font-size)] tracking-[var(--TVG-typography-tagline-letter-spacing)] leading-[var(--TVG-typography-tagline-line-height)] [font-style:var(--TVG-typography-tagline-font-style)]'>
						BECAUSE STATS MATTER, EVEN OFF THE COURSE
					</p>
				</div>

				{/* Statistics Grid */}
				<div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 relative z-10 justify-items-center'>
					{statisticsData.map((stat, index) => (
						<div
							key={index}
							className='flex flex-col items-center justify-center gap-4 text-center w-full'
						>
							{/* Number with symbols */}
							<div className='flex items-center justify-center font-TVG-typography-counter-number font-[number:var(--TVG-typography-counter-number-font-weight)] text-[#8df0a0] text-[length:var(--TVG-typography-counter-number-font-size)] tracking-[var(--TVG-typography-counter-number-letter-spacing)] leading-[var(--TVG-typography-counter-number-line-height)] [font-style:var(--TVG-typography-counter-number-font-style)]'>
								{/* Prefix symbol (≈) */}
								{stat.hasPrefix && (
									<span className='font-TVG-typography-counter-symbol font-[number:var(--TVG-typography-counter-symbol-font-weight)] text-[length:var(--TVG-typography-counter-symbol-font-size)] tracking-[var(--TVG-typography-counter-symbol-letter-spacing)] leading-[var(--TVG-typography-counter-symbol-line-height)] [font-style:var(--TVG-typography-counter-symbol-font-style)]'>
										{stat.hasPrefix}
									</span>
								)}

								{/* Main number */}
								<span>{stat.number}</span>

								{/* Plus symbol */}
								{stat.hasPlus && (
									<span className='font-TVG-typography-counter-symbol font-[number:var(--TVG-typography-counter-symbol-font-weight)] text-[length:var(--TVG-typography-counter-symbol-font-size)] tracking-[var(--TVG-typography-counter-symbol-letter-spacing)] leading-[var(--TVG-typography-counter-symbol-line-height)] [font-style:var(--TVG-typography-counter-symbol-font-style)]'>
										+
									</span>
								)}

								{/* Suffix (K) */}
								{stat.hasSuffix && (
									<span className='font-TVG-typography-counter-symbol font-[number:var(--TVG-typography-counter-symbol-font-weight)] text-[length:var(--TVG-typography-counter-symbol-font-size)] tracking-[var(--TVG-typography-counter-symbol-letter-spacing)] leading-[var(--TVG-typography-counter-symbol-line-height)] [font-style:var(--TVG-typography-counter-symbol-font-style)]'>
										{stat.hasSuffix}
									</span>
								)}
							</div>

							{/* Description text */}
							<div className='font-gilroy font-bold text-white text-[17px] text-center leading-tight whitespace-nowrap'>
								{stat.text}
							</div>
						</div>
					))}
				</div>

				{/* Saudi Riyal Symbol */}
				<img
					className='absolute w-12 h-12 top-[248px] right-[155px] z-10'
					alt='Saudi riyal symbol'
					src='/saudi-riyal-symbol-2-1-1.svg'
					loading='lazy'
					decoding='async'
					width='48'
					height='48'
				/>
			</div>
		</section>
	);
};
