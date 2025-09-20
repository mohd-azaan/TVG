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
			<div className='relative z-10 mx-auto max-w-[1440px] px-8 lg:px-16 h-full pt-20 lg:pt-24'>
				{/* Title column (stays in flow) */}
				<div className='w-full lg:w-[50%] lg:pr-12 lg:pl-8'>
					<h1 className='font-morganite text-[clamp(80px,10vw,120px)] font-[900] uppercase leading-[0.88] tracking-[2.2px] mb-6 mt-6 lg:mt-10'>
						{title}
					</h1>
				</div>

				{/* Image: absolutely positioned on large screens so it doesn't affect title layout */}
				<div className='lg:absolute lg:top-0 lg:right-0 lg:bottom-0 lg:w-1/2 hidden lg:flex justify-center items-center pointer-events-none'>
					{/* cropped fixed-size wrapper */}
					<div className='w-[90%] lg:w-[550px] lg:h-[420px] overflow-hidden rounded-[30px]'>
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
			<div className='absolute bottom-0 left-0 w-full h-[45%] bg-[#006F33] z-0'></div>

			{/* Description placed over the green area */}
			<div className='absolute left-0 top-[50%] z-20 w-full flex justify-start'>
				<div className='mx-auto px-8 lg:px-16 w-full max-w-[1440px]'>
					<div className='w-full lg:w-[50%] lg:pr-12 lg:pl-8'>
						<div className='font-gilroy  text-[18px] lg:text-[22px] leading-7 text-white space-y-4 max-w-[600px] py-8 lg:py-12'>
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
