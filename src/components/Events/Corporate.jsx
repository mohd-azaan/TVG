// src/components/Events/Corporate.jsx
// Corporate events section for Events page - image, heading, description, CTA, and options list
// Provides the Corporate Events block shown on Events page (desktop + responsive)
// RELEVANT FILES: src/screens/EventsPage/EventsPage.jsx, styleguide.css, public/Corporate.jpg

import { Link } from 'react-router-dom';

// Arrow icon component for the button
const ArrowIcon = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='h-4 w-4'
		fill='none'
		viewBox='0 0 24 24'
		stroke='currentColor'
		strokeWidth={2}
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			d='M13 7l5 5m0 0l-5 5m5-5H6'
		/>
	</svg>
);

// Golf icon component for the options list
const GolfIcon = () => (
	<svg
		width='24'
		height='24'
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
		<section className='relative w-full bg-white overflow-hidden'>
			{/* Level 1: Page Container */}
			<div className='relative max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-28'>
				{/* Level 2: Universal Spacing Wrapper - MANDATORY FOR ALIGNMENT */}
				<div className='lg:ml-[12vw] md:ml-[8vw] lg:mr-[12vw] md:mr-[8vw]'>
					{/* Level 3: Content Container */}
					<div className='max-w-[1200px] mx-auto'>
						<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center'>
							{/* Left Column: Image */}
							<div className='w-full'>
								<img
									src='/freepik__background__81702-1.png'
									alt='Corporate golf event'
									className='w-full aspect-[16/9] object-cover rounded-[30px] shadow-xl lg:w-[655px] lg:h-[400px] lg:aspect-auto'
								/>
							</div>

							{/* Right Column: Content */}
							<div className='space-y-6'>
								{/* Main Section Heading - Following design system standards */}
								<h2 className='font-morganite font-black text-[clamp(64px,6vw,80px)] leading-[0.95] tracking-[0.02em] text-black uppercase'>
									Corporate Events That Don't Feel Like Work
								</h2>

								{/* Section Subheading - Following design system standards */}
								<p className='font-gilroy font-bold text-[18px] leading-[22px] tracking-[0.3px] text-[#009444] uppercase'>
									Because Employee Well-Being Shouldn't Be Boring
								</p>

								{/* Body Text - Following design system standards */}
								<p className='font-gilroy font-medium text-base leading-[22px] tracking-[0.1px] text-[#757575]'>
									We help companies host events that build teams, boost morale, and keep people talking long after. With TVG, you can celebrate a big win or just treat your team to a fun day out.
								</p>

								{/* CTA Button */}
								<div className='pt-4'>
									<Link
										to='/contact'
										className='bg-[#009444] hover:bg-[#007a3a] rounded-[50px] px-6 py-2.5 font-gilroy font-semibold text-[14px] text-white uppercase inline-flex items-center gap-2 transition-colors w-fit'
									>
										<span>PLAN YOUR EVENT</span>
										<ArrowIcon />
									</Link>
								</div>
							</div>
						</div>

						{/* Corporate Event Options */}
						<div className='mt-16'>
							<h3 className='font-gilroy font-bold text-[clamp(24px,3vw,32px)] leading-[1.2] text-black uppercase mb-8'>
								Corporate Event Options
							</h3>

							<div className='bg-[#f6f6f6] rounded-[30px] p-8'>
								<ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
									{options.map((opt) => (
										<li key={opt} className='flex items-start gap-3'>
											<GolfIcon />
											<span className='font-gilroy font-medium text-base leading-[24px] tracking-[0.1px] text-black'>
												{opt}
											</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Corporate;
