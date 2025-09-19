// src/screens/EventsPage/EventsPage.jsx
// Complete Events page component featuring hero section, venue info, event types, and CTAs
// This component displays the full Events page layout with all sections based on Figma design
// RELEVANT FILES: App.jsx, MainLayout.jsx, styleguide.css, colors.txt

import '../../styleguide.css';
import { EventsWeHostSection } from './sections/EventsWeHostSection';
import { HeroSection } from './sections/HeroSection';
import { VenueSection } from './sections/VenueSection';
import Corporate from '../../components/Events/Corporate';

export const EventsPage = () => {
	return (
		<div className='events-page w-full'>
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
