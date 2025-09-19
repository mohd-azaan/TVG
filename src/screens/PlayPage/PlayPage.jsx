// src/screens/PlayPage/PlayPage.jsx
// Complete Play page component featuring hero, bay selection, pricing, and technology sections
// This component displays the full Play page layout with all sections based on Figma design
// RELEVANT FILES: App.jsx, MainLayout.jsx, styleguide.css, tailwind.config.js

import '../../styleguide.css';
import { BaySelectionSection } from './Sections/BaySelectionSection';
import { GolfzonInfoSection } from './Sections/GolfzonInfoSection';
import { GolfzonNumbersSection } from './Sections/GolfzonNumbersSection';
import { HeroSection } from './Sections/HeroSection';
import { PricingSection } from './Sections/PricingSection';
import { TwoVisionNXSection } from './Sections/TwoVisionNXSection';

export const PlayPage = () => {
	return (
		<div className='play-page w-full mb-16'>
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
		</div>
	);
};

export default PlayPage;
