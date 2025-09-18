// src/screens/SimulatorPage/SimulatorPage.jsx
// Complete Simulator page component featuring hero, features, equipment, and gallery sections
// This component displays the full Simulator page layout with all sections based on Figma design
// RELEVANT FILES: App.jsx, MainLayout.jsx, styleguide.css, tailwind.config.js

import '../../styleguide.css';
import { FeaturesSection } from './Sections/FeaturesSection';
import { GolfzonAdvantagesSection } from './Sections/GolfzonAdvantagesSection';
import { HeroSection } from './Sections/HeroSection';
import Simulator from './Sections/Simulator';
import Simulators from './Sections/Simulator';
import WhereToUse from './Sections/WhereToUse';
import SpecSection from './Sections/SpecSection';

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
		</div>
	);
};

export default SimulatorPage;
