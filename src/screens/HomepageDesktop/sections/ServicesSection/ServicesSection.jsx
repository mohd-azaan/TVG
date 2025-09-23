import { ArrowRightIcon } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
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
		title: 'SIMULATOR OWNERSHIP/\nRENTAL',
		description: 'Take the game to your space',
		image: '/advanced-simulators-1-5.png',
	},
];

export const ServicesSection = () => {
	return (
		<section className='w-full pt-6 sm:pt-10 lg:pt-4 xl:pt-18 pb-32 bg-white'>
			<div className='relative max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10'>
				{/* Header Section */}
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16 sm:mb-20 lg:mb-24s lg:ml-[12vw] md:ml-[8vw]'>
					<div className='space-y-6 sm:space-y-8'>
						<div className='space-y-2 sm:space-y-4'>
							<h3 className='text-black font-morganite font-black text-[clamp(38px,5.2vw,78px)] leading-[0.92] tracking-[0.02em] mb-[-14px]'>
								<span className='block'>WE'RE NOT JUST ABOUT GOLF</span>
								<span className='text-[#006f33] block'>
									WE'RE ABOUT GOOD TIMES
								</span>
							</h3>
							<p className='text-[18px] sm:text-[14px] lg:text-[18px] font-bold text-[#009444] leading-tight tracking-wide -mt-6'>
								A PLACE FOR THE GAME. A SPACE FOR EVERYONE
							</p>
						</div>
					</div>

					<div className='space-y-6 sm:space-y-8 flex flex-col justify-center lg:mr-[12vw] md:mr-[8vw] max-w-xl'>
						<p className='text-[16px] font-medium text-[#757575] leading-relaxed'>
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
								className='bg-[#009444] hover:bg-[#007a3a] text-white rounded-full px-6 py-3 h-auto text-sm font-semibold tracking-wide inline-flex items-center gap-2 transition-colors duration-200'
							>
								BOOK A BAY
								<ArrowRightIcon className='w-4 h-4' />
							</a>

							<Link to='/learn' className='inline-block'>
								<Button
									variant='outline'
									className='border-2 border-black text-black hover:bg-gray-50 rounded-full px-6 py-3 h-auto text-sm font-semibold tracking-wide transition-colors duration-200'
								>
									LEARN ABOUT LESSONS
								</Button>
							</Link>
						</div>
					</div>
				</div>

				{/* Service Cards Grid - Exact Figma Design */}
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10 lg:ml-[12vw] md:ml-[8vw] lg:mr-[12vw] md:mr-[8vw]'>
					{serviceCards.map((service, index) => (
						<Card
							key={`service-${index}`}
							className='bg-[#F6F6F6] hover:bg-[#74FFA7] border-0 rounded-[20px] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group'
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
									<h3 className='text-black leading-tight font-gilroy font-bold text-[21px]'>
										{service.title}
									</h3>
									<p className='text-[#757575] group-hover:text-[#009444] font-gilroy font-medium text-[16px] leading-[26px] transition-colors duration-300'>
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
