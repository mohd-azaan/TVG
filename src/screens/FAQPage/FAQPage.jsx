// src/screens/FAQPage/FAQPage.jsx
// Complete FAQ page component featuring hero section and interactive FAQ sections
// This component displays the FAQ page with two-column accordion layout based on Figma design
// RELEVANT FILES: App.jsx, MainLayout.jsx, HeroSection.jsx, FAQSection.jsx

import React from 'react';
import { HeroSection } from './sections/HeroSection';
import { FAQSection } from './sections/FAQSection';

export const FAQPage = () => {
	return (
		<div className='faq-page w-full'>
			{/* Hero Section with title and subtitle */}
			<HeroSection />

			{/* Main FAQ Content with accordion functionality */}
			<FAQSection />
		</div>
	);
};

export default FAQPage;