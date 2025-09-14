// src/screens/RegistrationPage/RegistrationPage.jsx
// Complete Registration page component featuring hero section and comprehensive registration form
// This component displays the "Join The 96" registration page with pixel-perfect form implementation
// RELEVANT FILES: App.jsx, MainLayout.jsx, styleguide.css, HeroSection.jsx

import React, { useState } from 'react';
import '../../styleguide.css';
import { HeroSection } from './sections/HeroSection';
import { RegistrationFormSection } from './sections/RegistrationFormSection';

export const RegistrationPage = () => {
	return (
		<div className='registration-page w-full'>
			{/* Hero Section - "Join The 96" */}
			<HeroSection />

			{/* Registration Form Section */}
			<RegistrationFormSection />
		</div>
	);
};

export default RegistrationPage;