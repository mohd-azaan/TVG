// src/screens/EventsPage/sections/EventTypesSection.jsx
// Event Types section with carousel showing different event options
// Pixel-perfect recreation of "Events We Host" section from Figma with slider functionality
// RELEVANT FILES: EventsPage.jsx, styleguide.css, tailwind.config.js

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Cake, PartyPopper, Martini, Sun } from 'lucide-react';

export const EventTypesSection = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const eventTypes = [
		{
			title: 'Birthday Parties',
			icon: Cake,
			backgroundImage: '/play-swing-2-1.png'
		},
		{
			title: 'Wrap Parties',
			icon: PartyPopper,
			backgroundImage: '/play-swing-2-1.png'
		},
		{
			title: 'Bachelorette Parties',
			icon: Martini,
			backgroundImage: '/play-swing-2-1.png'
		},
		{
			title: 'Summer Parties',
			icon: Sun,
			backgroundImage: '/play-swing-2-1.png'
		}
	];

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % eventTypes.length);
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + eventTypes.length) % eventTypes.length);
	};

	return (
		<section className='relative w-full min-h-[1234px] bg-white overflow-hidden'>
			{/* Main content container */}
			<div className='relative max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-0'>
				{/* Section title positioned exactly like Figma */}
				<div className='absolute top-[129px] left-[626px] w-[655px] text-center'>
					<h2 className='font-TVG-typography-h1 font-[number:var(--TVG-typography-h1-font-weight)] text-[length:var(--TVG-typography-h1-font-size)] leading-[var(--TVG-typography-h1-line-height)] tracking-[var(--TVG-typography-h1-letter-spacing)] text-[#272727] [font-style:var(--TVG-typography-h1-font-style)]'>
						Events We Host
					</h2>
				</div>

				{/* Event cards container positioned exactly like Figma */}
				<div className='absolute top-[532px] left-[280px] w-[1360px] h-[480px]'>
					{/* Play blocks - showing 3 visible cards at desktop */}
					<div className='relative w-full h-full flex gap-[50px] overflow-hidden'>
						{eventTypes.map((event, index) => {
							const IconComponent = event.icon;
							return (
								<div
									key={index}
									className='relative w-[420px] h-[480px] flex-shrink-0 transition-transform duration-500 ease-in-out'
									style={{
										transform: `translateX(-${currentSlide * 470}px)`
									}}
								>
									{/* Background image */}
									<div
										className='absolute inset-0 w-full h-full rounded-[20px] bg-cover bg-center'
										style={{
											backgroundImage: `url(${event.backgroundImage})`,
											backgroundSize: 'cover',
											backgroundPosition: 'center'
										}}
									>
										{/* Dark overlay for text readability */}
										<div className='absolute inset-0 bg-black bg-opacity-50 rounded-[20px]'></div>
									</div>

									{/* Content overlay */}
									<div className='relative z-10 h-full flex flex-col justify-end p-6'>
										{/* Icon positioned at bottom right like Figma */}
										<div className='absolute bottom-[25px] right-[25px]'>
											<IconComponent className='w-[50px] h-[50px] text-white' strokeWidth={1.5} />
										</div>

										{/* Event title positioned at bottom left */}
										<div className='absolute bottom-[37px] left-[24px]'>
											<h3 className='font-TVG-typography-h3 font-[number:var(--TVG-typography-h3-font-weight)] text-[length:var(--TVG-typography-h3-font-size)] leading-[var(--TVG-typography-h3-line-height)] tracking-[var(--TVG-typography-h3-letter-spacing)] text-white [font-style:var(--TVG-typography-h3-font-style)]'>
												{event.title}
											</h3>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>

				{/* Navigation arrows positioned exactly like Figma */}
				<div className='absolute top-[1055px] left-[304px] flex gap-4'>
					{/* Previous arrow */}
					<button
						onClick={prevSlide}
						className='w-[50px] h-[50px] bg-[#009444] rounded-full flex items-center justify-center hover:bg-[#007a3a] transition-colors duration-200'
					>
						<ChevronLeft className='w-6 h-6 text-white' />
					</button>

					{/* Next arrow */}
					<button
						onClick={nextSlide}
						className='w-[50px] h-[50px] bg-[#009444] rounded-full flex items-center justify-center hover:bg-[#007a3a] transition-colors duration-200'
					>
						<ChevronRight className='w-6 h-6 text-white' />
					</button>
				</div>
			</div>

			{/* Responsive adjustments for smaller screens */}
			<div className='block lg:hidden relative z-10 px-4 sm:px-6 pt-16 pb-16'>
				{/* Mobile layout */}
				<div className='space-y-8'>
					{/* Title */}
					<h2 className='font-TVG-typography-h1 font-[number:var(--TVG-typography-h1-font-weight)] text-[clamp(36px,8vw,64px)] leading-[1.2] tracking-[var(--TVG-typography-h1-letter-spacing)] text-[#272727] [font-style:var(--TVG-typography-h1-font-style)] text-center'>
						Events We Host
					</h2>

					{/* Mobile slider */}
					<div className='relative'>
						<div className='overflow-hidden'>
							<div
								className='flex transition-transform duration-500 ease-in-out'
								style={{
									transform: `translateX(-${currentSlide * 100}%)`
								}}
							>
								{eventTypes.map((event, index) => {
									const IconComponent = event.icon;
									return (
										<div key={index} className='w-full flex-shrink-0 px-2'>
											<div className='relative w-full h-[300px] rounded-[20px] overflow-hidden'>
												{/* Background image */}
												<div
													className='absolute inset-0 w-full h-full bg-cover bg-center'
													style={{
														backgroundImage: `url(${event.backgroundImage})`,
														backgroundSize: 'cover',
														backgroundPosition: 'center'
													}}
												>
													{/* Dark overlay for text readability */}
													<div className='absolute inset-0 bg-black bg-opacity-50'></div>
												</div>

												{/* Content overlay */}
												<div className='relative z-10 h-full flex flex-col justify-end p-4'>
													{/* Icon positioned at bottom right */}
													<div className='absolute bottom-4 right-4'>
														<IconComponent className='w-[40px] h-[40px] text-white' strokeWidth={1.5} />
													</div>

													{/* Event title positioned at bottom left */}
													<div className='absolute bottom-4 left-4'>
														<h3 className='font-TVG-typography-h3 font-[number:var(--TVG-typography-h3-font-weight)] text-[clamp(20px,5vw,28px)] leading-[1.3] tracking-[var(--TVG-typography-h3-letter-spacing)] text-white [font-style:var(--TVG-typography-h3-font-style)]'>
															{event.title}
														</h3>
													</div>
												</div>
											</div>
										</div>
									);
								})}
							</div>
						</div>

						{/* Navigation arrows for mobile */}
						<div className='flex justify-center mt-6 gap-4'>
							<button
								onClick={prevSlide}
								className='w-[40px] h-[40px] bg-[#009444] rounded-full flex items-center justify-center hover:bg-[#007a3a] transition-colors duration-200'
							>
								<ChevronLeft className='w-5 h-5 text-white' />
							</button>

							<button
								onClick={nextSlide}
								className='w-[40px] h-[40px] bg-[#009444] rounded-full flex items-center justify-center hover:bg-[#007a3a] transition-colors duration-200'
							>
								<ChevronRight className='w-5 h-5 text-white' />
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};