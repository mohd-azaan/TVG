// src/screens/LearnPage/LearnPage.jsx
// Complete Learn page component featuring academy information, pricing, lesson types, and corporate programs
// This component displays the full Learn page layout with all sections based on provided Figma design
// RELEVANT FILES: App.jsx, MainLayout.jsx, HeroSection.jsx, PackagesSection.jsx

import React from 'react';
import { HeroSection } from './sections/HeroSection/HeroSection';
import { PackagesSection } from './sections/PackagesSection/PackagesSection';
import { LeaguesSection } from './sections/LeaguesSection/LeaguesSection';
import { LessonTypesSection } from './sections/LessonTypesSection/LessonTypesSection';
import { LessonLevelsSection } from './sections/LessonLevelsSection/LessonLevelsSection';
import { WhatYouWorkOnSection } from './sections/WhatYouWorkOnSection/WhatYouWorkOnSection';
import { NewToGolfSection } from './sections/NewToGolfSection/NewToGolfSection';
import { CorporateSection } from './sections/CorporateSection/CorporateSection';

export const LearnPage = () => {
	return (
		<div className='learn-page w-full'>
			{/* Hero Section - "Train at TVG Academy" */}
			<HeroSection />

			{/* Packages Section - Pricing cards with Start, Improve, Boost options */}
			<PackagesSection />

			{/* Leagues Section - Promotional card for tournaments and leagues */}
			<LeaguesSection />

			{/* Types of Lessons Section - Adults Academy and Juniors Academy */}
			<LessonTypesSection />

			{/* Lesson Levels Section - Expandable levels from beginner to advanced */}
			<LessonLevelsSection />

			{/* What You'll Work On Section - List of lesson topics and focus areas */}
			<WhatYouWorkOnSection />

			{/* New to Golf Section - CTA section for beginners */}
			<NewToGolfSection />

			{/* Corporate Programs Section - Team building and corporate training */}
			<CorporateSection />
		</div>
	);
};

export default LearnPage;