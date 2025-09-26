import React from 'react';

const imgPlaySwing21 = '/play-swing-2-1-3.png';
const imgPlaySwing22 = '/play-swing-2-1-10.png';
const imgPlaySwing23 = '/twovision-play-legends.png';
const imgPlaySwing24 = '/twovision-customization.png';
const imgPlaySwing25 = '/twovision-dial-game.png';
const imgPlaySwing26 = '/twovision-zero-latency.png';
const imgPlaySwing27 = '/advanced-simulators-1-1.png';
const imgPlaySwing28 = '/golfzon-screenshot.png';
const imgPlaySwing29 = '/twovision-swing-plate.png';

const PlayArrowFilled = () => (
	<svg
		width='22'
		height='22'
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path d='M8 5v14l11-7L8 5z' fill='#00A86B' />
	</svg>
);

export const WhyGolfzonSection = () => {
	const features = [
		{
			src: imgPlaySwing27,
			title: 'Cutting-Edge Sensors',
		},
		{
			src: imgPlaySwing28,
			title: 'Unreal Engine-5 Graphics',
		},
		{
			src: imgPlaySwing29,
			title: 'Moving Swing Plates',
		},
		{
			src: imgPlaySwing24,
			title: 'User-Friendly Software',
		},
		{
			src: imgPlaySwing25,
			title: 'Auto Tee-Up',
		},
		{
			src: imgPlaySwing26,
			title: 'Zero Latency',
		},
	];

	const videos = [
		{
			src: imgPlaySwing21,
		},
		{
			src: imgPlaySwing22,
		},
		{
			src: imgPlaySwing23,
		},
	];

	return (
		<section className='w-full bg-white py-20 lg:py-24'>
			<div className='max-w-[1200px] mx-auto px-8 lg:px-16'>
				{/* Section Header */}
				<div className='text-center mb-16 lg:mb-20'>
					<h2 className='font-morganite font-black text-[clamp(64px,6vw,80px)] leading-[1.1] text-[#1a1a1a] tracking-[1px] max-w-5xl mx-auto uppercase mb-6'>
						Why Golfzon?
					</h2>
					<p className='text-lg sm:text-xl lg:text-[22px] font-bold text-[#009444] leading-relaxed tracking-wide max-w-4xl mx-auto font-gilroy uppercase mb-2'>
						The #1 golf simulator brand globally
					</p>
					<p className='text-lg sm:text-xl lg:text-[22px] font-bold text-[#009444] leading-relaxed tracking-wide max-w-4xl mx-auto font-gilroy uppercase'>
						Trusted by pros and recreational players alike
					</p>
				</div>

				{/* Features Grid */}
				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10'>
					{features.map((feature, index) => (
						<div
							key={index}
							className='bg-[#F6F6F6] rounded-[20px] p-1 shadow-sm flex flex-col'
						>
							<div className='rounded-[20px] overflow-hidden bg-white flex-1'>
								<div className='w-full aspect-[4/3] bg-gray-100 overflow-hidden'>
									<img
										src={feature.src}
										alt={feature.title}
										className='w-full h-full object-cover block'
									/>
								</div>
								<div className='p-6 lg:p-8 flex items-center justify-center min-h-[80px]'>
									<h3 className='text-center font-gilroy font-bold text-[19px] lg:text-[20px] text-[#0b0b0b] leading-[1.12] tracking-[0.4px] uppercase'>
										{feature.title}
									</h3>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Video Section */}
				<div className='mt-16 lg:mt-20 text-center'>
					<h3 className='font-morganite font-black text-[clamp(48px,5vw,64px)] leading-[1.1] text-[#1a1a1a] tracking-[1px] uppercase mb-12'>
						SEE IT IN ACTION
					</h3>
					<div className='grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-10'>
						{videos.map((video, idx) => (
							<div
								key={idx}
								className='relative rounded-[20px] overflow-hidden shadow-sm group cursor-pointer bg-[#F6F6F6] p-1'
							>
								<div className='rounded-[20px] overflow-hidden bg-white'>
									<img
										src={video.src}
										alt={`video-${idx}`}
										className='w-full h-48 lg:h-52 object-cover'
									/>
									<div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity rounded-[20px]'>
										<div className='w-16 h-16 lg:w-18 lg:h-18 bg-white bg-opacity-95 rounded-full flex items-center justify-center shadow-lg'>
											<PlayArrowFilled />
										</div>
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
