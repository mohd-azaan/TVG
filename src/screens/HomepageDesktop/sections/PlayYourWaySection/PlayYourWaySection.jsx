import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../../components/ui/button';
import { Card, CardContent } from '../../../../components/ui/card';

const featureCards = [
	{
		title: 'PLAY GREAT GAMES',
		description:
			'Fun, fast-paced options from mini golf to longest drive battles.',
		image: '/play-swing-2-1-10.png',
		bgColor: 'bg-gradient-to-br from-gray-100 to-gray-200',
		textColor: 'text-[#757575]',
	},
	{
		title: 'PERFECT YOUR SWING',
		description: 'Pro-level practice tools and instant swing feedback.',
		image: '/play-swing-2-1-3.png',
		bgColor: 'bg-[#74ffa7]',
		textColor: 'text-black',
	},
	{
		title: 'TAKE IT TO THE COURSE',
		description:
			'Real courses. Real distances. Real competition. Without the heat.',
		image: '/play-swing-2-1-10.png',
		bgColor: 'bg-gradient-to-br from-gray-100 to-gray-200',
		textColor: 'text-[#757575]',
	},
];

const playerCategories = [
	{
		title: 'AVID GOLFERS',
		icon: '/smash-it.svg',
		alt: 'Sports golf',
	},
	{
		title: 'BEGINNERS',
		icon: '/school-24dp-e3e3e3-fill0-wght400-grad0-opsz24-1--1.svg',
		alt: 'School',
	},
	{
		title: 'JUNIORS',
		icon: '/child-hat-24dp-e3e3e3-fill0-wght400-grad0-opsz24-2.svg',
		alt: 'Child hat',
	},
	{
		title: 'WOMEN',
		icon: '/face-3-24dp-e3e3e3-fill0-wght400-grad0-opsz24-1.svg',
		alt: 'Face',
	},
];

export const PlayYourWaySection = () => {
	return (
		<section className='w-full bg-white py-20 lg:py-30'>
			<div className='relative max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10'>
				{/* Header */}
				<div className='text-center mb-16 sm:mb-20 lg:mb-24'>
					<h2 className='text-black font-morganite font-black text-[clamp(38px,5.2vw,78px)] leading-[0.92] tracking-[0.02em] mb-4'>
						GOLF YOUR WAY
					</h2>
					<p className='text-[18px] sm:text-[14px] lg:text-[18px] font-bold text-[#009444] leading-tight tracking-wide mb-4 sm:mb-6 -mt-2'>
						GOLF YOUR BALL EXACTLY HOW YOU WANT
					</p>

					<div className='max-w-xl mx-auto mb-6 sm:mb-8'>
						<p className='text-[16px] font-medium text-[#757575] leading-relaxed'>
							You don&apos;t need to know the difference between a draw and a
							fade to have fun here. But if you do, you&apos;ll love it even
							more. Here, you can crush drives, battle friends in party games,
							or beat your personal best. We have a game mode for everyone. Our
							simulators give you access to 250+ courses around the world and
							feedback on every shot. We&apos;re talking ball speed, spin rate,
							launch angle, club path, and way more.
						</p>
					</div>

					<Link to='/play' className='inline-block'>
						<Button className='bg-[#009444] hover:bg-[#007a3a] text-white rounded-full px-6 py-3 h-auto inline-flex items-center gap-2 text-sm font-semibold tracking-wide transition-colors duration-200'>
							EXPLORE OUR BAYS
							<img
								className='w-4 h-4'
								alt='Arrow right'
								src='/arrow-right.svg'
								loading='lazy'
								decoding='async'
								width='16'
								height='16'
							/>
						</Button>
					</Link>
				</div>

				{/* Feature Cards */}
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10 mb-12 sm:mb-16 lg:mb-20 lg:ml-[12vw] md:ml-[8vw] lg:mr-[12vw] md:mr-[8vw]'>
					{featureCards.map((card, index) => (
						<Card
							key={index}
							className='bg-[#F6F6F6] hover:bg-[#74FFA7] border-0 rounded-[20px] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group'
						>
							<div className='space-y-4 p-0'>
								{/* Image Container */}
								<div className='w-full h-[300px] bg-[#3A3A3A] rounded-[20px] overflow-hidden'>
									<img
										className='w-full h-full object-cover'
										alt='Play swing'
										src={card.image}
										loading='lazy'
										decoding='async'
									/>
								</div>

								{/* Content Container */}
								<CardContent className='px-10 pb-10 pt-2 space-y-3'>
									<h3 className='text-black leading-tight font-gilroy font-bold text-[21px]'>
										{card.title}
									</h3>
									<p className='text-[#757575] group-hover:text-[#009444] font-gilroy font-medium text-[16px] leading-[26px] transition-colors duration-300'>
										{card.description}
									</p>
								</CardContent>
							</div>
						</Card>
					))}
				</div>

				{/* Something for Everyone Section */}
				<div className='text-center mb-12 sm:mb-16'>
					<h3 className='text-black font-morganite font-black text-[clamp(38px,5.2vw,78px)] leading-[0.92] tracking-[0.02em]'>
						SOMETHING FOR EVERYONE
					</h3>
				</div>

				{/* Player Categories */}
				<div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto'>
					{playerCategories.map((category, index) => (
						<Card
							key={index}
							className='bg-[#F6F6F6] rounded-[20px] border-0 h-[120px] sm:h-[140px] lg:h-[160px]'
						>
							<CardContent className='p-0 h-full relative flex flex-col items-center justify-center'>
								<img
									className='w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 mb-2 sm:mb-3'
									alt={category.alt}
									src={category.icon}
									loading='lazy'
									decoding='async'
									width='48'
									height='48'
								/>
								<h4 className='text-lg sm:text-xl lg:text-2xl font-gilroy font-bold text-black leading-tight text-center px-2'>
									{category.title}
								</h4>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};
