// src/screens/AboutPage/AboutPage.jsx
// Complete About page component featuring hero section, features, testimonials, and footer
// This component displays the full About page layout with all sections based on provided design
// RELEVANT FILES: App.jsx, MainLayout.jsx, styleguide.css, colors.txt

import React from 'react';
import '../../styleguide.css';
import './AboutPage.css';
import { SEOHead } from '../../components/SEO/SEOHead';
import { Hero } from './Sections/Hero';
import { VisionMissionSection } from './Sections/VisionMissionSection';
import { WorldClassTechSection } from './Sections/WorldClassTechSection';
import { Vision2030Section } from './Sections/Vision2030Section';
import FeaturesSection from './Sections/FeaturesSection';


export const AboutPage = () => {
	return (
		<div className='about-page w-full'>
			<SEOHead
				title="About TVG - Premier Golf Simulator Lounge | The Virtual Greens"
				description="Discover The Virtual Greens story. Riyadh's premier indoor golf destination featuring cutting-edge Golfzon technology, world-class amenities, and Vision 2030 alignment."
				canonicalUrl="/about"
				ogImage="/assets/figma/features-image.png"
				keywords="about TVG, golf simulator lounge Riyadh, Golfzon technology, Vision 2030, indoor golf Saudi Arabia, world class golf facility"
			/>
			{/* Hero Section - "Where Golf People Belong" */}
			<Hero />

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
