
// src/screens/OurStoryPage/OurStoryPage.jsx
// Complete Our Story page component featuring hero section and story content
// This component displays the Our Story page with narrative content based on Figma design
// RELEVANT FILES: App.jsx, MainLayout.jsx, HeroSection.jsx, StoryContentSection.jsx

import React from 'react';
import { HeroSection } from './sections/HeroSection';
import { StoryContentSection } from './sections/StoryContentSection';

export const OurStoryPage = () => {
	return (
		<div className='our-story-page w-full'>
			{/* Hero Section with title and subtitle */}
			<HeroSection />

			{/* Main Story Content with narrative text */}
			<StoryContentSection />
		</div>
	);
};

export default OurStoryPage;
