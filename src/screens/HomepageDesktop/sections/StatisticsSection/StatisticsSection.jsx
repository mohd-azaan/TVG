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
			<div className='relative max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10'>
				{/* Background Shape */}
				<img
					className='absolute w-full  h-[430px] top-[210px] left-[-690px] opacity-100 z-0'
					alt='Background shape'
					src='/shape14-2.svg'
					loading='lazy'
					decoding='async'
				/>

				{/* Header */}
				<div className='relative z-10 text-center mb-20 mt-[-20px]'>
					<h2 className='text-white font-morganite font-bold text-[clamp(38px,5.2vw,78px)] leading-[0.92] tracking-[0.02em] mb-6'>
						BY THE NUMBERS
					</h2>
					<p className='text-[18px] sm:text-[14px] lg:text-[16px] font-bold text-[#7ddb8a] leading-tight tracking-wide -mt-5'>
						BECAUSE STATS MATTER, EVEN OFF THE COURSE
					</p>
				</div>

				{/* Statistics Grid */}
				<div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-6 xl:gap-8 relative z-10 justify-items-center max-w-5xl mx-auto'>
					{statisticsData.map((stat, index) => (
						<div
							key={index}
							className='flex flex-col items-center justify-center gap-3 text-center w-full'
						>
							{/* Number with symbols */}
							<div className='flex items-center justify-center font-morganite font-bold text-[#8df0a0] text-[85px]'>
								{/* Prefix symbol (≈) */}
								{stat.hasPrefix && (
									<span className='font-morganite font-bold text-[60px]'>
										{stat.hasPrefix}
									</span>
								)}

								{/* Main number */}
								<span>{stat.number}</span>
								{/* Plus symbol */}
								{stat.hasPlus && (
									<span className='font-morganite font-bold text-[60px] relative top-2'>
										+
									</span>
								)}

								{/* Suffix (K) */}
								{stat.hasSuffix && (
									<span className='font-morganite font-bold text-[52px] left-2 relative top-2'>
										{stat.hasSuffix}
									</span>
								)}
							</div>

							{/* Description text */}
							<div className='font-gilroy font-bold text-white text-[15px] text-center leading-tight whitespace-nowrap'>
								{stat.text}
							</div>
						</div>
					))}
				</div>

				{/* Saudi Riyal Symbol */}
				<img
					className='absolute w-10 h-10 top-[215px] right-[350px] z-10'
					alt='Saudi riyal symbol'
					src='/saudi-riyal-symbol-2-1-1.svg'
					loading='lazy'
					decoding='async'
					width='24'
					height='24'
				/>
			</div>
		</section>
	);
};
