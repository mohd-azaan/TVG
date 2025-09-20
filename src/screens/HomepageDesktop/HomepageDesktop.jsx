import { XIcon } from 'lucide-react';
import React, { useState } from 'react';
import { JsonLd } from 'react-schemaorg';
import { Organization, LocalBusiness } from 'schema-dts';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { SEOHead } from '../../components/SEO/SEOHead';
// Header, Footer and Testimonials are rendered by MainLayout
import { HeroSection } from './sections/HeroSection/HeroSection';
import { HowItWorksSection } from './sections/HowItWorksSection/HowItWorksSection';
import { MeetGolfzonSection } from './sections/MeetGolfzonSection/MeetGolfzonSection';
import { PlayYourWaySection } from './sections/PlayYourWaySection/PlayYourWaySection';
import { ServicesSection } from './sections/ServicesSection/ServicesSection';
import { StatisticsSection } from './sections/StatisticsSection/StatisticsSection';

export const HomepageDesktop = () => {
	const [showPromoCard, setShowPromoCard] = useState(true);

	return (
		<div className='bg-white w-full min-h-screen relative'>
			<SEOHead
				title="The Virtual Greens - Indoor Golf Simulator Lounge in Riyadh"
				description="Experience Riyadh's premier indoor golf simulator lounge. Cutting-edge Golfzon TwoVisionNX technology, professional coaching, and premium dining in a relaxed social atmosphere."
				canonicalUrl="/"
				ogImage="/hero.png"
				keywords="indoor golf simulator Riyadh, golf simulator lounge, Golfzon technology, golf coaching Riyadh, virtual golf Saudi Arabia"
			/>

			<JsonLd
				item={{
					"@context": "https://schema.org",
					"@type": "Organization",
					"name": "The Virtual Greens",
					"url": "https://www.thevirtualgreens.com",
					"logo": "https://www.thevirtualgreens.com/tvg-logo.svg",
					"description": "Riyadh's premier indoor golf simulator lounge featuring cutting-edge Golfzon TwoVisionNX technology, professional coaching, and premium dining experiences.",
					"foundingDate": "2024",
					"address": {
						"@type": "PostalAddress",
						"addressCountry": "SA",
						"addressLocality": "Riyadh",
						"addressRegion": "Riyadh Province"
					},
					"contactPoint": {
						"@type": "ContactPoint",
						"contactType": "customer service",
						"telephone": "+966-XXX-XXX-XXXX",
						"email": "info@thevirtualgreens.com"
					},
					"sameAs": [
						"https://www.instagram.com/thevirtualgreens",
						"https://www.youtube.com/@thevirtualgreens",
						"https://www.tiktok.com/@thevirtualgreens"
					]
				}}
			/>

			<JsonLd
				item={{
					"@context": "https://schema.org",
					"@type": "LocalBusiness",
					"@id": "https://www.thevirtualgreens.com/#localbusiness",
					"name": "The Virtual Greens",
					"description": "Indoor golf simulator lounge with Golfzon TwoVisionNX technology, professional golf coaching, leagues, and premium dining.",
					"url": "https://www.thevirtualgreens.com",
					"telephone": "+966-XXX-XXX-XXXX",
					"email": "info@thevirtualgreens.com",
					"address": {
						"@type": "PostalAddress",
						"addressCountry": "SA",
						"addressLocality": "Riyadh",
						"addressRegion": "Riyadh Province"
					},
					"geo": {
						"@type": "GeoCoordinates",
						"latitude": "24.7136",
						"longitude": "46.6753"
					},
					"openingHours": [
						"Mo-Su 09:00-23:00"
					],
					"priceRange": "$$",
					"servedCuisine": "International",
					"amenityFeature": [
						{
							"@type": "LocationFeatureSpecification",
							"name": "Indoor Golf Simulators",
							"value": true
						},
						{
							"@type": "LocationFeatureSpecification",
							"name": "Golf Coaching",
							"value": true
						},
						{
							"@type": "LocationFeatureSpecification",
							"name": "Restaurant",
							"value": true
						}
					]
				}}
			/>
			<div className='w-full flex flex-col'>
				<HeroSection />
				<div className='pt-24'>
					<ServicesSection />
					<StatisticsSection />
					<PlayYourWaySection />
					<HowItWorksSection />
					<MeetGolfzonSection />
				</div>
			</div>

			{/* Membership Promo Card */}
			{showPromoCard && (
				<Card className='fixed w-[320px] sm:w-[380px] h-auto top-32 sm:top-[125px] right-4 sm:right-8 lg:right-[50px] xl:right-[100px] bg-white/75 rounded-[30px] border border-solid border-[#9d9d9d] shadow-xl backdrop-blur-sm z-40 hover:bg-white/85 transition-all duration-200'>
					<CardContent className='p-6 sm:p-8 relative'>
						<Button
							variant='ghost'
							size='sm'
							className='absolute -top-2 -right-2 w-8 h-8 bg-white/75 rounded-full border border-solid border-[#666] p-0 hover:bg-white shadow-md transition-all duration-200'
							onClick={() => setShowPromoCard(false)}
						>
							<XIcon className='w-5 h-5' />
						</Button>

						<div className='space-y-4 sm:space-y-6'>
							<div className='text-lg sm:text-xl font-bold leading-tight'>
								<span className='text-[#009444]'>ONLY </span>
								<span className='text-black text-2xl sm:text-3xl'>96</span>
								<span className='text-[#009444]'> MEMBERSHIPS AVAILABLE</span>
							</div>

							<p className='text-sm sm:text-base font-medium text-black leading-relaxed'>
								First-year members unlock a +1 partner. Full benefits included
							</p>

							<Button className='w-full bg-[#009444] rounded-full px-6 py-3 h-auto hover:bg-[#007a3a] transition-colors duration-200'>
								<div className='text-white text-sm sm:text-base font-semibold text-center tracking-wide'>
									CLAIM YOUR SPOT
								</div>
							</Button>
						</div>
					</CardContent>
				</Card>
			)}
		</div>
	);
};
