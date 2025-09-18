// src/screens/LearnPage/LearnPage.jsx
// Complete Learn page component featuring academy information, pricing, lesson types, and corporate programs
// This component displays the full Learn page layout with all sections based on provided Figma design
// RELEVANT FILES: App.jsx, MainLayout.jsx, HeroSection.jsx, PackagesSection.jsx

import { CorporateSection } from './sections/CorporateSection/CorporateSection';
import { HeroSection } from './sections/HeroSection/HeroSection';
import { LessonLevelsSection } from './sections/LessonLevelsSection/LessonLevelsSection';
import { LessonTypesSection } from './sections/LessonTypesSection/LessonTypesSection';
import { NewToGolfSection } from './sections/NewToGolfSection/NewToGolfSection';
import { PackagesSection } from './sections/PackagesSection/PackagesSection';
import { WhatYouWorkOnSection } from './sections/WhatYouWorkOnSection/WhatYouWorkOnSection';

export const LearnPage = () => {
	return (
		<div className='learn-page w-full'>
			{/* Hero Section - "Train at TVG Academy" */}
			<HeroSection />

			{/* Packages Section - Pricing cards with Start, Improve, Boost options */}
			<PackagesSection />

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
