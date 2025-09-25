// Golf icon component for event cards
const GolfIcon = () => (
	<svg
		width='32'
		height='32'
		viewBox='0 0 60 60'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M30 40C25.125 40 20.9896 38.3021 17.5938 34.9062C14.1979 31.5104 12.5 27.375 12.5 22.5C12.5 17.625 14.1979 13.4896 17.5938 10.0938C20.9896 6.69792 25.125 5 30 5C34.875 5 39.0104 6.69792 42.4062 10.0938C45.8021 13.4896 47.5 17.625 47.5 22.5C47.5 27.375 45.8021 31.5104 42.4062 34.9062C39.0104 38.3021 34.875 40 30 40Z'
			fill='#009444'
		/>
	</svg>
);

const EventCard = ({ image, title }) => (
	<div className='bg-white rounded-[30px] overflow-hidden shadow-xl'>
		<img src={image} alt={title} className='w-full h-64 object-cover' />
		<div className='p-6 flex justify-between items-center'>
			<h3 className='font-gilroy font-bold text-[18px] leading-[22px] tracking-[0.3px] text-black uppercase'>
				{title}
			</h3>
			<GolfIcon />
		</div>
	</div>
);

export const EventsWeHostSection = () => {
	const events = [
		{
			image: '/indoor-golf-1.png',
			title: 'Birthday Parties',
		},
		{
			image: '/indoor-golf-1.png',
			title: 'Wrap Parties',
		},
		{
			image: '/indoor-golf-1.png',
			title: 'Bachelorettes Parties',
		},
		{
			image: '/indoor-golf-1.png',
			title: 'Summer Parties',
		},
	];

	return (
		<section className='relative w-full bg-[#f6f6f6] overflow-hidden'>
			{/* Level 1: Page Container */}
			<div className='relative max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-28'>
				{/* Level 2: Universal Spacing Wrapper - MANDATORY FOR ALIGNMENT */}
				<div className='lg:ml-[12vw] md:ml-[8vw] lg:mr-[12vw] md:mr-[8vw]'>
					{/* Level 3: Content Container */}
					<div className='max-w-[1200px] mx-auto text-center'>
						{/* Section Title - Following design system standards */}
						<h2 className='font-morganite font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[80px] leading-[0.95] tracking-[0.02em] text-black uppercase mb-12'>
							Events We Host
						</h2>

						{/* Event Cards Grid */}
						<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
							{events.map((event, index) => (
								<EventCard key={index} {...event} />
							))}
						</div>

						{/* Navigation Arrows - Simplified */}
						<div className='mt-12 flex justify-center gap-4'>
							<button className='border-2 border-black hover:bg-black hover:text-white transition-colors rounded-full w-12 h-12 flex items-center justify-center font-gilroy font-bold'>
								‹
							</button>
							<button className='border-2 border-black hover:bg-black hover:text-white transition-colors rounded-full w-12 h-12 flex items-center justify-center font-gilroy font-bold'>
								›
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
