import React from 'react';

const EventCard = ({ image, title, icon }) => (
	<div className='bg-white rounded-3xl overflow-hidden'>
		<img src={image} alt={title} className='w-full h-64 object-cover' />
		<div className='p-6 flex justify-between items-center'>
			<h3 className='font-gilroy-bold text-lg uppercase'>{title}</h3>
			<img src={icon} alt='' className='h-8 w-8' />
		</div>
	</div>
);

export const EventsWeHostSection = () => {
	const events = [
		{
			image: 'https://placehold.co/420x640',
			title: 'Birthday Parties',
			icon: 'https://placehold.co/32x32',
		},
		{
			image: 'https://placehold.co/420x640',
			title: 'Wrap Parties',
			icon: 'https://placehold.co/32x32',
		},
		{
			image: 'https://placehold.co/420x640',
			title: 'Bachelorettes Parties',
			icon: 'https://placehold.co/32x32',
		},
		{
			image: 'https://placehold.co/420x640',
			title: 'Summer Parties',
			icon: 'https://placehold.co/32x32',
		},
	];

	return (
		<section className='bg-[#f6f6f6] py-14 lg:py-24'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center'>
				<h2 className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[80px] font-morganite font-black tracking-wide leading-tight uppercase'>
					Events We Host
				</h2>
				<div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
					{events.map((event, index) => (
						<EventCard key={index} {...event} />
					))}
				</div>
				<div className='mt-8 flex justify-center gap-4'>
					<button className='border border-black rounded-full w-12 h-12 flex items-center justify-center'>
						&lt;
					</button>
					<button className='border border-black rounded-full w-12 h-12 flex items-center justify-center'>
						&gt;
					</button>
				</div>
			</div>
		</section>
	);
};
