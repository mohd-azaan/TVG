import { ArrowRightIcon } from 'lucide-react';
import React from 'react';
import { Button } from '../../../../components/ui/button';
import { Card, CardContent } from '../../../../components/ui/card';

const serviceCards = [
	{
		title: 'GOLF SIMULATOR BAYS',
		description:
			"5 Golf Simulator Bays (open, private, and VIP) with the world's most advanced Golfzon TwoVisionNX tech.",
		image: '/advanced-simulators-1-5.png',
	},
	{
		title: 'FOOD & DRINK',
		description: 'Because great rounds deserve great bites.',
		image: '/advanced-simulators-1-4.png',
	},
	{
		title: 'LESSONS & COACHING',
		description:
			'Fun, fast-paced options from mini golf to longest drive battles.',
		image: '/advanced-simulators-1-3.png',
	},
	{
		title: 'MEMBERSHIPS',
		description: 'More golf, more perks.',
		image: '/advanced-simulators-1-2.png',
	},
	{
		title: 'EVENTS & TOURNAMENTS',
		description: 'Social or corporate, we make them unforgettable.',
		image: '/advanced-simulators-1-1.png',
	},
	{
		title: 'SIMULATOR OWNERSHIP/RENTAL',
		description: 'Take the game to your space',
		image: '/advanced-simulators-1-5.png',
	},
];

export const ServicesSection = () => {
	return (
		<section className='w-full py-6 sm:py-10 lg:py-12 xl:py-18 bg-white'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
				{/* Header Section */}
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16 sm:mb-20 lg:mb-24'>
					<div className='space-y-6 sm:space-y-8'>
						<div className='space-y-2 sm:space-y-4'>
							<h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[92px] font-black leading-tight sm:leading-[0.9] lg:leading-[85px] tracking-wide'>
								<span className='text-black'>
									WE'RE NOT JUST ABOUT GOLF
									<br />
								</span>
								<span className='text-[#006f33]'>WE'RE ABOUT GOOD TIMES</span>
							</h2>
							<p className='text-lg sm:text-xl lg:text-[22px] font-bold text-[#009444] leading-relaxed tracking-wide -mt-2'>
								A PLACE FOR THE GAME. A SPACE FOR EVERYONE
							</p>
						</div>
					</div>

					<div className='space-y-6 sm:space-y-8 flex flex-col justify-center'>
						<p className='text-base sm:text-lg lg:text-xl font-medium text-[#757575] leading-relaxed'>
							At The Virtual Greens, the experience is what matters most. It's
							golf, but not like you've seen it before. We've taken the country
							club perks, stripped away the stiff vibe, and built a space where
							you can compete, connect, or just kick back.
						</p>

						<div className='flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6'>
							<a
								href='https://widget.servmeco.com/?oid=1662'
								target='_blank'
								rel='noopener noreferrer'
								className='bg-[#009444] hover:bg-[#007a3a] text-white rounded-full px-8 py-4 h-auto text-lg font-semibold tracking-wide inline-flex items-center gap-3 transition-colors duration-200'
							>
								BOOK A BAY
								<ArrowRightIcon className='w-5 h-5' />
							</a>

							<Button
								variant='outline'
								className='border-2 border-black text-black hover:bg-gray-50 rounded-full px-8 py-4 h-auto text-lg font-semibold tracking-wide transition-colors duration-200'
							>
								LEARN ABOUT LESSONS
							</Button>
						</div>
					</div>
				</div>

				{/* Service Cards Grid - Exact Figma Design */}
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10'>
					{serviceCards.map((service, index) => (
						<Card
							key={`service-${index}`}
							className='bg-[#F6F6F6] border-0 rounded-[20px] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group'
						>
							<div className='space-y-4 p-0'>
								{/* Image Container - Dark placeholder exactly like Figma */}
								<div className='w-full h-[300px] bg-[#3A3A3A] rounded-[20px] overflow-hidden'>
									<img
										className='w-full h-full object-cover'
										alt={service.title}
										src={service.image}
									/>
								</div>

								{/* Content Container */}
								<CardContent className='px-10 pb-10 pt-2 space-y-3'>
									<h3
										className='text-black leading-tight'
										style={{
											fontFamily: "'Gilroy', Helvetica, sans-serif",
											fontSize: '24px',
											fontWeight: '700',
											letterSpacing: '0px',
											lineHeight: 'normal',
										}}
									>
										{service.title}
									</h3>
									<p
										className='text-[#757575] leading-relaxed'
										style={{
											fontFamily: "'Gilroy', Helvetica, sans-serif",
											fontSize: '18px',
											fontWeight: '500',
											letterSpacing: '0px',
											lineHeight: '26px',
										}}
									>
										{service.description}
									</p>
								</CardContent>
							</div>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};
