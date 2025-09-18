import React from 'react';

const GolfIcon = ({ className = '' }) => (
	<svg
		className={`w-full h-full ${className}`}
		viewBox='0 0 24 24'
		fill='currentColor'
		aria-hidden
	>
		<path d='M12.5,3.5C13.6,3.5 14.5,4.4 14.5,5.5C14.5,6.6 13.6,7.5 12.5,7.5C11.4,7.5 10.5,6.6 10.5,5.5C10.5,4.4 11.4,3.5 12.5,3.5M10.5,8.5H14.5L12.75,11.25L15,13.5V22H13V15L10.5,12.5V22H8.5V8.5Z' />
	</svg>
);

const bayTypes = [
	{
		title: 'Standard Bay',
		location: 'Mezzanine Floor',
		features: [
			'Walk in or book online.',
			'Up to 6 players.',
			'Great for practice or casual games.',
			"Height shouldn't exceed 5'6 ft or 168cm",
			'2x Right handed',
		],
	},
	{
		title: 'Semi-Private Bay',
		location: 'Ground Floor',
		features: [
			'Semi-enclosed for added privacy.',
			'Up to 6 players.',
			'Ideal for birthdays, friend groups, or focused practice.',
			'Food and drinks delivered right to your screen.',
			'1x Right handed & 1x Both handed',
		],
	},
	{
		title: 'VIP Bay',
		location: 'Ground Floor',
		features: [
			'High-end design with luxury seating.',
			'Up to 6 players.',
			'Equipped with swing plate and pro-level data.',
			'Perfect for networking, hosting, or just showing off!',
			'1x Both handed',
			'Fully private suite',
			'Body weight shift sensors in moving plate',
		],
	},
];

const Bays = () => {
	return (
		<section className='relative w-full min-h-[1420px] bg-[#102121] text-[#d1d3d4] overflow-hidden'>
			{/* Decorative shape (replace src with real asset path if available) */}
			<div className='absolute top-[489px] left-[286.86px] opacity-30 pointer-events-none'>
				<div
					className='w-[2208px] h-[1862px] rotate-[332.19deg]'
					style={{
						background: "url('/shape14-2.svg') no-repeat center",
						backgroundSize: 'contain',
						mixBlendMode: 'screen',
					}}
				/>
			</div>

			<div className='relative z-10 max-w-[1920px] mx-auto'>
				<div className='absolute top-[130px] left-1/2 transform -translate-x-1/2 w-[655px] text-center'>
					<h2 className='font-morganite uppercase text-white text-[96px] leading-[90px] tracking-[0.02em] font-extrabold'>
						Choose Your Bay
					</h2>
				</div>

				<div className='absolute top-[220px] left-[626px] w-[655px] text-center'>
					<p className='text-[20px] leading-[28px] text-lightGray'>
						Each bay is powered by Golfzon’s cutting-edge technology, but the
						vibe is up to you. Here’s how to play it
					</p>
				</div>

				<div className='absolute top-[554px] left-[280px] flex gap-[50px]'>
					{bayTypes.map((bay, i) => (
						<div
							key={i}
							className='w-[420px] h-[746px] bg-[#0c1a1a] rounded-[30px] relative overflow-hidden'
						>
							<div className='absolute -top-[241px] left-0 w-[420px] h-[356px] bg-gradient-to-br from-[#006f33] to-[#004a22] rounded-[30px] flex items-center justify-center text-white'>
								<div className='text-center space-y-2'>
									<div className='text-4xl'>🏌️‍♂️</div>
									<div className='text-lg font-semibold'>{bay.title}</div>
									<div className='text-xs opacity-75'>Simulator Bay Image</div>
								</div>
							</div>

							<div className='absolute top-[154px] left-[41px] w-[362px]'>
								<h3 className='uppercase text-white text-[28px] tracking-normal font-semibold'>
									{bay.title}
								</h3>
							</div>

							<div className='absolute top-[187px] left-[41px] w-[362px]'>
								<p className='uppercase text-white text-[18px] opacity-100'>
									{bay.location}
								</p>
							</div>

							<div className='absolute top-[232px] left-[40px] space-y-4 w-[348px]'>
								{bay.features.map((f, idx) => (
									<div key={idx} className='flex items-start gap-[38px]'>
										<div className='w-[30px] h-[30px] text-[#d1d3d4] mt-[2px] flex-shrink-0'>
											<GolfIcon />
										</div>
										<p className='text-[#d1d3d4] text-[20px] leading-[28px]'>
											{f}
										</p>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Mobile layout */}
			<div className='block lg:hidden px-4 sm:px-6 py-16'>
				<div className='space-y-12 max-w-[600px] mx-auto'>
					<div className='text-center space-y-6'>
						<h2 className='uppercase text-white text-[clamp(32px,8vw,96px)] leading-[1.1] font-extrabold'>
							Choose Your Bay
						</h2>
						<p className='text-lightGray'>
							Each bay is powered by Golfzon’s cutting-edge technology, but the
							vibe is up to you. Here’s how to play it
						</p>
					</div>

					<div className='space-y-8'>
						{bayTypes.map((bay, i) => (
							<div
								key={i}
								className='bg-[#0c1a1a] rounded-[20px] p-6 space-y-6'
							>
								<div className='w-full aspect-[4/3] bg-gradient-to-br from-[#006f33] to-[#004a22] rounded-[20px] flex items-center justify-center text-white'>
									<div className='text-center space-y-2'>
										<div className='text-3xl'>🏌️‍♂️</div>
										<div className='text-lg font-semibold'>{bay.title}</div>
										<div className='text-xs opacity-75'>
											Simulator Bay Image
										</div>
									</div>
								</div>

								<div className='space-y-4'>
									<div>
										<h3 className='uppercase text-white text-[clamp(20px,5vw,28px)] font-semibold'>
											{bay.title}
										</h3>
										<p className='uppercase text-white text-[16px] opacity-75'>
											{bay.location}
										</p>
									</div>

									<div className='space-y-3'>
										{bay.features.map((f, idx) => (
											<div key={idx} className='flex items-start gap-3'>
												<div className='w-5 h-5 text-[#d1d3d4] mt-1'>
													<GolfIcon />
												</div>
												<p className='text-[#d1d3d4] text-[18px] leading-[28px]'>
													{f}
												</p>
											</div>
										))}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Bays;
