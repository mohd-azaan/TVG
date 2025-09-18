import React from 'react';
import '../../styleguide.css';
import './ContactPage.css';
import { HeroSection } from './sections/HeroSection';
import { ContactBody } from './sections/ContactBody'; // Using the new combined component
import { ReadyToVisitSection } from './sections/ReadyToVisitSection';

export const ContactPage = () => {
	return (
		<div className='w-full bg-white min-h-screen'>
			{/* Hero Section - Untouched as per instruction */}
			<HeroSection />

			{/* Combined Contact Info, Form, and Map section */}
			<ContactBody />

			{/* Ready to Visit Section - Untouched */}
			{/* <ReadyToVisitSection /> */}
		</div>
	);
};

export default ContactPage;