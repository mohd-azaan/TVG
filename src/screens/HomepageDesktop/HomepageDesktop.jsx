import { XIcon } from 'lucide-react';
import React, { useState, useEffect } from 'react';
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
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		if (showPromoCard) {
			const timer = setTimeout(() => {
				setShowPromoCard(false);
			}, 10000);

			const progressInterval = setInterval(() => {
				setProgress((prev) => {
					if (prev >= 100) {
						clearInterval(progressInterval);
						return 100;
					}
					return prev + 1;
				});
			}, 100);

			return () => {
				clearTimeout(timer);
				clearInterval(progressInterval);
			};
		}
	}, [showPromoCard]);

	return (
		<div className='bg-white w-full min-h-screen relative'>
			<SEOHead
				title='The Virtual Greens - Indoor Golf Simulator Lounge in Riyadh'
				description="Experience Riyadh's premier indoor golf simulator lounge. Cutting-edge Golfzon TwoVisionNX technology, professional coaching, and premium dining in a relaxed social atmosphere."
				canonicalUrl='/'
				ogImage='/hero.png'
				keywords='indoor golf simulator Riyadh, golf simulator lounge, Golfzon technology, golf coaching Riyadh, virtual golf Saudi Arabia'
			/>

			<JsonLd
				item={{
					'@context': 'https://schema.org',
					'@type': 'Organization',
					name: 'The Virtual Greens',
					url: 'https://www.thevirtualgreens.com',
					logo: 'https://www.thevirtualgreens.com/tvg-logo.svg',
					description:
						"Riyadh's premier indoor golf simulator lounge featuring cutting-edge Golfzon TwoVisionNX technology, professional coaching, and premium dining experiences.",
					foundingDate: '2024',
					address: {
						'@type': 'PostalAddress',
						addressCountry: 'SA',
						addressLocality: 'Riyadh',
						addressRegion: 'Riyadh Province',
					},
					contactPoint: {
						'@type': 'ContactPoint',
						contactType: 'customer service',
						telephone: '+966-XXX-XXX-XXXX',
						email: 'info@thevirtualgreens.com',
					},
					sameAs: [
						'https://www.instagram.com/thevirtualgreens',
						'https://www.youtube.com/@thevirtualgreens',
						'https://www.tiktok.com/@thevirtualgreens',
					],
				}}
			/>

			<JsonLd
				item={{
					'@context': 'https://schema.org',
					'@type': 'LocalBusiness',
					'@id': 'https://www.thevirtualgreens.com/#localbusiness',
					name: 'The Virtual Greens',
					description:
						'Indoor golf simulator lounge with Golfzon TwoVisionNX technology, professional golf coaching, leagues, and premium dining.',
					url: 'https://www.thevirtualgreens.com',
					telephone: '+966-XXX-XXX-XXXX',
					email: 'info@thevirtualgreens.com',
					address: {
						'@type': 'PostalAddress',
						addressCountry: 'SA',
						addressLocality: 'Riyadh',
						addressRegion: 'Riyadh Province',
					},
					geo: {
						'@type': 'GeoCoordinates',
						latitude: '24.7136',
						longitude: '46.6753',
					},
					openingHours: ['Mo-Su 09:00-23:00'],
					priceRange: '$$',
					servedCuisine: 'International',
					amenityFeature: [
						{
							'@type': 'LocationFeatureSpecification',
							name: 'Indoor Golf Simulators',
							value: true,
						},
						{
							'@type': 'LocationFeatureSpecification',
							name: 'Golf Coaching',
							value: true,
						},
						{
							'@type': 'LocationFeatureSpecification',
							name: 'Restaurant',
							value: true,
						},
					],
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
				<Card className='fixed w-[220px] sm:w-[300px] min-h-[140px] h-auto top-15 sm:top-[105px] right-4 sm:right-8 lg:right-[50px] xl:right-[100px] bg-white rounded-[20px] border border-solid border-[#e6e6e6] shadow-lg z-60 hover:shadow-xl transition-all duration-200 opacity-60 hover:opacity-100 overflow-visible'>
					<CardContent className='p-3 sm:p-5 relative overflow-visible'>
						<Button
							variant='ghost'
							size='sm'
							className='absolute -top-3 -right-3 w-7 h-7 bg-white rounded-full border border-solid border-[#000000] p-0 hover:bg-white shadow-md transition-all duration-200 flex items-center justify-center z-70'
							onClick={() => setShowPromoCard(false)}
						>
							<XIcon className='w-6 h-6 text-black/100' strokeWidth={3} />
						</Button>

						<div className='space-y-3'>
							<div className='-mt-2 text-sm sm:text-base font-bold leading-tight flex flex-col gap-1'>
								<div className='flex items-baseline gap-1 whitespace-nowrap'>
									<span className='text-[#009444]'>ONLY</span>
									<span className='text-black text-xl sm:text-2xl font-extrabold'>
										96
									</span>
									<span className='text-[#009444]'>MEMBERSHIP SLOTS</span>
								</div>
								<div className='text-[#009444] text-sm'>PER YEAR</div>
							</div>

							<p className='text-[20px] sm:text-[16px] font-gilroy font-medium text-black/90 leading-relaxed'>
								Members enjoy off-operating hour access
							</p>

							<div className='flex justify-start'>
								<Button
									aria-label='Claim your membership spot'
									className='w-[160px] sm:w-[160px] bg-[#009444] rounded-full px-4 py-2 h-auto hover:bg-[#007a3a] transition-colors duration-200'
								>
									<div className='text-white text-sm sm:text-sm font-gilroy font-regular text-left tracking-wide'>
										CLAIM YOUR SPOT
									</div>
								</Button>
							</div>
						</div>
					</CardContent>

					{/* Progress bar */}
					<div
						className='absolute bottom-2 left-0 w-full h-1 bg-gray-200 rounded-full overflow-hidden mx-3'
						style={{ width: 'calc(100% - 24px)' }}
					>
						<div
							className='h-full bg-[#009444] transition-all duration-100 ease-linear'
							style={{ width: `${progress}%` }}
						/>
					</div>
				</Card>
			)}
		</div>
	);
};
