// src/screens/PartnershipPage/PartnershipPage.jsx
// Complete Partnership page component featuring hero section, why partner section, indoor movement section, and growth section
// This component displays the full Partnership page layout without testimonials or footer sections as requested
// RELEVANT FILES: App.jsx, PartnershipLayout.jsx, styleguide.css, Navbar.jsx

import React from 'react';
import '../../styleguide.css';
import './PartnershipPage.css';
import { SEOHead } from '../../components/SEO/SEOHead';
import { HeroSection } from './sections/HeroSection';
import { WhyPartnerSection } from './sections/WhyPartnerSection';
import { GrowthSection } from './sections/GrowthSection';

export const PartnershipPage = () => {
	return (
		<div className='partnership-page w-full bg-white'>
			<SEOHead
				title="Golf Simulator Partnership Opportunities | Business Investment TVG"
				description="Partner with The Virtual Greens for golf simulator business opportunities. Franchise options, investment opportunities, and growth potential in Saudi Arabia's golf industry."
				canonicalUrl="/partnership"
				ogImage="/saudi-vision-2030-logo.svg"
				keywords="golf simulator franchise, business partnership Saudi Arabia, golf industry investment, TVG partnership, franchise opportunities, golf business growth"
			/>
			{/* Hero Section - "Partner with The Virtual Greens" */}
			<HeroSection />

			{/* Why Partner Section - 3 feature cards with benefits and indoor movement */}
			<WhyPartnerSection />

			{/* Let's Grow the Game Section - CTA section */}
			<GrowthSection />
		</div>
	);
};

export default PartnershipPage;