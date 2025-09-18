// src/screens/SimulatorPage/SimulatorPage.jsx
// Complete Simulator page component featuring hero, features, equipment, and gallery sections
// This component displays the full Simulator page layout with all sections based on Figma design
// RELEVANT FILES: App.jsx, MainLayout.jsx, styleguide.css, tailwind.config.js

import React from 'react';
import '../../styleguide.css';
import { HeroSection } from './Sections/HeroSection';
import { FeaturesSection } from './Sections/FeaturesSection';
import { EquipmentSection } from './Sections/EquipmentSection';
import { SpecificationsSection } from './Sections/SpecificationsSection';
import { CoursesSection } from './Sections/CoursesSection';
import { GallerySection } from './Sections/GallerySection';
import { PlanningSection } from './Sections/PlanningSection';
import WhereToUse from './Sections/WhereToUse';

export const SimulatorPage = () => {
	return (
		<div className='simulator-page w-full'>
			{/* Hero Section - "BRING THE COURSE TO YOUR SPACE" */}
			<HeroSection />
			<WhereToUse />
			{/* Features Section - "THE MOST CONVENIENT FORMS AND LOCATION" with benefit boxes */}
			<FeaturesSection />

			{/* Equipment Section - "MAKE YOUR FIRST ROUND COUNT" with simulator details */}
			<EquipmentSection />

			{/* Specifications Section - Equipment specifications table */}
			<SpecificationsSection />

			{/* Courses Section - "WHO CHOSE OUR COURSES" with course images */}
			<CoursesSection />

			{/* Gallery Section - "SEE OUR SELECTION" with course previews */}
			<GallerySection />

			{/* Planning Section - "PLAN YOUR GAME" bottom section */}
			<PlanningSection />
		</div>
	);
};

export default SimulatorPage;
