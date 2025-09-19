import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/global/Navbar';
import { TestimonialsSection } from '../components/global/TestimonialsSection';
import { CallToActionSection } from '../components/global/CallToActionSection';
import { FooterSection } from '../components/global/FooterSection';
import { MobileHeader } from '../components/global/MobileHeader';
import { TestimonialProvider } from '../contexts/TestimonialContext';

export const MainLayout = ({ children }) => {
	const location = useLocation();

	// Smooth scroll to top when route changes
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, [location.pathname]);

	return (
		<TestimonialProvider>
			{/* Mobile view */}
			<div className="lg:hidden">
				<div className="fixed top-0 left-0 right-0 z-50">
					<MobileHeader />
				</div>
				<main className='w-full pt-20'>
					{children}
				</main>
				<CallToActionSection />
				<TestimonialsSection />
				<FooterSection />
			</div>

			{/* Desktop-only full website */}
			<div className='hidden lg:block min-h-screen w-full bg-[#102121]'>
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
