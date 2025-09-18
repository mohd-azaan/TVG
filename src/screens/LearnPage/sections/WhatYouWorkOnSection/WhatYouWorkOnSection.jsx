// src/screens/LearnPage/sections/WhatYouWorkOnSection/WhatYouWorkOnSection.jsx
// What You'll Work On section featuring lesson topics list with golf icons and Golfzon technology info
// This component displays a comprehensive list of lesson focus areas with dark background
// RELEVANT FILES: LearnPage.jsx, tailwind.config.js

import React from 'react';

// Use public golf icon image (30x30 SVG placed in /public)
const GolfIcon = ({ className = 'w-6 h-6' }) => (
	<img
		className={className}
		src={'/sports_golf_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24 1.svg'}
		alt='golf icon'
	/>
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
		'Practice Structure',
	];

	return (
		<div className='relative w-full bg-[#102121] py-16 overflow-hidden'>
			{/* Background: using only the outer bg-[#102121] to avoid multiple layered backgrounds */}

			<div className='max-w-[1700px] mx-auto px-4'>
				<div className='flex items-start justify-center gap-16'>
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
							Every lesson is personalized, but here's what's commonly on the
							agenda:
						</p>

						{/* Lesson topics list */}
						<div className='space-y-3 mb-12'>
							{lessonTopics.map((topic, index) => (
								<div key={index} className='flex items-center gap-3'>
									<GolfIcon className='w-6 h-6 flex-shrink-0' />
									<p className='font-TVG-typography-default text-[18px] leading-[24px] text-[lightgrey]'>
										{topic}
									</p>
								</div>
							))}
						</div>

						{/* Golfzon technology description */}
						<p className='font-TVG-typography-default text-[20px] leading-[28px] text-[lightgrey]'>
							All lessons are powered by Golfzon TwoVisionNX, giving you instant
							feedback on launch angle, ball flight, swing path, tempo, and
							more.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
