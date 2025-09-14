// src/screens/LeaguesPage/LeaguesPage.jsx
// Complete Leagues page component featuring hero section, leaderboard, and what to expect section
// This component displays the leagues page layout with tournament leaderboard and league information
// RELEVANT FILES: App.jsx, MainLayout.jsx, styleguide.css, HeroSection.jsx

import React from 'react';
import '../../styleguide.css';
import { HeroSection } from './sections/HeroSection';
import { LeaderboardSection } from './sections/LeaderboardSection';
import { WhatToExpectSection } from './sections/WhatToExpectSection';

const LeaguesPage = () => {
	return (
		<div className='leagues-page w-full bg-white relative'>
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