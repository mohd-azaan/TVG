// src/screens/PlayPage/Sections/HeroSection.jsx
// Hero section for Play page with fully responsive layout and enhanced mobile optimization
// Now uses enhanced ResponsiveHeroSection with adaptive typography and fluid CTA placement
// RELEVANT FILES: PlayPage.jsx, ResponsiveHeroSection.jsx, ResponsiveTypography.jsx, tailwind.config.js

import React from 'react';
import { ResponsiveHeroSection } from '../../../components/shared/ResponsiveHeroSection';
import {
	HeroTitle,
	HeroTagline,
	HeroDescription,
	useResponsiveSpacing,
} from '../../../components/shared/ResponsiveTypography';

export const HeroSection = () => {
	const spacing = useResponsiveSpacing();

	// Responsive CTA Button component
	const CTAButton = ({ className = '', size = 'default' }) => {
		const sizeClasses = {
			default: 'px-8 py-3 text-base',
			large: 'px-10 py-4 text-lg',
			small: 'px-6 py-2 text-sm',
		};

		return (
			<button
				className={`bg-[#009444] hover:bg-[#007a38] transition-all duration-300 rounded-[50px] flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105 ${sizeClasses[size]} ${className}`}
			>
				<span className='font-TVG-typography-button text-white uppercase font-bold whitespace-nowrap'>
					Book Your Bay
				</span>
				<div className='w-5 h-5'>
					<svg
						className='w-full h-full transition-transform group-hover:translate-x-1'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M5 12H19M19 12L12 5M19 12L12 19'
							stroke='white'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</div>
			</button>
		);
	};

	// Desktop content with improved responsive layout
	const desktopContent = (
		<div className='flex items-center justify-between h-full w-full max-w-[1600px] mx-auto'>
			{/* Left content column */}
			<div className='flex-1 max-w-[655px] space-y-8'>
				<HeroTitle className='mb-6'>
					Your Game, Your Pace, Your Greens
				</HeroTitle>

				<HeroTagline className='mb-8'>The New Era of Indoor Golf</HeroTagline>

				<div className='space-y-6 max-w-[600px]'>
					<HeroDescription large>
						The ultimate golf and social experience, only in Riyadh.
					</HeroDescription>
					<HeroDescription large>
						At The Virtual Greens, playing golf doesn't mean dressing up or
						heading out of town. It means stepping into a sleek, air-conditioned
						space where you can tee off on the world's most iconic course, day
						or night, rain or shine. Unwind after work, celebrate with friends,
						or host an event with a twist. This is golf on your terms.
					</HeroDescription>
				</div>

				<div className='pt-4'>
					<CTAButton size='large' />
				</div>
			</div>

			{/* Right image column */}
			<div className='flex-1 max-w-[650px] ml-12'>
				<div className='aspect-[650/480] w-full bg-gradient-to-br from-[#009444] to-[#006f33] rounded-[30px] flex items-center justify-center shadow-2xl overflow-hidden'>
					<div className='text-center text-white space-y-4'>
						<div className='text-6xl'>⛳</div>
						<div className='text-2xl font-bold'>Golf Simulator</div>
						<div className='text-lg opacity-75'>Premium Experience</div>
					</div>
				</div>
			</div>
		</div>
	);

	// Tablet content with optimized layout
	const tabletContent = (
		<div
			className={`${spacing.heroElementSpacing} text-center max-w-4xl mx-auto`}
		>
			<HeroTitle className='mb-6'>Your Game, Your Pace, Your Greens</HeroTitle>

			<HeroTagline className='mb-8'>The New Era of Indoor Golf</HeroTagline>

			<div className='aspect-[4/3] w-full max-w-[600px] mx-auto mb-8 bg-gradient-to-br from-[#009444] to-[#006f33] rounded-[25px] flex items-center justify-center shadow-xl'>
				<div className='text-center text-white space-y-3'>
					<div className='text-5xl'>⛳</div>
					<div className='text-xl font-bold'>Golf Simulator</div>
					<div className='text-base opacity-75'>Premium Experience</div>
				</div>
			</div>

			<div className='space-y-6 max-w-[700px] mx-auto text-left mb-8'>
				<HeroDescription large>
					The ultimate golf and social experience, only in Riyadh.
				</HeroDescription>
				<HeroDescription large>
					At The Virtual Greens, playing golf doesn't mean dressing up or
					heading out of town. It means stepping into a sleek, air-conditioned
					space where you can tee off on the world's most iconic course, day or
					night, rain or shine. Unwind after work, celebrate with friends, or
					host an event with a twist. This is golf on your terms.
				</HeroDescription>
			</div>

			<div className='flex justify-center'>
				<CTAButton size='default' />
			</div>
		</div>
	);

	// Mobile content with stacked layout
	const mobileContent = (
		<div className={`${spacing.heroElementSpacing} text-center`}>
			<HeroTitle className='mb-4'>
				Your Game,
				<br />
				Your Pace,
				<br />
				Your Greens
			</HeroTitle>

			<HeroTagline className='mb-6'>The New Era of Indoor Golf</HeroTagline>

			<div className='aspect-[4/3] w-full max-w-[400px] mx-auto mb-6 bg-gradient-to-br from-[#009444] to-[#006f33] rounded-[20px] flex items-center justify-center shadow-lg'>
				<div className='text-center text-white space-y-2'>
					<div className='text-4xl'>⛳</div>
					<div className='text-lg font-bold'>Golf Simulator</div>
					<div className='text-sm opacity-75'>Premium Experience</div>
				</div>
			</div>

			<div className='space-y-4 max-w-[500px] mx-auto text-left mb-6'>
				<HeroDescription>
					The ultimate golf and social experience, only in Riyadh.
				</HeroDescription>
				<HeroDescription>
					At The Virtual Greens, playing golf doesn't mean dressing up or
					heading out of town. It means stepping into a sleek, air-conditioned
					space where you can tee off on the world's most iconic course, day or
					night, rain or shine. Unwind after work, celebrate with friends, or
					host an event with a twist. This is golf on your terms.
				</HeroDescription>
			</div>

			<div className='flex justify-center'>
				<CTAButton size='small' />
			</div>
		</div>
	);

	// Enhanced decorative elements with responsive positioning
	const decorativeElements = (
		<div className='absolute inset-0 overflow-hidden'>
			{/* Main decorative background - responsive positioning */}
			<div
				className='absolute opacity-30 transition-all duration-500'
				style={{
					top: 'clamp(200px, 30vh, 432px)',
					left: 'clamp(100px, 15vw, 342px)',
					transform: 'rotate(348deg)',
				}}
			>
				<div className='w-[clamp(1000px, 120vw, 2102px)] h-[clamp(800px, 90vh, 1454px)] relative overflow-hidden'>
					<div className='absolute inset-0 mix-blend-screen'>
						{/* Enhanced gradient backgrounds for better visual appeal */}
						<div className='absolute inset-0 bg-gradient-to-br from-green-400/25 via-emerald-500/15 to-transparent' />
						<div className='absolute inset-0 bg-gradient-to-tl from-green-300/20 via-transparent to-emerald-400/10' />
						<div className='absolute inset-0 bg-gradient-to-tr from-transparent via-green-500/10 to-green-400/15' />
					</div>
				</div>
			</div>
		</div>
	);

	return (
		<ResponsiveHeroSection
			backgroundColor='#102121'
			greenSection={true}
			greenSectionHeight='clamp(300px, 25vh, 435px)'
			minHeight='min-h-[100svh]'
			decorativeElements={decorativeElements}
			enableFluidLayout={true}
		>
			{{
				desktop: desktopContent,
				tablet: tabletContent,
				mobile: mobileContent,
			}}
		</ResponsiveHeroSection>
	);
};
