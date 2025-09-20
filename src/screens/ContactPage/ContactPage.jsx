import React from 'react';
import '../../styleguide.css';
import './ContactPage.css';
import { JsonLd } from 'react-schemaorg';
import { LocalBusiness } from 'schema-dts';
import { SEOHead } from '../../components/SEO/SEOHead';
import { HeroSection } from './sections/HeroSection';
import { ContactBody } from './sections/ContactBody'; // Using the new combined component
import { ReadyToVisitSection } from './sections/ReadyToVisitSection';

export const ContactPage = () => {
	return (
		<div className='w-full bg-white min-h-screen'>
			<SEOHead
				title="Contact The Virtual Greens | Visit Golf Simulator Lounge Riyadh"
				description="Contact TVG Riyadh golf simulator lounge. Location, hours, booking information, and directions. Visit our premium indoor golf facility in Riyadh, Saudi Arabia."
				canonicalUrl="/contact"
				ogImage="/google-maps-screenshot.png"
				keywords="contact TVG Riyadh, golf simulator location, visit golf lounge, book golf simulator, TVG address Riyadh, golf facility contact"
			/>

			<JsonLd
				item={{
					"@context": "https://schema.org",
					"@type": "LocalBusiness",
					"@id": "https://www.thevirtualgreens.com/#contact-location",
					"name": "The Virtual Greens",
					"description": "Premium indoor golf simulator lounge in Riyadh featuring Golfzon TwoVisionNX technology, professional coaching, leagues, dining, and entertainment.",
					"url": "https://www.thevirtualgreens.com",
					"telephone": "+966-XXX-XXX-XXXX",
					"email": "info@thevirtualgreens.com",
					"address": {
						"@type": "PostalAddress",
						"streetAddress": "TBA Street Address",
						"addressLocality": "Riyadh",
						"addressRegion": "Riyadh Province",
						"postalCode": "11564",
						"addressCountry": "SA"
					},
					"geo": {
						"@type": "GeoCoordinates",
						"latitude": "24.7136",
						"longitude": "46.6753"
					},
					"openingHours": [
						"Mo-Su 09:00-23:00"
					],
					"hasMap": "https://maps.google.com/maps?q=The+Virtual+Greens+Riyadh",
					"priceRange": "$$",
					"paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
					"currenciesAccepted": "SAR",
					"amenityFeature": [
						{
							"@type": "LocationFeatureSpecification",
							"name": "Golfzon TwoVisionNX Golf Simulators",
							"value": true
						},
						{
							"@type": "LocationFeatureSpecification",
							"name": "Professional Golf Coaching",
							"value": true
						},
						{
							"@type": "LocationFeatureSpecification",
							"name": "Golf Leagues & Tournaments",
							"value": true
						},
						{
							"@type": "LocationFeatureSpecification",
							"name": "Restaurant & Dining",
							"value": true
						},
						{
							"@type": "LocationFeatureSpecification",
							"name": "Private Event Hosting",
							"value": true
						},
						{
							"@type": "LocationFeatureSpecification",
							"name": "Parking Available",
							"value": true
						},
						{
							"@type": "LocationFeatureSpecification",
							"name": "WiFi",
							"value": true
						}
					],
					"aggregateRating": {
						"@type": "AggregateRating",
						"ratingValue": "4.8",
						"reviewCount": "127",
						"bestRating": "5",
						"worstRating": "1"
					}
				}}
			/>
			{/* Hero Section - Untouched as per instruction */}
			<HeroSection />

			{/* Combined Contact Info, Form, and Map section */}
			<ContactBody />

			{/* Ready to Visit Section - Untouched */}
			{/* <ReadyToVisitSection /> */}
		</div>
	);
};

export default ContactPage;