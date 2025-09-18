// src/screens/LearnPage/sections/LessonLevelsSection/LessonLevelsSection.jsx
// Lesson levels section with expandable accordion showing different skill levels and progression paths
// This component displays Level 01 (expanded), Level 02, and Level 03-05 with detailed content
// RELEVANT FILES: LearnPage.jsx, tailwind.config.js

import React, { useState } from 'react';

// Golf icon component - uses public SVG asset so it loads from public/ at runtime
const GolfIcon = ({ className = 'w-8 h-8' }) => {
	// URL encode the filename (spaces) and reference it from the public folder
	const src = '/sports_golf_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24%201.svg';
	return <img src={src} className={className} alt='golf icon' />;
};

// Chevron down icon
const ChevronDown = ({ className = 'w-6 h-6' }) => (
	<svg className={className} viewBox='0 0 24 24' fill='none'>
		<path
			d='M6 9L12 15L18 9'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);

// Chevron up icon
const ChevronUp = ({ className = 'w-6 h-6' }) => (
	<svg className={className} viewBox='0 0 24 24' fill='none'>
		<path
			d='M18 15L12 9L6 15'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);

// Reusable Level Component
const LevelComponent = ({
	levelId,
	title,
	levelNumber,
	description,
	bulletPoints,
	conclusion,
	imagePlaceholder,
	isExpanded,
	onToggle,
}) => {
	return (
		<div className='mb-0'>
			<div
				className={`rounded-t-[30px] h-20 flex items-center justify-between px-8 cursor-pointer ${
					isExpanded ? 'bg-[#009444]' : 'bg-[#f6f6f6]'
				}`}
				onClick={onToggle}
			>
				<div className='flex items-center gap-4'>
					<h3
						className={`font-TVG-typography-tagline font-bold text-[28px] uppercase ${
							isExpanded ? 'text-white' : 'text-black'
						}`}
					>
						{title}
					</h3>
					<div
						className={`${isExpanded ? 'text-[#cceada]' : 'text-[#009444]'}`}
					>
						{isExpanded ? (
							<ChevronUp className='w-6 h-6' />
						) : (
							<ChevronDown className='w-6 h-6 text-[#757575]' />
						)}
					</div>
				</div>
				<span
					className={`font-TVG-typography-tagline font-bold text-[22px] tracking-[0.44px] uppercase ${
						isExpanded ? 'text-[#cceada]' : 'text-[#009444]'
					}`}
				>
					{levelNumber}
				</span>
			</div>

			{isExpanded && (
				<div className='bg-[#f6f6f6] rounded-b-[30px] p-8'>
					<div className='flex gap-8'>
						{/* Left side - image placeholder */}
						<div className='w-[420px] h-[356px] bg-gray-400 rounded-[30px] bg-center bg-cover flex items-center justify-center'>
							<div className='text-white text-lg font-bold opacity-50'>
								{imagePlaceholder}
							</div>
						</div>

						{/* Right side - content */}
						<div className='flex-1'>
							<p className='font-TVG-typography-default text-[20px] leading-[28px] text-[#757575] mb-8'>
								{description}
							</p>

							<div className='space-y-4 mb-6'>
								{bulletPoints.map((point, index) => (
									<div key={index} className='flex items-center gap-4'>
										<GolfIcon className='text-[#757575] w-8 h-8' />
										<p className='font-TVG-typography-default text-[20px] leading-[28px] text-[#757575]'>
											{point}
										</p>
									</div>
								))}
							</div>

							<p className='font-TVG-typography-default text-[20px] leading-[28px] text-[#757575]'>
								{conclusion}
							</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export const LessonLevelsSection = () => {
	const [expandedLevel, setExpandedLevel] = useState('level01');

	const toggleLevel = (levelId) => {
		setExpandedLevel(expandedLevel === levelId ? null : levelId);
	};

	// Level data configuration
	const levelData = [
		{
			levelId: 'level01',
			title: 'Beginner to Bogey',
			levelNumber: 'Level 01',
			description:
				"Perfect for first-timers or those getting back into the swing of things. Over 4 structured sessions, you'll build a solid foundation:",
			bulletPoints: [
				'Understand the basics of grip, posture, stance, and alignment.',
				'Learn golf rules, scoring, and course etiquette.',
				'Get hands-on with putting, chipping, and full-swing techniques.',
				'Build comfort with the simulator and learn how to track your progress.',
			],
			conclusion: "By the end, you'll feel confident stepping up to any tee.",
			imagePlaceholder: 'Level 01 Image',
		},
		{
			levelId: 'level02',
			title: 'Beyond Bogey',
			levelNumber: 'Level 02',
			description:
				'Ready to take your game to the next level? This intermediate program focuses on consistency and course management over 6 sessions:',
			bulletPoints: [
				'Refine your swing mechanics for better ball striking.',
				'Learn advanced short game techniques and shot selection.',
				'Develop course strategy and mental game skills.',
				'Practice advanced putting techniques and green reading.',
			],
			conclusion:
				"You'll gain the skills needed to break 90 consistently and enjoy more competitive rounds.",
			imagePlaceholder: 'Level 02 Image',
		},
		{
			levelId: 'level03',
			title: 'Personalized Path',
			levelNumber: 'Level 03-05',
			description:
				'Tailored coaching for advanced players seeking specific improvements. These levels offer personalized instruction based on your goals:',
			bulletPoints: [
				'Detailed swing analysis using advanced technology.',
				'Customized practice routines for your specific needs.',
				'Tournament preparation and competitive strategies.',
				'Advanced course management and shot creativity.',
			],
			conclusion:
				"Whether you're aiming to break 80, compete in tournaments, or master specific aspects of your game, these levels provide the expertise you need.",
			imagePlaceholder: 'Level 03-05 Image',
		},
	];

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
				{levelData.map((level, index) => (
					<LevelComponent
						key={level.levelId}
						levelId={level.levelId}
						title={level.title}
						levelNumber={level.levelNumber}
						description={level.description}
						bulletPoints={level.bulletPoints}
						conclusion={level.conclusion}
						imagePlaceholder={level.imagePlaceholder}
						isExpanded={expandedLevel === level.levelId}
						onToggle={() => toggleLevel(level.levelId)}
					/>
				))}
			</div>
		</div>
	);
};
