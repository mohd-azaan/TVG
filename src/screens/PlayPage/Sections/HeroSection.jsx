import React from 'react';

export const HeroSection = () => {
	return (
		<div className="w-full relative bg-gradient-to-b from-[#102121] to-[#102121] h-[1024px] overflow-hidden text-left text-lg text-white font-['Gilroy-SemiBold']">
			{/* Green bottom section */}
			<div className='absolute top-[589px] left-0 bg-[#006f33] w-[2030px] h-[435px]' />

			{/* Shape/decorative element */}
			<img
				className='absolute top-[431.91px] left-[341.98px] w-[2102px] h-[1454.2px] object-contain'
				alt=''
			/>

			{/* CTA Button */}
			<div className='absolute top-[891px] left-[calc(50%-680px)] rounded-[50px] bg-[#009444] overflow-hidden flex items-center justify-center py-[7px] px-[30px] gap-[10px] text-center'>
				<div className='relative leading-[40px] uppercase'>Book You Bay</div>
				<div className='w-6 relative h-6 overflow-hidden flex-shrink-0'>
					<img
						className='absolute h-[58.33%] w-[58.33%] top-[20.83%] right-[20.83%] bottom-[20.83%] left-[20.83%] max-w-full overflow-hidden max-h-full'
						alt=''
					/>
				</div>
			</div>

			{/* Text Box */}
			<div className="absolute top-[619px] left-[280px] flex items-center text-2xl text-[#dedede] font-['Gilroy-Medium']">
				<div className='w-[655px] relative inline-block flex-shrink-0'>
					<p className='m-0'>
						The ultimate golf and social experience, only in Riyadh.
					</p>
					<p className='m-0'>&nbsp;</p>
					<p className='m-0'>
						At The Virtual Greens, playing golf doesn't mean dressing up or
						heading out of town. It means stepping into a sleek, air-conditioned
						space where you can tee off on the world's most iconic course, day
						or night, rain or shine. Unwind after work, celebrate with friends,
						or host an event with a twist. This is golf on your terms.
					</p>
				</div>
			</div>

			{/* The New Era text */}
			<div className='absolute top-[540px] left-[280px] text-[22px] tracking-[0.02em] leading-[26px] uppercase font-gilroy font-medium text-[#7ddb8a] inline-block w-[521.3px]'>
				THE NEW ERA OF INDOOR GOLF
			</div>

			{/* Main heading */}
			<div className="absolute top-[278px] left-[280px] text-[148px] tracking-[0.02em] leading-[130px] uppercase font-black font-['Morganite'] inline-block w-[655px]">
				Your Game, Your Pace, Your Greens
			</div>

			{/* Main image */}
			<img
				className='absolute top-[278px] left-[990px] rounded-[30px] w-[650px] h-[480px] object-cover'
				src='/freepik-background.png'
				alt='Golf simulator background'
			/>
		</div>
	);
};
