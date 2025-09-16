// src/components/shared/ResponsiveTypography.jsx
// Responsive typography system with adaptive scaling for optimal readability across devices
// Provides clamp-based scaling for hero titles, text, and taglines with consistent hierarchy
// RELEVANT FILES: ResponsiveHeroSection.jsx, tailwind.config.js, HeroSection.jsx

import React from 'react';

// Typography scale configuration with optimal clamp() values for each device range
const typographyScale = {
	// Hero titles - main headlines
	heroTitle: {
		fontSize: 'clamp(3rem, 8vw, 10rem)', // 48px - 160px
		lineHeight: 'clamp(1, 0.95, 1.1)',
		letterSpacing: 'clamp(1px, 0.15vw, 3px)',
		fontWeight: '900'
	},

	// Welcome/intro text
	heroWelcome: {
		fontSize: 'clamp(1.75rem, 3.5vw, 3.5rem)', // 28px - 56px
		lineHeight: 'clamp(1.1, 1.15, 1.2)',
		letterSpacing: 'clamp(0.5px, 0.08vw, 1.2px)',
		fontWeight: 'bold'
	},

	// Taglines and subtitles
	heroTagline: {
		fontSize: 'clamp(1rem, 1.5vw, 1.5rem)', // 16px - 24px
		lineHeight: 'clamp(1.2, 1.3, 1.4)',
		letterSpacing: 'clamp(0.3px, 0.05vw, 0.8px)',
		fontWeight: '600'
	},

	// Body text in hero sections
	heroText: {
		fontSize: 'clamp(0.875rem, 1.2vw, 1.125rem)', // 14px - 18px
		lineHeight: 'clamp(1.4, 1.5, 1.6)',
		letterSpacing: 'clamp(0.1px, 0.02vw, 0.3px)',
		fontWeight: '400'
	},

	// Large body text for important descriptions
	heroTextLarge: {
		fontSize: 'clamp(1.125rem, 1.5vw, 1.5rem)', // 18px - 24px
		lineHeight: 'clamp(1.4, 1.5, 1.6)',
		letterSpacing: 'clamp(0.1px, 0.02vw, 0.3px)',
		fontWeight: '500'
	}
};

// Typography component with responsive props
export const ResponsiveText = ({
	variant = 'heroText',
	children,
	className = '',
	color = 'text-white',
	fontFamily = "font-['Morganite']",
	customScale = null,
	as: Component = 'p',
	...props
}) => {
	const scale = customScale || typographyScale[variant] || typographyScale.heroText;

	const styles = {
		fontSize: scale.fontSize,
		lineHeight: scale.lineHeight,
		letterSpacing: scale.letterSpacing,
		fontWeight: scale.fontWeight
	};

	return (
		<Component
			className={`${fontFamily} ${color} ${className}`}
			style={styles}
			{...props}
		>
			{children}
		</Component>
	);
};

// Pre-configured components for common hero elements
export const HeroTitle = ({ children, className = '', color = 'text-white', ...props }) => (
	<ResponsiveText
		variant="heroTitle"
		as="h1"
		className={`uppercase tracking-wide ${className}`}
		color={color}
		fontFamily="font-['Morganite']"
		{...props}
	>
		{children}
	</ResponsiveText>
);

export const HeroWelcome = ({ children, className = '', color = 'text-white', ...props }) => (
	<ResponsiveText
		variant="heroWelcome"
		as="p"
		className={`tracking-wide ${className}`}
		color={color}
		fontFamily="font-['Morganite']"
		{...props}
	>
		{children}
	</ResponsiveText>
);

export const HeroTagline = ({ children, className = '', color = 'text-[#7ddb8a]', ...props }) => (
	<ResponsiveText
		variant="heroTagline"
		as="h3"
		className={`uppercase tracking-wide ${className}`}
		color={color}
		fontFamily="font-TVG-typography-tagline"
		{...props}
	>
		{children}
	</ResponsiveText>
);

export const HeroDescription = ({ children, className = '', color = 'text-[#dedede]', large = false, ...props }) => (
	<ResponsiveText
		variant={large ? 'heroTextLarge' : 'heroText'}
		as="p"
		className={className}
		color={color}
		fontFamily="font-TVG-typography-hero-text"
		{...props}
	>
		{children}
	</ResponsiveText>
);

// Responsive spacing utilities for hero sections
export const useResponsiveSpacing = () => ({
	// Vertical spacing between hero elements
	heroElementSpacing: 'space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10',

	// Container padding for different screen sizes
	heroPadding: 'px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20',

	// Vertical padding for hero sections
	heroVerticalPadding: 'py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24',

	// Maximum content width for readability
	heroMaxWidth: 'max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl',

	// Responsive margins for layout positioning
	heroMargins: 'mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12'
});

// Export the typography scale for custom usage
export { typographyScale };