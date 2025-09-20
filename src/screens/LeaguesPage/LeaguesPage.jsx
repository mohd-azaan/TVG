// src/screens/LeaguesPage/LeaguesPage.jsx
// Complete Leagues page component featuring hero section, leaderboard, and what to expect section
// This component displays the leagues page layout with tournament leaderboard and league information
// RELEVANT FILES: App.jsx, MainLayout.jsx, styleguide.css, HeroSection.jsx

import React from 'react';
import '../../styleguide.css';
import { SEOHead } from '../../components/SEO/SEOHead';
import { HeroSection } from './sections/HeroSection';
import { LeaderboardSection } from './sections/LeaderboardSection';
import { WhatToExpectSection } from './sections/WhatToExpectSection';

const LeaguesPage = () => {
	return (
		<div className='leagues-page w-full bg-white relative'>
			<SEOHead
				title="Golf Leagues & Tournaments Riyadh | Join TVG Golf League"
				description="Join competitive golf leagues and tournaments at TVG Riyadh. Weekly competitions, leaderboards, prizes, and social golf events. All skill levels welcome."
				canonicalUrl="/leagues"
				ogImage="/group.png"
				keywords="golf leagues Riyadh, golf tournaments Saudi Arabia, competitive golf, golf leaderboard, social golf events, weekly golf competitions"
			/>
			{/* Hero Section - Main leagues introduction with call to action */}
			<HeroSection />

			{/* Leaderboard Section - Tournament standings and player rankings */}
			<LeaderboardSection />

			{/* What to Expect Section - Features and benefits of joining leagues */}
			<WhatToExpectSection />
		</div>
	);
};

export default LeaguesPage;