// src/components/Events/Corporate.jsx
// Corporate events section for Events page - image, heading, description, CTA, and options list
// Provides the Corporate Events block shown on Events page (desktop + responsive)
// RELEVANT FILES: src/screens/EventsPage/EventsPage.jsx, styleguide.css, public/Corporate.jpg

import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Corporate = () => {
	const options = [
		'Team Building Experiences',
		'Employee Recognition Events',
		'Product Launches',
		'Work Parties & Socials',
		'Networking Nights',
		'Tournaments & Fundraisers',
		'Client Entertainment',
		'Exclusive Meeting Space',
		'Golf Days',
	];

	return (
		<section className='w-full py-16 bg-white'>
			<div className='max-w-7xl mx-auto px-6 lg:px-8'>
				<div className='flex flex-col lg:flex-row items-start gap-10'>
					{/* Image */}
					<div className='w-full lg:w-1/2'>
						<div className='overflow-hidden rounded-2xl shadow-md'>
							<img
								src={'freepik__background__81702-1.png'}
								alt='Corporate event'
								className='w-full h-auto object-cover'
							/>
						</div>
					</div>

					{/* Content */}
					<div className='w-full lg:w-1/2 flex flex-col gap-6'>
						<h2 className='font-morganite font-bold text-[72px] sm:text-[88px] md:text-[80px] lg:text-[90px] leading-[1.02]'>
							CORPORATE EVENTS THAT DON&apos;T
							<br /> FEEL LIKE WORK
						</h2>

						<h3 className='text-[#009444] font-bold -mt-4 font-gilroy tracking-wide'>
							BECAUSE EMPLOYEE WELL-BEING SHOULDN'T BE BORING
						</h3>

						<p className='text-gray-500 max-w-xl font-gilroy'>
							We help companies host events that build teams, boost morale, and
							keep people talking long after. With TVG, you can celebrate a big
							win or just treat your team to a fun day out.
						</p>

						<div>
							<Link
								to={'/contact'}
								className='inline-flex items-center gap-3 px-6 py-3 bg-[#009444] hover:bg-[#007a3a] text-white rounded-full transition-colors duration-200'
								aria-label='Plan your event'
							>
								<span className='font-semibold'>PLAN YOUR EVENT</span>
								<ArrowRightIcon className='w-4 h-4' />
							</Link>
						</div>
					</div>
				</div>

				{/* Corporate Event Options */}
				<div className='mt-12'>
					<h4 className='font-gilroy text-3xl font-extrabold mb-6'>
						CORPORATE EVENT OPTIONS
					</h4>

					<div className='bg-gray-50 rounded-xl p-6 shadow-sm'>
						<ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
							{options.map((opt) => (
								<li key={opt} className='flex items-start gap-3 text-gray-700'>
									<img
										src={'/sports_golf.svg'}
										alt='golf icon'
										className='w-6 h-6 mt-0 flex-shrink-0'
									/>
									<span>{opt}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Corporate;
