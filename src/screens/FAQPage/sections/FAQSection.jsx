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
			answer: ''
		},
		{
			id: 'general-2',
			question: 'Can I book a bay?',
			answer: ''
		},
		{
			id: 'general-3',
			question: 'Are your prices per bay or per person?',
			answer: ''
		},
		{
			id: 'general-4',
			question: 'Is there an age limit & Do I need to bring ID?',
			answer: ''
		},
		{
			id: 'general-5',
			question: 'Is there a dress code?',
			answer: ''
		},
		{
			id: 'general-6',
			question: 'Where do I park my car?',
			answer: ''
		},
		{
			id: 'general-7',
			question: 'Are you open on [Date]?',
			answer: ''
		},
		{
			id: 'general-8',
			question: 'What are your rules?',
			answer: ''
		}
	];

	// Right column categories and questions
	const rightColumnCategories = [
		{
			id: 'gameplay',
			title: 'Game Play',
			questions: [
				'How long does it take to play a full round?',
				'Do I have to bring my own clubs?',
				'What golf courses are available for me to play?',
				'How much does it cost to play?',
				'What if I\'ve never played golf before?',
				'Can I take lessons?',
				'How accurate are the simulators?',
				'What kinds of golf games can I play?',
				'Do I win something if I get a Hole-in-One?'
			]
		},
		{
			id: 'events',
			title: 'Events',
			questions: [
				'I want to book and event. How do I do that?',
				'I want to make my event as personal as possible. Can you do that?',
				'What is the capacity of the venue?',
				'What are the available dates & pricing?',
				'How much parking is available?',
				'Do my guests have to know how to play golf?',
				'Will someone be there to help with the simulator?',
				'Do I need to bring golf clubs for my guests?',
				'Can we have a course or area for ourselves?',
				'Are there any other rules or restrictions my guests need to be aware of?'
			]
		},
		{
			id: 'reservations',
			title: 'Reservations',
			questions: [
				'Do I need to book ahead or can I walk in?',
				'Can I book over the phone?',
				'How do the time slots work?',
				'What time do I need to arrive?',
				'Can I cancel or change my online booking?',
				'Can I just come for food, drinks and coffee?',
				'I\'m running late, what do I do?',
				'I haven t received my confirmation, what do I do?',
				'I ve forgotten to print my booking. Is that a problem?'
			]
		},
		{
			id: 'giftcards',
			title: 'Gift Cards',
			questions: [
				'What can gift cards be redeemed against?',
				'Where can I buy TVG Gift Cards?',
				'Are there any fees?',
				'How long will the gift card be valid for?',
				'When will my recipient receive their eGift Card?'
			]
		},
		{
			id: 'membership',
			title: 'Membership',
			questions: [
				'What is the purpose of a membership?',
				'What is a Corporate membership?'
			]
		},
		{
			id: 'fb',
			title: 'F & B',
			questions: [
				'Do you serve food & drink?',
				'Can I bring my own food and drink or celebration cake?',
				'What food and drink options are there for special diets and allergies?'
			]
		}
	];

	return (
		<section className='relative w-full bg-white py-[125px]'>
			<div className='max-w-[1920px] mx-auto px-4 lg:px-[110px]'>
				{/* Two column layout matching Figma exactly */}
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-[50px]'>
					{/* Left Column - General FAQs */}
					<div className='w-full max-w-[655px]'>
						{/* Category Title */}
						<div className='mb-[13px]'>
							<h2 className='font-morganite font-extrabold text-[64px] leading-[60px] text-[#009444] uppercase tracking-[1.28px]'>
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
											className={`${isExpanded ? '' : 'border-b border-neutral-200'} ${
												index === 0 ? 'rounded-t-[30px]' : ''
											} ${isLast ? 'rounded-b-[30px]' : ''}`}
										>
											{/* Question Header */}
											<button
												onClick={() => toggleItem(faq.id)}
												className={`w-full flex items-start justify-between p-0 py-4 text-left ${
													index === 0 ? 'rounded-t-[30px]' : ''
												} ${isLast && !isExpanded ? 'rounded-b-[30px]' : ''}`}
											>
												<div className='flex-1 pr-4'>
													<p className='font-semibold text-[20px] leading-[28px] text-black font-TVG-typography-default'>
														{faq.question}
													</p>
												</div>
												<div className='flex-shrink-0 w-5 h-5 text-[#757575]'>
													{isExpanded ? (
														<ChevronUp className='w-5 h-5 text-[#009444]' />
													) : (
														<ChevronDown className='w-5 h-5 text-[#757575]' />
													)}
												</div>
											</button>

											{/* Answer Content */}
											{isExpanded && faq.answer && (
												<div className='pb-3 border-t border-neutral-200'>
													<div className='pt-3'>
														<p className='font-TVG-typography-default text-[20px] leading-[28px] text-[#757575]'>
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
					</div>

					{/* Right Column - Other Categories */}
					<div className='w-full max-w-[655px]'>
						{rightColumnCategories.map((category, categoryIndex) => (
							<div key={category.id} className={`${categoryIndex > 0 ? 'mt-[44px]' : ''}`}>
								{/* Category Title */}
								<div className='mb-[13px]'>
									<h2 className='font-morganite font-extrabold text-[64px] leading-[60px] text-[#009444] uppercase tracking-[1.28px]'>
										{category.title}
									</h2>
								</div>

								{/* Category Questions */}
								<div className='space-y-0'>
									{category.questions.map((question, questionIndex) => {
										const questionId = `${category.id}-${questionIndex}`;
										const isExpanded = expandedItem === questionId;
										const isLast = questionIndex === category.questions.length - 1;

										return (
											<div key={questionId} className='relative'>
												{/* Question Item */}
												<div
													className={`${isExpanded ? '' : 'border-b border-neutral-200'} ${
														questionIndex === 0 ? 'rounded-t-[30px]' : ''
													} ${isLast ? 'rounded-b-[30px]' : ''}`}
												>
													<button
														onClick={() => toggleItem(questionId)}
														className={`w-full flex items-center justify-between p-0 py-4 text-left ${
															questionIndex === 0 ? 'rounded-t-[30px]' : ''
														} ${isLast && !isExpanded ? 'rounded-b-[30px]' : ''}`}
													>
														<div className='flex-1 pr-4'>
															<p className='font-semibold text-[20px] leading-[28px] text-black font-TVG-typography-default'>
																{question}
															</p>
														</div>
														<div className='flex-shrink-0 w-5 h-5 text-[#757575]'>
															{isExpanded ? (
																<ChevronUp className='w-5 h-5 text-[#009444]' />
															) : (
																<ChevronDown className='w-5 h-5 text-[#757575]' />
															)}
														</div>
													</button>

													{/* Answer placeholder for future content */}
													{isExpanded && (
														<div className='pb-3 border-t border-neutral-200'>
															<div className='pt-3'>
																<p className='font-TVG-typography-default text-[20px] leading-[28px] text-[#757575]'>
																	Answer content will be added here.
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
		</section>
	);
};