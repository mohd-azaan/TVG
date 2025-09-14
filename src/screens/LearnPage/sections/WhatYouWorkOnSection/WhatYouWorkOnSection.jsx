// src/screens/LearnPage/sections/WhatYouWorkOnSection/WhatYouWorkOnSection.jsx
// What You'll Work On section featuring lesson topics list with golf icons and Golfzon technology info
// This component displays a comprehensive list of lesson focus areas with dark background
// RELEVANT FILES: LearnPage.jsx, tailwind.config.js

import React from 'react';

// Golf icon component
const GolfIcon = ({ className = "w-8 h-8" }) => (
	<svg className={className} viewBox="0 0 24 24" fill="none">
		<path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor" />
	</svg>
);

export const WhatYouWorkOnSection = () => {
	const lessonTopics = [
		'Swing Mechanics',
		'Short Game',
		'Putting',
		'Course Management & Strategy',
		'Mental Game',
		'Physical Conditioning',
		'Equipment Optimisation',
		'Practice Structure'
	];

	return (
		<div className='relative w-full bg-[#102121] py-16 overflow-hidden'>
			{/* Complex background graphics - simplified */}
			<div className='absolute top-[418px] left-[286.86px] opacity-20'>
				<div className='w-[1920px] h-[1092px] bg-gradient-to-br from-green-400/10 to-transparent mix-blend-screen transform rotate-[332.19deg]' />
			</div>

			<div className='max-w-[1700px] mx-auto px-4'>
				<div className='flex items-start gap-16'>
					{/* Left side - image placeholder */}
					<div className='w-[655px] h-[446px] bg-gray-600 rounded-[30px] bg-center bg-cover flex items-center justify-center'>
						<div className='text-white text-xl font-bold opacity-50'>
							Lesson Image Placeholder
						</div>
					</div>

					{/* Right side - content */}
					<div className='flex-1 max-w-[655px]'>
						{/* Section title */}
						<h2 className='font-morganite font-extrabold text-[96px] leading-[90px] text-white uppercase tracking-[1.92px] mb-8'>
							What You'll Work On
						</h2>

						{/* Description */}
						<p className='font-TVG-typography-default text-[20px] leading-[28px] text-[lightgrey] mb-12'>
							Every lesson is personalized, but here's what's commonly on the agenda:
						</p>

						{/* Lesson topics list */}
						<div className='space-y-6 mb-12'>
							{lessonTopics.map((topic, index) => (
								<div key={index} className='flex items-center gap-4'>
									<GolfIcon className="text-[lightgrey] w-8 h-8 flex-shrink-0" />
									<p className='font-TVG-typography-default text-[20px] leading-[28px] text-[lightgrey]'>
										{topic}
									</p>
								</div>
							))}
						</div>

						{/* Golfzon technology description */}
						<p className='font-TVG-typography-default text-[20px] leading-[28px] text-[lightgrey]'>
							All lessons are powered by Golfzon TwoVisionNX, giving you instant feedback on launch angle, ball flight, swing path, tempo, and more.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};