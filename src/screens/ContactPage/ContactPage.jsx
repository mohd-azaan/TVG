// src/screens/ContactPage/ContactPage.jsx
// Complete Contact page component featuring hero section, contact information, form, and map
// This component displays the full Contact page layout with all sections based on provided Figma design
// RELEVANT FILES: App.jsx, MainLayout.jsx, styleguide.css, ContactPage.css

import React from 'react';
import '../../styleguide.css';
import './ContactPage.css';
import { HeroSection } from './sections/HeroSection';
import { ContactInfoSection } from './sections/ContactInfoSection';
import { ContactFormSection } from './sections/ContactFormSection';
import { GoogleMapSection } from './sections/GoogleMapSection';
import { ReadyToVisitSection } from './sections/ReadyToVisitSection';

export const ContactPage = () => {
	return (
		<div className='contact-page w-full bg-white'>
			{/* Hero Section - "CONTACT THE VIRTUAL GREENS" */}
			<HeroSection />

			{/* Contact Info & Form Section - Contact details and contact form side by side */}
			<section className="contact-main-section bg-white h-[1457px] relative overflow-hidden w-full">
				<ContactInfoSection />
				<ContactFormSection />
				<GoogleMapSection />
			</section>

			{/* Ready to Visit Section - Standard CTA section */}
			<ReadyToVisitSection />
		</div>
	);
};

export default ContactPage;