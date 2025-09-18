// src/screens/EventsPage/EventsPage.jsx
// Complete Events page component featuring hero section, venue info, event types, and CTAs
// This component displays the full Events page layout with all sections based on Figma design
// RELEVANT FILES: App.jsx, MainLayout.jsx, styleguide.css, colors.txt

import React from 'react';
import '../../styleguide.css';
import './EventsPage.css';
import { HeroSection } from './sections/HeroSection';
import { FullAccessSection } from './sections/FullAccessSection';
import { EventTypesSection } from './sections/EventTypesSection';
import { CorporateSection } from './sections/CorporateSection';
import { WhatsIncludedSection } from './sections/WhatsIncludedSection';
import { CorporateOptionsSection } from './sections/CorporateOptionsSection';
import { ReadySection } from './sections/ReadySection';


export const EventsPage = () => {
	return (
		<div className='events-page w-full'>
			{/* Hero Section - "Your Event a Hole-in-One" */}
			<HeroSection />

			{/* Full Access Section - "A Venue That Fits Any Vibe" */}
			<FullAccessSection />

			{/* Event Types Section - "Events We Host" with carousel */}
			<EventTypesSection />

			{/* Corporate Section - "Corporate Events That Don't Feel Like Work" */}
			<CorporateSection />

			{/* What's Included Section - Features grid with icons */}
			<WhatsIncludedSection />

			{/* Corporate Options Section - Corporate-specific features */}
			<CorporateOptionsSection />

			{/* Ready Section - "Let's Plan Your Event" CTA */}
			<ReadySection />

		</div>
	);
};

export default EventsPage;