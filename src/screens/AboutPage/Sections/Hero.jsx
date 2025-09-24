import React from 'react';
import { Link } from 'react-router-dom';

export const Hero = () => {
	const title = (
		<>
			WHERE GOLF PEOPLE <br />
			BELONG
		</>
	);

	const description = (
		<>
			<p>
				Step into a place built for people who live the game, not just play it.
				Our advanced simulator technology recreates the world’s greatest courses
				in precise detail. You’ll get the analytics you need, the challenges you
				crave, and a community that speaks your language.
			</p>
			<p>
				Improve your swing, hang with friends, or host a private event in The
				Virtual Greens. We’re building a community of modern golfers, casual
				players, and anyone looking for a better way to spend their time in
				Riyadh.
			</p>
		</>
	);

	return (
		<section className='relative w-full h-[100vh] bg-[#102121] text-white overflow-hidden'>
			{/* Content wrapper */}
			<div className='relative z-10 mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-10 h-full pt-28 lg:pt-32 pb-8 lg:pb-12'>
				{/* Title column (stays in flow) */}
				<div className='w-full lg:w-[50%] lg:pr-12 lg:ml-[12vw] md:ml-[8vw] max-w-[520px] lg:max-w-[560px]'>
					<h1 className='font-morganite text-[clamp(72px,8vw,112px)] font-[900] uppercase leading-[0.90] tracking-[0.02em] lg:tracking-[0.03em] mb-6 mt-2 lg:mt-4'>
						{title}
					</h1>
				</div>

				{/* Image: absolutely positioned on large screens so it doesn't affect title layout */}
				<div className='lg:absolute lg:top-0 lg:right-0 lg:bottom-0 lg:w-1/2 hidden lg:flex justify-center items-center pointer-events-none'>
					{/* cropped fixed-size wrapper */}
					<div className='w-[85%] lg:w-[500px] lg:h-[420px] overflow-hidden rounded-[30px] lg:mr-36'>
						<img
							src='/freepik__background__81702-1.png'
							alt='Hero image'
							className='w-full h-full object-cover pointer-events-auto'
							fetchPriority='high'
							decoding='async'
							width='550'
							height='503'
						/>
					</div>
				</div>
			</div>

			{/* Green background */}
			<div className='absolute bottom-0 left-0 w-full h-[50%] bg-[#006F33] z-0'></div>

			{/* Description placed over the green area */}
			<div className='absolute left-0 top-[50%] z-20 w-full flex justify-start'>
				<div className='mx-auto px-4 sm:px-6 lg:px-10 w-full max-w-[1920px]'>
					<div className='w-full lg:w-[50%] lg:pr-12 lg:ml-[12vw] md:ml-[8vw] max-w-[520px] lg:max-w-[560px]'>
						<div className='font-gilroy font-normal text-[18px] leading-6 text-white space-y-4 max-w-[510px] py-8 lg:py-12'>
							{description}
						</div>
					</div>
				</div>
			</div>

			{/* Decorative SVG bottom-right */}
			<img
				alt='decorative green waves'
				src='/shape14-2.svg'
				className='pointer-events-none absolute right-[-420px] bottom-[-220px] w-[1100px] opacity-95 lg:right-[-620px] lg:bottom-[-520px] lg:w-[1800px] mix-blend-screen z-0'
				fetchPriority='high'
				decoding='async'
				width='1800'
				height='800'
			/>
		</section>
	);
};

export default Hero;
