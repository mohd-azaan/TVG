// src/screens/AboutPage/Sections/HeroSection.jsx
// Hero section for About page with enhanced responsive system and adaptive typography
// Uses enhanced ResponsiveHeroSection with fluid layouts and responsive typography components
// RELEVANT FILES: AboutPage.jsx, ResponsiveHeroSection.jsx, ResponsiveTypography.jsx, tailwind.config.js

import React from 'react';
import { ResponsiveHeroSection } from '../../../components/shared/ResponsiveHeroSection';
import { HeroTitle, HeroDescription, useResponsiveSpacing } from '../../../components/shared/ResponsiveTypography';

export const HeroSection = () => {
	const spacing = useResponsiveSpacing();

	// Desktop content with enhanced responsive layout
	const desktopContent = (
		<div className='flex items-center justify-between h-full w-full max-w-[1600px] mx-auto'>
			{/* Left content column */}
			<div className='flex-1 max-w-[655px] space-y-8'>
				<HeroTitle className='tracking-[2.96px] leading-[130px]'>
					Where Golf People Belong
				</HeroTitle>

				<div className='space-y-6 max-w-[600px]'>
					<HeroDescription large>
						Step into a place built for people who live the game, not just play it. Our advanced simulator technology recreates the world's greatest courses in precise detail. You'll get the analytics you need, the challenges you crave, and a community that speaks your language.
					</HeroDescription>
					<HeroDescription large>
						Improve your swing, hang with friends, or host a private event in The Virtual Greens. We're building a community of modern golfers, casual players, and anyone looking for a better way to spend their time in Riyadh.
					</HeroDescription>
				</div>
			</div>

			{/* Right image column */}
			<div className='flex-1 max-w-[650px] ml-12'>
				<div className='aspect-[650/503] w-full rounded-[30px] overflow-hidden shadow-2xl'>
					<img
						className='w-full h-full object-cover'
						alt='Golf players in virtual greens environment'
						src='/assets/figma/hero-background.png'
					/>
				</div>
			</div>
		</div>
	);

	// Tablet content with optimized layout
	const tabletContent = (
		<div className={`${spacing.heroElementSpacing} text-center max-w-4xl mx-auto`}>
			<HeroTitle className='mb-8 tracking-[2.96px]'>
				Where Golf People Belong
			</HeroTitle>

			<div className='aspect-[4/3] w-full max-w-[600px] mx-auto mb-8 rounded-[25px] overflow-hidden shadow-xl'>
				<img
					className='w-full h-full object-cover'
					alt='Golf players in virtual greens environment'
					src='/assets/figma/hero-background.png'
				/>
			</div>

			<div className='space-y-6 max-w-[700px] mx-auto text-left'>
				<HeroDescription large>
					Step into a place built for people who live the game, not just play it. Our advanced simulator technology recreates the world's greatest courses in precise detail. You'll get the analytics you need, the challenges you crave, and a community that speaks your language.
				</HeroDescription>
				<HeroDescription large>
					Improve your swing, hang with friends, or host a private event in The Virtual Greens. We're building a community of modern golfers, casual players, and anyone looking for a better way to spend their time in Riyadh.
				</HeroDescription>
			</div>
		</div>
	);

	// Mobile content with optimized stacked layout
	const mobileContent = (
		<div className={`${spacing.heroElementSpacing} text-center`}>
			<HeroTitle className='mb-6 tracking-[2.96px]'>
				Where Golf People Belong
			</HeroTitle>

			<div className='w-full max-w-[400px] mx-auto mb-6 rounded-[20px] overflow-hidden shadow-lg'>
				<img
					className='w-full h-auto object-cover'
					alt='Golf players in virtual greens environment'
					src='/assets/figma/hero-background.png'
				/>
			</div>

			<div className='space-y-4 max-w-[500px] mx-auto text-left'>
				<HeroDescription>
					Step into a place built for people who live the game, not just play it. Our advanced simulator technology recreates the world's greatest courses in precise detail. You'll get the analytics you need, the challenges you crave, and a community that speaks your language.
				</HeroDescription>
				<HeroDescription>
					Improve your swing, hang with friends, or host a private event in The Virtual Greens. We're building a community of modern golfers, casual players, and anyone looking for a better way to spend their time in Riyadh.
				</HeroDescription>
			</div>
		</div>
	);

	// Enhanced decorative elements with responsive positioning
	const decorativeElements = (
		<div className='absolute inset-0 overflow-hidden'>
			<div
				className='absolute opacity-20 transition-all duration-500'
				style={{
					top: 'clamp(200px, 25vh, 300px)',
					left: 'clamp(100px, 12vw, 200px)',
					transform: 'rotate(348deg)',
				}}
			>
				<div className='w-[clamp(800px, 80vw, 1200px)] h-[clamp(600px, 60vh, 800px)] mix-blend-screen'>
					<img
						src='/assets/figma/decorative-shape.svg'
						alt=''
						className='w-full h-full object-contain'
					/>
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