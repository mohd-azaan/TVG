// src/components/global/TestimonialsSection.jsx
// Exact replica of Figma testimonial section design (node-id=2911-2856)
// Features person with golf club, large quote, testimonial text with green accent lines
// Reusable component system with route-based content selection

import { useLocation } from 'react-router-dom';
import { testimonialData } from '../../data/testimonials';

export const TestimonialsSection = () => {
	const location = useLocation();

	// Map route paths to testimonial data keys
	const getPageKey = (pathname) => {
		if (pathname === '/') return 'homepage';
		if (pathname === '/about') return 'aboutPage';
		if (pathname === '/our-story') return 'ourStoryPage';
		if (pathname === '/play') return 'playPage';
		if (pathname === '/learn') return 'learnPage';
		if (pathname === '/membership') return 'membershipPage';
		if (pathname === '/faq') return 'faqPage';
		return 'homepage';
	};

	const pageKey = getPageKey(location.pathname);
	const testimonial = testimonialData[pageKey] || testimonialData.homepage;

	return (
		<section className='relative w-full min-h-[340px] pt-4 pb-4 lg:pt-5 lg:pb-5 overflow-hidden bg-[#102121] border-b-[60px] border-[#009444]'>
			{/* Background with uniform dark green like target design */}
			<div
				className='absolute inset-0 z-0'
				style={{
					background: '#102121',
				}}
			/>

			{/* Organic flowing accent lines - positioned to flow around the person like target design */}
			<div className='absolute inset-0 overflow-hidden z-10'>
				{/* Main flowing accent shape - positioned behind and around person */}

				{/* Secondary accent shape for depth */}
				<div className='absolute bottom-[-350px] left-[-300px] w-[1000px] h-[700px] '>
					<img
						className='w-full h-full object-contain'
						alt='Secondary accent lines'
						src='/shape14-2.svg'
						style={{
							transform: 'rotate(10deg) scale(0.7)',
						}}
					/>
				</div>
			</div>

			{/* Main content container */}
			<div className='relative w-full h-[340px] max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 z-20'>
				{/* Person image - positioned exactly like Figma */}
				<div className='absolute left-[12vw] md:left-[8vw] lg:left-[250px] bottom-[-20px] w-[220px] h-[320px] z-30'>
					<img
						className='w-full h-full object-cover object-center'
						alt='Golf Ambassador testimonial'
						src='/chatgpt-image-aug-22--2025--09-37-50-pm-1-2.png'
					/>
				</div>

				{/* Testimonial content area - positioned exactly like Figma */}
				<div className='absolute right-[15vw] md:right-[12vw] lg:right-[250px] top-[10px] w-[700px] h-[340px] z-30'>
					{/* Large quotation mark - positioned exactly like Figma */}
					<div className='absolute top-[-80px] left-[-70px] text-white text-[200px] leading-none font-morganite font-black select-none z-40 rotate-180'>
						"
					</div>

					{/* Testimonial text - positioned exactly like Figma */}
					<div className='absolute top-[70px] left-[10px] w-[570px] z-50'>
						<p className='text-white leading-[28px] mb-4 text-[19px] font-normal  text-left font-gilroy'>
							{testimonial.quote}
						</p>

						{/* Attribution - positioned exactly like Figma */}
						<div className=' text-white font-medium text-[14px] sm:text-[12px] lg:text-[14px] text-right leading-tight tracking-wide font-gilroy left-1'>
							{testimonial.authorTitle}, {testimonial.authorName}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TestimonialsSection;
