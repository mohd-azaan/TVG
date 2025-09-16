// src/screens/LearnPage/sections/HeroSection/HeroSection.jsx
// Hero section for Learn page featuring "Train at TVG Academy" with fully responsive layout
// Now uses enhanced ResponsiveHeroSection with adaptive typography and fluid containers
// RELEVANT FILES: LearnPage.jsx, ResponsiveHeroSection.jsx, ResponsiveTypography.jsx, tailwind.config.js

import React from 'react';
import { ResponsiveHeroSection } from '../../../../components/shared/ResponsiveHeroSection';
import { HeroTitle, HeroTagline, HeroDescription, useResponsiveSpacing } from '../../../../components/shared/ResponsiveTypography';

export const HeroSection = () => {
	const spacing = useResponsiveSpacing();

	// Desktop content with improved responsive layout
	const desktopContent = (
		<div className='flex items-center justify-between h-full w-full max-w-[1600px] mx-auto'>
			{/* Left content column */}
			<div className='flex-1 max-w-[655px] space-y-8'>
				<HeroTitle className='mb-6'>
					Train at<br />TVG Academy
				</HeroTitle>

				<HeroTagline className='mb-8'>
					The beginning of a better game
				</HeroTagline>

				<div className='space-y-6 max-w-[600px]'>
					<HeroDescription large>
						It doesn't matter if you're a complete beginner or chasing a lower handicap; this is your space to grow.
					</HeroDescription>
					<HeroDescription large>
						At The Virtual Greens Academy, you won't just swing for fun. You'll train with purpose (while having fun, of course).
					</HeroDescription>
					<HeroDescription large>
						Our coaching is built around your goals, powered by the same world-class Golfzon tech used by professional tours.
					</HeroDescription>
					<HeroDescription large>
						We make learning the game easy, enjoyable, and tailored to you.
					</HeroDescription>
				</div>
			</div>

			{/* Right image column */}
			<div className='flex-1 max-w-[650px] ml-12'>
				<div className='aspect-[650/536] w-full bg-gradient-to-br from-green-600 to-green-800 rounded-[30px] flex items-center justify-center shadow-2xl overflow-hidden'>
					<div className='text-center text-white space-y-4'>
						<div className='text-6xl'>🏌️</div>
						<div className='text-2xl font-bold'>TVG Academy</div>
						<div className='text-lg opacity-75'>Training Excellence</div>
					</div>
				</div>
			</div>
		</div>
	);

	// Tablet content with optimized layout
	const tabletContent = (
		<div className={`${spacing.heroElementSpacing} text-center max-w-4xl mx-auto`}>
			<HeroTitle className='mb-6'>
				Train at TVG Academy
			</HeroTitle>

			<HeroTagline className='mb-8'>
				The beginning of a better game
			</HeroTagline>

			<div className='aspect-[4/3] w-full max-w-[600px] mx-auto mb-8 bg-gradient-to-br from-green-600 to-green-800 rounded-[25px] flex items-center justify-center shadow-xl'>
				<div className='text-center text-white space-y-3'>
					<div className='text-5xl'>🏌️</div>
					<div className='text-xl font-bold'>TVG Academy</div>
					<div className='text-base opacity-75'>Training Excellence</div>
				</div>
			</div>

			<div className='space-y-6 max-w-[700px] mx-auto text-left'>
				<HeroDescription large>
					It doesn't matter if you're a complete beginner or chasing a lower handicap; this is your space to grow.
				</HeroDescription>
				<HeroDescription large>
					At The Virtual Greens Academy, you won't just swing for fun. You'll train with purpose (while having fun, of course).
				</HeroDescription>
				<HeroDescription large>
					Our coaching is built around your goals, powered by the same world-class Golfzon tech used by professional tours.
				</HeroDescription>
				<HeroDescription large>
					We make learning the game easy, enjoyable, and tailored to you.
				</HeroDescription>
			</div>
		</div>
	);

	// Mobile content with stacked layout
	const mobileContent = (
		<div className={`${spacing.heroElementSpacing} text-center`}>
			<HeroTitle className='mb-4'>
				Train at<br />TVG Academy
			</HeroTitle>

			<HeroTagline className='mb-6'>
				The beginning of a better game
			</HeroTagline>

			<div className='aspect-[4/3] w-full max-w-[400px] mx-auto mb-6 bg-gradient-to-br from-green-600 to-green-800 rounded-[20px] flex items-center justify-center shadow-lg'>
				<div className='text-center text-white space-y-2'>
					<div className='text-4xl'>🏌️</div>
					<div className='text-lg font-bold'>TVG Academy</div>
					<div className='text-sm opacity-75'>Training Excellence</div>
				</div>
			</div>

			<div className='space-y-4 max-w-[500px] mx-auto text-left'>
				<HeroDescription>
					It doesn't matter if you're a complete beginner or chasing a lower handicap; this is your space to grow.
				</HeroDescription>
				<HeroDescription>
					At The Virtual Greens Academy, you won't just swing for fun. You'll train with purpose (while having fun, of course).
				</HeroDescription>
				<HeroDescription>
					Our coaching is built around your goals, powered by the same world-class Golfzon tech used by professional tours.
				</HeroDescription>
				<HeroDescription>
					We make learning the game easy, enjoyable, and tailored to you.
				</HeroDescription>
			</div>
		</div>
	);

	// Enhanced decorative elements with responsive positioning
	const decorativeElements = (
		<div className='absolute inset-0 overflow-hidden'>
			{/* Main decorative background - responsive positioning */}
			<div
				className='absolute opacity-20 transition-all duration-500'
				style={{
					top: 'clamp(200px, 30vh, 432px)',
					left: 'clamp(100px, 15vw, 342px)',
					transform: 'rotate(348deg)',
				}}
			>
				<div className='w-[clamp(800px, 100vw, 1920px)] h-[clamp(600px, 75vh, 1080px)] relative overflow-hidden'>
					<div className='absolute inset-0 mix-blend-screen'>
						<div className='absolute inset-0 bg-gradient-to-br from-green-400/30 via-green-500/20 to-transparent' />
						<div className='absolute inset-0 bg-gradient-to-tl from-emerald-400/20 via-transparent to-green-300/10' />
					</div>
				</div>
			</div>
		</div>
	);

	return (
		<ResponsiveHeroSection
			backgroundColor='#272727'
			greenSection={true}
			greenSectionHeight='clamp(300px, 25vh, 435px)'
			minHeight='min-h-[100svh]'
			decorativeElements={decorativeElements}
			enableFluidLayout={true}
		>
			{{
				desktop: desktopContent,
				tablet: tabletContent,
				mobile: mobileContent
			}}
		</ResponsiveHeroSection>
	);
};