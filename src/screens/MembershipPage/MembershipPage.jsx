// src/screens/MembershipPage/MembershipPage.jsx
// Complete Membership page component featuring hero, comparison table, benefits, and CTA sections
// This component displays the full Membership page layout with all sections based on provided Figma design
// RELEVANT FILES: App.jsx, MainLayout.jsx, styleguide.css, HeroSection.jsx

import '../../styleguide.css';
import { ComparisonTableSection } from './Sections/ComparisonTableSection';
import { HeroSection } from './Sections/HeroSection';
import { WhyBecomeMemberSection } from './Sections/WhyBecomeMemberSection';

export const MembershipPage = () => {
	return (
		<div className='membership-page w-full'>
			{/* Hero Section - "BECAUSE GOLF IS BETTER WHEN IT'S YOURS" */}
			<HeroSection />

			{/* Comparison Table Section - "WHICH ONE FITS YOU BEST?" */}
			<ComparisonTableSection />

			{/* Why Become Member Section - Benefits list and CTA */}
			<WhyBecomeMemberSection />
		</div>
	);
};

export default MembershipPage;
