import React from 'react';
import { HeaderSection } from '../screens/HomepageDesktop/sections/HeaderSection/HeaderSection';
import { TestimonialsSection } from '../components/global/TestimonialsSection';
import { FooterSection } from '../components/global/FooterSection';

export const MainLayout = ({ children }) => {
	return (
		<div className='min-h-screen w-full bg-white'>
			<HeaderSection />
			<main className='w-full'>{children}</main>
			<TestimonialsSection />
			<FooterSection />
		</div>
	);
};
