import React from 'react';
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
		<section className='w-full bg-white py-16 sm:py-20 lg:py-24 xl:py-32'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
				{/* Header */}
				<div className='text-center mb-12 sm:mb-16 lg:mb-20'>
					<h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] font-black text-black leading-tight sm:leading-[0.9] lg:leading-[90px] tracking-wide mb-4 sm:mb-6'>
						GOLF YOUR WAY
					</h2>

					<div className='text-lg sm:text-xl lg:text-[22px] font-bold text-[#009444] leading-relaxed tracking-wide mb-6 sm:mb-8'>
						GOLF YOUR BALL EXACTLY HOW YOU WANT
					</div>

					<div className='max-w-4xl mx-auto mb-8 sm:mb-12'>
						<p className='text-base sm:text-lg lg:text-xl font-medium text-[#757575] leading-relaxed'>
							You don&apos;t need to know the difference between a draw and a
							fade to have fun here. But if you do, you&apos;ll love it even
							more.
							<br />
							<br />
							Here, you can crush drives, battle friends in party games, or beat
							your personal best. We have a game mode for everyone. Our
							simulators give you access to 250+ courses around the world and
							feedback on every shot. We&apos;re talking ball speed, spin rate,
							launch angle, club path, and way more.
						</p>
					</div>

					<Button className='bg-[#009444] hover:bg-[#007a37] text-white rounded-full px-8 py-4 h-auto inline-flex items-center gap-3 text-lg font-semibold tracking-wide transition-colors duration-200'>
						<span>EXPLORE OUR BAYS</span>
						<img className='w-5 h-5' alt='Arrow right' src='/arrow-right.svg' />
					</Button>
				</div>

				{/* Feature Cards */}
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-16 sm:mb-20 lg:mb-24'>
					{featureCards.map((card, index) => (
						<Card
							key={index}
							className={`${card.bgColor} rounded-[30px] border-0 overflow-hidden h-[350px] sm:h-[380px] lg:h-[400px] relative hover:shadow-xl transition-all duration-300 hover:scale-105 group`}
						>
							<CardContent className='p-0 h-full'>
								<img
									className='w-full h-[280px] sm:h-[320px] lg:h-[350px] object-cover rounded-[30px] absolute top-[-150px] sm:top-[-180px] lg:top-[-200px] left-0 group-hover:scale-110 transition-transform duration-500'
									alt='Play swing'
									src={card.image}
								/>
								<div className='absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10 bg-gradient-to-t from-white via-white/95 to-transparent'>
									<h3 className='text-xl sm:text-2xl lg:text-[28px] font-gilroy font-bold text-black leading-tight mb-3 sm:mb-4'>
										{card.title}
									</h3>
									<p
										className={`text-sm sm:text-base lg:text-lg font-medium ${card.textColor} leading-relaxed`}
									>
										{card.description}
									</p>
								</div>
							</CardContent>
						</Card>
					))}
				</div>

				{/* Something for Everyone Section */}
				<div className='text-center mb-12 sm:mb-16'>
					<h3 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] font-black text-black leading-tight sm:leading-[0.9] lg:leading-[90px] tracking-wide'>
						SOMETHING FOR EVERYONE
					</h3>
				</div>

				{/* Player Categories */}
				<div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8'>
					{playerCategories.map((category, index) => (
						<Card
							key={index}
							className='bg-gradient-to-br from-gray-100 to-gray-200 rounded-[30px] border-0 h-[160px] sm:h-[180px] lg:h-[200px] cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-lg group'
						>
							<CardContent className='p-0 h-full relative flex flex-col items-center justify-center'>
								<img
									className='w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300'
									alt={category.alt}
									src={category.icon}
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
