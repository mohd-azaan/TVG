// src/screens/FAQPage/FAQPage.jsx
// Complete FAQ page component featuring hero section and interactive FAQ sections
// This component displays the FAQ page with two-column accordion layout based on Figma design
// RELEVANT FILES: App.jsx, MainLayout.jsx, HeroSection.jsx, FAQSection.jsx

import React from 'react';
import { JsonLd } from 'react-schemaorg';
import { FAQPage as FAQPageSchema } from 'schema-dts';
import { SEOHead } from '../../components/SEO/SEOHead';
import { HeroSection } from './sections/HeroSection';
import { FAQSection } from './sections/FAQSection';

export const FAQPage = () => {
	return (
		<div className='faq-page w-full'>
			<SEOHead
				title="Frequently Asked Questions | Golf Simulator FAQ | TVG Riyadh"
				description="Get answers to common questions about TVG golf simulator lounge. Pricing, membership, booking, technology, lessons, and facility information."
				canonicalUrl="/faq"
				ogImage="/hero.png"
				keywords="golf simulator FAQ, TVG questions, golf simulator pricing, membership questions, booking FAQ, Golfzon technology FAQ"
			/>

			<JsonLd
				item={{
					"@context": "https://schema.org",
					"@type": "FAQPage",
					"mainEntity": [
						{
							"@type": "Question",
							"name": "What is The Virtual Greens?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "In short, we're a golf entertainment venue that features an inclusive, high-tech golf game that everyone can enjoy. Paired with an outstanding food and beverage menu, 5 hitting bays and music, having an energetic hum that you can feel right when you walk through the door."
							}
						},
						{
							"@type": "Question",
							"name": "What makes The Virtual Greens so high-tech?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "Our state-of-the-art simulators use advanced sensors and cameras to track every aspect of your swing and ball flight with incredible precision. Combined with realistic course graphics and physics, it creates an immersive golf experience that rivals playing on actual courses."
							}
						},
						{
							"@type": "Question",
							"name": "Can I book a bay?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "Yes! You can easily book a bay online through our website or by calling us directly. We recommend booking in advance, especially for weekends and evenings, to ensure availability."
							}
						},
						{
							"@type": "Question",
							"name": "Are your prices per bay or per person?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "Our pricing is per bay, not per person. This means you can bring friends and share the cost, making it more affordable and enjoyable for groups."
							}
						},
						{
							"@type": "Question",
							"name": "Is there an age limit & Do I need to bring ID?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "We welcome golfers of all ages! For alcohol service, you must be 21+ with valid ID. Children are welcome when accompanied by adults."
							}
						},
						{
							"@type": "Question",
							"name": "Do I have to bring my own clubs?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "Not at all! We provide high-quality golf clubs for all skill levels. You're welcome to bring your own clubs if you prefer."
							}
						},
						{
							"@type": "Question",
							"name": "What golf courses are available for me to play?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "We offer over 50 world-famous golf courses including Pebble Beach, St. Andrews, and many other championship courses from around the globe."
							}
						},
						{
							"@type": "Question",
							"name": "What if I've never played golf before?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "Perfect! Our simulators are ideal for beginners. We offer lessons and the technology provides instant feedback to help you learn quickly."
							}
						},
						{
							"@type": "Question",
							"name": "Can I take lessons?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "Yes! We offer professional golf instruction with PGA-certified instructors who use our simulator technology to accelerate your learning."
							}
						},
						{
							"@type": "Question",
							"name": "What is the purpose of a membership?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "Membership provides unlimited access, priority booking, exclusive events, discounts on food and beverages, and a vibrant community of golf enthusiasts."
							}
						}
					]
				}}
			/>
			{/* Hero Section with title and subtitle */}
			<HeroSection />

			{/* Main FAQ Content with accordion functionality */}
			<FAQSection />
		</div>
	);
};

export default FAQPage;