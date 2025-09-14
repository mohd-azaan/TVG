// src/screens/LearnPage/sections/LessonTypesSection/LessonTypesSection.jsx
// Lesson types section featuring Adults Academy and Juniors Academy cards with dark background
// This component displays two lesson type cards with feature lists and decorative graphics
// RELEVANT FILES: LearnPage.jsx, tailwind.config.js

import React from 'react';

// Golf icon component
const GolfIcon = ({ className = "w-8 h-8" }) => (
	<svg className={className} viewBox="0 0 24 24" fill="none">
		<path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor" />
	</svg>
);

// Crew/Group icon component
const CrewIcon = ({ className = "w-15 h-15" }) => (
	<svg className={className} viewBox="0 0 24 24" fill="none">
		<path d="M12 12C14.21 12 16 10.21 16 8S14.21 4 12 4 8 5.79 8 8 9.79 12 12 12ZM21 16.22C19.93 15.35 18.69 14.7 17.35 14.3C16.68 14.1 15.99 14 15.28 14C14.12 14 12.99 14.24 11.94 14.69C10.89 15.14 9.94 15.78 9.13 16.58C8.32 17.38 7.66 18.32 7.19 19.36C6.72 20.4 6.46 21.52 6.43 22.65H17.57C17.54 21.52 17.28 20.4 16.81 19.36C16.34 18.32 15.68 17.38 14.87 16.58C14.06 15.78 13.11 15.14 12.06 14.69Z" fill="currentColor" />
		<circle cx="6" cy="8" r="2" fill="currentColor" />
		<circle cx="18" cy="8" r="2" fill="currentColor" />
	</svg>
);

// Child hat icon component
const ChildHatIcon = ({ className = "w-15 h-15" }) => (
	<svg className={className} viewBox="0 0 24 24" fill="none">
		<path d="M12 2C8.69 2 6 4.69 6 8V12C6 15.31 8.69 18 12 18S18 15.31 18 12V8C18 4.69 15.31 2 12 2Z" fill="currentColor" />
		<path d="M5 10H3C2.45 10 2 10.45 2 11V13C2 13.55 2.45 14 3 14H5V10Z" fill="currentColor" />
		<path d="M21 10H19V14H21C21.55 14 22 13.55 22 13V11C22 10.45 21.55 10 21 10Z" fill="currentColor" />
		<circle cx="9" cy="9" r="1" fill="white" />
		<circle cx="15" cy="9" r="1" fill="white" />
	</svg>
);

export const LessonTypesSection = () => {
	return (
		<div className='relative w-full bg-[#102121] py-16 overflow-hidden'>
			{/* Complex background graphics - simplified */}
			<div className='absolute top-[272px] left-[-1003px] w-[1920px] h-[1080px] opacity-20'>
				<div className='w-full h-full bg-gradient-to-br from-green-400/10 to-transparent mix-blend-screen' />
			</div>

			{/* Section title */}
			<div className='text-center mb-16'>
				<h2 className='font-morganite font-extrabold text-[96px] leading-[90px] text-white uppercase tracking-[1.92px]'>
					Types of Lessons
				</h2>
			</div>

			{/* Two lesson type cards */}
			<div className='max-w-[1360px] mx-auto px-4 flex gap-[50px] items-center justify-center'>
				{/* Adults Academy Card */}
				<div className='bg-[#0c1a1a] rounded-[30px] w-[655px] h-[250px] p-10 relative'>
					{/* Title */}
					<h3 className='font-TVG-typography-tagline text-[28px] text-white uppercase mb-6'>
						Adults Academy
					</h3>

					{/* Feature list */}
					<div className='space-y-4'>
						<div className='flex items-center gap-4'>
							<GolfIcon className="text-[rgba(209,211,212,0.85)] w-8 h-8" />
							<p className='font-TVG-typography-default text-[20px] leading-[28px] text-[rgba(209,211,212,0.85)] max-w-[525px]'>
								Start from scratch or sharpen your edge.
							</p>
						</div>
						<div className='flex items-center gap-4'>
							<GolfIcon className="text-[rgba(209,211,212,0.85)] w-8 h-8" />
							<p className='font-TVG-typography-default text-[20px] leading-[28px] text-[rgba(209,211,212,0.85)] max-w-[525px]'>
								One-on-one sessions. Flexible timing. Real results tracked in real time.
							</p>
						</div>
					</div>
				</div>

				{/* Juniors Academy Card */}
				<div className='bg-[#0c1a1a] rounded-[30px] w-[655px] h-[250px] p-10 relative'>
					{/* Title */}
					<h3 className='font-TVG-typography-tagline text-[28px] text-white uppercase mb-6'>
						Juniors Academy
					</h3>

					{/* Feature list */}
					<div className='space-y-4'>
						<div className='flex items-center gap-4'>
							<GolfIcon className="text-[rgba(209,211,212,0.85)] w-8 h-8" />
							<p className='font-TVG-typography-default text-[20px] leading-[28px] text-[rgba(209,211,212,0.85)] max-w-[525px]'>
								A safe, fun, and structured way to get kids into the game.
							</p>
						</div>
						<div className='flex items-center gap-4'>
							<GolfIcon className="text-[rgba(209,211,212,0.85)] w-8 h-8" />
							<p className='font-TVG-typography-default text-[20px] leading-[28px] text-[rgba(209,211,212,0.85)] max-w-[525px]'>
								Our certified instructors know how to teach, encourage, and inspire the next gen.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Decorative icons */}
			<div className='absolute right-[393px] top-[353px]'>
				<CrewIcon className="text-white/60 w-15 h-15" />
			</div>
			<div className='absolute right-[393px] top-[353px] left-[1527px]'>
				<ChildHatIcon className="text-white/60 w-15 h-15" />
			</div>
		</div>
	);
};