import React from 'react';
import Navbar from '../components/global/Navbar';
import { TestimonialsSection } from '../components/global/TestimonialsSection';
import { FooterSection } from '../components/global/FooterSection';

export const MainLayout = ({ children }) => {
	return (
		<div className='min-h-screen w-full bg-white'>
			<div className='fixed top-0 left-0 right-0 z-50 px-4'>
				<Navbar />
			</div>
			<main className='w-full pt-24'>{children}</main>
			<TestimonialsSection />
			<FooterSection />
		</div>
	);
};
