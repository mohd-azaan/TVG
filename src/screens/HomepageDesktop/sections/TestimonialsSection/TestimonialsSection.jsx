// src/screens/HomepageDesktop/sections/TestimonialsSection/TestimonialsSection.jsx
// Homepage-specific testimonial section using reusable component
// Imports testimonial data for homepage and renders with call-to-action

import React from 'react';
import { TestimonialSection } from '../../../../components/sections/TestimonialSection';
import { CallToActionSection } from '../../../../components/sections/CallToActionSection';
import { testimonialData } from '../../../../data/testimonials';

export const TestimonialsSection = () => {
	return (
		<>
			{/* Testimonial Section with Homepage Data */}
			<TestimonialSection 
				quote={testimonialData.homepage.quote}
				authorName={testimonialData.homepage.authorName}
				authorTitle={testimonialData.homepage.authorTitle}
				authorImage={testimonialData.homepage.authorImage}
				backgroundColor={testimonialData.homepage.backgroundColor}
				showAccentLines={testimonialData.homepage.showAccentLines}
			/>
			
			{/* Call to Action Section */}
			<CallToActionSection />
		</>
	);
};
