import React from 'react';

// Rewritten to use a single, responsive grid layout that prevents content overlap on all screen sizes and zoom levels.

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
		<section className={`relative w-full bg-gradient-to-r ${backgroundColor} overflow-hidden py-16 lg:py-24 ${className}`}>
			
			{/* Background decorative lines */}
			{showAccentLines && (
				<div className='absolute bottom-0 left-0 w-full h-[120px] pointer-events-none'>
					{[...Array(7)].map((_, i) => (
                        <div key={i} className='absolute bottom-0 left-0 w-full bg-[#7DDB8A]' style={{ height: `${i > 0 ? 1 : 2}px`, bottom: `${i * 20}px`, opacity: `${(0.8 - i * 0.1).toFixed(1)}` }}></div>
                    ))}
				</div>
			)}

			{/* Main content container */}
			<div className='relative w-full max-w-screen-xl mx-auto px-4 md:px-8'>
                {/* Responsive Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Column: Image */}
                    <div className="flex items-center justify-center">
                        <img
                            className='w-full max-w-md h-auto object-cover rounded-lg shadow-2xl'
                            alt={`${authorName} testimonial`}
                            src={authorImage}
                        />
                    </div>

                    {/* Right Column: Testimonial Content */}
                    <div className="relative text-center lg:text-left">
                        {/* Large quotation mark */}
                        <div className='absolute top-[-40px] left-[-20px] text-white text-[120px] md:text-[200px] leading-none font-black opacity-10 pointer-events-none'>
                            "
                        </div>

                        {/* Testimonial text */}
                        <div className='relative'>
                            <p className='text-white leading-relaxed text-lg md:text-xl mb-6'>
                                {quote}
                            </p>

                            {/* Attribution */}
                            <div className='font-gilroy font-bold text-[#7DDB8A] text-xl md:text-2xl'>
                                {authorTitle}, {authorName}
                            </div>
                        </div>
                    </div>
                </div>
			</div>
		</section>
	);
};