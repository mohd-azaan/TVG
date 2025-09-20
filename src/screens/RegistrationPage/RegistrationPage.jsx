// src/screens/RegistrationPage/RegistrationPage.jsx
// Complete Registration page component featuring hero section and comprehensive registration form
// This component displays the "Join The 96" registration page with pixel-perfect form implementation
// RELEVANT FILES: App.jsx, MainLayout.jsx, styleguide.css, HeroSection.jsx

import React, { useState } from 'react';
import '../../styleguide.css';
import { SEOHead } from '../../components/SEO/SEOHead';
import { HeroSection } from './sections/HeroSection';
import { RegistrationFormSection } from './sections/RegistrationFormSection';

export const RegistrationPage = () => {
	return (
		<div className='registration-page w-full'>
			<SEOHead
				title="Register for Golf Lessons & Membership | Join TVG Riyadh"
				description="Register for golf lessons and membership at TVG Riyadh. Join the exclusive 96 members club. Premium golf simulator access, coaching, and social golf experiences."
				canonicalUrl="/registration"
				ogImage="/imgborderhover-1.png"
				keywords="register golf lessons Riyadh, golf membership registration, join TVG, golf lesson signup, membership application, exclusive golf club"
			/>
			{/* Hero Section - "Join The 96" */}
			<HeroSection />

			{/* Registration Form Section */}
			<RegistrationFormSection />
		</div>
	);
};

export default RegistrationPage;