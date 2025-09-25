// src/screens/LearnPage/sections/LessonLevelsSection/LessonLevelsSection.jsx
// Lesson levels section with expandable accordion showing different skill levels and progression paths
// This component displays Level 01 (expanded), Level 02, and Level 03-05 with detailed content
// RELEVANT FILES: LearnPage.jsx, tailwind.config.js

import React, { useState } from 'react';

const GolfIcon = ({ className = 'w-8 h-8' }) => {
	const src = '/sports_golf_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24 1.svg';
	return <img src={src} className={className} alt='golf icon' />;
};

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

const Level = ({ level, isOpen, onToggle }) => {
	return (
		<div className='mb-4'>
			<button
				className={`w-full text-left p-4 rounded-t-3xl flex justify-between items-center ${
					isOpen ? 'bg-[#009444]' : 'bg-[#f6f6f6] rounded-b-3xl'
				}`}
				onClick={onToggle}
			>
				<div className='flex items-center'>
					<h3
						className={`font-gilroy font-bold text-lg uppercase ${
							isOpen ? 'text-white' : 'text-black'
						}`}
					>
						{level.title}
					</h3>
					<div className={`ml-3 ${isOpen ? 'text-white' : 'text-gray-500'}`}>
						{isOpen ? (
							<ChevronUp className='w-5 h-5' />
						) : (
							<ChevronDown className='w-5 h-5' />
						)}
					</div>
				</div>
				<span
					className={`font-gilroy font-bold text-base uppercase ${
						isOpen ? 'text-white' : 'text-[#009444]'
					}`}
				>
					{level.levelNumber}
				</span>
			</button>
			{isOpen && (
				<div className='bg-[#f6f6f6] p-6 rounded-b-3xl'>
					<div className='flex gap-8 items-start'>
						<div className='w-[310px]'>
							<img
								src={level.image}
								alt={level.title}
								className='rounded-2xl w-full h-[290px] object-cover'
							/>
						</div>
						<div className='flex-1 max-w-[500px] ml-6'>
							<p className='font-gilroy font-semibold text-base text-[#757575] mb-4'>
								{level.description}
							</p>
							<ul className='space-y-2'>
								{level.features.map((feature, index) => (
									<li key={index} className='flex items-start'>
										<div className='w-5 h-5 mr-3 mt-0.5'>
											<GolfIcon className='w-5 h-5 opacity-100' />
										</div>
										<span className='font-gilroy font-semibold text-base text-[#757575]'>
											{feature}
										</span>
									</li>
								))}
							</ul>
							<p className='font-gilroy font-semibold text-base text-[#757575] mt-4'>
								{level.conclusion}
							</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export const LessonLevelsSection = () => {
	const [openLevel, setOpenLevel] = useState('Beginner to Bogey');

	const levels = [
		{
			title: 'Beginner to Bogey',
			levelNumber: 'Level 01',
			image: '/play-swing-2-1-10.png',
			description:
				'Perfect for first-timers or those getting back into the swing of things. Over 4 structured sessions, you’ll build a solid foundation:',
			features: [
				'Understand the basics of grip, posture, stance, and alignment.',
				'Learn golf rules, scoring, and course etiquette.',
				'Get hands-on with putting, chipping, and full-swing techniques.',
				'Build comfort with the simulator and learn how to track your progress.',
			],
			conclusion: 'By the end, you’ll feel confident stepping up to any tee.',
		},
		{
			title: 'Beyond Bogey',
			levelNumber: 'Level 02',
			image: '/play-swing-2-1-3.png',
			description:
				'Ready to take your game to the next level? This intermediate program focuses on consistency and course management over 6 sessions:',
			features: [
				'Refine your swing mechanics for better ball striking.',
				'Learn advanced short game techniques and shot selection.',
				'Develop course strategy and mental game skills.',
				'Practice advanced putting techniques and green reading.',
			],
			conclusion:
				'You’ll gain the skills needed to break 90 consistently and enjoy more competitive rounds.',
		},
		{
			title: 'Personalized Path',
			levelNumber: 'Level 03-05',
			image: '/twovision-dial-game.png',
			description:
				'Tailored coaching for advanced players seeking specific improvements. These levels offer personalized instruction based on your goals:',
			features: [
				'Detailed swing analysis using advanced technology.',
				'Customized practice routines for your specific needs.',
				'Tournament preparation and competitive strategies.',
				'Advanced course management and shot creativity.',
			],
			conclusion:
				'Whether you’re aiming to break 80, compete in tournaments, or master specific aspects of your game, these levels provide the expertise you need.',
		},
	];

	return (
		<section className='relative w-full bg-white overflow-hidden'>
			{/* Level 1: Page Container */}
			<div className='relative max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-28'>
				{/* Level 2: Universal Spacing Wrapper - MANDATORY FOR ALIGNMENT */}
				<div className='lg:ml-[12vw] md:ml-[8vw] lg:mr-[12vw] md:mr-[8vw]'>
					{/* Level 3: Content Container */}
					<div className='max-w-[1200px] mx-auto'>
						{/* Section title */}
						<div className='text-center mb-16'>
							<h2 className='font-morganite font-black text-[clamp(64px,6vw,80px)] text-black uppercase tracking-[1px]'>
								Lesson Levels and Journey
							</h2>
						</div>

						{/* Levels accordion */}
						<div>
							{levels.map((level) => (
								<Level
									key={level.title}
									level={level}
									isOpen={openLevel === level.title}
									onToggle={() =>
										setOpenLevel(openLevel === level.title ? null : level.title)
									}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
