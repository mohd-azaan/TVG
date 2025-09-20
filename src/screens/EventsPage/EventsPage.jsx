// src/screens/EventsPage/EventsPage.jsx
// Complete Events page component featuring hero section, venue info, event types, and CTAs
// This component displays the full Events page layout with all sections based on Figma design
// RELEVANT FILES: App.jsx, MainLayout.jsx, styleguide.css, colors.txt

import '../../styleguide.css';
import { SEOHead } from '../../components/SEO/SEOHead';
import { EventsWeHostSection } from './sections/EventsWeHostSection';
import { HeroSection } from './sections/HeroSection';
import { VenueSection } from './sections/VenueSection';
import Corporate from '../../components/Events/Corporate';

export const EventsPage = () => {
	return (
		<div className='events-page w-full'>
			<SEOHead
				title="Corporate Golf Events & Venue Rental | TVG Event Space Riyadh"
				description="Host corporate events, team building, and private parties at TVG Riyadh. Premium golf simulator venue rental with catering and entertainment options."
				canonicalUrl="/events"
				ogImage="/freepik-background.png"
				keywords="corporate golf events Riyadh, venue rental Saudi Arabia, team building golf, private golf events, corporate entertainment, golf venue booking"
			/>
			{/* Hero Section - "Your Event a Hole-in-One" */}
			<HeroSection />
			<VenueSection />
			{/* Corporate events section */}
			<EventsWeHostSection />
			<Corporate />
		</div>
	);
};

export default EventsPage;
