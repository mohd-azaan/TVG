// src/screens/PlayPage/PlayPage.jsx
// Complete Play page component featuring hero, bay selection, pricing, and technology sections
// This component displays the full Play page layout with all sections based on Figma design
// RELEVANT FILES: App.jsx, MainLayout.jsx, styleguide.css, tailwind.config.js

import React from 'react';
import '../../styleguide.css';
import { HeroSection } from './Sections/HeroSection';
import { BaySelectionSection } from './Sections/BaySelectionSection';
import { PricingSection } from './Sections/PricingSection';
import { GolfzonInfoSection } from './Sections/GolfzonInfoSection';
import { TwoVisionNXSection } from './Sections/TwoVisionNXSection';
import { GolfzonNumbersSection } from './Sections/GolfzonNumbersSection';

// Import existing components from homepage that we can reuse
import { TestimonialsSection } from '../HomepageDesktop/sections/TestimonialsSection/TestimonialsSection';
import { FooterSection } from '../HomepageDesktop/sections/FooterSection/FooterSection';

export const PlayPage = () => {
	return (
		<div className='play-page w-full'>
			{/* Hero Section - "Your Game, Your Pace, Your Greens" */}
			<HeroSection />

			{/* Bay Selection Section - "Choose Your Bay" with 3 bay types */}
			<BaySelectionSection />

			{/* Pricing Section - Pricing tables with tabs */}
			<PricingSection />

			{/* Golfzon Info Section - "What is Golfzon?" */}
			<GolfzonInfoSection />

			{/* TwoVisionNX Technology Section - 5 feature cards */}
			<TwoVisionNXSection />

			{/* Golfzon Numbers Section - Statistics grid */}
			<GolfzonNumbersSection />

			{/* Testimonials Section - Reuse from homepage */}
			<TestimonialsSection />

			{/* Footer Section - Reuse from homepage */}
			<FooterSection />
		</div>
	);
};

export default PlayPage;