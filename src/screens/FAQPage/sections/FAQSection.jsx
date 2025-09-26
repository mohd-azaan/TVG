// src/screens/FAQPage/sections/FAQSection.jsx
// Main FAQ section with two-column accordion layout and interactive expand/collapse functionality
// This component displays all FAQ categories with questions in accordion format matching Figma design
// RELEVANT FILES: FAQPage.jsx, LessonLevelsSection.jsx (for accordion pattern), tailwind.config.js

import React, { useState } from 'react';

// Chevron down icon
const ChevronDown = ({ className = "w-5 h-5" }) => (
	<svg className={className} viewBox="0 0 24 24" fill="none">
		<path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
	</svg>
);

// Chevron up icon
const ChevronUp = ({ className = "w-5 h-5" }) => (
	<svg className={className} viewBox="0 0 24 24" fill="none">
		<path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
	</svg>
);

export const FAQSection = () => {
	const [expandedItem, setExpandedItem] = useState('general-0'); // Default: "What is The Virtual Greens?" is expanded

	const toggleItem = (itemId) => {
		setExpandedItem(expandedItem === itemId ? null : itemId);
	};

	// Left column - General FAQs
	const generalFAQs = [
		{
			id: 'general-0',
			question: 'What is The Virtual Greens?',
			answer: 'In short, we\'re a golf entertainment venue that features an inclusive, high-tech golf game that everyone can enjoy. Paired with an outstanding food and beverage menu, 5 hitting bays and music, having an energetic hum that you can feel right when you walk through the door.',
			isDefault: true
		},
		{
			id: 'general-1',
			question: 'What makes The Virtual Greens so high-tech?',
			answer: 'Our state-of-the-art simulators use advanced sensors and cameras to track every aspect of your swing and ball flight with incredible precision. Combined with realistic course graphics and physics, it creates an immersive golf experience that rivals playing on actual courses.'
		},
		{
			id: 'general-2',
			question: 'Can I book a bay?',
			answer: 'Yes! You can easily book a bay online through our website or by calling us directly. We recommend booking in advance, especially for weekends and evenings, to ensure availability.'
		},
		{
			id: 'general-3',
			question: 'Are your prices per bay or per person?',
			answer: 'Our pricing is per bay, not per person. This means you can bring friends and share the cost, making it more affordable and enjoyable for groups.'
		},
		{
			id: 'general-4',
			question: 'Is there an age limit & Do I need to bring ID?',
			answer: 'We welcome golfers of all ages! For alcohol service, you must be 21+ with valid ID. Children are welcome when accompanied by adults.'
		},
		{
			id: 'general-5',
			question: 'Is there a dress code?',
			answer: 'We have a smart casual dress code. Golf attire is preferred but not required. Please avoid flip-flops, tank tops, or overly casual wear.'
		},
		{
			id: 'general-6',
			question: 'Where do I park my car?',
			answer: 'We provide complimentary parking right at our facility. Look for The Virtual Greens signage in our designated parking area.'
		},
		{
			id: 'general-7',
			question: 'Are you open on [Date]?',
			answer: 'Our operating hours vary by season and special events. Please check our website or call us to confirm availability for specific dates.'
		},
		{
			id: 'general-8',
			question: 'What are your rules?',
			answer: 'We maintain a respectful, family-friendly environment. No outside food or drinks, respect other players, and follow safety guidelines with equipment. Full rules are provided upon arrival.'
		}
	];

	// Left column additional categories (after General FAQs)
	const leftColumnCategories = [
		{
			id: 'reservations',
			title: 'Reservations',
			questions: [
				{ question: 'Do I need to book ahead or can I walk in?', answer: 'While walk-ins are welcome subject to availability, we highly recommend booking ahead, especially for evenings and weekends.' },
				{ question: 'Can I book over the phone?', answer: 'Yes! You can book by calling us directly during business hours, or use our convenient online booking system 24/7.' },
				{ question: 'How do the time slots work?', answer: 'We offer flexible time slots typically in 1-hour increments. You can extend your session based on availability.' },
				{ question: 'What time do I need to arrive?', answer: 'Please arrive 10-15 minutes before your scheduled time for check-in and equipment setup.' },
				{ question: 'Can I cancel or change my online booking?', answer: 'Yes, you can modify or cancel bookings up to 2 hours before your scheduled time through our website or by calling us.' },
				{ question: 'Can I just come for food, drinks and coffee?', answer: 'Absolutely! Our restaurant and bar are open to everyone, whether you\'re playing golf or just enjoying our hospitality.' },
				{ question: 'I\'m running late, what do I do?', answer: 'Please call us immediately. We\'ll do our best to accommodate you, though late arrivals may result in shortened sessions.' },
				{ question: 'I haven\'t received my confirmation, what do I do?', answer: 'Check your spam folder first, then contact us with your booking details and we\'ll resend your confirmation.' },
				{ question: 'I\'ve forgotten to print my booking. Is that a problem?', answer: 'No problem at all! We can look up your booking with your name and phone number, or you can show the confirmation on your phone.' }
			]
		},
		{
			id: 'giftcards',
			title: 'Gift Cards',
			questions: [
				{ question: 'What can gift cards be redeemed against?', answer: 'Gift cards can be used for bay rentals, food and beverages, lessons, merchandise, and any services we offer.' },
				{ question: 'Where can I buy TVG Gift Cards?', answer: 'Purchase gift cards online through our website, at our facility, or call us to arrange purchase and delivery.' },
				{ question: 'Are there any fees?', answer: 'No additional fees! You pay face value for gift cards, and recipients get the full value toward their experience.' },
				{ question: 'How long will the gift card be valid for?', answer: 'Our gift cards are valid for one year from the date of purchase with no expiration fees or penalties.' },
				{ question: 'When will my recipient receive their eGift Card?', answer: 'Digital gift cards are delivered instantly via email, while physical cards can be picked up immediately or mailed within 2-3 business days.' }
			]
		}
	];

	// Right column categories and questions
	const rightColumnCategories = [
		{
			id: 'gameplay',
			title: 'Game Play',
			questions: [
				{ question: 'How long does it take to play a full round?', answer: 'A full 18-hole round typically takes 45-60 minutes on our simulators, much faster than traditional golf while maintaining the full experience.' },
				{ question: 'Do I have to bring my own clubs?', answer: 'Not at all! We provide high-quality golf clubs for all skill levels. You\'re welcome to bring your own clubs if you prefer.' },
				{ question: 'What golf courses are available for me to play?', answer: 'We offer over 50 world-famous golf courses including Pebble Beach, St. Andrews, and many other championship courses from around the globe.' },
				{ question: 'How much does it cost to play?', answer: 'Our bay rental pricing varies by time of day and day of week. Check our website or call for current rates and special packages.' },
				{ question: 'What if I\'ve never played golf before?', answer: 'Perfect! Our simulators are ideal for beginners. We offer lessons and the technology provides instant feedback to help you learn quickly.' },
				{ question: 'Can I take lessons?', answer: 'Yes! We offer professional golf instruction with PGA-certified instructors who use our simulator technology to accelerate your learning.' },
				{ question: 'How accurate are the simulators?', answer: 'Our simulators are incredibly accurate, using the same technology used by professional golfers for training. Ball speed, spin, and trajectory are measured precisely.' },
				{ question: 'What kinds of golf games can I play?', answer: 'Beyond traditional golf, we offer driving range practice, closest-to-pin challenges, longest drive competitions, and fun mini-games for groups.' },
				{ question: 'Do I win something if I get a Hole-in-One?', answer: 'Absolutely! Hole-in-one achievements are celebrated and may include prizes, certificates, or special recognition. Ask our staff about current promotions.' }
			]
		},
		{
			id: 'events',
			title: 'Events',
			questions: [
				{ question: 'I want to book and event. How do I do that?', answer: 'Contact our events team through our website or call us directly. We\'ll work with you to plan the perfect event for your group.' },
				{ question: 'I want to make my event as personal as possible. Can you do that?', answer: 'Absolutely! We offer customizable packages including personalized tournaments, branded materials, custom menus, and tailored experiences.' },
				{ question: 'What is the capacity of the venue?', answer: 'We can accommodate groups from 10 to 100+ people depending on the format. Our flexible space allows for various event configurations.' },
				{ question: 'What are the available dates & pricing?', answer: 'Event availability and pricing vary by season, day of week, and package selected. Contact our events team for personalized quotes and availability.' },
				{ question: 'How much parking is available?', answer: 'We have ample complimentary parking to accommodate large groups and events. Parking is never a concern for your guests.' },
				{ question: 'Do my guests have to know how to play golf?', answer: 'Not at all! Our events are designed for all skill levels. We provide instruction and the simulators make it easy and fun for everyone.' },
				{ question: 'Will someone be there to help with the simulator?', answer: 'Yes! Our trained staff will be available to assist with simulator operation and provide guidance throughout your event.' },
				{ question: 'Do I need to bring golf clubs for my guests?', answer: 'No, we provide all necessary equipment including clubs for left and right-handed players of all sizes.' },
				{ question: 'Can we have a course or area for ourselves?', answer: 'Yes! We offer exclusive bay rentals and can arrange for private areas or full venue buyouts for larger events.' },
				{ question: 'Are there any other rules or restrictions my guests need to be aware of?', answer: 'We\'ll provide all event guidelines before your arrival. Generally, we maintain a respectful environment with standard safety and conduct expectations.' }
			]
		},
		{
			id: 'membership',
			title: 'Membership',
			questions: [
				{ question: 'What is the purpose of a membership?', answer: 'Membership provides unlimited access, priority booking, exclusive events, discounts on food and beverages, and a vibrant community of golf enthusiasts.' },
				{ question: 'What is a Corporate membership?', answer: 'Corporate memberships offer businesses unlimited access for employees and clients, team building opportunities, and corporate event packages with preferential pricing.' }
			]
		},
		{
			id: 'fb',
			title: 'F & B',
			questions: [
				{ question: 'Do you serve food & drink?', answer: 'Yes! We offer a full menu of delicious food and a complete bar with craft cocktails, beer, wine, and non-alcoholic beverages.' },
				{ question: 'What food and drink options are there for special diets and allergies?', answer: 'We accommodate various dietary restrictions including vegetarian, vegan, gluten-free, and other allergies. Please inform us when making reservations.' },
				{ question: 'Can I bring my own food and drink or celebration cake?', answer: 'We don\'t allow outside food or beverages, but we\'re happy to help coordinate special cakes or catering for events through our kitchen.' }
			]
		}
	];

	return (
		<section className='relative w-full bg-white py-20 lg:py-24 overflow-hidden'>
			<div className='relative max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10'>
				{/* Universal Spacing Wrapper */}
				<div className='lg:ml-[12vw] md:ml-[8vw] lg:mr-[12vw] md:mr-[8vw]'>
					<div className='max-w-[1200px] mx-auto'>
						{/* Two column layout */}
						<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16'>
							{/* Left Column - General FAQs */}
							<div className='w-full'>
								{/* Category Title */}
								<div className='mb-8'>
									<h2 className='font-morganite font-black text-[clamp(40px,5vw,56px)] leading-[0.95] tracking-[0.02em] text-[#009444] uppercase'>
										General FAQs
									</h2>
								</div>

						{/* FAQ Items */}
						<div className='space-y-0'>
							{generalFAQs.map((faq, index) => {
								const isExpanded = expandedItem === faq.id;
								const isLast = index === generalFAQs.length - 1;

								return (
									<div key={faq.id} className='relative'>
										{/* FAQ Item */}
										<div
											className={`${isExpanded ? '' : 'border-b border-[#e5e5e5]'} ${
												index === 0 ? 'rounded-t-[30px]' : ''
											} ${isLast ? '' : ''}`}
										>
											{/* Question Header */}
											<button
												onClick={() => toggleItem(faq.id)}
												className={`w-full flex items-start justify-between p-0 py-[18px] text-left ${
													index === 0 ? 'rounded-t-[30px]' : ''
												} ${isLast && !isExpanded ? '' : ''}`}
											>
												<div className='flex-1 pr-6'>
													<p className='font-semibold text-[18px] leading-[24px] text-black font-TVG-typography-default'>
														{faq.question}
													</p>
												</div>
												<div className='flex-shrink-0 w-6 h-6 text-[#757575]'>
													{isExpanded ? (
														<ChevronUp className='w-6 h-6 text-[#009444]' />
													) : (
														<ChevronDown className='w-6 h-6 text-[#757575]' />
													)}
												</div>
											</button>

											{/* Answer Content */}
											{isExpanded && faq.answer && (
												<div className='pb-4 border-t border-[#e5e5e5]'>
													<div className='pt-4'>
														<p className='font-TVG-typography-default text-[16px] leading-[24px] text-[#666666] font-normal'>
															{faq.answer}
														</p>
													</div>
												</div>
											)}
										</div>
									</div>
								);
							})}
						</div>

						{/* Additional Left Column Categories */}
						{leftColumnCategories.map((category, categoryIndex) => (
							<div key={category.id} className='mt-[72px]'>
								{/* Category Title */}
								<div className='mb-[16px]'>
									<h2 className='font-morganite font-extrabold text-[48px] leading-[44px] text-[#009444] uppercase tracking-[0.96px]'>
										{category.title}
									</h2>
								</div>

								{/* Category Questions */}
								<div className='space-y-0'>
									{category.questions.map((questionObj, questionIndex) => {
										const questionId = `${category.id}-${questionIndex}`;
										const isExpanded = expandedItem === questionId;
										const isLast = questionIndex === category.questions.length - 1;

										return (
											<div key={questionId} className='relative'>
												{/* Question Item */}
												<div
													className={`${isExpanded ? '' : 'border-b border-[#e5e5e5]'} ${
														questionIndex === 0 ? 'rounded-t-[30px]' : ''
													} ${isLast ? '' : ''}`}
												>
													<button
														onClick={() => toggleItem(questionId)}
														className={`w-full flex items-center justify-between p-0 py-[18px] text-left ${
															questionIndex === 0 ? 'rounded-t-[30px]' : ''
														} ${isLast && !isExpanded ? '' : ''}`}
													>
														<div className='flex-1 pr-6'>
															<p className='font-semibold text-[18px] leading-[24px] text-black font-TVG-typography-default'>
																{questionObj.question}
															</p>
														</div>
														<div className='flex-shrink-0 w-6 h-6 text-[#757575]'>
															{isExpanded ? (
																<ChevronUp className='w-6 h-6 text-[#009444]' />
															) : (
																<ChevronDown className='w-6 h-6 text-[#757575]' />
															)}
														</div>
													</button>

													{/* Answer Content */}
													{isExpanded && questionObj.answer && (
														<div className='pb-4 border-t border-[#e5e5e5]'>
															<div className='pt-4'>
																<p className='font-TVG-typography-default text-[16px] leading-[24px] text-[#666666] font-normal'>
																	{questionObj.answer}
																</p>
															</div>
														</div>
													)}
												</div>
											</div>
										);
									})}
								</div>
							</div>
						))}
					</div>

					{/* Right Column - Other Categories */}
					<div className='w-full max-w-[580px]'>
						{rightColumnCategories.map((category, categoryIndex) => (
							<div key={category.id} className={`${categoryIndex > 0 ? 'mt-[72px]' : ''}`}>
								{/* Category Title */}
								<div className='mb-[16px]'>
									<h2 className='font-morganite font-extrabold text-[48px] leading-[44px] text-[#009444] uppercase tracking-[0.96px]'>
										{category.title}
									</h2>
								</div>

								{/* Category Questions */}
								<div className='space-y-0'>
									{category.questions.map((questionObj, questionIndex) => {
										const questionId = `${category.id}-${questionIndex}`;
										const isExpanded = expandedItem === questionId;
										const isLast = questionIndex === category.questions.length - 1;

										return (
											<div key={questionId} className='relative'>
												{/* Question Item */}
												<div
													className={`${isExpanded ? '' : 'border-b border-[#e5e5e5]'} ${
														questionIndex === 0 ? 'rounded-t-[30px]' : ''
													} ${isLast ? '' : ''}`}
												>
													<button
														onClick={() => toggleItem(questionId)}
														className={`w-full flex items-center justify-between p-0 py-[18px] text-left ${
															questionIndex === 0 ? 'rounded-t-[30px]' : ''
														} ${isLast && !isExpanded ? '' : ''}`}
													>
														<div className='flex-1 pr-6'>
															<p className='font-semibold text-[18px] leading-[24px] text-black font-TVG-typography-default'>
																{questionObj.question}
															</p>
														</div>
														<div className='flex-shrink-0 w-6 h-6 text-[#757575]'>
															{isExpanded ? (
																<ChevronUp className='w-6 h-6 text-[#009444]' />
															) : (
																<ChevronDown className='w-6 h-6 text-[#757575]' />
															)}
														</div>
													</button>

													{/* Answer Content */}
													{isExpanded && questionObj.answer && (
														<div className='pb-4 border-t border-[#e5e5e5]'>
															<div className='pt-4'>
																<p className='font-TVG-typography-default text-[16px] leading-[24px] text-[#666666] font-normal'>
																	{questionObj.answer}
																</p>
															</div>
														</div>
													)}
												</div>
											</div>
										);
									})}
								</div>
							</div>
						))}
					</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};