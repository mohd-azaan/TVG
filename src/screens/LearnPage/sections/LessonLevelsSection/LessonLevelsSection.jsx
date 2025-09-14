// src/screens/LearnPage/sections/LessonLevelsSection/LessonLevelsSection.jsx
// Lesson levels section with expandable accordion showing different skill levels and progression paths
// This component displays Level 01 (expanded), Level 02, and Level 03-05 with detailed content
// RELEVANT FILES: LearnPage.jsx, tailwind.config.js

import React, { useState } from 'react';

// Golf icon component
const GolfIcon = ({ className = "w-8 h-8" }) => (
	<svg className={className} viewBox="0 0 24 24" fill="none">
		<path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor" />
	</svg>
);

// Chevron down icon
const ChevronDown = ({ className = "w-6 h-6" }) => (
	<svg className={className} viewBox="0 0 24 24" fill="none">
		<path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
	</svg>
);

// Chevron up icon
const ChevronUp = ({ className = "w-6 h-6" }) => (
	<svg className={className} viewBox="0 0 24 24" fill="none">
		<path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
	</svg>
);

export const LessonLevelsSection = () => {
	const [expandedLevel, setExpandedLevel] = useState('level01');

	const toggleLevel = (levelId) => {
		setExpandedLevel(expandedLevel === levelId ? null : levelId);
	};

	return (
		<div className='relative w-full bg-white py-16'>
			{/* Section title */}
			<div className='text-center mb-16'>
				<h2 className='font-morganite font-extrabold text-[96px] leading-[90px] text-black uppercase tracking-[1.92px]'>
					Lesson Levels and Journey
				</h2>
			</div>

			{/* Accordion levels */}
			<div className='max-w-[1360px] mx-auto px-4'>
				{/* Level 01 - Beginner to Bogey */}
				<div className='mb-0'>
					<div
						className={`rounded-t-[30px] h-20 flex items-center justify-between px-8 cursor-pointer ${
							expandedLevel === 'level01' ? 'bg-[#009444]' : 'bg-[#f6f6f6]'
						}`}
						onClick={() => toggleLevel('level01')}
					>
						<h3 className={`font-TVG-typography-tagline text-[28px] uppercase ${
							expandedLevel === 'level01' ? 'text-white' : 'text-black'
						}`}>
							Beginner to Bogey
						</h3>
						<div className='flex items-center gap-4'>
							<div className={`${expandedLevel === 'level01' ? 'text-[#cceada]' : 'text-[#009444]'}`}>
								{expandedLevel === 'level01' ? (
									<ChevronUp className="w-6 h-6" />
								) : (
									<ChevronDown className="w-6 h-6 text-[#757575]" />
								)}
							</div>
							<span className={`font-TVG-typography-tagline text-[22px] tracking-[0.44px] uppercase ${
								expandedLevel === 'level01' ? 'text-[#cceada]' : 'text-[#009444]'
							}`}>
								Level 01
							</span>
						</div>
					</div>

					{expandedLevel === 'level01' && (
						<div className='bg-[#f6f6f6] rounded-b-[30px] p-8'>
							<div className='flex gap-8'>
								{/* Left side - image placeholder */}
								<div className='w-[420px] h-[356px] bg-gray-400 rounded-[30px] bg-center bg-cover flex items-center justify-center'>
									<div className='text-white text-lg font-bold opacity-50'>
										Level 01 Image
									</div>
								</div>

								{/* Right side - content */}
								<div className='flex-1'>
									<p className='font-TVG-typography-default text-[20px] leading-[28px] text-[#757575] mb-8'>
										Perfect for first-timers or those getting back into the swing of things. Over 4 structured sessions, you'll build a solid foundation:
									</p>

									<div className='space-y-4 mb-6'>
										<div className='flex items-center gap-4'>
											<GolfIcon className="text-[#757575] w-8 h-8" />
											<p className='font-TVG-typography-default text-[20px] leading-[28px] text-[#757575]'>
												Understand the basics of grip, posture, stance, and alignment.
											</p>
										</div>
										<div className='flex items-center gap-4'>
											<GolfIcon className="text-[#757575] w-8 h-8" />
											<p className='font-TVG-typography-default text-[20px] leading-[28px] text-[#757575]'>
												Learn golf rules, scoring, and course etiquette.
											</p>
										</div>
										<div className='flex items-center gap-4'>
											<GolfIcon className="text-[#757575] w-8 h-8" />
											<p className='font-TVG-typography-default text-[20px] leading-[28px] text-[#757575]'>
												Get hands-on with putting, chipping, and full-swing techniques.
											</p>
										</div>
										<div className='flex items-center gap-4'>
											<GolfIcon className="text-[#757575] w-8 h-8" />
											<p className='font-TVG-typography-default text-[20px] leading-[28px] text-[#757575]'>
												Build comfort with the simulator and learn how to track your progress.
											</p>
										</div>
									</div>

									<p className='font-TVG-typography-default text-[20px] leading-[28px] text-[#757575]'>
										By the end, you'll feel confident stepping up to any tee.
									</p>
								</div>
							</div>
						</div>
					)}
				</div>

				{/* Level 02 - Beyond Bogey */}
				<div className='mb-0'>
					<button
						className={`w-full rounded-[30px] h-20 flex items-center justify-between px-8 cursor-pointer ${
							expandedLevel === 'level02' ? 'bg-[#009444]' : 'bg-[#f6f6f6]'
						}`}
						onClick={() => toggleLevel('level02')}
					>
						<h3 className={`font-TVG-typography-tagline text-[28px] text-black uppercase`}>
							Beyond Bogey
						</h3>
						<div className='flex items-center gap-4'>
							<ChevronDown className="w-6 h-6 text-[#757575]" />
							<span className='font-TVG-typography-tagline text-[22px] tracking-[0.44px] uppercase text-[#009444]'>
								Level 02
							</span>
						</div>
					</button>

					{expandedLevel === 'level02' && (
						<div className='bg-[#f6f6f6] rounded-b-[30px] p-8 mt-[-30px] pt-16'>
							<p className='font-TVG-typography-default text-[20px] leading-[28px] text-[#757575] text-center'>
								Content for Level 02 - Beyond Bogey goes here. This level focuses on intermediate skills and consistent play.
							</p>
						</div>
					)}
				</div>

				{/* Level 03-05 - Personalized Path */}
				<div>
					<button
						className={`w-full rounded-[30px] h-20 flex items-center justify-between px-8 cursor-pointer ${
							expandedLevel === 'level03' ? 'bg-[#009444]' : 'bg-[#f6f6f6]'
						}`}
						onClick={() => toggleLevel('level03')}
					>
						<h3 className={`font-TVG-typography-tagline text-[28px] text-black uppercase`}>
							Personalized Path
						</h3>
						<div className='flex items-center gap-4'>
							<ChevronDown className="w-6 h-6 text-[#757575]" />
							<span className='font-TVG-typography-tagline text-[22px] tracking-[0.44px] uppercase text-[#009444]'>
								Level 03-05
							</span>
						</div>
					</button>

					{expandedLevel === 'level03' && (
						<div className='bg-[#f6f6f6] rounded-b-[30px] p-8 mt-[-30px] pt-16'>
							<p className='font-TVG-typography-default text-[20px] leading-[28px] text-[#757575] text-center'>
								Content for Level 03-05 - Personalized Path goes here. This level provides advanced coaching tailored to individual goals.
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};