// src/screens/SimulatorPage/SimulatorPage.jsx
// Complete Simulator page component featuring hero, features, equipment, and gallery sections
// This component displays the full Simulator page layout with all sections based on Figma design
// RELEVANT FILES: App.jsx, MainLayout.jsx, styleguide.css, tailwind.config.js

import '../../styleguide.css';
import { FeaturesSection } from './Sections/FeaturesSection';
import { GolfzonAdvantagesSection } from './Sections/GolfzonAdvantagesSection';
import { WhyGolfzonSection } from './Sections/WhyGolfzonSection';
import { HowWeHelpSection } from './Sections/HowWeHelpSection';
import { AwardsSection } from './Sections/AwardsSection';
import { HeroSection } from './Sections/HeroSection';
import Simulator from './Sections/Simulator';
import WhereToUse from './Sections/WhereToUse';
import SpecSection from './Sections/SpecSection';
import { ReadyToOwnSection } from './Sections/ReadyToOwnSection';

export const SimulatorPage = () => {
	return (
		<div className='simulator-page w-full'>
			{/* Hero Section - "BRING THE COURSE TO YOUR SPACE" */}
			<HeroSection />
			<FeaturesSection />
			<WhereToUse />

			<Simulator />
			{/* Specifications Table Section */}
			<SpecSection />
			<GolfzonAdvantagesSection />
			<WhyGolfzonSection />
			<HowWeHelpSection />
			<AwardsSection />
			<ReadyToOwnSection />
		</div>
	);
};

export default SimulatorPage;
