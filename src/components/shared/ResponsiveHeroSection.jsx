// src/components/shared/ResponsiveHeroSection.jsx
// Advanced responsive hero section with fluid container system and adaptive height
// Provides ultra-responsive layout system for all device sizes with optimal UX
// RELEVANT FILES: HeroSection.jsx, styleguide.css, tailwind.config.js, AboutPage.jsx

import React from 'react';

export const ResponsiveHeroSection = ({
	children,
	backgroundColor = '#272727',
	greenSection = true,
	greenSectionHeight = 'clamp(300px, 25vh, 435px)',
	minHeight = 'min-h-[100svh]', // Use svh for mobile-optimized viewport height
	className = '',
	backgroundImage = null,
	backgroundOverlay = null,
	decorativeElements = null,
	containerPadding = 'px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16',
	verticalSpacing = 'py-8 sm:py-12 md:py-16 lg:py-20',
	contentMaxWidth = 'max-w-[1920px]',
	enableFluidLayout = true,
	mobileFirst = true
}) => {
	// Adaptive height system that responds to content and viewport
	const adaptiveHeight = `${minHeight} ${enableFluidLayout ? 'min-h-[100dvh]' : ''} lg:min-h-screen`;

	// Enhanced container system with better spacing control
	const containerClasses = enableFluidLayout
		? 'w-full mx-auto relative flex flex-col h-full'
		: 'w-full h-full relative';

	return (
		<section
			className={`relative w-full ${adaptiveHeight} overflow-hidden ${className}`}
			style={{ backgroundColor }}
		>
			{/* Background image with improved responsiveness */}
			{backgroundImage && (
				<div
					className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-300"
					style={{
						backgroundImage: `url(${backgroundImage})`,
						backgroundPosition: 'center center',
						backgroundSize: 'cover'
					}}
				/>
			)}

			{/* Enhanced background overlay with better mobile optimization */}
			{backgroundOverlay && (
				<div className={`absolute inset-0 ${backgroundOverlay} transition-opacity duration-300`} />
			)}

			{/* Decorative elements with responsive positioning */}
			{decorativeElements && (
				<div className="absolute inset-0 pointer-events-none overflow-hidden">
					{decorativeElements}
				</div>
			)}

			{/* Responsive green accent section */}
			{greenSection && (
				<div
					className="absolute bottom-0 left-0 w-full bg-[#006f33] transition-all duration-300"
					style={{ height: greenSectionHeight }}
				/>
			)}

			{/* Advanced responsive content container */}
			<div className={`relative z-10 ${containerClasses} ${contentMaxWidth} mx-auto`}>
				{/* Ultra-wide desktop layout (1536px+) */}
				<div className="hidden 2xl:block h-full">
					<div className="px-20 py-24 h-full">
						{children.ultraWide || children.desktop || children}
					</div>
				</div>

				{/* Desktop layout (1024px - 1535px) */}
				<div className="hidden lg:block 2xl:hidden h-full">
					<div className="px-12 py-20 h-full">
						{children.desktop || children}
					</div>
				</div>

				{/* Tablet layout (768px - 1023px) */}
				<div className="hidden md:block lg:hidden">
					<div className={`${containerPadding} ${verticalSpacing} min-h-[80vh]`}>
						{children.tablet || children.mobile || children}
					</div>
				</div>

				{/* Large mobile layout (640px - 767px) */}
				<div className="hidden sm:block md:hidden">
					<div className="px-6 py-12 min-h-[75vh]">
						{children.largeMobile || children.mobile || children}
					</div>
				</div>

				{/* Small mobile layout (320px - 639px) */}
				<div className="block sm:hidden">
					<div className="px-4 py-8 min-h-[70vh]">
						{children.mobile || children}
					</div>
				</div>
			</div>

			{/* Mobile-optimized safe area spacing for notched devices */}
			<style jsx>{`
				@supports (padding: max(0px)) {
					.mobile-safe-area {
						padding-left: max(16px, env(safe-area-inset-left));
						padding-right: max(16px, env(safe-area-inset-right));
						padding-top: max(32px, env(safe-area-inset-top));
						padding-bottom: max(32px, env(safe-area-inset-bottom));
					}
				}
			`}</style>
		</section>
	);
};