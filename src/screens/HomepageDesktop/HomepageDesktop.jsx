import { XIcon } from 'lucide-react';
import React, { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
// Header, Footer and Testimonials are rendered by MainLayout
import { HeroSection } from './sections/HeroSection/HeroSection';
import { HowItWorksSection } from './sections/HowItWorksSection/HowItWorksSection';
import { MeetGolfzonSection } from './sections/MeetGolfzonSection/MeetGolfzonSection';
import { PlayYourWaySection } from './sections/PlayYourWaySection/PlayYourWaySection';
import { ServicesSection } from './sections/ServicesSection/ServicesSection';
import { StatisticsSection } from './sections/StatisticsSection/StatisticsSection';
import { TestimonialsSection } from './sections/TestimonialsSection/TestimonialsSection';

export const HomepageDesktop = () => {
	const [showPromoCard, setShowPromoCard] = useState(true);

	return (
		<div className='bg-white w-full min-h-screen relative'>
			<div className='w-full flex flex-col'>
				<HeroSection />
				<ServicesSection />
				<StatisticsSection />
				<PlayYourWaySection />
				<HowItWorksSection />
				<MeetGolfzonSection />
			</div>

			{/* Membership Promo Card */}
			{showPromoCard && (
				<Card className='fixed w-[320px] sm:w-[380px] h-auto top-32 sm:top-[125px] right-4 sm:right-8 lg:right-[50px] xl:right-[100px] bg-white rounded-[30px] border border-solid border-[#9d9d9d] shadow-xl opacity-95 z-40 hover:opacity-100 transition-opacity duration-200'>
					<CardContent className='p-6 sm:p-8 relative'>
						<Button
							variant='ghost'
							size='sm'
							className='absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full border border-solid border-black p-0 hover:bg-gray-50 shadow-md'
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
