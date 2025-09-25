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
		<section className='relative w-full bg-[#102121] overflow-hidden'>
			{/* Level 1: Page Container */}
			<div className='relative max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:pt-28 lg:pb-16'>

				{/* Level 2: Universal Spacing Wrapper - MANDATORY FOR ALIGNMENT */}
				<div className='lg:ml-[12vw] md:ml-[8vw] lg:mr-[12vw] md:mr-[8vw]'>

					{/* Level 3: Content Container */}
					<div className='max-w-[1200px] mx-auto'>

						<div className='flex flex-col lg:flex-row items-start gap-12 lg:gap-16'>
							{/* Left side - image placeholder */}
							<div className='w-full lg:w-[500px] h-[350px] bg-gray-600 rounded-[30px] bg-center bg-cover flex items-center justify-center flex-shrink-0'>
								<div className='text-white text-lg font-bold opacity-50'>
									Lesson Image Placeholder
								</div>
							</div>

							{/* Right side - content */}
							<div className='flex-1'>
								{/* Section title */}
								<h2 className='font-morganite font-black text-[clamp(64px,6vw,80px)] leading-[0.95] tracking-[0.02em] text-white uppercase mb-6'>
									What You'll Work On
								</h2>

								{/* Description */}
								<p className='font-gilroy font-medium text-base leading-[24px] text-[rgba(209,211,212,0.85)] mb-8'>
									Every lesson is personalized, but here's what's commonly on the
									agenda:
								</p>

								{/* Lesson topics list */}
								<div className='space-y-2 mb-8'>
									{lessonTopics.map((topic, index) => (
										<div key={index} className='flex items-start gap-3'>
											<GolfIcon className='w-5 h-5 flex-shrink-0 mt-0.5 opacity-80' />
											<p className='font-gilroy font-medium text-base leading-[22px] text-[rgba(209,211,212,0.85)]'>
												{topic}
											</p>
										</div>
									))}
								</div>

								{/* Golfzon technology description */}
								<p className='font-gilroy font-medium text-base leading-[24px] text-[rgba(209,211,212,0.85)]'>
									All lessons are powered by Golfzon TwoVisionNX, giving you instant
									feedback on launch angle, ball flight, swing path, tempo, and
									more.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
