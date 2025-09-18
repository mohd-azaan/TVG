import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/global/Navbar';
import { TestimonialsSection } from '../components/global/TestimonialsSection';
import { CallToActionSection } from '../components/global/CallToActionSection';
import { FooterSection } from '../components/global/FooterSection';
import { MobileComingSoon } from '../components/global/MobileComingSoon';
import { TestimonialProvider } from '../contexts/TestimonialContext';

export const MainLayout = ({ children }) => {
	const location = useLocation();

	// Smooth scroll to top when route changes
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, [location.pathname]);

	return (
		<TestimonialProvider>
			{/* Mobile-only coming soon experience */}
			<MobileComingSoon />

			{/* Desktop-only full website */}
			<div className='hidden lg:block min-h-screen w-full bg-white'>
				<div className='fixed top-0 left-0 right-0 z-50 px-4'>
					<Navbar />
				</div>
				<main className='w-full'>{children}</main>
				<CallToActionSection />
				<TestimonialsSection />
				<FooterSection />
			</div>
		</TestimonialProvider>
	);
};
