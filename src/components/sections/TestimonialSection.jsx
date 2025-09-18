// src/components/sections/TestimonialSection.jsx
// Reusable testimonial section component with props for dynamic content
// Exact replica of Figma design (node-id=2911-2856) with configurable content
// Can be used across different pages with different testimonial data

import React from 'react';

/**
 * Props interface for TestimonialSection component
 * @param {string} quote - The testimonial quote text
 * @param {string} authorName - Name of the person giving testimonial
 * @param {string} authorTitle - Title/role of the person (e.g., "Ambassador", "Member")
 * @param {string} authorImage - Path to author's image
 * @param {string} backgroundColor - Background gradient colors (optional)
 * @param {boolean} showAccentLines - Whether to show green accent lines at bottom
 * @param {string} className - Additional CSS classes (optional)
 */

export const TestimonialSection = ({
	quote = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tortor erat, pretium et mattis quis, ultrices eget velit. Vivamus sit amet egestas justo. Nam sagittis, justo vitae sagittis auctor, mi diam laoreet elit, aliquet dignissim orci turpis vitae eros. Nulla eget pretium diam, vel egestas dui. Ut arcu eros, fermentum sit amet dolor a, elementum vehicula purus.",
	authorName = "John Doe",
	authorTitle = "Ambassador",
	authorImage = "/chatgpt-image-aug-22--2025--09-37-50-pm-1-2.png",
	backgroundColor = "from-[#0E5C4E] to-[#006B4F]",
	showAccentLines = true,
	className = ""
}) => {
	return (
		<section className={`relative w-full h-[500px] md:h-[600px] bg-gradient-to-r ${backgroundColor} overflow-hidden ${className}`}>
			{/* Background decorative lines - positioned exactly like Figma */}
			{showAccentLines && (
				<div className='absolute inset-0'>
					{/* Green accent lines */}
					<div className='absolute bottom-0 left-0 w-full h-[120px]'>
						{/* Multiple green lines with varying opacity */}
						<div className='absolute bottom-0 left-0 w-full h-[2px] bg-[#7DDB8A] opacity-80'></div>
						<div className='absolute bottom-[20px] left-0 w-full h-[1px] bg-[#7DDB8A] opacity-60'></div>
						<div className='absolute bottom-[35px] left-0 w-full h-[1px] bg-[#7DDB8A] opacity-40'></div>
						<div className='absolute bottom-[50px] left-0 w-full h-[1px] bg-[#7DDB8A] opacity-30'></div>
						<div className='absolute bottom-[70px] left-0 w-full h-[1px] bg-[#7DDB8A] opacity-20'></div>
						<div className='absolute bottom-[90px] left-0 w-full h-[1px] bg-[#7DDB8A] opacity-15'></div>
						<div className='absolute bottom-[110px] left-0 w-full h-[1px] bg-[#7DDB8A] opacity-10'></div>
					</div>
				</div>
			)}

			{/* Main content container */}
			<div className='relative w-full h-full max-w-[1920px] mx-auto px-4 md:px-8'>
				{/* Person image - positioned exactly like Figma with responsive adjustments */}
				<div className='absolute left-4 md:left-[120px] top-[40px] md:top-[60px] w-[280px] md:w-[380px] h-[360px] md:h-[480px]'>
					<img
						className='w-full h-full object-cover object-center rounded-lg md:rounded-none'
						alt={`${authorName} testimonial`}
						src={authorImage}
					/>
				</div>

				{/* Testimonial content - positioned exactly like Figma with responsive adjustments */}
				<div className='absolute right-4 md:right-[120px] top-[40px] md:top-[80px] w-[calc(100%-300px)] md:w-[700px] h-[400px] md:h-[440px]'>
					{/* Large quotation mark - positioned exactly like Figma */}
					<div 
						className='absolute top-0 left-0 text-white text-[120px] md:text-[200px] leading-none font-black opacity-30'
						style={{
							fontFamily: 'var(--TVG-typography-h1-font-family)',
							fontWeight: '900'
						}}
					>
						"
					</div>

					{/* Testimonial text - positioned exactly like Figma */}
					<div className='absolute top-[80px] md:top-[120px] left-[40px] md:left-[80px] w-full md:w-[580px] pr-4 md:pr-0'>
						<p 
							className='text-white leading-relaxed mb-6 md:mb-8 text-[16px] md:text-[20px]'
							style={{
								fontFamily: 'var(--TVG-typography-default-font-family)',
								lineHeight: '28px',
								fontWeight: '400',
								letterSpacing: '0px'
							}}
						>
							{quote}
						</p>

						{/* Attribution - positioned exactly like Figma */}
						<div 
							className='text-[#7DDB8A] font-bold text-[18px] md:text-[22px]'
							style={{
								fontFamily: 'var(--TVG-typography-tagline-font-family)',
								fontWeight: 'var(--TVG-typography-tagline-font-weight)',
								letterSpacing: 'var(--TVG-typography-tagline-letter-spacing)',
								lineHeight: 'var(--TVG-typography-tagline-line-height)'
							}}
						>
							{authorTitle}, {authorName}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
