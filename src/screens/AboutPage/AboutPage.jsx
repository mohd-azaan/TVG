// src/screens/AboutPage/AboutPage.jsx
// Complete About page component featuring hero section, features, testimonials, and footer
// This component displays the full About page layout with all sections based on provided design
// RELEVANT FILES: App.jsx, MainLayout.jsx, styleguide.css, colors.txt

import React from 'react';
import '../../styleguide.css';
import './AboutPage.css';
import { HeroSection } from './Sections/HeroSection';
import { VisionMissionSection } from './Sections/VisionMissionSection';
import { WorldClassTechSection } from './Sections/WorldClassTechSection';
import { Vision2030Section } from './Sections/Vision2030Section';
import { FeaturesSection } from './Sections/FeaturesSection';

// Import existing components from homepage that we can reuse
import { TestimonialsSection } from '../HomepageDesktop/sections/TestimonialsSection/TestimonialsSection';
import { FooterSection } from '../HomepageDesktop/sections/FooterSection/FooterSection';

export const AboutPage = () => {
	return (
		<div className='about-page w-full'>
			{/* Hero Section - "Where Golf People Belong" */}
			<HeroSection />

			{/* Vision & Mission Section - Vision, Mission, and What We Believe cards */}
			<VisionMissionSection />

			{/* World-Class Tech Section - Technology showcase with CTA */}
			<WorldClassTechSection />

			{/* Vision 2030 Section - Alignment with Saudi Arabia's Vision 2030 */}
			<Vision2030Section />

			{/* Features Section - "Not a Golfer Yet? That's the Point" with amenities grid */}
			<FeaturesSection />
		</div>
	);
};

export default AboutPage;
